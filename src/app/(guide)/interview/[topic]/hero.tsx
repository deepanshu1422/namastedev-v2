'use client'
import { ArrowLeft, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  return (
    <div className="w-full relative bg-bg bg-grid-small-white/[0.2] border-b border-border/40">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-6 lg:px-8 lg:py-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Link
                href="/interview"
                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Interview
              </Link>
              <h1 className="font-bric text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="">{title}</span>
              </h1>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 xl:items-center xl:justify-between">
              <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <Image loader={() => imgSrc} src={imgSrc} alt={`${title} Interview Questions`} width={200} height={200} className="object-contain max-sm:hidden" />
        </div>
      </div>
    </div>
  );
}
