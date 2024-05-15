import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeIndianRupee,
  ChevronRight,
  IndianRupee,
  Key,
  MapIcon,
} from "lucide-react";
import AnimatedButton from "@/components/animated-button";

export default function Course() {
  let products = [
    {
      title: "Roadmap",
      resources: [
        {
          title: "Tech job Roadmap",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-roadmap ",
        },
        {
          title: "FAANG roadmap",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/faang-roadmap",
        },
        {
          title: "Profile building",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-profile",
        },
        {
          title: "Resume",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://resumebldr.vercel.app/app/personal-detail",
        },
        {
          title: "Cold emails",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-cold-emails",
        },
        {
          title: "DSA",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-dsa ",
        },
      ],
    },
    {
      title: "Project Ideas",
      resources: [
        {
          title: "Project Ideas",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-ideas",
        },
        {
          title: "Tutorial hell and Projects",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-projects ",
        },
        {
          title: "Full stack course and guide",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-full-stack  ",
        },
      ],
    },
    {
      title: "Tech Stacks",
      resources: [
        {
          title: "Mern",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-mern",
        },
        {
          title: "Firebase",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-firebase",
        },
        {
          title: "AI",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-ai",
        },
        {
          title: "Blockchain",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-blockchain",
        },
        {
          title: "Notion",
          imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          href: "https://bit.ly/30dc-notion",
        },
      ],
    },
  ];

  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto pt-8 pb-4 px-5">
      <span className="flex items-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Our Products
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>

      <span className="text-prime font-semibold uppercase">Our Community</span>

      <div className="relative overflow-hidden flex flex-col items-start p-[2rem_1.5rem_1.5rem] shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-8 rounded-xl bg-second h-fit max-lg:scale-90 max-w-[70rem] w-full">
        <section className="flex flex-col gap-2 relative">
          <span className="bg-gradient-to-t from-bg to-second/80 rounded-lg p-4 w-fit">
            <IndianRupee className="h-10 w-10 stroke-prime" />
          </span>
          <span className="text-lg md:text-2xl font-semibold">
            Join Our community
          </span>
          <p className="max-sm:text-sm max-w-3xl font-semibold line-clamp-3">
            Welcome to our vibrant community! Here, you will find exciting
            opportunities like Rs.50,000 cash prize challenges, the latest job
            updates, and valuable resources to help you land high-paying jobs.
          </p>
        </section>
        <span>
          <AnimatedButton link="https://nas.io/jobs-placements-help">
            <section className="flex gap-1 items-center">
              <BadgeIndianRupee className="h-5 w-5" />
              <span className="tracking-wide line-clamp-1">
                Win 50,000 Prize Now Free
              </span>
            </section>
          </AnimatedButton>
        </span>
        <div className="h-96 w-[600px] absolute max-md:-z-10 -right-1/4 top-10 -rotate-45 pointer-events-none opacity-20 rounded-lg bg-second">
          <Image
            className="object-cover select-none"
            fill
            alt={"30DC Community"}
            src={
              "https://d2dmyh35ffsxbl.cloudfront.net/assets/shared/devpost_social_icon_large-38941770f44d42b3c9fcef216bc93b6c82a7476add533a97640e3db5b6b66698.jpg"
            }
          />
        </div>
      </div>

      {/* Products */}

      {products.map(({ title, resources }, i) => (
        <>
          <span key={i} className="text-prime font-semibold uppercase">
            {title}
          </span>
          <div className="flex max-w-[65rem] w-full flex-col gap-6 justify-center max-lg:items-center px-3 mx-auto">
            {resources.map(({ title, imageSrc, href }, index) => (
              <Link
                key={index}
                href={href}
                className="flex w-full p-3 gap-2 bg-gray-100 shadow-[rgb(0,_0,_0)_8px_8px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_4px_4px_0px_0px]"
              >
                <div className="relative h-12 w-12 overflow-hidden">
                  <Image
                    fill
                    src={imageSrc}
                    alt={title}
                    className="object-cover border-2"
                  />
                </div>
                <span className="flex-1 text-background text-center font-semibold m-auto px-2">
                  {title}
                </span>
              </Link>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
