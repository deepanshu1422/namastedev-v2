"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import createPayments from "../../../../../actions/createPayments";
import getCoupons from "../../../../../actions/getCoupon";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MinusCircle } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { sha256 } from "js-sha256";
import { sendEvent } from "@/services/fbpixel";
import { beginCheckout, purchase } from "@/services/gaEvents";

import { Checkbox } from "@/components/ui/checkbox";
import { BASE_URL } from "@/util/constants";
import { PostHog } from "posthog-js/react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, CreditCard } from "lucide-react";

export function PaymentSheet({
  title,
  amount,
  bigAmount,
  percentage,
  slug,
  courseId,
  open,
  curreny,
  posthog,
  guides,
  setOpen,
  setOpenPay,
  cover,
}: {
  cover: string;
  title: string;
  slug: string;
  amount: number;
  bigAmount: number;
  percentage: number;
  curreny: string;
  posthog: PostHog;
  courseId: string;
  open: boolean;
  guides: {
    guideId: string;
    title: string;
    description: string;
    pricing: {
      amount: number;
      bigAmount: number;
    };
  }[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOpenPay: Dispatch<SetStateAction<boolean>>;
}) {
  const { data: session, status, update } = useSession();

  const router = useRouter();

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    email2: string;
    phone: string;
    state: string;
    guides: string[];
  }>({
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? "",
    email2: session?.user?.email ?? "",
    // @ts-ignore
    phone: session?.user?.phone ?? "",
    // @ts-ignore
    state: session?.user?.state ?? "",
    guides: [],
  });

  const [formState, setFormState] = useState(0);
  const [promo, setPromo] = useState<{
    apply: boolean;
    code: string | null;
    discount: number;
  }>({
    apply: false,
    code: null,
    discount: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const utmParams = useSearchParams();
  const utm_source = utmParams.get("utm_source");
  const utm_medium = utmParams.get("utm_medium");
  const utm_campaign = utmParams.get("utm_campaign");
  const utm_content = utmParams.get("utm_content");
  const utm_term = utmParams.get("utm_term");

  const states = [
    "andaman_and_nicobar_islands",
    "andhra_pradesh",
    "arunachal_pradesh",
    "assam",
    "bihar",
    "chandigarh",
    "chhattisgarh",
    "daman_and_diu",
    "delhi",
    "goa",
    "gujarat",
    "haryana",
    "himachal_pradesh",
    "jharkhand",
    "jammu_and_kashmir",
    "karnataka",
    "kerala",
    "ladakh",
    "lakshadweep",
    "madhya_pradesh",
    "maharashtra",
    "manipur",
    "meghalaya",
    "mizoram",
    "nagaland",
    "odisha",
    "puducherry",
    "punjab",
    "rajasthan",
    "sikkim",
    "tamil_nadu",
    "telangana",
    "tripura",
    "uttar_pradesh",
    "uttarakhand",
    "west_bengal",
  ];

  function validationError({ message }: { message: string }) {
    toast.error("Error Occured", {
      description: message,
      position: "bottom-center",
    });
  }

  const makePayment = async () => {
    if (formData.name.length < 2)
      return validationError({ message: "Name too short" });
    if (formData.email.split("@").length !== 2)
      return validationError({ message: "Invalid Email" });
    if (formData.email !== formData.email2)
      return validationError({ message: "Confirm Email doesn't Match" });
    if (formData.phone.length !== 10)
      return validationError({ message: "Invalid Phone Number" });
    if (!states.includes(formData.state))
      return validationError({ message: "Select a State" });

    try {
      setIsLoading(true);

      let res;

      if (courseId) {
        posthog.capture("begin_checkout", {
          title,
          amount,
          itemId: courseId,
          itemType: "course",
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          state: formData.state,
          loggedIn: status === "authenticated",
        });

        beginCheckout({
          title,
          amount,
          itemId: courseId,
          itemType: "course",
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          state: formData.state,
          loggedIn: status === "authenticated",
        });
        res = await createPayments({
          courseId: courseId,
          email: session?.user?.email ?? formData.email.toLocaleLowerCase(),
          contact: formData.phone,
          name: session?.user?.name ?? formData.name,
          state: formData.state,
          couponCode: promo.code,
          guides: formData.guides,
        });
      } else {
        return;
      }
      // make an endpoint to get this key
      const key = process.env.NEXT_PUBLIC_RAZORPAY_CLIENT;

      if (res.error) {
        toast("Error Occured", {
          position: "bottom-center",
          description: res.message ?? JSON.stringify(res.error),
        });
        setIsLoading(false);
        setOpen(false);
        return;
      }

      setFormState(0);

      console.log(res.data);

      const options = {
        key: key,
        description: formData.state,
        image: "/icon.png",
        name: "30DaysCoding",
        currency: res.data.currency,
        amount: res.data.amount / 100,
        order_id: res.data.orderId,
        handler: async function (response: any) {
          setOpenPay(true);
          await update({ courses: true });
          router.push(
            `/thank-you?title=${title}&value=${
              res.data.amount / 100
            }&currency=INR&contentType=course&name=${
              formData.name
            }&email=${formData.email.toLocaleLowerCase()}&state=${
              formData.state
            }&phone=+91${formData.phone}&id=${courseId}&slug=${slug}${
              utm_source ? `&utm_source=${utm_source}` : ""
            }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
              utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
            }${utm_content ? `&utm_content=${utm_content}` : ""}${
              utm_term ? `&utm_term=${utm_term}` : ""
            }`
          );

          // sendEvent("Purchase", {
          //   value: res.data.amount / 100,
          //   currency: "INR",
          //   content_ids: [courseId],
          //   content_type: "course",
          //   content_name: title,
          //   em: sha256(formData.email), // Hashing example
          //   ph: sha256(formData.phone),
          //   fn: sha256(formData.name.split(" ")[0]),
          //   ln: sha256(formData.name.split(" ")[1] ?? ""),
          //   num_items: 1,
          //   event_source_url: `${BASE_URL}/courses/${slug}`,
          // });
          // purchase({
          //   title,
          //   amount: res.data.amount / 100,
          //   itemId: courseId,
          //   itemType: "course",
          //   name: formData.name,
          //   email: formData.email.toLocaleLowerCase(),
          //   state: formData.state,
          //   loggedIn: status === "authenticated",
          // });
        },
        // callback_url: ,
        redirect: true,
        prefill: {
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          contact: formData.phone,
        },
        notes: {
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          contact: formData.phone,
          address: formData.state,
          courseId,
        },
        theme: {
          color: "#134543",
        },
      };

      // @ts-ignore
      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.captured", function (response: any) {
        alert("Payment successful");
        setIsLoading(false);
      });

      paymentObject.open();

      setIsLoading(false);
      setOpen(false);
      setFormData({
        name: session?.user?.name ?? "",
        email: session?.user?.email ?? "",
        email2: session?.user?.email ?? "",
        // @ts-ignore
        phone: session?.user?.phone ?? "",
        // @ts-ignore
        state: session?.user?.state ?? "",
        guides: [],
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  // async function applyCoupon(e: FormEvent<HTMLFormElement>) {
  //   setSubmitting(true);

  //   e.preventDefault();
  //   const coupon = new FormData(e.currentTarget).get("coupon") as string;

  //   if (!coupon) {
  //     setSubmitting(false);
  //     setPromo({
  //       ...promo,
  //       apply: false,
  //     });
  //     return null;
  //   }

  //   const { data, error, message } = await getCoupons({ couponCode: coupon });

  //   setSubmitting(false);

  //   if (error || !data)
  //     toast.error("Coupon Invalid", {
  //       description: JSON.stringify(message),
  //       position: "bottom-center",
  //     });

  //   if (!data) return null;

  //   toast.info("Coupon Applied", {
  //     description: JSON.stringify(message),
  //     position: "bottom-center",
  //   });

  //   const discount = amount * (data?.value / 100);

  //   setPromo({
  //     apply: false,
  //     code: data?.couponCode ?? "",
  //     discount: discount > data?.maxAmount ? data.maxAmount : discount,
  //   });
  // }

  const orderPage = [
    {
      title: "Payments Details",
      body: (
        <div className="grid gap-4 py-4">
          <p className="border-l-4 pl-3 border-prime max-sm:text-sm sm:leading-6 line-clamp-3">
            {title}
          </p>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              disabled={!!session?.user?.name}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              maxLength={30}
              id="name"
              placeholder="John Doe"
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="email" className="text-left">
              Email
            </Label>
            <Input
              disabled={!!session?.user?.email}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              id="email"
              maxLength={40}
              type="email"
              placeholder="youremail@gmail.com"
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="email" className="text-left">
              Confirm Email
            </Label>
            <Input
              disabled={!!session?.user?.email}
              value={formData.email2}
              onChange={(e) =>
                setFormData({ ...formData, email2: e.target.value })
              }
              id="email-2"
              maxLength={40}
              type="email"
              placeholder="youremail@gmail.com"
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="phone" className="text-left">
              Phone
            </Label>
            <div className="relative col-span-4">
              <span className="absolute left-2 top-2 text-muted-foreground">
                +91
              </span>
              <Input
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                type="number"
                id="phone"
                className="pl-9"
                maxLength={10}
              />
            </div>
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              State
            </Label>
            <Select
              value={formData.state}
              onValueChange={(e) => setFormData({ ...formData, state: e })}
            >
              <SelectTrigger className="border-prime/40 bg-bg w-full col-span-4 capitalize">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>States</SelectLabel>
                  {states.map((e, i) => (
                    <SelectItem className="capitalize" key={i} value={e}>
                      {e.split("_").join(" ")}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
      footer: (
        <Button
          disabled={isLoading}
          onClick={makePayment}
          className="disabled:animate-pulse w-full hover:bg-prime/80 bg-prime/60 text-white"
          type="submit"
        >
          Buy @ INR{" "}
          {amount +
            formData.guides.reduce(
              (sum, cur) =>
                // @ts-ignore
                sum + guides.find((e) => e.guideId === cur)?.pricing.amount,
              0
            )}
        </Button>
      ),
    },
    {
      title: "Order Details",
      body: (
        <div className="flex flex-col gap-5 max-sm:pt-5">
          <section className="flex flex-col gap-3 max-sm:text-sm">
            <div className="flex justify-between">
              <span>Course Price</span>
              <span className="font-extrabold">
                {curreny} {bigAmount}
              </span>
            </div>
            <div className="text-prime font-semibold flex justify-between">
              <span>Discount @ {percentage}%</span>
              <span className="font-extrabold">
                -{curreny} {bigAmount - amount}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span className="font-extrabold">
                {curreny} {amount}
              </span>
            </div>
            {Boolean(guides.length) && (
              <>
                <hr className="mt-3" />
                <div className="flex flex-col gap-3 justify-between">
                  <span className="font-semibold">
                    🔔Don&apos;t miss out on our guides
                  </span>
                  <div className="flex flex-col gap-3">
                    {guides.map(
                      ({ description, guideId, pricing, title }, i) => {
                        return (
                          <div
                            onClick={() => {
                              if (!formData.guides?.includes(guideId))
                                setFormData({
                                  ...formData,
                                  guides: [...formData.guides, guideId],
                                });
                              else {
                                setFormData({
                                  ...formData,
                                  guides: formData.guides.filter(
                                    (e) => e !== guideId
                                  ),
                                });
                              }
                            }}
                            key={i}
                            className={`flex flex-col gap-2 rounded-md border ${
                              formData.guides?.includes(guideId) &&
                              "bg-second/40"
                            } transition-all duration-100 border-prime/40`}
                          >
                            <div className="flex flex-col gap-1 p-2">
                              <h3 className="font-semibold">{title}</h3>
                              <p className="text-xs text-white/60 line-clamp-2">
                                {description}
                              </p>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-second/60">
                              <Checkbox
                                checked={formData.guides?.includes(guideId)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? setFormData({
                                        ...formData,
                                        guides: [...formData.guides, guideId],
                                      })
                                    : setFormData({
                                        ...formData,
                                        guides: formData.guides.filter(
                                          (e) => e !== guideId
                                        ),
                                      });
                                }}
                              />
                              <div className="flex gap-1 items-center">
                                Add for
                                <span className="text-lg font-semibold">
                                  INR {pricing.amount}
                                </span>
                                <span className="line-through text-sm text-white/60">
                                  INR {pricing.bigAmount}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      ),
      footer: (
        <div className="w-full mt-auto flex flex-col gap-2">
          <Button
            disabled={isLoading}
            onClick={makePayment}
            className="disabled:animate-pulse w-full hover:bg-prime/80 bg-prime/60 text-white"
            type="submit"
          >
            Buy @ INR{" "}
            {amount +
              formData.guides.reduce(
                (sum, cur) =>
                  // @ts-ignore
                  sum + guides.find((e) => e.guideId === cur)?.pricing.amount,
                0
              )}
          </Button>
          <Button
            variant={"outline"}
            onClick={() => setFormState(0)}
            className="w-full"
            type="submit"
          >
            Back
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="h-full w-full flex flex-col overflow-y-auto bg-background">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-foreground">
            Complete Your Purchase
          </SheetTitle>
        </SheetHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex-1 flex flex-col"
        >
          <div className="relative rounded-xl overflow-hidden mb-6 shadow-lg">
            <Image
              src={cover || "/course-placeholder.jpg"}
              alt={title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-lg">{title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{curreny} {amount}</span>
                <span className="text-sm line-through opacity-75">{curreny} {bigAmount}</span>
                <span className="bg-prime/60 text-white text-xs px-2 py-1 rounded-full">
                  {percentage}% OFF
                </span>
              </div>
            </div>
          </div>

          <motion.div
            className="space-y-6 flex-1"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {formState === 0 ? (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-4"
              >
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-prime/40 bg-bg focus:border-prime"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="youremail@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-prime/40 bg-bg focus:border-prime"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email2">Confirm Email</Label>
                    <Input
                      id="email2"
                      placeholder="youremail@gmail.com"
                      value={formData.email2}
                      onChange={(e) =>
                        setFormData({ ...formData, email2: e.target.value })
                      }
                      className="border-prime/40 bg-bg focus:border-prime"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative">
                      <span className="absolute left-2 top-2 text-muted-foreground">
                        +91
                      </span>
                      <Input
                        id="phone"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="pl-9 border-prime/40 bg-bg focus:border-prime"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Select
                      value={formData.state}
                      onValueChange={(e) => setFormData({ ...formData, state: e })}
                    >
                      <SelectTrigger className="border-prime/40 bg-bg focus:border-prime">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>States</SelectLabel>
                          {states.map((e, i) => (
                            <SelectItem className="capitalize" key={i} value={e}>
                              {e.split("_").join(" ")}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={() => setFormState(1)}
                  className="w-full hover:bg-prime/80 bg-prime/60 text-white transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Continue to Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-4"
              >
                <div className="bg-bg p-6 rounded-xl border border-prime/40">
                  <div className="flex items-center space-x-4 mb-4">
                    <CreditCard className="h-6 w-6 text-prime" />
                    <h3 className="text-lg font-semibold">Payment Details</h3>
                  </div>
                  
                  <Button
                    onClick={makePayment}
                    disabled={isLoading}
                    className="w-full hover:bg-prime/80 bg-prime/60 text-white transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Processing...
                      </div>
                    ) : (
                      <>Pay {curreny} {amount}</>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <button
                    onClick={() => setFormState(0)}
                    className="flex items-center text-prime hover:text-prime/80"
                  >
                    <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
                    Back
                  </button>
                  <div className="flex items-center text-prime">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Secure Payment
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}

export function PaymentModal({
  slug,
  payModal,
  setOpenPay,
}: {
  slug: string;
  payModal: boolean;
  setOpenPay: Dispatch<SetStateAction<boolean>>;
}) {
  const { data, status } = useSession();
  const router = useRouter();

  return (
    <Dialog open={payModal} onOpenChange={setOpenPay}>
      <DialogContent className="sm:max-w-[425px]">
        <Card className="bg-background border-none flex flex-col">
          <CardHeader className="p-1 items-center">
            <span className="flex items-center gap-2">
              <Image src={"/icon.png"} alt="30dc icon" height={40} width={40} />
              <CardTitle>30DC</CardTitle>
            </span>
            <CardDescription className="text-center">
              Thank you for trusting in us. Team 30DC
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 pb-0 mx-auto w-full flex flex-col items-center gap-2">
            <Button
              onClick={() => {
                router.push(`/dashboard/${slug}`);
                setOpenPay(false);
              }}
              disabled={status === "loading"}
              className="w-full bg-prime/70 text-white hover:bg-prime"
            >
              {status === "loading" ? "Adding Course..." : "Watch Now"}
            </Button>
            <Link className="w-fit" href={"/dashboard"}>
              <Button
                variant={"link"}
                disabled={status === "loading"}
                className="text-white/40 hover:text-white"
              >
                {status === "loading" ? "loading..." : "Visit Dashboard"}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export function Floating({
  price,
  slug,
  courseId,
  setOpen,
}: {
  price: {
    amount: number;
    percentage: number;
    bigAmount: number;
  };
  slug: string;
  courseId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-background/40 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-t border-prime/40 z-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">₹{price.amount}</span>
                <span className="text-base text-muted-foreground line-through">₹{price.bigAmount}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-prime/60 text-white text-xs px-2.5 py-0.5 rounded-full">
                  {price.percentage}% OFF
                </span>
                <span className="text-sm text-muted-foreground">Limited time offer</span>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="hover:bg-prime/80 bg-prime/60 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            Enroll Now
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
