import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Guides({ img }: { img: string }) {
  const gudies = [
    "dsa-revision-guide-2",
    "dsa-revision-guide",
    "interview-guides",
    "resume-cold-email-guides",
  ];

  return (
    <section className="flex w-full bg-footer/60 mb-6">
      <div className="mx-auto max-w-[75rem] tab:p-[1.5rem_5.5rem_3.75rem] px-6 flex flex-col tab:items-center gap-2 py-5 tab:py-10">
        <h3 className="text-xl tab:text-2xl font-bold">
          PREMIUM INTERVIEW GUIDES INCLUDED
        </h3>
        <p className="max-w-2xl tab:text-center text-sm text-white/70 tab:px-10 line-clamp-2 text-pretty">
          These projects mentioned below with clean code so that you can make
          you protfoilio look great.
        </p>
        <div className="grid md:grid-cols-4 gap-4 tab:gap-10">
          {gudies.map((e, i) => (
            <div key={i} className="flex flex-col gap-2 pt-4">
              <Image
                src={`/guides/${e}.jpg`}
                alt="30DC project image"
                className="w-full aspect-auto object-cover shadow-lg"
                height={600}
                width={900}
              />
            </div>
          ))}
        </div>
        {/* <Button
          size={"lg"}
          variant={"outline"}
          className="tab:mt-5 tab:max-w-xs w-full text-lg"
        >
          Start Building
        </Button> */}
      </div>
    </section>
  );
}
