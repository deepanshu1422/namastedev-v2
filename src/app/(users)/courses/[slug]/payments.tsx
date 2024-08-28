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
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export function PaymentSheet({
  cover,
  title,
  amount,
  curreny,
  courseId,
  open,
  setOpen,
  setOpenPay,
}: {
  cover: string;
  title: string;
  amount: number;
  curreny: string;
  courseId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOpenPay: Dispatch<SetStateAction<boolean>>;
}) {
  const { data: session, update } = useSession();

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? "",
    // @ts-ignore
    phone: session?.user?.phone ?? "",
    // @ts-ignore
    state: session?.user?.state ?? "",
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

  const states = [
    "andhra_pradesh",
    "arunachal_pradesh",
    "assam",
    "bihar",
    "chhattisgarh",
    "goa",
    "delhi",
    "gujarat",
    "haryana",
    "himachal_pradesh",
    "jharkhand",
    "karnataka",
    "kerala",
    "madhya_pradesh",
    "maharashtra",
    "manipur",
    "meghalaya",
    "mizoram",
    "nagaland",
    "odisha",
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
    if (formData.phone.length !== 10)
      return validationError({ message: "Invalid Phone Number" });
    if (!states.includes(formData.state))
      return validationError({ message: "Select a State" });

    try {
      setIsLoading(true);

      let res;

      if (courseId) {
        res = await createPayments({
          courseId: courseId,
          email: session?.user?.email ?? formData.email,
          contact: formData.phone,
          name: session?.user?.name ?? formData.name,
          state: formData.state,
          couponCode: promo.code,
        });
      } else {
        return;
      }
      // make an endpoint to get this key
      const key = "rzp_test_tVOEQJx5p7XYeW";

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
        description: "Test Transaction",
        image: "/icon.png",
        name: "30DaysCoding",
        currency: res.data.currency,
        amount: res.data.amount,
        order_id: res.data.orderId,
        handler: async function (response: any) {
          setOpenPay(true);
          await update({ courses: true });
          if (session?.user?.email) router.refresh()
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: "30DC Corporate Office",
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
        // @ts-ignore
        phone: session?.user?.phone ?? "",
        // @ts-ignore
        state: session?.user?.state ?? "",
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
      title: "Order Details",
      body: (
        <div className="flex flex-col gap-5">
          <div className="grid sm:grid-cols-3 gap-2 pt-4">
            <Image
              className="rounded-md max-sm:w-full max-h-40 object-cover bg-white/20"
              src={cover}
              alt={title}
              width={280}
              height={180}
            />
            <div className="sm:col-span-2 flex flex-col gap-1">
              <p className="sm:text-lg">{title}</p>
              <span className="font-extrabold text-prime">
                {curreny} {amount}
              </span>
            </div>
          </div>
          <section className="flex flex-col gap-3 max-sm:text-sm">
            <div className="flex justify-between">
              <span>Course Price</span>
              <span className="font-extrabold">
                {curreny} {amount}
              </span>
            </div>
            {promo.apply ? (
              <div className="flex flex-col gap-2">
                <form
                  className="flex gap-3 justify-between text-sm"
                  onSubmit={applyCoupon}
                >
                  <Input
                    disabled={submitting}
                    name="coupon"
                    required
                    placeholder="Enter a promo code"
                  />
                  <Button
                    disabled={submitting}
                    className="text-prime"
                    variant={"link"}
                    size={"sm"}
                  >
                    Apply
                  </Button>
                </form>
                <Button
                  disabled={submitting}
                  className="text-prime"
                  onClick={() => setPromo({ ...promo, apply: false })}
                  variant={"link"}
                  size={"sm"}
                >
                  Cancel
                </Button>
              </div>
            ) : promo.code ? (
              <div className="flex gap-3 justify-between text-sm">
                <span className="uppercase">{promo.code}</span>
                <div className="flex gap-2">
                  <span className="font-bold">-{promo.discount}</span>
                  <MinusCircle
                    onClick={() =>
                      setPromo({ apply: false, code: null, discount: 0 })
                    }
                    className="h-5 w-5 cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="flex gap-3 justify-between text-sm">
                <span>Promo Code</span>
                <span
                  onClick={() => setPromo({ ...promo, apply: true })}
                  className="font-extrabold text-prime hover:underline cursor-pointer"
                >
                  Apply Code
                </span>
              </div>
            )}
            <hr className="my-5" />
            <div className="flex justify-between">
              <span>GST</span>
              <span className="font-extrabold text-prime">
                {curreny} {(amount * 0.18).toFixed(0)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span className="font-extrabold text-prime">
                {curreny} {12}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Pay</span>
              <span className="font-extrabold text-prime">
                {curreny}{" "}
                {promo.discount
                  ? (amount + amount * 0.18 + 12 - promo.discount).toFixed(2)
                  : (amount + amount * 0.18 + 12).toFixed(2)}
              </span>
            </div>
          </section>
        </div>
      ),
      footer: (
        <Button
          onClick={() => setFormState(1)}
          className="w-full mt-auto hover:bg-prime/80 bg-prime/60 text-white"
          type="submit"
        >
          Proceed
        </Button>
      ),
    },
    {
      title: "Payments Details",
      body: (
        <div className="grid gap-4 py-4">
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
        <div className="w-full mt-auto flex flex-col gap-2">
          <Button
            disabled={isLoading}
            onClick={makePayment}
            className="disabled:animate-pulse w-full hover:bg-prime/80 bg-prime/60 text-white"
            type="submit"
          >
            Buy
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
        <SheetContent className="h-full w-full flex flex-col">
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
            <Button
              onClick={() => setOpenPay(false)}
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
  amount,
  courseId,
  open,
  setOpen,
}: {
  amount: number;
  courseId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  let course = {
    price: amount,
    ogPrice: (amount + 1) * 4,
    discount: 75,
  };

  const { data: session } = useSession();
  // @ts-ignore
  if (!session?.user?.courseId?.includes(courseId))
    return (
      <div className="md:hidden fixed bottom-0 z-20 bg-background/40 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex-1 group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
            <Button
              onClick={() => setOpen(true)}
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
