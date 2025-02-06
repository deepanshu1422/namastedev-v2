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
import React from "react";
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
import { Check, MinusCircle, Plus } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import createBundlePayment from "../../../../../actions/createBundlePayment";
import { useRouter, useSearchParams } from "next/navigation";
import { sendEvent } from "@/services/fbpixel";
import { sha256 } from "js-sha256";
import { beginCheckout, purchase } from "@/services/gaEvents";
import { BASE_URL } from "@/util/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { PostHog } from "posthog-js/react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, CreditCard } from "lucide-react";

export function PaymentSheet({
  cover,
  title,
  amount,
  bigAmount,
  percentage,
  curreny,
  bundleId,
  slug,
  open,
  posthog,
  guides,
  setOpen,
  setOpenPay,
}: {
  cover?: string;
  title: string;
  slug: string;
  amount: number;
  bigAmount: number;
  percentage: number;
  curreny?: string;
  bundleId: string;
  open: boolean;
  posthog: PostHog;
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

  // Define courseOffer as a variable
  const courseOffer = [
    "Full stack Web Development",
    "Data Structures and Algorithms",
    "Data Analytics mastery",
    "AI and Blockchain",
    "Lifetime valid and Certificates",
    "12 More Courses",
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

      if (bundleId) {
        posthog.capture("begin_checkout", {
          title,
          amount,
          itemId: bundleId,
          itemType: "bundle",
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          state: formData.state,
          loggedIn: status === "authenticated",
        });

        beginCheckout({
          title,
          amount,
          itemId: bundleId,
          itemType: "bundle",
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          state: formData.state,
          loggedIn: status === "authenticated",
        });

        res = await createBundlePayment({
          bundleId: bundleId,
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

      const options = {
        key: key,
        description: formData.state,
        image: "/icon.png",
        name: "30DaysCoding",
        currency: res.data.currency,
        amount: res.data.amount,
        order_id: res.data.orderId,
        handler: async function (response: any) {
          // sendEvent("Purchase", {
          //   value: res.data.amount/100,
          //   currency: "INR",
          //   content_ids: [bundleId],
          //   content_type: "bundle",
          //   content_name: title ?? "",
          //   em: sha256(formData.email), // Hashing example
          //   ph: sha256(formData.phone),
          //   fn: sha256(formData.name.split(" ")[0]),
          //   ln: sha256(formData.name.split(" ")[1] ?? ""),
          //   num_items: 1,
          //   event_source_url: `${BASE_URL}/bundle/${slug}`,
          // });
          // purchase({
          //   title,
          //   amount: res.data.amount/100,
          //   itemId: bundleId,
          //   itemType: "bundle",
          //   name: formData.name,
          //   email: formData.email.toLocaleLowerCase(),
          //   state: formData.state,
          //   loggedIn: status === "authenticated",
          // });
          setOpenPay(true);
          await update({ courses: true });
          router.push(
            `/thank-you?title=${title}&value=${
              res.data.amount / 100
            }&currency=INR&contentType=bundle&name=${
              formData.name
            }&email=${formData.email.toLocaleLowerCase()}&state=${
              formData.state
            }&phone=+91${formData.phone}&id=${bundleId}&slug=${slug}${
              utm_source ? `&utm_source=${utm_source}` : ""
            }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
              utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
            }${utm_content ? `&utm_content=${utm_content}` : ""}${
              utm_term ? `&utm_term=${utm_term}` : ""
            }`
          );
          // if (session?.user?.email) router.refresh();
        },
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
          bundleId,
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

  async function applyCoupon(e: FormEvent<HTMLFormElement>) {
    setSubmitting(true);

    e.preventDefault();
    const coupon = new FormData(e.currentTarget).get("coupon") as string;

    if (!coupon) {
      setSubmitting(false);
      setPromo({
        ...promo,
        apply: false,
      });
      return null;
    }

    const { data, error, message } = await getCoupons({ couponCode: coupon });

    setSubmitting(false);

    if (error || !data)
      toast.error("Coupon Invalid", {
        description: JSON.stringify(message),
        position: "bottom-center",
      });

    if (!data) return null;

    toast.info("Coupon Applied", {
      description: JSON.stringify(message),
      position: "bottom-center",
    });

    const discount = amount * (data?.value / 100);

    setPromo({
      apply: false,
      code: data?.couponCode ?? "",
      discount: discount > data?.maxAmount ? data.maxAmount : discount,
    });
  }

  const orderPage = [
    {
      title: "Complete Your Purchase",
      body: (
        <div className="grid gap-4 py-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-xl overflow-hidden mb-6"
          >
            <div className="relative h-[200px] w-full">
              <Image
                className="object-cover"
                src={cover ?? "/course-placeholder.jpg"}
                alt={title ?? ""}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <div className="space-y-2">
                <h3 className="font-semibold text-xl text-white"></h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-3xl font-bold text-white">{curreny} {amount}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base line-through text-white/70">{curreny} {bigAmount}</span>
                    <span className="bg-prime/60 text-white text-xs px-2.5 py-1 rounded-full">
                      {percentage}% OFF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-3 p-4 bg-bg/40 rounded-xl border border-prime/40">
            <h4 className="font-semibold text-lg text-foreground">What's Included:</h4>
            <div className="grid gap-2.5 text-sm">
              {courseOffer.map((e, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <div className="h-5 w-5 rounded-full bg-prime/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-prime" />
                  </div>
                  <p className="leading-tight">{e}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                disabled={!!session?.user?.name}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                maxLength={30}
                id="name"
                placeholder="John Doe"
                className="border-prime/40 bg-bg focus:border-prime"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
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
                className="border-prime/40 bg-bg focus:border-prime"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email2">Confirm Email</Label>
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
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  type="number"
                  id="phone"
                  className="pl-9 border-prime/40 bg-bg focus:border-prime"
                  maxLength={10}
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
        </div>
      ),
      footer: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mt-auto"
        >
          <Button
            disabled={isLoading}
            onClick={() => setFormState(1)}
            className="w-full hover:bg-prime/80 bg-prime/60 text-white transition-all duration-200 transform hover:scale-[1.02]"
          >
            Continue to Payment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      ),
    },
    {
      title: "Review Order",
      body: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-5 py-4"
        >
          <div className="bg-bg/40 rounded-xl border border-prime/40 p-4">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground/80">Course Price</span>
                <span className="font-bold text-foreground">
                  {curreny} {bigAmount}
                </span>
              </div>
              <div className="flex justify-between items-center text-prime">
                <span>Discount ({percentage}% OFF)</span>
                <span className="font-bold">
                  -{curreny} {bigAmount - amount}
                </span>
              </div>
              <div className="pt-2 border-t border-prime/20 flex justify-between items-center">
                <span className="font-medium">Total Amount</span>
                <span className="text-xl font-bold text-foreground">
                  {curreny} {amount}
                </span>
              </div>
            </div>
          </div>

          {Boolean(guides.length) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <h3 className="font-semibold flex items-center gap-2">
                <span className="text-prime">🎁</span>
                Additional Guides
              </h3>
              <div className="space-y-3">
                {guides.map(({ description, guideId, pricing, title }, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    onClick={() => {
                      if (!formData.guides?.includes(guideId))
                        setFormData({
                          ...formData,
                          guides: [...formData.guides, guideId],
                        });
                      else {
                        setFormData({
                          ...formData,
                          guides: formData.guides.filter((e) => e !== guideId),
                        });
                      }
                    }}
                    className={`group cursor-pointer rounded-lg border ${
                      formData.guides?.includes(guideId)
                        ? "bg-prime/20 border-prime"
                        : "border-prime/40 hover:border-prime/60"
                    } transition-all duration-200`}
                  >
                    <div className="p-3 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{title}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm line-through text-foreground/60">
                            {curreny} {pricing.bigAmount}
                          </span>
                          <span className="font-bold text-prime">
                            {curreny} {pricing.amount}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-foreground/60">{description}</p>
                    </div>
                    <div className="px-3 py-2 border-t border-prime/20 flex items-center justify-between">
                      <Checkbox
                        checked={formData.guides?.includes(guideId)}
                        className="text-prime border-prime/40"
                      />
                      <span className="text-sm text-foreground/60">
                        Click to {formData.guides?.includes(guideId) ? "remove" : "add"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ),
      footer: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mt-auto space-y-2"
        >
          <Button
            disabled={isLoading}
            onClick={makePayment}
            className="w-full hover:bg-prime/80 bg-prime/60 text-white transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                Processing...
              </div>
            ) : (
              <>
                Pay {curreny} {" "}
                {amount +
                  formData.guides.reduce(
                    (sum, cur) =>
                      sum + guides.find((e) => e.guideId === cur)?.pricing.amount ?? 0,
                    0
                  )}
              </>
            )}
          </Button>
          <Button
            variant={"outline"}
            onClick={() => setFormState(0)}
            className="w-full border-prime/40 text-foreground/80 hover:text-foreground"
          >
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back
          </Button>
        </motion.div>
      ),
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="h-full w-full flex flex-col overflow-y-auto bg-background">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-foreground">
            {orderPage[formState].title}
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col">
          {orderPage[formState].body}
          {orderPage[formState].footer}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function PaymentModal({
  payModal,
  setOpenPay,
}: {
  payModal: boolean;
  setOpenPay: Dispatch<SetStateAction<boolean>>;
}) {
  const { data, status } = useSession();
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
            <Link className="w-fit" href={"/dashboard"}>
              <Button
                // onClick={() => setOpenPay(false)}
                disabled={status === "loading"}
                className="w-full bg-prime/70 text-white hover:bg-prime"
              >
                {status === "loading" ? "Adding Course..." : "Visit Dashboard"}
              </Button>
            </Link>
            {/* <Button
                variant={"link"}
                disabled={status === "loading"}
                className="text-white/40 hover:text-white"
              >
                {status === "loading" ? "loading..." : "Visit Dashboard"}
              </Button> */}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export function Floating({
  price,
  bundleId,
  open,
  setOpen,
  addToCart,
  slug,
}: {
  price: {
    amount: number;
    percentage: number;
    bigAmount: number;
  };
  slug: string;
  bundleId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  addToCart?: () => void;
}) {
  let course = {
    price: price.amount,
    ogPrice: price.bigAmount,
    discount: price.percentage,
  };

  const { data: session } = useSession();
  // @ts-ignore
  if (!session?.user?.bundleId?.includes(bundleId))
    return (
      <div className="md:hidden fixed bottom-0 z-20 bg-background/40 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex-1 group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
            <Button
              onClick={() => {
                setOpen(true);
                sendEvent("InitiateCheckout", {
                  content_ids: [bundleId],
                  content_type: "bundle",
                  em: sha256(session?.user?.email ?? ""),
                  // @ts-ignore
                  ph: sha256(session?.user?.phone ?? ""),
                  fn: sha256(session?.user?.name?.split(" ")[0] ?? ""),
                  event_source_url: window.location.href,
                });
                // addToCart();
              }}
              variant={"outline"}
              className={`font-semibold text-foreground/80 hover:text-foreground relative w-full p-6 text-sm gap-1`}
            >
              Buy Now @ ₹{course.price}{" "}
              <span className="text-muted-foreground line-through italic">
                ₹{course.ogPrice}
              </span>
            </Button>
          </div>
        </div>
      </div>
    );
}
