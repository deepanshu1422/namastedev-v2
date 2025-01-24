"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { Courses } from "./page";
import { useAtom } from "jotai";
import { userInfo } from "@/lib/jotai";
import { toast } from "sonner";
import { beginCheckout } from "@/services/gaEvents";
import { sendEvent } from "@/services/fbpixel";
import { ArrowLeft, CheckCheck, Mail, Phone } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import createPayments from "actions/createPayments";
import { sha256 } from "js-sha256";

export default function Main({ courseCollection: { items } }: Courses) {
  const item = items[0];
  const { amount, bigAmount, percentage } = item.pricingsCollection.items.find(
    (e) => e.countryCode === "IN"
  );
  const currency = "₹";
  const guides = item.guidesCollection.items;

  const [info, setInfo] = useAtom(userInfo);

  const router = useRouter();
  const pathName = usePathname();
  const posthog = usePostHog();
  let flag = true;

  let domainInfo = {
    name:
      item.domain === "skillsetmaster.com" ? "SkillSetMaster" : "30DaysCoding",
    baseColor: item.domain === "skillsetmaster.com" ? "#DBB62E" : "",
  };

  const utmParams = useSearchParams();
  const utm_source = utmParams.get("utm_source");
  const utm_medium = utmParams.get("utm_medium");
  const utm_campaign = utmParams.get("utm_campaign");
  const utm_content = utmParams.get("utm_content");
  const utm_term = utmParams.get("utm_term");

  const [read, setRead] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    email2: string;
    phone: string;
    state: string;
    guides: string[];
  }>({
    name: info.name,
    email: info.email,
    email2: info.email,
    phone: info.phone,
    state: info.state,
    guides: [],
  });

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

  useEffect(() => {
    setFormData({
      name: info?.name,
      email: info?.email,
      email2: info?.email,
      phone: info?.phone,
      state: info?.state,
      guides: [],
    });
  }, [info]);

  useEffect(() => {
    // @ts-ignore
    // if (!session?.user?.bundleId?.includes(bundleId))

    if (!info.email) {
      console.log(info);
      router.replace(
        `/payments/courses/${item.courseId}?${
          utm_source ? `&utm_source=${utm_source}` : ""
        }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
          utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
        }${utm_content ? `&utm_content=${utm_content}` : ""}${
          utm_term ? `&utm_term=${utm_term}` : ""
        }`
      );
    }

    if (flag) {
      posthog.capture("add_payment_info", {
        title: item.title,
        slug: item.slug,
        itemId: item.courseId,
        itemType: "course",
        value:
          item.pricingsCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 499,
      });

      // viewItem({
      //   title: item.title,
      //   slug: item.slug,
      //   itemId: item.courseId,
      //   itemType: "course",
      //   value:
      //     item.pricingsCollection?.items?.find((e) => e.countryCode == "IN")
      //       ?.amount ?? 499,
      // });

      sendEvent("AddPaymentInfo", {
        value:
          item.pricingsCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 399,
        content_ids: [item.courseId],
        content_type: "course",
        em: sha256(formData.email ?? ""),
        // @ts-ignore
        ph: sha256(formData.phone ?? ""),
        fn: sha256(formData.name?.split(" ")[0] ?? ""),
        event_source_url: window.location.href,
      });

      flag = false;
    }
  }, [pathName]);

  function validationError({ message }: { message: string }) {
    toast.error("Error Occured", {
      description: message,
      position: "bottom-center",
    });
  }

  const [isLoading, setIsLoading] = useState(false);
  const [openPay, setOpenPay] = useState(false);

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

      if (item.courseId) {
        posthog.capture("begin_checkout", {
          title: item.title,
          amount,
          itemId: item.courseId,
          itemType: "course",
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          state: formData.state,
        });

        beginCheckout({
          title: item.title,
          amount,
          itemId: item.courseId,
          itemType: "course",
          name: formData.name,
          email: formData.email.toLocaleLowerCase(),
          state: formData.state,
          loggedIn: status === "authenticated",
        });

        sendEvent("InitiateCheckout", {
          value:
            item.pricingsCollection?.items?.find((e) => e.countryCode == "IN")
              ?.amount ?? 399,
          content_ids: [item.courseId],
          content_type: "course",
          em: sha256(formData.email ?? ""),
          // @ts-ignore
          ph: sha256(formData.phone ?? ""),
          fn: sha256(formData.name?.split(" ")[0] ?? ""),
          event_source_url: window.location.href,
        });

        res = await createPayments({
          courseId: item.courseId,
          email: formData.email.toLocaleLowerCase(),
          contact: formData.phone,
          name: formData.name,
          state: formData.state,
          couponCode: "",
          guides: formData.guides,
          domain: item.domain,
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
        return;
      }

      console.log(res.data);

      const options = {
        key: key,
        description: formData.state,
        image: "/icon.png",
        name: domainInfo.name,
        currency: res.data.currency,
        amount: res.data.amount / 100,
        order_id: res.data.orderId,
        handler: async function (response: any) {
          setOpenPay(true);
          router.push(
            `https://${item.domain}/thank-you?title=${item.title}&value=${
              res.data.amount / 100
            }&currency=INR&contentType=course&name=${
              formData.name
            }&email=${formData.email.toLocaleLowerCase()}&state=${
              formData.state
            }&phone=+91${formData.phone}&id=${item.courseId}&slug=${item.slug}${
              utm_source ? `&utm_source=${utm_source}` : ""
            }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
              utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
            }${utm_content ? `&utm_content=${utm_content}` : ""}${
              utm_term ? `&utm_term=${utm_term}` : ""
            }`
          );
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
          courseId: item.courseId,
        },
        theme: {
          color: item.domain === "skillsetmaster.com" ? "#DBB62E" : "#134543",
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
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-200">
      <div className="flex flex-col mx-auto sm:px-4 w-full sm:max-w-sm">
        {/* Header with logo and title */}
        <div
          className={`${
            item.domain === "skillsetmaster.com"
              ? `bg-[#DBB62E] text-black`
              : "bg-bg text-white "
          } p-6`}
        >
          <button
            onClick={() => {
              router.back();
            }}
            className="mb-2 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <img src="/logo.png" alt="Logo" className="h-8" />
            <span
              className={`text-sm font-bold ${
                item.domain === "skillsetmaster.com"
                  ? "text-gray-800"
                  : `text-white/70`
              }`}
            >
              {domainInfo.name}
            </span>
          </button>
          <div className="mt-7 text-sm font-semibold">Order Summary</div>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="text-2xl font-bold">
              ₹
              {
                item.pricingsCollection.items.find(
                  (e) => e.countryCode === "IN"
                )?.amount
              }
            </span>
            <span
              className={`line-through ${
                item.domain === "skillsetmaster.com"
                  ? "text-gray-800"
                  : `text-white/70`
              }`}
            >
              ₹
              {
                item.pricingsCollection.items.find(
                  (e) => e.countryCode === "IN"
                )?.bigAmount
              }
            </span>
            {/* <span className="text-sm text-white/70 font-semibold">(Tax Included)</span> */}
          </div>

          <section className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span>Course Price</span>
              <span className="font-extrabold">
                {currency} {bigAmount}
              </span>
            </div>
            <div
              className={`${
                item.domain === "skillsetmaster.com"
                  ? `text-white`
                  : "text-prime"
              } font-semibold flex justify-between`}
            >
              <span>Discount @ {percentage}%</span>
              <span className="font-extrabold">
                -{currency} {bigAmount - amount}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Amount</span>
              <span className="font-extrabold">
                {currency} {amount}
              </span>
            </div>
          </section>
        </div>

        {/* Form section */}
        <div className="bg-white p-6 py-2 pb-20 border border-border/20 h-full">
                  {Boolean(guides.length) && (
                    <>
                      <div className="flex flex-col gap-3 justify-between text-black">
                        <span className="font-semibold">
                          🔔Don&apos;t miss out on our guides
                        </span>
                        <div className="flex flex-col gap-3">
                          {guides.map(
                            ({ description, guideId, pricing, title, offers }, i) => {
                              return (
                                <div
                                  key={i}
                                  className={`flex flex-col gap-1 rounded-md border cursor-pointer hover:shadow-lg transition-all duration-200 ${
                                    formData.guides?.includes(guideId) &&
                                    `bg-yellow-500/50 text-black border-yellow-600`
                                  } transition-all duration-100 ${
                                    item.domain === "skillsetmaster.com"
                                      ? `border-yellow-900`
                                      : "border-yellow-500"
                                  }`}
                                >
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
                                    className={`flex flex-col mb-2 gap-0.5 ${
                                      formData.guides?.includes(guideId)
                                        ? "text-black"
                                        : "text-yellow-800"
                                    }`}
                                  >
                                    <h3 className="p-3 py-1.5 rounded-t bg-[#131313] font-bold text-base text-white">
                                      {title}
                                    </h3>
                                    <div className="px-3 flex items-baseline gap-1.5 my-1">
                                      <span className="text-xl font-bold">
                                        ₹{pricing.amount}
                                      </span>
                                      <span className="line-through text-sm">
                                        ₹{pricing.bigAmount}
                                      </span>
                                      <span className="text-xs font-semibold">
                                        Save {Math.round((1 - pricing.amount / pricing.bigAmount) * 100)}%
                                      </span>
                                    </div>
                                    <p className="px-3 text-xs text-wrap">
                                      {description}
                                    </p>
        
                                    {Boolean(offers.length) && (
                                      <div className="px-3 flex flex-col gap-0.5">
                                        <span className="font-semibold text-sm">
                                          What you&apos;ll get:
                                        </span>
                                        <ul className="flex flex-col gap-0.5">
                                          {
                                          // read ? 
                                          offers.map((e, i) => (
                                                <li
                                                  key={i}
                                                  className="text-wrap flex gap-1 text-black text-xs"
                                                >
                                                  <CheckCheck className="mt-0.5 h-3 w-3 shrink-0" />
                                                  {e}
                                                </li>
                                              ))
                                            // : offers.slice(0, 2).map((e, i) => (
                                            //     <li
                                            //       key={i}
                                            //       className="text-wrap flex gap-1 text-black text-xs"
                                            //     >
                                            //       <CheckCheck className="mt-0.5 h-3 w-3 shrink-0" />
                                            //       <span className="line-clamp-1">
                                            //         {e}
                                            //       </span>
                                            //     </li>
                                            //   ))
                                            }
                                        </ul>
                                      </div>
                                    )}
                                  </div>
        
                                  {/* <button
                                    onClick={() => {
                                      setRead(!read);
                                    }}
                                    className="text-left px-3 py-2 text-black text-xs font-semibold"
                                  >
                                    {read ? "Read Less" : "Read More"}
                                  </button> */}
        
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
                                    className={`flex items-center justify-between gap-2 p-2 text-black ${
                                      item.domain === "skillsetmaster.com"
                                        ? `bg-yellow-300`
                                        : "bg-yellow-400"
                                    }`}
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <Checkbox
                                        className={`h-4 w-4 border-yellow-600 data-[state=checked]:bg-black data-[state=checked]:text-white`}
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
                                      <span className="font-medium text-sm">
                                        {formData.guides?.includes(guideId)
                                          ? "Added to Cart"
                                          : "Add to Cart"}
                                      </span>
                                    </div>
                                    <span className="text-xs text-white animate-pulse font-medium bg-black px-2 py-0.5 rounded-full">
                                      Limited Offer!
                                    </span>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </>
                  )}
        
                  <div className="rounded-lg border border-border/40 p-4 mt-4 text-black">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        <p className="text-gray-900 font-semibold">{info.email}</p>
                      </div>
                      <p className="text-gray-700 text-wrap text-xs">
                        You will get access to the content for these programs on this
                        email
                      </p>
        
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        <p className="text-gray-900 font-semibold">{info.phone}</p>
                      </div>
                      <p className="text-gray-700 text-wrap text-xs">
                        We&apos;ll send you WhatsApp updates on this number
                      </p>
        
                      <button
                        onClick={() => {
                          router.back();
                        }}
                        className={`${
                          item.domain === "skillsetmaster.com"
                            ? `text-[#DBB62E]`
                            : "text-prime"
                        } underline text-sm font-bold mt-2`}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
      </div>
      <div className="fixed w-full flex backdrop-blur-sm bg-white/5 bottom-0">
        <div className="sm:max-w-sm mx-auto w-[85dvw] sm:w-full sm:px-4">
          <button
            disabled={isLoading}
            onClick={makePayment}
            className={`disabled:animate-pulse w-full ${
              item.domain === "skillsetmaster.com"
                ? `hover:bg-[#edc842] bg-[#DBB62E] text-black`
                : "hover:bg-second/80 bg-second text-white"
            } my-2 py-3 rounded-lg font-medium`}
            type="submit"
          >
            Buy @ {currency}{" "}
            {amount +
              formData.guides.reduce(
                (sum, cur) =>
                  // @ts-ignore
                  sum + guides.find((e) => e.guideId === cur)?.pricing.amount,
                0
              )}
          </button>
        </div>
      </div>
      <PaymentModal
        payModal={openPay}
        setOpenPay={setOpenPay}
        slug={item.slug}
      />
    </div>
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
              disabled={true}
              onClick={() => {
                router.push(`/dashboard/${slug}`);
                setOpenPay(false);
              }}
              className="w-full bg-prime/70 text-white hover:bg-prime"
            >
              Watch Now
            </Button>
            <Button
              variant={"link"}
              disabled={true}
              className="text-white/40 hover:text-white"
            >
              Visit Dashboard
            </Button>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
