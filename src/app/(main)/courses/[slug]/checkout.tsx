import { Button } from "@/components/ui/button";
import { TicketPercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Checkout({ image, amount, currency }: { image: string; amount: number; currency: string }) {
    return (
        <div className="max-tab:hidden w-full h-fit sticky -translate-y-72 top-[26rem]">
            <Link href={"#"} target="_blank" className="max-w-sm bg-gradient-to-b from-head to-second/20 rounded-2xl flex flex-col gap-4 relative max-tab:mx-auto ml-auto shadow-lg backdrop-blur-sm shadow-black/40 overflow-hidden">
                <Image alt="30DayCoding New Challenge"
                    src={image}
                    height={800}
                    width={1200}
                    className="bg-prime/20" />
                <div className="flex flex-col gap-4 px-4 py-5">
                    <span className="uppercase text-white text-3xl sm:text-4xl font-bold flex gap-2 items-center">{currency} {amount}<span className="text-muted-foreground/70 italic text-2xl sm:text-3xl line-through">{amount * 4}</span></span>
                    <Button size={"lg"} className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >Buy Now</Button>
                    <span className="flex gap-2 max-sm:text-sm items-center"><TicketPercent className="sm:w-6 sm:h-6 h-5 w-5" />Get Access to all Resources Now.</span>
                </div>
            </Link>
        </div>
    )
}