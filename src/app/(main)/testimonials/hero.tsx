import Image from "next/image";
import YoutubeEmbed from "./youtube-embed";
import Link from "next/link";
import Button from "@/components/home-components/button";
import AnimatedButton from "@/components/animated-button";
import { CourseScroll } from "@/components/course-components/course-scroll";
import CourseGallary from "@/components/course-components/course-gallary";

type VideoTestimony = {
  name?: string;
  designation?: string;
  videoId?: string;
  imageUrl?: string;
  linkedinUrl: string;
};

export function VideoTestimony({
  name,
  designation,
  videoId,
  imageUrl,
  linkedinUrl,
}: VideoTestimony) {
  return (
    <div className="w-full p-6 bg-second rounded-lg min-h-72 relative grid gap-4">
      <YoutubeEmbed embedId={videoId!} />
      <section className="flex justify-between">
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

        <Link href={linkedinUrl} className="rounded-md p-1.5 bg-prime/30 h-fit">
          <svg
            className="h-4 w-4 fill-white"
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

export default function Hero() {
  return (
    <div className="grid place-items-center gap-5">
      <div className="w-full relative">
        <div className="flex max-lg:flex-col items-start max-lg:items-center justify-between px-10 pt-5 gap-10">
          <div className="flex flex-col gap-8 m-auto w-full">
            <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-balance">
              What do our learners have to say?
            </h1>
            <CourseGallary />
          </div>
          <div className="flex-col items-center gap-5 hidden">
            <AnimatedButton link="https://courses.30dayscoding.com/s/store">
              <span className="flex gap-2 px-10 items-center">Try Courses</span>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
