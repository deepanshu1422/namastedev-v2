import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Course() {
  let products = [
    {
      title: "All guides (DSA, Full stack, Resume, Process, etc)",
      imageSrc: "https://i.ibb.co/dWZMSKJ/dsa.webp",
      purchaseLink:
        "https://courses.30dayscoding.com/products/65a71fca864efe447acf1909",
    },
    {
      title: "DSA revision guide and slides",
      imageSrc: "https://i.ibb.co/NFcwRN4/dsa-free.webp",
      purchaseLink:
        "https://courses.30dayscoding.com/products/653b765e382eb45b17092ffe",
    },
  ];

  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto pt-8 pb-4">
      <span className="flex items-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Our Products
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>

      <span className="text-prime font-semibold uppercase">Our Resources</span>

      <div className="flex w-full max-lg:flex-col lg:gap-6 justify-center max-lg:items-center max-lg:gap-10 max-lg:max-w-[550px] px-10">
        {/* Products */}

        {products.map(({ title, imageSrc, purchaseLink }, i) => (
          <div key={i} className="flex-1 max-lg:w-full lg:max-w-[450px]">
            <div className="overflow-hidden max-lg:m-auto flex items-center h-48 pt-2 px-2 gap-4 rounded-t-xl bg-second">
              <span className="relative h-full w-full bg-black rounded-lg">
                <Image
                  src={imageSrc}
                  className="object-cover rounded-lg"
                  fill
                  alt={title}
                />
              </span>
            </div>
            <div className="max-lg:m-auto flex items-center justify-between p-2 gap-4 rounded-b-xl bg-second h-fit text-xs">
              <span className="rounded-lg p-2 bg-head/70 line-clamp-1">
                {title}
              </span>
              <div className="group relative shrink-0 lg:hover:scale-105 transition-all">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
                <Link
                  href={purchaseLink}
                  className="relative hover: p-2 pl-4 flex items-center bg-background rounded-lg"
                >
                  Buy Now <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
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
