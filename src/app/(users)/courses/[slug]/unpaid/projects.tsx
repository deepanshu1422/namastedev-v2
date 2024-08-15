import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects({ img }: { img: string }) {
  return (
    <section className="flex w-full bg-footer/60">
      <div className="mx-auto max-w-[75rem] tab:p-[1.5rem_5.5rem_3.75rem] max-tab:px-8 max-phone:px-4 flex flex-col tab:items-center gap-4 py-5 tab:py-10">
        <h3 className="text-3xl font-bold">What you&apos;ll build</h3>
        <p className="max-w-2xl tab:text-center text-sm text-white/70 tab:px-10 line-clamp-2 text-pretty">
          These projects mentioned below with clean code so that you can make you protfoilio look great.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2 pt-4">
            <Image src={img} alt="30DC project image" className="w-full aspect-video object-cover rounded-lg" height={600} width={900} />
            <h4 className="text-xl font-semibold mt-2">Project Title</h4>
            <p className="text-white/70 max-w-lg leading-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, a. Officiis aspernatur corrupti error quo architecto consequatur, obcaecati facilis, dicta reiciendis nam officia minima unde amet enim perspiciatis laborum distinctio.</p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <Image src={img} alt="30DC project image" className="w-full aspect-video object-cover rounded-lg" height={600} width={900} />
            <h4 className="text-xl font-semibold mt-2">Project Title</h4>
            <p className="text-white/70 max-w-lg leading-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, a. Officiis aspernatur corrupti error quo architecto consequatur, obcaecati facilis, dicta reiciendis nam officia minima unde amet enim perspiciatis laborum distinctio.</p>
          </div>
        </div>
        <Button size={"lg"} variant={'outline'} className="tab:mt-5 tab:max-w-xs w-full text-lg">Start Building</Button>
      </div>
    </section>
  );
}
