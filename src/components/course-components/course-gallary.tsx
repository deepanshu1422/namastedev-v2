import YoutubeEmbed from "@/app/(main)/testimonials/youtube-embed";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export default function CourseGallary() {
  const courses = [
    // {
    //   name: "Arayn Singh",
    //   designation: "SDE@Google",
    //   image: "https://i.ibb.co/YRBGz7v/instructor.jpg",
    //   embedId: "az_kulKlR5I",
    //   link: "https://www.instagram.com/singh.aryan.45/",
    // },
    // {
    //   name: "Arayn Singh",
    //   designation: "SDE@Google",
    //   image: "https://i.ibb.co/YRBGz7v/instructor.jpg",
    //   embedId: "wLgWpEixSL4",
    //   link: "https://www.instagram.com/singh.aryan.45/",
    // },
    // {
    //   name: "Arayn Singh",
    //   designation: "SDE@Google",
    //   image: "https://i.ibb.co/YRBGz7v/instructor.jpg",
    //   embedId: "iF6Nmr7KIiA",
    //   link: "https://www.instagram.com/singh.aryan.45/",
    // },
    {
      name: "Deepanshu Udhwani",
      designation: "Founder",
      image: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
      embedId: "nTyg09pcOss",
      link: "https://www.instagram.com/itsudhwani/",
    },
    {
      name: "Deepanshu Udhwani",
      designation: "Founder",
      image: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
      embedId: "eOedBqAA0qM",
      link: "https://www.instagram.com/itsudhwani/",
    },
    {
      name: "Deepanshu Udhwani",
      designation: "Founder",
      image: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
      embedId: "Dm799lE6Geo",
      link: "https://www.instagram.com/itsudhwani/",
    },
    {
      name: "Deepanshu Udhwani",
      designation: "Founder",
      image: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
      embedId: "d9_gwyP0Mj8",
      link: "https://www.instagram.com/itsudhwani/",
    },
    {
      name: "Deepanshu Udhwani",
      designation: "Founder",
      image: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
      embedId: "0tgrNNFuohY",
      link: "https://www.instagram.com/itsudhwani/",
    },
    {
      name: "Deepanshu Udhwani",
      designation: "Founder",
      image: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
      embedId: "OjuzyGwYrjg",
      link: "https://www.instagram.com/itsudhwani/",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 justify-center items-center gap-8 w-full">
      {courses.map(({ embedId, designation, image, link, name }, i) => (
        <VideoTestimony
          name={name}
          designation={designation}
          imageUrl={image}
          videoId={embedId}
          linkedinUrl={link}
        />
        // <div
        //   key={i}
        //   // href={href}
        //   className="group overflow-hidden bg-second w-full h-60 shadow-lg relative"
        // >
        //   <iframe
        //     className="h-full w-full left-0 top-0 absolute"
        //     width="853"
        //     height="480"
        //     src={`https://www.youtube.com/embed/${embedId}`}
        //     frameBorder="0"
        //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //     allowFullScreen
        //     title="Embedded youtube"
        //   />
        //   {/* <Image
        //       className="absolute object-cover group-hover:scale-105 transition-transform duration-200"
        //       fill
        //       src={imageSrc}
        //       loader={() => imageSrc}
        //       alt={title}
        //     /> */}
        // </div>
      ))}
    </div>
  );
}
