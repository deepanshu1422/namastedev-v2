"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Reveal from "@/components/framer/reveal";
import { CreditCard, ShoppingBag } from "lucide-react";
import Link from "next/link";

type TestimonialType = {
  review: JSX.Element;
  link: string;
};

function Testimonial({
  review,
  link,
}: TestimonialType) {
  return (
    <div className="lg:hover:bg-opacity-70 transition-all duration-200 flex flex-col p-6 gap-4 bg-second rounded-lg max-w-[350px]">
      <Link
        target="_blank"
        href={link}
        className="flex gap-1 h-fit p-2 rounded-full bg-prime/90 hover:bg-prime/70 text-sm font-semibold shadow-[rgb(0,_0,_0)_6px_6px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_3px_3px_0px_0px]"
      >
        <ShoppingBag className="h-5 w-5" />
      </Link>
      {review}
    </div>
  );
}

export const testimonials: TestimonialType[] = [
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        After struggling with countless job applications and rejections, I
        discovered the coaching program.{" "}
        <span className="bg-lime-500/40">
          The structured courses and mentorship provided me with the direction
          and skills I needed to stand out.
        </span>{" "}
        The supportive community kept me motivated throughout the process, and
        I eventually landed a software engineering position,
        transforming my career.
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I&apos;m happy to share that I&apos;m starting a new position as
        Software Engineer!
        <span className="bg-lime-500/40">
          I&apos;d also like to thank the coaches who
          continuously guided me with placements with their community.
        </span>
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        Before joining the program, I was struggling to make sense of the vast world
        of tech.{" "}
        <span className="bg-lime-500/40">
          The mentorship program gave me a structured approach and
          personalized guidance that I desperately needed.
        </span>{" "}
        With the program's resources and community, I successfully transitioned
        from a non-tech background to securing a software engineering role.
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I was stuck in a low-paying job and felt lost in my career.
        The mentorship group changed everything for me.{" "}
        <span className="bg-lime-500/40">
          The courses and community support helped me sharpen my skills and
          regain confidence.
        </span>{" "}
        With the support from the program, I landed a remote job, doubling my salary
        and setting a new career trajectory.
      </p>
    ),
    link: "/"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        Joining this program was the best decision I made for my career.{" "}
        <span className="bg-lime-500/40">
          The personalized mentorship and the comprehensive courses provided
          me with the tools and strategies I needed to excel in interviews.
        </span>{" "}
        Thanks to the program and community, I secured an internship which
        eventually turned into a full-time software engineering position.
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I had been applying to tech jobs for months with no success.{" "}
        <span className="bg-lime-500/40">
          The mentorship program, particularly the courses and the
          supportive community, provided me with a clear roadmap and the
          confidence to ace my interviews.
        </span>{" "}
        The program's guidance was instrumental in helping me land a high-paying
        role right after graduation.
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        After struggling with countless job applications and rejections, I
        discovered this program.{" "}
        <span className="bg-lime-500/40">
          The structured courses and mentorship provided me with the direction
          and skills I needed to stand out.
        </span>{" "}
        The supportive community kept me motivated throughout the process, and
        I eventually landed a software engineering position,
        transforming my career.
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I&apos;m happy to share that I&apos;m starting a new position as
        Software Engineer! I&apos;m grateful for this amazing opportunity.
        <span className="bg-lime-500/40">
          I&apos;d also like to thank the coaches who
          continuously guided me with placements with their community.
        </span>
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I cracked my internship because of the community and mentorship.
        The 1:1 mentorship and the community support helped me sharpen my skills and
        regain confidence. <span className="bg-lime-500/40">
          I am grateful for the resources and support that helped me land my dream job.
        </span>
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I would like to express my deepest appreciation to the mentors for their countless hours of invaluable 
        guidance and continued support which has played an instrumental role in my success. <span className="bg-lime-500/40">
          I landed a software engineering role.
        </span>
      </p>
    ),
    link: "/courses"
  },
  {
    review: (
      <p className="leading-6 text-sm font-normal">
        I was very confused before joining the program. I did not know what to do and how to prepare for interviews.
        <span className="bg-lime-500/40">
          The 1:1 mentorship and the community support helped me sharpen my skills and
          regain confidence.
        </span>
        I am grateful for the resources and support that helped me land my dream job.
      </p>
    ),
    link: "/courses"
  }
];

export default function Success() {
  return (
    <div className={"grid grid-cols-1 gap-1 py-10 max-w-[75rem] m-auto px-6 lg:px-10"}>
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          1000+ Success Stories
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-2xl text-center mx-auto text-sm text-white/70 px-10 line-clamp-2">
        Our students are working at top companies like Google, Facebook,
        Amazon, Microsoft, and many more. In total, they have achieved
        <span className="text-red-500"> $55.8M in job offer value.</span>
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5 lg:py-10 max-sm:place-items-center">
        {testimonials.map(
          ({ review, link }, i) => (
            <Testimonial
              key={i}
              review={review}
              link={link}
            />
          )
        )}
      </div>

      {/* <div className="py-12 relative flex flex-col gap-7 overflow-hidden bg-gradient-to-tr">
        <div className="relative flex gap-5 animate-[loop-scroll_40s_infinite_linear] hover:[animation-play-state:paused] w-fit">
        </div>

        <div className="pointer-events-none h-full w-full absolute z-10 bg-gradient-to-r from-bg max-lg:from-0% from-5% via-bg/10 via-50% to-bg max-lg:to-100% to-95%"></div>
      </div> */}

      {/* <div className="m-auto">
        <Link className="text-sm" href={"/testimonials"}>
          <button
            className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
          >
            Show More
          </button>
        </Link>
      </div> */}
      {/* <Link
        href={"https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"}
        target="_blank"
        className="bg-prime rounded-full px-4 text-center py-3 max-w-3xl mx-auto w-full text-3xl sm:text-4xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase"
      >
        <CreditCard className="h-10 w-10" />
        Join Now
      </Link> */}
    </div>
  );
}
