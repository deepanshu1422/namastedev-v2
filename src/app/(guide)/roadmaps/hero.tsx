import { Input } from "@/components/ui/input";
import { guidesData } from "@/util/globals";
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
          Roadmaps
        </h1>
        <div className="flex xl:items-end max-xl:flex-col gap-5 justify-start xl:justify-between w-full">
          <p className="max-w-xl max-sm:text-sm sm:text-lg text-muted-foreground">
            Explore a multiple range of roadmaps especially designed by 30 days
            of coding team enhance your skills and enrich your skill set.
          </p>
          <div className="flex-1 w-full flex xl:justify-end">
            <div className="relative w-full md:w-2/3 max-w-lg">
              <Search className="absolute left-2.5 top-[30%] h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search roadmaps..."
                onChange={(txt) => {
                  filter(
                    guidesData.filter(
                      (e) =>
                        e.title
                          .toLocaleLowerCase()
                          .includes(txt.target.value.toLocaleLowerCase()) ||
                        e.description
                          .toLocaleLowerCase()
                          .includes(txt.target.value.toLocaleLowerCase())
                    )
                  );
                }}
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
