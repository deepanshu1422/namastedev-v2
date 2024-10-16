import { Input } from "@/components/ui/input";
import { guidesData } from "@/util/globals";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full bg-bg bg-dot-white/[0.3] relative flex items-center px-4 pt-14 pb-10 lg:py-14 lg:px-8 shadow-2xl border-b-2">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col items-center gap-3 relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p> */}

        <h1 className="font-bric text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-800 max-w-2xl">
          Find tech jobs from around the world
        </h1>
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          {/* <p className="max-w-xl md:max-w-2xl max-sm:text-sm sm:text-lg text-muted-foreground">
            Explore a multiple range of jobs especially designed by 30 days of
            coding team enhance your skills and enrich your skill set.
          </p> */}
          {/* <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full md:w-2/3 max-w-lg">
              <Search className="absolute left-2.5 top-[30%] h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search guides..."
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
          </div> */}

          {/* New buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 border border-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-colors">
              Hire with us
            </button>
            <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors">
              Apply for remote jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
