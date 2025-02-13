"use client";

import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
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
import createGuidePayments from "../../../../actions/createGuidePayment";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, CreditCard } from "lucide-react";

export function PaymentSheet({
  title,
  amount,
  bigAmount,
  percentage,
  guideId,
  open,
  curreny,
  setOpen,
  setOpenPay,
}: {
  title: string;
  amount: number;
  bigAmount: number;
  percentage: number;
  curreny: string;
  guideId: string;
  open: boolean;
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

      if (guideId) {
        beginCheckout({
          title,
          amount,
          itemId: guideId,
          itemType: "guide",
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          state: formData.state,
          loggedIn: status === "authenticated",
        });
        res = await createGuidePayments({
          guideId: guideId,
          email: session?.user?.email ?? formData.email.toLocaleLowerCase(),
          contact: formData.phone,
          name: session?.user?.name ?? formData.name,
          state: formData.state,
          couponCode: promo.code,
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
        //   await update({ courses: true });
          router.push(`/thank-you?title=${title}&value=${res.data.amount/100}&currency=INR&contentType=guide&name=${formData.name}&email=${formData.email.toLocaleLowerCase()}&state=${formData.state}&phone=+91${formData.phone}&id=${guideId}&slug=guide${
            utm_source ? `&utm_source=${utm_source}` : ""
          }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
            utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
          }${utm_content ? `&utm_content=${utm_content}` : ""}${
            utm_term ? `&utm_term=${utm_term}` : ""
          }`);

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
          guideId,
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
          <div className="border-l-4 border-emerald-500/60 pl-4">
            <p className="max-sm:text-sm sm:leading-6 line-clamp-3 text-white/90">{title}</p>
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              //   disabled={!!session?.user?.name}
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
              //   disabled={!!session?.user?.email}
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
          onClick={() => {
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
            setFormState(1);
          }}
          className="w-full mt-auto hover:bg-prime/80 bg-prime/60 text-white"
          type="submit"
        >
          Proceed
        </Button>
      ),
    },
    {
      title: "Order Details",
      body: (
        <div className="flex flex-col gap-6 max-sm:pt-5">
          <section className="bg-second/10 rounded-lg p-4 border border-prime/20">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Guide Price</span>
                <span className="font-bold text-lg">
                  {curreny} {bigAmount}
                </span>
              </div>
              <div className="text-prime flex justify-between items-center">
                <span className="font-medium">Discount @ {percentage}%</span>
                <span className="font-bold text-lg">
                  -{curreny} {bigAmount - amount}
                </span>
              </div>
              <div className="h-px bg-prime/20" />
              <div className="flex justify-between items-center">
                <span className="font-medium">Sub Total</span>
                <span className="font-bold text-xl text-prime">
                  {curreny} {amount}
                </span>
              </div>
            </div>
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
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        {/* <SheetTrigger asChild>
          <Button
            size={"lg"}
            className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg"
          >
            Buy Now
          </Button>
        </SheetTrigger> */}
        <SheetContent className="h-full w-full flex flex-col overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{orderPage[formState].title}</SheetTitle>
          </SheetHeader>
          {orderPage[formState].body}
          {orderPage[formState].footer}
        </SheetContent>
      </Sheet>
    </>
  );
}

export function PaymentModal({
  payModal,
  setOpenPay,
}: {
  payModal: boolean;
  setOpenPay: Dispatch<SetStateAction<boolean>>;
}) {
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
            //   disabled={status === "loading"}
              className="w-full bg-prime/70 text-white hover:bg-prime"
            >
              Watch Now
            </Button>
            <Link className="w-fit" href={"/dashboard"}>
              <Button
                variant={"link"}
                className="text-white/40 hover:text-white"
              >
                Visit Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
