import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ClipboardList, GraduationCap, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="px-4 lg:px-8">
            <div className="flex max-lg:flex-col max-lg:gap-4 justify-between max-w-7xl mx-auto w-full bg-card/80 min-h-96 rounded-md pt-10 md:pt-16 pl-10 md:pl-16 relative overflow-hidden">
                <ClipboardList className="text-prime/70 h-40 w-40 absolute top-0 left-0 -z-20" />
                <section className="flex flex-col gap-4">
                    <h3 className="text-3xl lg:text-5xl font-bold max-w-lg">Try 30Days Mentorship Now.</h3>
                    <p className="max-w-lg lg:text-lg text-muted-foreground">Upskill yourself and 10x your development output. Get hundreds of high quality courses, projects, coding problems and x-ray insights.</p>
                    <Link className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 rounded-md w-fit" href={"/community"}>
                        <span className="text-sm">Job Support Mentorship</span>
                    </Link>
                </section>
                <div className="h-full w-full lg:w-[500px] mt-auto ml-auto">
                    <AspectRatio ratio={16 / 10} className="relative rounded-tl overflow-hidden">
                        <Image src={"/mentorship.jpg"} alt="30 days coding mentorship image" className="object-cover" fill />
                    </AspectRatio>
                </div>
            </div >
        </div>
    )
}