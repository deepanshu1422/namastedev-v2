import * as React from "react";

import Image from "next/image";
import Link from "next/link";

export type MoreMentors = {
  mentorsCollection: {
    items: {
      name: string;
      slug: string;
      image: {
        url: string;
      };
      workExperience: string[];
    }[];
  };
};

export default function MentorSlider({ mentorsCollection }: MoreMentors) {
  

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-lg font-bold">Explore Mentors</span>
      <div className="w-full grid phone:grid-cols-2 md:grid-cols-1 gap-2">
        {mentorsCollection.items.map(
          ({ image, name, slug, workExperience }, i) => (
            <Link
              href={`/mentors/${slug}`}
              key={i}
              className="bg-white p-1 flex gap-1 border border-border/40 rounded-lg hover:-translate-y-1 transition-all"
            >
              <div className="aspect-square relative w-28 rounded-md overflow-hidden shrink-0">
                <Image
                  src={image.url}
                  alt={`Mentor ${name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-2 gap-1">
                <div className="flex flex-col">
                  <span className="md:text-lg font-semibold">{name}</span>
                  <span className="text-xs md:text-sm text-black/70 font-semibold">
                    {workExperience[0]}
                  </span>
                </div>
                <button className="p-1 text-sm w-fit bg-prime/20 px-2 py-1 rounded-md text-prime self-end">Learn More</button>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
