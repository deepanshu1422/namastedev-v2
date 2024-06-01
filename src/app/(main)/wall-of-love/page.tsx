import { AnimatedTooltip } from "@/components/ace-ui/animated-tooltip";
import Reveal from "@/components/framer/reveal";
import type { Metadata } from "next";
import Image from "next/image";
import Floating from "../resources/floating";

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

function TestimonyImages({ imageUrl, alt }: { imageUrl: string, alt: string }) {
  return (
    <div className="max-w-[23.75rem] w-full p-2 bg-second rounded-lg lg:min-h-72 relative">
      <Image
        src={imageUrl}
        alt={alt}
        width={600}
        height={600}
        className="object-cover h-full w-full rounded-md overflow-hidden"
      />
    </div>
  );
}

const reviews = [
  { src: "https://i.ibb.co/9HBX8KR/p5.webp", alt: "30dc courses" },
  { src: "https://i.ibb.co/0XfP66P/p4.webp", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/mTLQfhJ/p3.webp", alt: "30dc next js course" },
  { src: "https://i.ibb.co/CBW9cBx/p2.webp", alt: "30dc dsa course" },
  { src: "https://i.ibb.co/C0HM0LF/p1.webp", alt: "30dayscoding dsa course" },
  { src: "https://i.ibb.co/xs9dX78/29.webp", alt: "30dayscoding mern course" },
  { src: "https://i.ibb.co/J3y2DmR/30.webp", alt: "30dayscoding next js course" },
  { src: "https://i.ibb.co/tXr3gFc/26.webp", alt: "30dayscoding courses review" },
  { src: "https://i.ibb.co/9T5rdqd/27.webp", alt: "30dc courses" },
  { src: "https://i.ibb.co/CKjQnht/28.webp", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/S3Fx1ks/22.webp", alt: "30dayscoding dsa course review" },
  { src: "https://i.ibb.co/QNMbJxd/23.webp", alt: "30dayscoding mern course review" },
  { src: "https://i.ibb.co/4p613GD/24.webp", alt: "30dayscoding next js course review" },
  { src: "https://i.ibb.co/9V7sCT1/25.webp", alt: "30dc courses" },
  { src: "https://i.ibb.co/QfnJGXv/19.webp", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/fFQHmH4/20.webp", alt: "30dc next js course" },
  { src: "https://i.ibb.co/WcjL5x1/21.webp", alt: "30dc dsa course" },
  { src: "https://i.ibb.co/8KN7nys/16.webp", alt: "30dayscoding dsa course" },
  { src: "https://i.ibb.co/0J72X2f/17.webp", alt: "30dayscoding mern course" },
  { src: "https://i.ibb.co/6mWDV5q/18.webp", alt: "30dayscoding next js course" },
  { src: "https://i.ibb.co/kgspnvT/13.webp", alt: "30dayscoding courses review" },
  { src: "https://i.ibb.co/F0CFTNv/14.webp", alt: "30dc courses" },
  { src: "https://i.ibb.co/dJpwnzL/15.webp", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/N6Gc2zR/11.webp", alt: "30dayscoding dsa course review" },
  { src: "https://i.ibb.co/QfnJGXv/19.webp", alt: "30dayscoding mern course review" },
  { src: "https://i.ibb.co/HVRtBmJ/8.webp", alt: "30dayscoding next js course review" },
  { src: "https://i.ibb.co/LCKcpXg/9.webp", alt: "30dc courses" },
  { src: "https://i.ibb.co/jk62VCP/10.webp", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/pfxzkc8/6.webp", alt: "30dc next js course" },
  { src: "https://i.ibb.co/k9zHVb5/7.webp", alt: "30dc dsa course" },
  { src: "https://i.ibb.co/3djxbxX/3.webp", alt: "30dayscoding dsa course" },
  { src: "https://i.ibb.co/5L0vGfJ/4.webp", alt: "30dayscoding mern course" },
  { src: "https://i.ibb.co/5cKvNJC/5.webp", alt: "30dayscoding next js course" },
  { src: "https://i.ibb.co/0XXfv9s/1.webp", alt: "30dayscoding courses review" },
  { src: "https://i.ibb.co/fQYRMVJ/2.webp", alt: "30dc courses" },
  { src: "https://i.ibb.co/Mg2k5Jt/reviw-12.jpg", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/jJPQqZw/reviw-13.jpg", alt: "30dayscoding dsa course review" },
  { src: "https://i.ibb.co/tJFqs8j/reviw-11.jpg", alt: "30dayscoding mern course review" },
  { src: "https://i.ibb.co/WGxCKgD/reviw-10.jpg", alt: "30dayscoding next js course review" },
  { src: "https://i.ibb.co/88QpJnP/reviw-9.jpg", alt: "30dc courses" },
  { src: "https://i.ibb.co/TmJbQ31/reviw-8.jpg", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/WPznNKw/reviw-7.jpg", alt: "30dc next js course" },
  { src: "https://i.ibb.co/t4ZqRkd/reviw-6.jpg", alt: "30dc dsa course" },
  { src: "https://i.ibb.co/mbHc9wN/reviw-5.jpg", alt: "30dayscoding dsa course" },
  { src: "https://i.ibb.co/K9XR6n8/reviw-4.jpg", alt: "30dayscoding mern course" },
  { src: "https://i.ibb.co/1nMFSqh/reviw-3.jpg", alt: "30dayscoding next js course" },
  { src: "https://i.ibb.co/V35SvJM/reviw-2.jpg", alt: "30dayscoding courses review" },
  { src: "https://i.ibb.co/4FBYK6x/reviw-1.jpg", alt: "30dc courses" },
  { src: "https://i.ibb.co/7JJ7qgH/IMG-0012.jpg", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/X3txcLJ/IMG-0013.jpg", alt: "30dayscoding dsa course review" },
  { src: "https://i.ibb.co/rsds6g5/IMG-0014.jpg", alt: "30dayscoding mern course review" },
  { src: "https://i.ibb.co/3W4tMWy/IMG-0015.jpg", alt: "30dayscoding next js course review" },
  { src: "https://i.ibb.co/vPnLQ5z/IMG-0559.jpg", alt: "30dc courses" },
  { src: "https://i.ibb.co/RBQGz97/IMG-0560.jpg", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/68RZ8zR/IMG-0570.jpg", alt: "30dc next js course" },
  { src: "https://i.ibb.co/8rLwbcp/IMG-4948.jpg", alt: "30dc dsa course" },
  { src: "https://i.ibb.co/njrL67D/IMG-5333.jpg", alt: "30dayscoding dsa course" },
  { src: "https://i.ibb.co/mTXxFjj/IMG-6393.jpg", alt: "30dayscoding mern course" },
  { src: "https://i.ibb.co/zhfhZ0G/IMG-6394.jpg", alt: "30dayscoding next js course" },
  { src: "https://i.ibb.co/Zc419mR/IMG-6570.jpg", alt: "30dayscoding courses review" },
  { src: "https://i.ibb.co/8bGdxZM/IMG-0022.jpg", alt: "30dc courses" },
  { src: "https://i.ibb.co/8MXtjL5/IMG-0064.jpg", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/QmV84Hg/IMG-0134.jpg", alt: "30dayscoding dsa course review" },
  { src: "https://i.ibb.co/8PwTW9S/IMG-7686.jpg", alt: "30dayscoding mern course review" },
  { src: "https://i.ibb.co/wrfhr1m/IMG-7687.png", alt: "30dayscoding next js course review" },
  { src: "https://i.ibb.co/0rNJjfr/IMG-7689.png", alt: "30dayscoding mern course" },
  { src: "https://i.ibb.co/fXZqDvj/IMG-7690.png", alt: "30dayscoding next js course" },
  { src: "https://i.ibb.co/jHNQVQL/IMG-7691.png", alt: "30dayscoding courses review" },
  { src: "https://i.ibb.co/3dYxTMz/IMG-7692.png", alt: "30dc courses" },
  { src: "https://i.ibb.co/3dYxTMz/IMG-7692.png", alt: "30dc mern stack course" },
  { src: "https://i.ibb.co/zSt7QXp/IMG-7841.jpg", alt: "30dayscoding dsa course review" },
  { src: "https://i.ibb.co/RvK9Hy4/IMG-7982.jpg", alt: "30dayscoding mern course review" },
  { src: "https://i.ibb.co/0yxW2MG/IMG-8087.jpg", alt: "30dayscoding next js course review" },
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
              </span>
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-4 justify-center p-3">
            {reviews.map(({ alt, src }, i) => (
              <Reveal key={i}>
                <TestimonyImages imageUrl={src} alt={alt} />
              </Reveal>
            ))}
          </div>
          {/* </Reveal> */}
        </div>
      </div>
      <Floating />
    </main>
  );
}
