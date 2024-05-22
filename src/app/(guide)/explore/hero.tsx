import { Input } from "@/components/ui/input";
import { projectsData } from "@/util/globals";
import { Search } from "lucide-react";

export default function Hero({
  filter,
}: {
  filter: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="w-full bg-bg bg-grid-small-white/[0.2] relative flex items-center px-4 pt-14 pb-10 lg:py-14 lg:px-8 shadow-2xl border-b-2">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)]"></div>

      <div className="flex flex-col gap-3 relative z-10 w-full max-w-7xl mx-auto">
        {/* <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p> */}

        <h1 className="font-bric text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-800 w-fit">
          Explore
        </h1>
          <p className="max-w-xl max-sm:text-sm sm:text-lg text-muted-foreground">
            Discover a world of practical learning with us.
          </p>
      </div>
    </div>
  );
}
