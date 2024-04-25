import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-bg bg-dot-white/[0.3] relative flex items-center justify-center mx-auto md:text-center px-2 py-14 lg:pt-32 lg:pb-20 lg:px-5">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col gap-5 relative z-10">
        {children}
        {/* <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p> */}
      </div>
    </div>
  );
}
