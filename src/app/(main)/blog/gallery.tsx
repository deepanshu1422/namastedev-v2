"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  description: string;
  createdAt: Date;
  heroImage: {
    url: string;
    alt: string;
  } | null;
};

export default function Gallery({ blogs }: { blogs: Props[] }) {
  return (
    <div className="m-auto flex flex-col items-center justify-between md:px-[5.5rem] max-md:px-11 max-sm:px-6 py-5 pb-10 gap-5 max-w-[75rem]">
      <div className="w-full flex justify-between gap-5 shrink">
        <span className="max-md:text-2xl max-lg:text-3xl text-4xl max-md:font-semibold font-bold border-l-[6px] max-md:border-l-4 pl-1.5 border-prime mb-5">
          More Blogs
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map(({ title, slug, description, createdAt, heroImage }, i) => {
          let date = new Date(createdAt ?? Date.now()).toLocaleDateString("en-US", {
            // weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <Link
              key={i}
              href={`/blog/${slug}`}
              className="flex flex-col gap-3 group w-full"
            >
              {/* <div className=""></div> */}
              <div className="w-full overflow-hidden bg-second/80 shrink-0 rounded-md">
                <AspectRatio ratio={16 / 11}>
                  <Image
                    loader={() =>
                      heroImage?.url ||
                      "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg"
                    }
                    src={
                      heroImage?.url ||
                      "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg"
                    }
                    alt={
                      heroImage?.alt ||
                      "Create an image featuring JavaScript code snippets and interview-related icons or graphics. Use a color scheme of yellows and blues. Include the title '7 Essential JavaScript Interview Questions for Freshers'."
                    }
                    fill
                    className="rounded-md object-cover transition-all lg:group-hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl line-clamp-2 max-w-lg max-md:w-full font-semibold">
                  {title}
                </span>
                <span className="py-2 text-prime font-semibold">{date}</span>
                <p className="max-w-md max-md:w-full line-clamp-2 pt-4 text-muted-foreground">
                  {description}
                </p>

                <button className="flex items-center gap-2 py-2 rounded mt-auto mb-2 uppercase text-prime max-md:border max-md:border-prime max-md:my-3 max-md:w-full max-md:justify-center">
                  Read More
                  <ChevronRight className="max-md:hidden w-5 h-5 stroke-prime" />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
