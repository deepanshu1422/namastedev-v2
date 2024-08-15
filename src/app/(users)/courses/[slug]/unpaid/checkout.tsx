import { Button } from "@/components/ui/button";
import { Check, TicketPercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Checkout({
  checkout,
  image,
}: {
  checkout: string;
  image: string;
}) {
  return (
    <div className="max-tab:hidden w-[500px] h-fit sticky -translate-y-[400px] top-[30rem]">
      <Link
        href={checkout}
        target="_blank"
        className="max-w-sm bg-gradient-to-b from-head to-second/20 flex flex-col gap-4 relative max-tab:mx-auto ml-auto shadow-lg backdrop-blur-sm shadow-black/40 overflow-hidden p-0.5"
      >
        <Image
          alt="30DayCoding New Challenge"
          src={image}
          height={800}
          width={1200}
          className="bg-prime/20 shadow-lg shadow-black/30"
        />
        <div className="flex flex-col gap-4 px-4 py-5">
          <span className="uppercase text-white text-3xl sm:text-4xl font-bold flex gap-2 items-center">
            ₹1,900
            <span className="text-muted-foreground/70 italic text-2xl sm:text-3xl line-through">
              2,500
            </span>
          </span>
          <Button
            size={"lg"}
            className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg"
          >
            Buy Now
          </Button>
          <div className="flex flex-col gap-1">
            <p className="tab:max-w-2xl max-tab:leading-6 line-clamp-3 text-white/60 italic font-semibold">
              This course offers:
            </p>
            <span className="flex gap-2 text-white text-sm items-center">
              <Check className="sm:w-6 sm:h-6 h-5 w-5 stroke-lime-600" />
              Lifetime Access to resources.
            </span>
            <span className="flex gap-2 text-white text-sm items-center">
              <Check className="sm:w-6 sm:h-6 h-5 w-5 stroke-lime-600" />
              100% Money Back Gurantee
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
