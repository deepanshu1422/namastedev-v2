"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import Link from "next/link";
import GridCard from "./grid-card";
import { YTModal } from "@/app/(guide)/testimonials/slider";

const reviews = [
  { src: "https://i.ibb.co/k3jxFpP/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/Kj8xHfc/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/m8vF15J/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/7GxGnKJ/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/sRC3pCT/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/j5QK1TZ/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/pyxKFx8/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/zZvZbNQ/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/wyjXhXZ/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/ZMWt8t8/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/Btrd8WN/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/q0NnJDD/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/j32sf26/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/dcNjN4v/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/V293mvX/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/XVxhSHF/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/F3bsz7r/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/JRrXpjf/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/Pr25mhc/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/jy8Cf5J/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/64HDR6m/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/HnBG8gF/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/WkNqNH2/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/bvM9MCQ/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/ssxLrb2/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/rQJfyqd/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/87Rj4C6/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/ThMBTNS/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/8bV4Cgc/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/vZysV5V/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/Tk0znCb/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/Qc3r9WW/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/rsm0c9Y/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/86Xt91s/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/yWJWnqW/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/QYJXMy6/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/QYtWDtZ/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/nM5NYSr/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/X2Sw0n1/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/GPWV544/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/BPkJxz4/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/QPtbB6v/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/LSKPQH1/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/zFWz6ZM/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/7bvXTL6/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/djhNdKW/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/rySkHHp/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/m46NMz7/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/sqFF872/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/RN4x8rq/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/qFQh8Pn/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/HD3dL3s/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/HP1D11N/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/TmNTBq1/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/0fdHzy0/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/LR35zgt/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/xqzYBLC/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/PD4JvFq/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/h7xxQb3/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/rcwG4JS/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/4MBfjFn/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/0f0vKsq/image.png", alt: "Testimonial image" },
  { src: "https://i.ibb.co/2ytcKzV/image.png", alt: "Testimonial image" },
];

export default function Main() {
  const [open, setOpen] = useState(false);
  const [ytId, setYtId] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[280px] md:h-[320px] bg-gradient-to-b from-prime/20 to-background/20">
        <div className="mx-auto px-4 h-full flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Inspiring Student Success Stories
          </h1>
          <p className="md:text-lg text-muted-foreground max-w-2xl mb-3 line-clamp-3">
            Explore inspiring testimonial images from our students! See their
            journeys, experiences, and achievements as they share how they
            started and reached new heights in their careers.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              className="text-sm underline text-green-600"
              href={"/testimonials/wall-of-love"}
            >
              <Button
                size="default"
                className="rounded-full text-white bg-transparent hover:bg-prime/20 border-2 border-prime/60"
              >
                <Heart className="mr-1 h-5 w-5" />
                Wall of Love
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {reviews.map(({ src }, i) => (
            <GridCard
              key={i}
              i={i}
              src={src}
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
