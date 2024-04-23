import { GridBackground } from "../ace-ui/grid-bg";

export default function Hero() {
  return (
    // <section className="mx-auto text-center px-2 py-10 lg:p-20">
    <GridBackground>
      <h1 className="font-bric text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-800 max-md:max-w-lg">
        One Stop For Applying and Tracking Jobs
      </h1>
      <p className="max-w-xl  lg:max-w-2xl mx-auto max-sm:text-sm sm:text-lg text-muted-foreground">
        Welcome to Real Work From
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-tr before:from-prime before:to-second relative inline-block mx-1.5">
          <span className="relative text-white">Anywhere</span>.
        </span>
        The only fully location independent job board. We hand pick every job on
        this site. Live and work anywhere.
      </p>
    </GridBackground>
    // </section>
  );
}
