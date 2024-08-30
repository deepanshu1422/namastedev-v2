'use client'

import Image from "next/image";

export default function Error() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full min-h-[100dvh]">
      <title>Error</title>
      <Image
        src={"/fun-fact.jpg"}
        alt="30dc loading..."
        width={600}
        height={600}
      />
      <p className="w-xs text-center font-bold text-lg">Error: Occured</p>
    </div>
  );
}
