"use client";
import React, { useEffect, useState } from "react";

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

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { Product } from "./page";
import { useAtom } from "jotai";
import { userInfo } from "@/lib/jotai";
import { toast } from "sonner";
import { viewItem } from "@/services/gaEvents";
import { sendEvent } from "@/services/fbpixel";
import { sha256 } from "js-sha256";

export default function Main({ productCollection: { items } }: Product) {
  const item = items[0];
  const [info, setInfo] = useAtom(userInfo);
  const router = useRouter();
  const pathName = usePathname();
  const posthog = usePostHog();
  let flag = true;

  let domainInfo = {
    name: "CareerToolsAI",
    baseColor: "#2a5cad",
  };

  const utmParams = useSearchParams();
  const utm_source = utmParams.get("utm_source");
  const utm_medium = utmParams.get("utm_medium");
  const utm_campaign = utmParams.get("utm_campaign");
  const utm_content = utmParams.get("utm_content");
  const utm_term = utmParams.get("utm_term");

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    email2: string;
    phone: string;
    state: string;
  }>({
    name: info?.name ?? "",
    email: info?.email ?? "",
    email2: info?.email ?? "",
    phone: info?.phone ?? "",
    state: info?.state ?? "",
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
    });
  }, [info]);

  useEffect(() => {
    console.log(info);

    setFormData({
      name: info?.name,
      email: info?.email,
      email2: info?.email,
      phone: info?.phone,
      state: info?.state,
    });
    // @ts-ignore
    // if (!session?.user?.bundleId?.includes(bundleId))

    if (flag) {
      posthog.capture("view_item", {
        title: item.title,
        // slug: item.slug,
        itemId: item.productId,
        itemType: "product",
        value:
          item.pricingCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 499,
      });

      viewItem({
        title: item.title,
        slug: window.location.href,
        itemId: item.productId,
        itemType: "product",
        value:
          item.pricingCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 499,
      });

      sendEvent("ViewContent", {
        value:
          item.pricingCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 399,
        content_ids: [item.productId],
        content_type: "product",
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

  const proceedPayment = () => {
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

    setInfo({
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      state: formData.state,
    });

    sendEvent("AddToCart", {
      value:
        item.pricingCollection?.items?.find((e) => e.countryCode == "IN")
          ?.amount ?? 399,
      content_ids: [item.productId],
      content_type: "product",
      em: sha256(formData.email ?? ""),
      // @ts-ignore
      ph: sha256(formData.phone ?? ""),
      fn: sha256(formData.name?.split(" ")[0] ?? ""),
      event_source_url: window.location.href,
    });

    router.push(
      `/checkout/products/${item.productId}?${
        utm_source ? `&utm_source=${utm_source}` : ""
      }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
        utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
      }${utm_content ? `&utm_content=${utm_content}` : ""}${
        utm_term ? `&utm_term=${utm_term}` : ""
      }`
    );
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-200">
      <div className="flex flex-col  mx-auto sm:px-4 w-full sm:max-w-sm">
        {/* Header with logo and title */}
        <div
          className={`bg-[#0d2459] p-6`}
        >
          <div className="mb-2 flex items-center gap-2">
            {/* Add your logo here */}
            <img src="/logo.png" alt="Logo" className="h-8" />
            <span
              className={`text-sm font-bold text-white/70`}
            >
              {domainInfo.name}
            </span>
          </div>
          <h1 className="text-sm mb-2 text-wrap line-clamp-2">{item.title}</h1>
          {/* <p className="text-wrap">{JSON.stringify(info)}</p> */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">
              ₹
              {
                item.pricingCollection.items.find((e) => e.countryCode === "IN")
                  ?.amount
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
                item.pricingCollection.items.find((e) => e.countryCode === "IN")
                  ?.bigAmount
              }
            </span>
            {/* <span className="text-sm text-white/70 font-semibold">(Tax Included)</span> */}
          </div>
        </div>

        {/* Form section */}
        <div className="bg-white p-6 pb-2 border border-border/20 h-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              proceedPayment();
            }}
            className="text-black flex flex-col gap-6 h-full"
          >
            <div className="grid gap-3">
              <div className="grid items-center gap-2">
                <Label htmlFor="name" className="text-left">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  maxLength={30}
                  id="name"
                  placeholder="John Doe"
                  className="bg-white border-border/40 focus-visible:ring-prime/20 focus-visible:ring-1 focus-visible:ring-offset-1"
                />
              </div>
              <div className="grid items-center gap-2">
                <Label htmlFor="email" className="text-left">
                  Email <span className="text-red-500">*</span>
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
                  className="bg-white border-border/40 focus-visible:ring-prime/20 focus-visible:ring-1 focus-visible:ring-offset-1"
                />
              </div>
              <div className="grid items-center gap-2">
                <Label htmlFor="email" className="text-left">
                  Confirm Email <span className="text-red-500">*</span>
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
                  className="bg-white border-border/40 focus-visible:ring-prime/20 focus-visible:ring-1 focus-visible:ring-offset-1"
                />
              </div>
              <div className="grid items-center gap-2">
                <Label htmlFor="phone" className="text-left">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <div className="relative col-span-4">
                  <span className="absolute left-2 top-2">+91</span>
                  <Input
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    type="number"
                    id="phone"
                    className="pl-9 bg-white border-border/40 focus-visible:ring-prime/20 focus-visible:ring-1 focus-visible:ring-offset-1"
                    maxLength={10}
                  />
                </div>
              </div>
              <div className="grid items-center gap-2">
                <Label htmlFor="username" className="text-left">
                  State <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(e) => setFormData({ ...formData, state: e })}
                >
                  <SelectTrigger className="bg-white border-border/40 focus-visible:ring-prime/20 focus-visible:ring-1 focus-visible:ring-offset-1 w-full col-span-4 capitalize">
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

            <div className="flex flex-col gap-2 mt-auto">
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium text-white bg-[#2a5cad]`}
              >
                Next
              </button>

              <p className="text-xs text-gray-500 font-semibold text-center text-wrap">
                By proceeding you agree to our{" "}
                <a
                  href="/terms-condition"
                  className={`text-[#2a5cad]`}
                >
                  Terms
                </a>
                ,{" "}
                <a
                  href="/privacy-policy"
                  className={`text-[#2a5cad]`}
                  >
                  Privacy
                </a>{" "}
                &{" "}
                <a
                  href="/refund-policy"
                  className={`text-[#2a5cad]`}
                >
                  Refund Policy
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
