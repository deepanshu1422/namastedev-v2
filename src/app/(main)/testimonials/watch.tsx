import Reveal from "@/components/framer/reveal";
import Image from "next/image";

function TestimonyImages({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="max-w-[23.75rem] w-full p-6 bg-second rounded-lg lg:min-h-72 relative grid gap-4">
      <Image
        src={imageUrl}
        alt="instrutor"
        width={600}
        height={600}
        className="object-cover h-full w-full"
      />
    </div>
  );
}

export default function Watch() {
  const images = [
    "https://i.ibb.co/9HBX8KR/p5.webp",
    "https://i.ibb.co/0XfP66P/p4.webp",
    "https://i.ibb.co/mTLQfhJ/p3.webp",
    "https://i.ibb.co/CBW9cBx/p2.webp",
    "https://i.ibb.co/C0HM0LF/p1.webp",
  ];
  return (
    <div className="grid place-items-center gap-8 max-md:px-10">
      <Reveal>
        <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
          Highlights
        </h1>
      </Reveal>
      <div className="relative flex flex-wrap gap-8 justify-center md:p-3">
        {images.map((e, i) => (
          <Reveal key={i}>
            <TestimonyImages imageUrl={e} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
