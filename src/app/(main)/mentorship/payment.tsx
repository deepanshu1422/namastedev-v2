"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import { country, geo } from "@/lib/jotai";
import addToWaitlist from "../../../../actions/addToWaitlist";
// import addToWaitlist from "@/actions/addToWaitlist";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function DrawerDialog({
  open,
  setOpen,
  title,
  children,
}: {
  title: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  // if (isDesktop) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
  // }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">{children}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function PaymentSheet({
  title,
  open,
  setOpen,
  setOpenPay,
}: {
  title: string;
  courseId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  openPay: boolean;
  setOpenPay: Dispatch<SetStateAction<boolean>>;
}) {
  // const { data: session, update } = useSession();
  const [geoData, setGeoData] = useAtom(geo);
  const [countryData, setCountryData] = useAtom(country);

  async function getCountry() {
    const ip = await (await fetch("https://api.ipify.org/?format=json")).json();
    const geo = await (
      await fetch(`https://api.iplocation.net/?cmd=ip-country&ip=${ip.ip}`)
    ).json();

    // console.log(geo);

    setGeoData(geo.country_code2);
    setCountryData(geo.country_name);
  }

  useEffect(() => {
    getCountry();
  }, []);

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // @ts-ignore
    phone: "",
    // @ts-ignore
    state: "",
    // @ts-ignore
    country: "",
    // @ts-ignore
    phoneCode: "US",
    // @ts-ignore
    university: "",
    // @ts-ignore
    gradeYear: "2024",
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

  const countryPhoneCodes = [
    { country: "United States", countryCode: "US", phoneCode: "+1" },
    { country: "India", countryCode: "IN", phoneCode: "+91" },
    { country: "Singapore", countryCode: "SG", phoneCode: "+65" },
    { country: "Australia", countryCode: "AU", phoneCode: "+61" },
    { country: "United Kingdom", countryCode: "GB", phoneCode: "+44" },
    { country: "China", countryCode: "CN", phoneCode: "+86" },
    { country: "Japan", countryCode: "JP", phoneCode: "+81" },
    { country: "Russia", countryCode: "RU", phoneCode: "+7" },
    { country: "Brazil", countryCode: "BR", phoneCode: "+55" },
    { country: "Germany", countryCode: "DE", phoneCode: "+49" },
    { country: "France", countryCode: "FR", phoneCode: "+33" },
    { country: "South Korea", countryCode: "KR", phoneCode: "+82" },
    { country: "Indonesia", countryCode: "ID", phoneCode: "+62" },
    { country: "Mexico", countryCode: "MX", phoneCode: "+52" },
    { country: "Italy", countryCode: "IT", phoneCode: "+39" },
    { country: "Turkey", countryCode: "TR", phoneCode: "+90" },
    { country: "Other", countryCode: "XX", phoneCode: "NA" },
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
    if (formData.university.length < 5)
      return validationError({ message: "University Name is Too Short" });

    try {
      setIsLoading(true);

      const geo = geoData ?? "US";
      const country = countryData ?? "USA";

      const prefix =
        geo === "IN"
          ? "+91"
          : countryPhoneCodes.find((e) => e.countryCode === formData.phoneCode)
              ?.phoneCode;

      const res = await addToWaitlist({
        email: formData.email.toLocaleLowerCase(),
        contact: prefix + formData.phone,
        name: formData.name,
        state: geo === "IN" ? formData.state || "haryana" : "Washington",
        country,
        university: formData.university,
        gradeYear: formData.gradeYear
      });

      if (!!res.error) {
        toast("Error Occured", {
          position: "bottom-center",
          description: res.message,
        });
        setIsLoading(false);
        setOpen(false);
      } else {
        setIsLoading(false);
        setOpen(false);
        setOpenPay(true);
        setFormData({
          name: "",
          email: "",
          // @ts-ignore
          phone: "",
          // @ts-ignore
          state: "",
          // @ts-ignore
          country: "",
          // @ts-ignore
          phoneCode: "US",
          // @ts-ignore
          university: "",
          // @ts-ignore
          gradeYear: "2024",
        });
      }
    } catch (error) {
      toast.error("Error Occuered", { description: JSON.stringify(error) });
      console.error(error);
      setIsLoading(false);
    }
  };

  const orderPage = [
    {
      title: "Apply for Job mentorship community",
      body: (
        <div className="grid gap-4 py-4">
          {/* <p className="max-sm:text-sm sm:leading-6 line-clamp-3">{title}</p> */}
          
          <h3
            className="flex justify-center decoration-red-500 underline decoration-4">We will reach out to you within 24 hours on WhatsApp
          </h3>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>  
            <Input
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
            <div className="relative flex col-span-4">
              <Select
                value={formData.phoneCode}
                onValueChange={(e: string) =>
                  setFormData({ ...formData, phoneCode: e })
                }
              >
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  <SelectGroup>
                    <SelectLabel>Code</SelectLabel>
                    {countryPhoneCodes.map(({ countryCode, phoneCode }, i) => (
                      <SelectItem key={i} value={countryCode}>
                        {phoneCode}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                type="number"
                id="phone"
                maxLength={10}
              />
            </div>
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="university" className="text-left">
              University
            </Label>
            <Input
              value={formData.university}
              onChange={(e) =>
                setFormData({ ...formData, university: e.target.value })
              }
              id="university"
              maxLength={60}
              type="text"
              placeholder="University's Name"
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="phone" className="col-span-2 text-left">
              Graduation Year
            </Label>
            <div className="relative flex col-span-3">
              <Select
                value={formData.gradeYear ?? "2024"}
                onValueChange={(e: string) =>
                  setFormData({ ...formData, gradeYear: e })
                }
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  <SelectGroup>
                    <SelectLabel>Year</SelectLabel>
                    {Array.from({ length: 26 }, (_, i) => 2015 + i).map((e, i) => (
                      <SelectItem key={i} value={String(e)}> 
                        {e}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* {geoData === "IN" && (
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
          )} */}
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
            Join Waitlist
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <DrawerDialog
        open={open}
        setOpen={setOpen}
        title={orderPage[formState].title}
      >
        {orderPage[formState].body}
        {orderPage[formState].footer}
      </DrawerDialog>
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
  const params = useSearchParams();
  const [open, setOpen] = useState(payModal || Boolean(params.get("success")));

  return (
    <Dialog open={open || payModal} onOpenChange={setOpenPay}>
      <DialogContent className="sm:max-w-[425px]">
        <Card className="bg-background border-none flex flex-col">
          <CardHeader className="p-1 items-center">
            <span className="flex items-center gap-2">
              <Image src={"/new.svg"} alt="30dc icon" height={40} width={40} />
              <CardTitle>1:1 Job Coaching</CardTitle>
            </span>
            <CardDescription className="text-center">
              Please check your email or text for the notification - We are
              taking candidates on a rolling basis only.
            </CardDescription>
          </CardHeader>
          {/* <CardContent className="pt-3 pb-0 mx-auto w-full flex flex-col items-center gap-2"></CardContent> */}
        </Card>
        {/* <DialogClose asChild>
          <Button className="w-full bg-prime/70 text-white hover:bg-prime">
            Welcome to Mentorship
          </Button>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  );
}

export function Floating({
  price,
  courseId,
  setOpen,
}: {
  price: {
    amount: number;
    percentage: number;
    bigAmount: number;
  };
  courseId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  let course = {
    price: price.amount,
    ogPrice: price.bigAmount,
    discount: price.percentage,
  };

  // const { data: session } = useSession();
  // @ts-ignore
  if (!session?.user?.courseId?.includes(courseId))
    return (
      <div className="md:hidden fixed bottom-0 z-20 bg-background/40 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex-1 group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
            <Button
              onClick={() => {
                setOpen(true);
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
