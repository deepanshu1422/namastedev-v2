import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-dvh">
      <Image
        src={"/sooryavansham.gif"}
        alt="30dc loading..."
        width={200}
        height={200}
      />
      <p className="w-xs text-center">Kahan jaraha hai saale yahi ruk</p>
    </div>
  );
}
