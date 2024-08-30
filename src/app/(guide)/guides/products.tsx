import { HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Products({
  state,
  data,
}: {
  state: string;
  data: {
    title: string;
    description: string;
    cover: string;
    slug: string;
  }[];
}) {
  return (
    <>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-[90rem] gap-10 tab:gap-6 mx-auto px-4 sm:px-10 max-tab:py-5 tab:pb-14">
        {state
          ? data
              .filter((e) =>
                e.title.toLowerCase().includes(state.toLowerCase())
              )
              .map(({ cover, description, title, slug }, i) => (
                <Link
                  key={i}
                  href={slug}
                  className="p-4 sm:p-8 rounded-xl bg-second/40 flex flex-col max-h-80 group transition-all duration-200 hover:bg-second/60 hover:shadow-xl shadow-black overflow-hidden"
                >
                  <div className="flex flex-col items-center text-center gap-1">
                    <span className="text-2xl font-bold">{title}</span>
                    <p className="text-xs text-white/80">{description}</p>
                  </div>
                  <div className="shadow-xl shadow-black p-1 rounded-xl bg-second/90 translate-y-6 sm:translate-y-14 sm:group-hover:translate-y-10 transition-all duration-200">
                    <Image
                      className="rounded-lg"
                      src={cover}
                      alt={`30DC ${title} Template`}
                      height={512}
                      width={512}
                    />
                  </div>
                </Link>
              ))
          : data.map(({ cover, description, title, slug }, i) => (
              <Link
                key={i}
                href={slug}
                className="p-4 sm:p-8 rounded-xl bg-second/40 flex flex-col max-h-80 group transition-all duration-200 hover:bg-second/60 hover:shadow-xl shadow-black overflow-hidden"
              >
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-2xl font-bold">{title}</span>
                  <p className="text-xs text-white/80">{description}</p>
                </div>
                <div className="shadow-xl shadow-black p-1 rounded-xl bg-second/90 translate-y-6 sm:translate-y-14 sm:group-hover:translate-y-10 transition-all duration-200">
                  <Image
                    className="rounded-lg"
                    src={cover}
                    alt={`30DC ${title} Template`}
                    height={512}
                    width={512}
                  />
                </div>
              </Link>
            ))}
      </section>
      {state &&
        !data.filter((e) =>
          e.title.toLowerCase().includes(state.toLowerCase())
        ).length && (
          <div className="mx-auto max-w-[90rem] w-full text-center py-10 pb-40">
            <span className="font-semibold rounded-full p-2 px-4 border-4 border-double w-fit mx-auto items-center border-prime shadow-2xl text-white/60 flex gap-1">
              {" "}
              <HelpCircle className="h-5 w-5" /> No Such Guide Found
            </span>
          </div>
        )}
    </>
  );
}
