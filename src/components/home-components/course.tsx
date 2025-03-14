import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Course() {
  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto pt-8 pb-4">
      <span className="flex items-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Services at Glance
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>

      <span className="text-prime font-semibold uppercase">
        Our Offerings
      </span>

      <div className="flex w-full max-lg:flex-col gap-6 justify-center max-lg:items-center max-lg:max-w-[550px] px-10">
        <Link
          href={"/community"}
          className="flex-1 max-lg:w-full lg:max-w-[450px] hover:opacity-90"
        >
          <div className="max-lg:m-auto flex items-center lg:p-[2rem_1.5rem_2.5rem] p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-t-xl bg-second h-fit">
            <span className="rounded-full shrink-0 p-4 w-fit">
              {/* <MapIcon className="h-10 w-10 stroke-prime" /> */}
              <Image
                src={"/fullstack.png"}
                width={35}
                height={35}
                alt="fullstack"
              />
            </span>
            <span className="text-xl font-semibold line-clamp-2">
              Mentorship
            </span>
          </div>
          <div className="max-lg:m-auto flex items-center justify-between p-2 px-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-b-xl bg-second h-fit text-xs">
            <span className="rounded-full p-2 bg-prime/50">
              <p className="line-clamp-1">
                1:1 sessions & Doubt solving by Deepanshu and Aryan
              </p>
            </span>
            <span className="p-2 flex items-center shrink-0">
              See More <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </Link>

        <Link
          href={"/products"}
          className="flex-1 max-lg:w-full lg:max-w-[450px] hover:opacity-90"
        >
          <div className="max-lg:m-auto flex items-center lg:p-[2rem_1.5rem_2.5rem] p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-t-xl bg-second h-fit">
            <span className="rounded-full shrink-0 p-4 w-fit">
              <Image src={"/data.webp"} width={35} height={35} alt="dsa" />
            </span>
            <span className="text-xl font-semibold line-clamp-2">
              Products - Template & Projects
            </span>
          </div>
          <div className="max-lg:m-auto flex items-center justify-between p-2 px-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-4 rounded-b-xl bg-second h-fit text-xs">
            <span className="rounded-full p-2 bg-prime/50">
              Everything from A-Z
            </span>
            <span className="p-2 flex items-center">
              See More <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </Link>
      </div>

      {/* <Link
        className="text-sm"
        href={"/courses"}
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
