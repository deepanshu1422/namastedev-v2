"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Reveal from "@/components/framer/reveal";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

type TestimonialType = {
  name: string;
  review: JSX.Element;
  pos: string;
  linkedin: string;
  profile: string;
  // course?: string;
  link: string;
};

function Testimonial({
  name,
  review,
  link,
  linkedin,
  pos,
  profile,
}: TestimonialType) {
  return (
    <div className="lg:hover:bg-opacity-70 transition-all duration-200 flex flex-col p-6 gap-4 bg-second rounded-lg">
      <div className="flex justify-between">
        <Link
          href={linkedin}
          target="_blank"
          className="flex items-center gap-2"
        >
          <Avatar>
            <AvatarImage src={profile} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((e) => e[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="flex flex-col">
            <span className="flex gap-1 font-bold leading-4">
              {name}
              <svg
                className={`fill-sky-500 dark:fill-white h-5 w-5 transition-all hover:scale-110`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </span>
            <span className="text-white/60 text-sm">{pos}</span>
          </span>
        </Link>

        <Link
          target="_blank"
          href={link}
          className="flex gap-1 p-2 rounded-full bg-prime/90 hover:bg-prime/70 text-sm font-semibold shadow-[rgb(0,_0,_0)_6px_6px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_3px_3px_0px_0px]"
        >
          <ShoppingBag className="h-5 w-5" />
          {/* Try Now */}
        </Link>
      </div>
      {review}
    </div>
  );
}

const testimonials: TestimonialType[] = [
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        Before joining 30DC, I was struggling to make sense of the vast world of
        tech.{" "}
        <span className="bg-lime-500/40">
          The mentorship program gave me a structured approach and personalized
          guidance that I desperately needed.
        </span>{" "}
        With 30DC&apos;s resources and community, I successfully transitioned
        from a non-tech background to securing a software engineering role.
      </p>
    ),
    name: "Rojal Sapkota",
    link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
    linkedin: "https://www.linkedin.com/in/rojal-sapkota-787130237/",
    pos: "SDE@Google",
    profile: "/rojal-in.jpg",
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I was stuck in a low-paying job and felt lost in my career. 30DC&apos;s
        mentorship group changed everything for me.{" "}
        <span className="bg-lime-500/40">
          The courses and community support helped me sharpen my skills and
          regain confidence.
        </span>{" "}
        With the support from 30DC, I landed a remote job, doubling my salary
        and setting a new career trajectory.
      </p>
    ),
    name: "Ishan",
    link: "https://courses.30dayscoding.com/courses/Full-stack-package-652a0a17e4b0db14394522ed",
    linkedin: "https://www.linkedin.com/in/ishan/",
    pos: "SDE (Remote) USA",
    profile: "/ishan-in.jpg",
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        Joining 30DC was the best decision I made for my career.{" "}
        <span className="bg-lime-500/40">
          The personalized mentorship and the comprehensive courses provided me
          with the tools and strategies I needed to excel in interviews.
        </span>{" "}
        Thanks to 30DC and the community, I secured an internship at LinkedIn,
        which eventually turned into a full-time software engineering position
        at Apple.
      </p>
    ),
    name: "Umang Chaudhary",
    link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
    linkedin: "https://www.linkedin.com/in/umang18oct/",
    pos: "SDE@Amazon",
    profile: "/umang-in.jpg",
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I had been applying to tech jobs for months with no success.{" "}
        <span className="bg-lime-500/40">
          The 30DC mentorship program, particularly the courses and the
          supportive community, provided me with a clear roadmap and the
          confidence to ace my interviews.
        </span>{" "}
        30DC&apos;s guidance was instrumental in helping me land a high-paying
        role at Microsoft right after graduation.
      </p>
    ),
    name: "Kevin",
    link: "https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view",
    linkedin: "https://www.linkedin.com/in/kevinmsmith131/",
    pos: "SDE@Tesla",
    profile: "",
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        After struggling with countless job applications and rejections, I
        discovered 30DC.{" "}
        <span className="bg-lime-500/40">
          The structured courses and mentorship provided me with the direction
          and skills I needed to stand out.
        </span>{" "}
        The supportive community kept me motivated throughout the process, and I
        eventually landed a software engineering position at Netflix,
        transforming my career.
      </p>
    ),
    name: "Manan Patel",
    link: "https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view",
    linkedin: "https://www.linkedin.com/in/themananpatel/",
    pos: "SDE@Nasdaq",
    profile: "/manan-in.jpg",
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I&apos;m happy to share that I&apos;m starting a new position as Software Engineer
        1-B at Bank of America! I&apos;m grateful to Vellore Institute of Technology
        for providing this amazing opportunity.
        <span className="bg-lime-500/40">
          I&apos;d also like to thank Aryan Singh and Deepanshu Udhwani, who
          continuously guided me with placements with their community (30 Days
          Coding).
        </span>
      </p>
    ),
    name: "Sneha Michelle V.",
    link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
    linkedin: "https://www.linkedin.com/in/sneha-michelle-v-1b73b0213/",
    pos: "SDE@Bank of America",
    profile: "/sneha-in.jpg",
  },
];

export default function Success() {
  return (
    <div className={"grid grid-cols-1 gap-1 py-10 max-w-[75rem] m-auto"}>
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Success Stories
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-2xl text-center mx-auto text-sm text-white/70 px-10 line-clamp-2">
        A collection of inspiring narratives highlighting the journeys of
        individuals who have overcome significant challenges to achieve
        remarkable accomplishments.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-10 py-5 lg:py-10">
        {testimonials.map(
          ({ name, review, link, linkedin, pos, profile }, i) => (
            <Testimonial
              key={i}
              name={name}
              review={review}
              link={link}
              linkedin={linkedin}
              pos={pos}
              profile={profile}
            />
          )
        )}
      </div>

      {/* <div className="py-12 relative flex flex-col gap-7 overflow-hidden bg-gradient-to-tr">
        <div className="relative flex gap-5 animate-[loop-scroll_40s_infinite_linear] hover:[animation-play-state:paused] w-fit">
        </div>

        <div className="pointer-events-none h-full w-full absolute z-10 bg-gradient-to-r from-bg max-lg:from-0% from-5% via-bg/10 via-50% to-bg max-lg:to-100% to-95%"></div>
      </div> */}

      <div className="m-auto">
        <Link className="text-sm" href={"/testimonials"}>
          <button
            className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
          >
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}
