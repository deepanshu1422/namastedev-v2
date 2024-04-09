"use client";
import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Mid({
  desc,
  blogImage,
}: {
  desc: string;
  blogImage: string;
}) {
  return (
    <div className={`w-full py-4 grid relative overflow-hidden mx-auto`}>
      {/* Cover Image */}
      <div className="grid gap-2 mx-auto max-w-lg md:max-w-3xl w-full">
        <Reveal>
          <div className="relative max-w-lg md:max-w-5xl w-full h-full bg-slate-500">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                src={blogImage}
                loader={() => blogImage}
                alt="Photo by Drew Beamer"
                fill
                className="phone:rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
        </Reveal>
        <Reveal>
          <section className="flex gap-4 justify-between m-auto md:py-2 px-8">
            <p className="text-muted-foreground md:text-sm max-md:text-xs">
              {desc}
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
