"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Image, PlayCircle } from "lucide-react";
import Link from "next/link";
import GridCard from "./grid-card";
import { YTModal } from "@/app/(guide)/testimonials/slider";

const reviews = [
  { ytId: "zA_jXlo_3YE" },
  { ytId: "F2OsMQ7nz3k" },
  { ytId: "HQG9ZCSTtr0" },
  { ytId: "6lP2w6MLYXk" },
  { ytId: "iHWCA-qckII" },
  { ytId: "YJKnBut4qYg" },
  // { ytId: "BTuRqeSF0ac" },
  { ytId: "wSlRs8EQubI" },
  { ytId: "X8iGoKglP2c" },
  { ytId: "KhwbMajuuKY" },
  { ytId: "U8bf4-tsw9k" },
  { ytId: "5rU6ZfXs9YY" },
  { ytId: "nnEaMT93mTU" },
  { ytId: "c_RbgqTQVIk" },
  { ytId: "67pe9efDWic" },
  { ytId: "soVJa7l9SRA" },
  { ytId: "85_B4czAZrY" },
  { ytId: "mWSZmMidGFM" },
  { ytId: "aSP4X_lP0EM" },
  { ytId: "um0L6w0FFZg" },
  { ytId: "FbySzm0Igk8" },
  { ytId: "QEIRTiQCD3c" },
  { ytId: "hcxQFmavLOg" },
  { ytId: "pHZhfQrJcQg" },
  { ytId: "eeoDuEdOqpQ" },
  { ytId: "Zv7PRNFUmuA" },
  { ytId: "JAoLRTRGp24" },
  { ytId: "H1pkVAp1auM" },
  { ytId: "GxvI0CyFBEc" },
  { ytId: "OapWd8yslUY" },
  { ytId: "3AR6pBA_Avc" },
  { ytId: "ED8myw0-A78" },
  { ytId: "hIMEQJLfGVM" },
  { ytId: "FrhXxbdiU8Y" },
  { ytId: "sGdUQjRX7y0" },
  { ytId: "JRAsNb21Udg" },
  { ytId: "5s5PdFKPtZU" },
  { ytId: "PgW2y3u2TF4" },
  { ytId: "9hiWsSGl8Uk" },
  { ytId: "zbdGZ6qaIy8" },
  { ytId: "6X6uTl5lMxs" },
  { ytId: "So0s05hgh4k" },
  { ytId: "OkcwvK8m0M8" },
  { ytId: "tUUn_skfCE4" },
  { ytId: "VEnkI_equx4" },
  { ytId: "_I-j1qBSFVw" },
  { ytId: "6T7wOEf4UhE" },
  { ytId: "zJXH3EwIv5M" },
  { ytId: "Ura5GEyDvoE" },
  { ytId: "yhLODtDJuvc" },
  { ytId: "BVuqeDBM7VE" },
  { ytId: "E3JxHpOFhig" },
  { ytId: "TPQlIAtg7XE" },
  // { ytId: "tPgCjOMf-Hw" },
];

export default function Main() {
  const [open, setOpen] = useState(false);
  const [ytId, setYtId] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[280px] md:h-[320px] bg-gradient-to-b from-prime/20 to-background/20">
        <div className="mx-auto px-4 h-full flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Wall of Love</h1>
          <p className="md:text-lg text-muted-foreground max-w-2xl mb-3 line-clamp-3">
            Watch authentic video testimonials from our students! Hear their
            stories, experiences, and success journeys as they review how our
            courses transformed their skills and careers.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              className="text-sm underline text-green-600"
              href={"/testimonials/gallery"}
            >
              <Button
                size="default"
                className="rounded-full text-white bg-transparent hover:bg-prime/20 border-2 border-prime/60"
              >
                <Image className="mr-1.5 h-5 w-5" />
                Gallery
              </Button>
            </Link>
            <Link
              className="text-sm underline text-green-600"
              target="_blank"
              href={
                "https://www.instagram.com/reel/DDMntGkzQ0S/?igsh=NnZvYTc3OW1zMmM5"
              }
            >
              <Button
                size="default"
                className="rounded-full text-white bg-prime/60 hover:bg-prime/80"
              >
                <PlayCircle className="mr-1.5 h-5 w-5" />
                Listen Us
              </Button>
            </Link>
            <Link
              className="text-sm underline text-green-600"
              href={"/testimonials/success-stories"}
            >
              <Button
                size="default"
                className="rounded-full text-white bg-transparent hover:bg-prime/20 border-2 border-prime/60"
              >
                Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(({ ytId }, i) => (
            <GridCard
              key={i}
              i={i}
              ytId={ytId}
              setOpen={setOpen}
              setYtId={setYtId}
            />
          ))}
        </div>
      </section>
      <YTModal open={open} setOpen={setOpen} url={ytId} />
    </div>
  );
}
