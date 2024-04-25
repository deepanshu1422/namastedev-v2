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
      title: "All guides (DSA, Full stack, Resume, Process, etc)",
      imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
      purchaseLink:
        "https://courses.30dayscoding.com/products/65a71fca864efe447acf1909",
      resources: [
        {
          title: "MERN",
          link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
        },
        {
          title: "Next JS",
          link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
        },
        {
          title: "DSA",
          link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
        },
      ],
    },
    {
      title: "DSA revision guide and slides",
      imageSrc: "https://i.ibb.co/NFcwRN4/dsa-free.webp",
      purchaseLink:
        "https://courses.30dayscoding.com/products/653b765e382eb45b17092ffe",
      resources: [
        {
          title: "50k Challenge",
          link: "https://nas.io/jobs-placements-help/klxx",
        },
        {
          title: "Mentorship",
          link: "/mentorship",
        },
        {
          title: "Guides",
          link: "https://30dayscoding.gumroad.com/",
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

      <div className="relative overflow-hidden flex flex-col items-start m-3 p-[2rem_1.5rem_2.5rem] shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-8 rounded-xl bg-second h-fit max-lg:scale-90 max-w-[70rem] w-full">
        <section className="flex flex-col gap-2 relative">
          <span className="bg-gradient-to-t from-bg to-second/80 rounded-lg p-4 w-fit">
            <IndianRupee className="h-10 w-10 stroke-prime" />
          </span>
          <span className="text-lg md:text-2xl font-semibold">
            Join Our community
          </span>
          <p className="max-sm:text-sm max-w-3xl">
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
        <div className="h-96 w-[600px] absolute max-md:-z-10 -right-1/4 top-10 -rotate-45 pointer-events-none opacity-40 rounded-lg bg-second">
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

      <span className="text-prime font-semibold uppercase">Our Resources</span>

      <div className="flex max-w-[65rem] w-full flex-col lg:gap-6 justify-center max-lg:items-center max-lg:gap-10 px-10 mx-auto">
        {/* Products */}

        {products.map(({ title, imageSrc, purchaseLink, resources }, i) => (
          <Link
            href={purchaseLink}
            key={i}
            className="flex w-full p-3 gap-2 bg-gray-100 shadow-[rgb(0,_0,_0)_8px_8px_0px_0px] border-2"
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

        {/* <Link
          href={"/course/dsa-live-placement-ready-course"}
          className="flex-1 max-lg:w-full lg:max-w-[450px] hover:opacity-90"
        >
          <Reveal>
            <div className="max-lg:m-auto flex items-center lg:p-[2rem_1.5rem_2.5rem] p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-t-xl bg-second h-fit">
              <span className="rounded-full shrink-0 p-4 w-fit">
                <Image src={"/data.webp"} width={35} height={35} alt="dsa" />
              </span>
              <span className="text-xl font-semibold line-clamp-2">
                DSA Live Classes
              </span>
            </div>
            <div className="max-lg:m-auto flex items-center justify-between p-2 px-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-b-xl bg-second h-fit text-xs">
              <span className="rounded-full p-2 bg-prime/50">
                12 weeks - Everything from A-Z
              </span>
              <span className="p-2 flex items-center">
                See More <ChevronRight className="h-3 w-3" />
              </span>
            </div>
          </Reveal>
        </Link> */}
      </div>

      {/* <Link
        className="text-sm"
        href={"https://courses.30dayscoding.com/s/store"}
      >
        <button
          className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
        >
          Check More Courses
        </button>
      </Link> */}
    </div>
  );
}
