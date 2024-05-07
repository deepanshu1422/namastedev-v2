import { AnimatedTooltip } from "@/components/ace-ui/animated-tooltip";
import Reveal from "@/components/framer/reveal";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wall of Love | 30DaysCoding",
  description:
    "A page dedicated for our love and support for our work and what everything we achieved of till date.",
  openGraph: {
    images: "https://i.ibb.co/f0shfRt/30dc5.webp",
    title: "Wall of Love | 30DaysCoding",
    description:
      "A page dedicated for our love and support for our work and what everything we achieved of till date.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/f0shfRt/30dc5.webp",
    title: "Wall of Love | 30DaysCoding",
    description:
      "A page dedicated for our love and support for our work and what everything we achieved of till date.",
    site: "https://30dayscoding.com",
  },
};

function TestimonyImages({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="max-w-[23.75rem] w-full p-6 bg-second rounded-lg lg:min-h-[23.75rem] relative grid gap-4">
      <Image
        src={imageUrl}
        alt="instrutor"
        width={600}
        height={600}
        className="object-cover h-full w-full overflow-hidden"
      />
    </div>
  );
}

const reviews = [
  "https://i.ibb.co/9HBX8KR/p5.webp",
  "https://i.ibb.co/0XfP66P/p4.webp",
  "https://i.ibb.co/mTLQfhJ/p3.webp",
  "https://i.ibb.co/CBW9cBx/p2.webp",
  "https://i.ibb.co/C0HM0LF/p1.webp",
  "https://i.ibb.co/xs9dX78/29.webp",
  "https://i.ibb.co/J3y2DmR/30.webp",
  "https://i.ibb.co/tXr3gFc/26.webp",
  "https://i.ibb.co/9T5rdqd/27.webp",
  "https://i.ibb.co/CKjQnht/28.webp",
  "https://i.ibb.co/S3Fx1ks/22.webp",
  "https://i.ibb.co/QNMbJxd/23.webp",
  "https://i.ibb.co/4p613GD/24.webp",
  "https://i.ibb.co/9V7sCT1/25.webp",
  "https://i.ibb.co/QfnJGXv/19.webp",
  "https://i.ibb.co/fFQHmH4/20.webp",
  "https://i.ibb.co/WcjL5x1/21.webp",
  "https://i.ibb.co/8KN7nys/16.webp",
  "https://i.ibb.co/0J72X2f/17.webp",
  "https://i.ibb.co/6mWDV5q/18.webp",
  "https://i.ibb.co/kgspnvT/13.webp",
  "https://i.ibb.co/F0CFTNv/14.webp",
  "https://i.ibb.co/dJpwnzL/15.webp",
  "https://i.ibb.co/N6Gc2zR/11.webp",
  "https://i.ibb.co/QfnJGXv/19.webp",
  "https://i.ibb.co/HVRtBmJ/8.webp",
  "https://i.ibb.co/LCKcpXg/9.webp",
  "https://i.ibb.co/jk62VCP/10.webp",
  "https://i.ibb.co/pfxzkc8/6.webp",
  "https://i.ibb.co/k9zHVb5/7.webp",
  "https://i.ibb.co/3djxbxX/3.webp",
  "https://i.ibb.co/5L0vGfJ/4.webp",
  "https://i.ibb.co/5cKvNJC/5.webp",
  "https://i.ibb.co/0XXfv9s/1.webp",
  "https://i.ibb.co/fQYRMVJ/2.webp",
  "https://i.ibb.co/Mg2k5Jt/reviw-12.jpg",
  "https://i.ibb.co/jJPQqZw/reviw-13.jpg",
  "https://i.ibb.co/tJFqs8j/reviw-11.jpg",
  "https://i.ibb.co/WGxCKgD/reviw-10.jpg",
  "https://i.ibb.co/88QpJnP/reviw-9.jpg",
  "https://i.ibb.co/TmJbQ31/reviw-8.jpg",
  "https://i.ibb.co/WPznNKw/reviw-7.jpg",
  "https://i.ibb.co/t4ZqRkd/reviw-6.jpg",
  "https://i.ibb.co/mbHc9wN/reviw-5.jpg",
  "https://i.ibb.co/K9XR6n8/reviw-4.jpg",
  "https://i.ibb.co/1nMFSqh/reviw-3.jpg",
  "https://i.ibb.co/V35SvJM/reviw-2.jpg",
  "https://i.ibb.co/4FBYK6x/reviw-1.jpg",
  "https://i.ibb.co/7JJ7qgH/IMG-0012.jpg",
  "https://i.ibb.co/X3txcLJ/IMG-0013.jpg",
  "https://i.ibb.co/rsds6g5/IMG-0014.jpg",
  "https://i.ibb.co/3W4tMWy/IMG-0015.jpg",
  "https://i.ibb.co/vPnLQ5z/IMG-0559.jpg",
  "https://i.ibb.co/RBQGz97/IMG-0560.jpg",
  "https://i.ibb.co/68RZ8zR/IMG-0570.jpg",
  "https://i.ibb.co/8rLwbcp/IMG-4948.jpg",
  "https://i.ibb.co/njrL67D/IMG-5333.jpg",
  "https://i.ibb.co/mTXxFjj/IMG-6393.jpg",
  "https://i.ibb.co/zhfhZ0G/IMG-6394.jpg",
  "https://i.ibb.co/Zc419mR/IMG-6570.jpg",
  "https://i.ibb.co/8bGdxZM/IMG-0022.jpg",
  "https://i.ibb.co/8MXtjL5/IMG-0064.jpg",
  "https://i.ibb.co/QmV84Hg/IMG-0134.jpg",
  "https://i.ibb.co/8PwTW9S/IMG-7686.jpg",
  "https://i.ibb.co/wrfhr1m/IMG-7687.png",
  "https://i.ibb.co/0rNJjfr/IMG-7689.png",
  "https://i.ibb.co/fXZqDvj/IMG-7690.png",
  "https://i.ibb.co/jHNQVQL/IMG-7691.png",
  "https://i.ibb.co/3dYxTMz/IMG-7692.png",
  "https://i.ibb.co/3dYxTMz/IMG-7692.png",
  "https://i.ibb.co/zSt7QXp/IMG-7841.jpg",
  "https://i.ibb.co/RvK9Hy4/IMG-7982.jpg",
  "https://i.ibb.co/0yxW2MG/IMG-8087.jpg",
];

