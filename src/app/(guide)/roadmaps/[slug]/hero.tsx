export default function Hero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full bg-bg bg-grid-small-white/[0.2] relative flex items-center px-4 pt-14 pb-10 lg:py-10 lg:px-8 shadow-2xl border-b-2">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)]"></div>

      <div className="flex flex-col relative z-10 w-full max-w-7xl mx-auto">
        <h1 className="font-bric text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-800 w-fit">
          {title}
        </h1>
        <div className="flex xl:items-end max-xl:flex-col gap-5 justify-start xl:justify-between w-full">
          <p className="max-w-xl max-sm:text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
