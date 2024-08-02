import AnimatedButton from "@/components/animated-button";
import { community } from "@/util/globals";

export default async function Floating() {
  return (
    <div className="fixed bottom-0 z-20 bg-background/40 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="flex justify-between items-center gap-2 sm:p-[.875rem_4.25rem] p-[0.5rem_1rem] lg:max-w-[90rem] mx-auto">
        <section className="flex flex-col gap-1">
          <span className={`font-jakarta text-lg`}>
            <span className="text-xl">Daily Job Updates & Hackathons</span>
          </span>

          <div className="flex gap-2 text-sm font-semibold">
            <span className="text-muted-foreground ml-1 line-through">
              ₹{community.ogPrice}
            </span>
            <span
              className={`font-jakarta text-secondary-foreground rounded py-0`}
            >
              ₹{community.price}
            </span>
          </div>
        </section>
        <AnimatedButton link={community.link}>Join Now</AnimatedButton>
      </div>
    </div>
  );
}
