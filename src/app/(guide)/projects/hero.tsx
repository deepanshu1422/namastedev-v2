import { Input } from "@/components/ui/input";
import { projectsData } from "@/util/globals";
import { Search } from "lucide-react";
import { Project } from "./page";

export default function Hero({
  data,
  filter,
}: {
  data: Project[]
  filter: React.Dispatch<React.SetStateAction<Project[]>>;
}) {
  return (
    <div className="w-full relative bg-bg bg-grid-small-white/[0.2] border-b border-border/40">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-6 lg:px-8 lg:py-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-bric text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <span className="">
              Projects
            </span>
          </h1>

          <div className="flex flex-col xl:flex-row gap-8 xl:items-center xl:justify-between">
            <p className="max-w-xl text-base md:text-lg xl:text-xl text-muted-foreground leading-relaxed">
              Discover a world of practical learning with our projects page!
              Explore a diverse range of projects designed by the 30 days of coding team to
              enhance your skills and enrich your portfolio.
            </p>

            <div className="w-full xl:w-1/3 min-w-[320px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  onChange={(txt) => {
                    filter(
                      data.filter(
                        (e) =>
                          e.title
                            .toLocaleLowerCase()
                            .includes(txt.target.value.toLocaleLowerCase()) ||
                            e.category
                            .toLocaleLowerCase()
                            .includes(txt.target.value.toLocaleLowerCase()) ||
                          e.techStack
                            .join()
                            .toLocaleLowerCase()
                            .includes(txt.target.value.toLocaleLowerCase())
                      )
                    );
                  }}
                  className="w-full pl-10 py-6 text-base bg-background/80 backdrop-blur-sm border-muted-foreground/20 shadow-lg hover:border-muted-foreground/30 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
