"use client";

import { YTModal } from "@/app/(guide)/testimonials/slider";
import YoutubeEmbed from "@/app/(guide)/testimonials/youtube-embed";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CreditCard, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

type VideoTestimony = {
  name?: string;
  designation?: string;
  videoId?: string;
  imageUrl?: string;
  linkedinUrl: string;
};

function VideoTestimony({
  name,
  designation,
  videoId,
  imageUrl,
  linkedinUrl,
}: VideoTestimony) {
  return (
    <div className="w-full bg-second rounded-lg min-h-72 relative grid overflow-hidden">
      <YoutubeEmbed embedId={videoId!} />
      <section className="flex justify-between items-center p-5 px-3">
        <div className="flex gap-3">
          <Image
            src={imageUrl!}
            alt="instrutor"
            width={60}
            height={60}
            className="rounded-full object-cover h-12 w-12"
          />
          <div className="flex flex-col gap-1">
            <span className="text-cyan-400 text-sm font-semibold font-jakarta">
              {name}
            </span>
            <span className="text-sm text-white/80 leading-4">
              {designation}
            </span>
          </div>
        </div>

        <Link href={linkedinUrl} className="h-fit">
          <svg
            className="h-6 w-6 fill-white hover:fill-emerald-400 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </Link>
      </section>
    </div>
  );
}

function NewVideo({
  src,
  videoId,
  setOpen,
  setUrl,
}: {
  src: string;
  videoId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setUrl: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-full">
      <AspectRatio
        onClick={() => {
          setOpen(true), setUrl(videoId);
        }}
        ratio={16 / 9}
        className="cursor-pointer bg-muted overflow-hidden rounded-lg group"
      >
        <Image
          src={src}
          alt="30 days coding youtube video"
          fill
          className="rounded-md object-cover shadow-xl"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-active:-translate-y-[58%] group-hover:-translate-y-2/3 transition-transform">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
            <Play className="w-8 h-8 stroke-[3] fill-white" />
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}

export default function MentorshipGallary({
  setOpenPay,
}: {
  setOpenPay: Dispatch<SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("nTyg09pcOss");
  const courses = [
    {
      image: "/thumbs/7.jpg",
      embedId: "izIyB107f6o",
    },
    {
      image: "/thumbs/1.jpg",
      embedId: "Z4gQbG4oR4k",
    },
    {
      image: "/thumbs/3.jpg",
      embedId: "N7AN5lcXljc",
    },
    {
      image: "/thumbs/4.jpg",
      embedId: "nTyg09pcOss",
    },
    {
      image: "/thumbs/5.jpg",
      embedId: "Dm799lE6Geo",
    },
    {
      image: "/thumbs/6.jpg",
      embedId: "eOedBqAA0qM",
    },
  ];

  return (
    <div className="flex flex-col gap-8 m-auto w-full max-w-[80rem] p-10">
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-3xl lg:text-[2rem] font-extrabold text-center">
          Learn with other Successful People
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-center items-center gap-4 drop-shadow-[5px_6px_70px_#07928153]">
        {courses.map(({ embedId, image }, i) => (
          // <VideoTestimony
          //   name={name}
          //   designation={designation}
          //   imageUrl={image}
          //   videoId={embedId}
          //   linkedinUrl={link}
          //   key={i}
          // />
          <NewVideo
            key={i}
            setUrl={setUrl}
            src={image}
            videoId={embedId}
            setOpen={setOpen}
          />
        ))}
        <YTModal url={url} open={open} setOpen={setOpen} />
      </div>
      <button
        onClick={() => setOpenPay(true)}
        // href={"https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"}
        // target="_blank"
        className="bg-prime rounded-full px-4 text-center py-3 max-w-3xl mx-auto w-full text-3xl sm:text-4xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase"
      >
        <CreditCard className="h-10 w-10" />
        Join Now
      </button>
    </div>
  );
}
