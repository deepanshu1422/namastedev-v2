'use client'

import Image from "next/image";
import Lottie from "lottie-react";
import loadingAnimation from "../../public/loading.json";

export default function Loading() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full min-h-dvh">
      <title>Loading...</title>
      {/* <Image
        src={"/fun-fact.jpg"}
        alt="30dc loading..."
        width={600}
        height={600}
      /> */}
      <Lottie animationData={loadingAnimation} loop={true} className="h-72 w-72" />
      <p className="w-xs text-center font-bold text-lg">
        Hold on, while it loads...
      </p>
    </div>
  );
}
