import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { guidesData } from "@/util/globals";
import { Search, Trash } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full bg-bg bg-dot-white/[0.3] relative flex items-center px-4 pt-14 pb-5 lg:px-8">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col items-center gap-3 relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p> */}

        <h1 className="font-bric text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-800 max-w-2xl">
          Enhance Your Coding Skills with Challenges!
        </h1>
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          <p className="max-w-xl md:max-w-3xl max-sm:text-sm sm:text-lg text-muted-foreground">
            Explore our DSA code platform for mastering Data Structures and Algorithms. Access a wide range of DSA tutorials, practice problems, and coding challenges.
          </p>
          <div className="flex-1 w-full flex gap-2 justify-center">
            <div className="relative w-full md:w-2/3 max-w-lg">
              <Search className="absolute left-2.5 top-[30%] h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search problems..."
                // onChange={(txt) => {
                //   filter(
                //     guidesData.filter(
                //       (e) =>
                //         e.title
                //           .toLocaleLowerCase()
                //           .includes(txt.target.value.toLocaleLowerCase()) ||
                //         e.description
                //           .toLocaleLowerCase()
                //           .includes(txt.target.value.toLocaleLowerCase())
                //     )
                //   );
                // }}
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
            <Button variant={"destructive"} className="px-2" ><Trash className="h-4 w-4 mr-2" />Clear Progress</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
