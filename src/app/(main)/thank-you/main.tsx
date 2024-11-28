"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { sendEvent } from "@/services/fbpixel";
import { purchase } from "@/services/gaEvents";
import { BASE_URL } from "@/util/constants";
import { sha256 } from "js-sha256";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Main() {
  const query = useSearchParams();
  let flag = true;

  useEffect(() => {
    if (flag) {
      sendEvent("Purchase", {
        value: query.get("value"),
        currency: query.get("currency"),
        content_ids: [query.get("id")],
        content_type: query.get("contentType"),
        content_name: query.get("title"),
        em: sha256(query.get("email")), // Hashing example
        ph: sha256(query.get("phone")),
        fn: sha256(query.get("name").split(" ")[0]),
        ln: sha256(query.get("name").split(" ")[1] ?? ""),
        num_items: 1,
        event_source_url: `${BASE_URL}/courses/${query.get("slug")}`,
      });
      purchase({
        title: query.get("title"),
        amount: +query.get("value"),
        itemId: query.get("id"),
        itemType: query.get("contentType"),
        name: query.get("name"),
        email: query.get("email").toLocaleLowerCase(),
        state: query.get("state"),
      });
      flag = false
    }
  }, []);

  return (
    <main className="min-h-[90vh] flex bg-white">
      <div className="mt-5 mx-auto p-3 flex flex-col items-center">
        <Image src={"/done.gif"} height={300} width={300} alt="done" />
        <CardHeader className="p-1 items-center -translate-y-10">
          <span className="flex gap-2 items-center text-3xl text-black font-extrabold">
            Thank You
          </span>
          <CardDescription className="text-center text-black max-w-2xl">
            Thank you for joining our community! Your purchase supports our
            mission to provide high-quality education and resources. Team 30DC
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-3 pb-0 mx-auto w-full flex flex-col items-center gap-2 -translate-y-10">
          <Link className="max-w-4xl w-full" href={"/dashboard"}>
            <Button className="w-full bg-prime/90 hover:bg-prime text-white">
              Watch Now
            </Button>
          </Link>
          <section className="flex gap-4 mt-3">
            <Link href={"https://www.linkedin.com/company/30dc/"}>
              <svg
                className="h-6 w-6 fill-zinc-500 stroke-zinc-500 transition-all lg:hover:fill-prime"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </Link>

            <Link href={"https://www.instagram.com/30dayscoding/"}>
              <svg
                className="h-6 w-6 fill-zinc-500 stroke-zinc-500 transition-all lg:hover:fill-prime"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>

            <Link
              href={"https://www.youtube.com/channel/UCdu8HnchmMbDqbbC4GdPrjw"}
            >
              <svg
                className="h-6 w-6 fill-zinc-500 stroke-zinc-500 transition-all lg:hover:fill-prime"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </Link>

            <Link href={"https://twitter.com/30dayscoding"}>
              <svg
                className="h-6 w-6 fill-zinc-500 stroke-zinc-500 transition-all lg:hover:fill-prime"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </Link>
          </section>
        </CardContent>
      </div>
    </main>
  );
}