export default function Testimonial() {
  const people = [
    {
      id: 1,
      name: "Aryan Singh",
      designation: "SDE@Google",
      image: "https://i.ibb.co/YRBGz7v/instructor.jpg",
      link: "https://www.instagram.com/singh.aryan.45/",
    },
    {
      id: 2,
      name: "Deepanshu Udhwani",
      designation: "Founder",
      image: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
      link: "https://www.instagram.com/itsudhwani/",
    },
  ];

  return (
    <main
      className={`font-jakarta bg-bg min-h-svh text-white p-[3.75rem_0_6.5rem] overflow-hidden`}
    >
      <div className="mx-auto w-full max-w-[90rem] max-phone:p-[0_0_3.5rem] p-[0_min(6rem,_6.66%)] flex flex-col gap-20">
        <div className="grid place-items-center gap-8">
          <div className="grid place-items-center gap-2">
            <Reveal>
              <span className="flex items-center gap-4 relative">
                <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
                <h2 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
                  Wall of Love
                </h2>
                <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
              </span>
            </Reveal>

            <Reveal>
              <span className="flex items-center gap-2 h-10 p-2 my-5">
                <p>DM us on Instagram </p>
                <AnimatedTooltip items={people} />
                {/* <span className="flex flex-col items-center gap-4 animate-show">
                  <Link
                    href={"https://www.instagram.com/singh.aryan.45/"}
                    className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-prime relative inline-block before:transition-all"
                  >
                    <span className="relative text-white">@singh.aryan.45</span>
                  </Link>
                  <Link
                    href={"https://www.instagram.com/itsudhwani/"}
                    className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-white relative inline-block before:transition-all w-fit"
                  >
                    <span className="relative text-prime">@itsudhwani</span>
                  </Link>
                </span> */}
              </span>
            </Reveal>
          </div>
          {/* <Reveal> */}
          <div className="flex flex-wrap gap-8 justify-center p-3">
            {reviews.map((e, i) => (
              <Reveal key={i}>
                <TestimonyImages imageUrl={e} />
              </Reveal>
            ))}
          </div>
          {/* </Reveal> */}
        </div>
      </div>
    </main>
  );
}
