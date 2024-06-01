import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import Link from "next/link";

function TestimonyImages({ imageUrl, alt }: { imageUrl: string, alt: string }) {
  return (
    <div className="max-w-[23.75rem] p-2 bg-second rounded-lg lg:min-h-72 h-full relative grid gap-4 max-phone:scale-90 transition-all">
      <Image
        src={imageUrl}
        alt={alt}
        width={600}
        height={600}
        className="object-cover h-80 w-80 rounded-md object-center"
      />
    </div>
  );
}

export default function Highlights() {
  const images = [
    { src: "https://i.ibb.co/wrfhr1m/IMG-7687.png", alt: "30dc courses review"},
    { src: "https://i.ibb.co/0rNJjfr/IMG-7689.png", alt: "30dc mern stack course review"},
    { src: "https://i.ibb.co/fXZqDvj/IMG-7690.png", alt: "30dayscoding dsa course review"},
    { src: "https://i.ibb.co/jHNQVQL/IMG-7691.png", alt: "30dayscoding mern course review"},
    { src: "https://i.ibb.co/3dYxTMz/IMG-7692.png", alt: "30dayscoding next js course review"},
  ];
  return (
    <div className="grid place-items-center gap-6 max-w-[80rem] m-auto py-8">
      <Reveal>
        <span className="flex items-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            100+ 5⭐️ Reviews
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>
      <div className="relative flex flex-wrap items-start justify-center phone:gap-8">
        {images.map(({src, alt}, i) => (
          <Reveal key={i}>
            <TestimonyImages imageUrl={src} alt={alt} />
          </Reveal>
        ))}
        <div className="absolute bottom-0 h-20 w-full bg-gradient-to-b z-10 from-transparent from-0% via-50% via-transparent to-50% blur-md to-bg/70 translate-y-6"></div>
      </div>

      <Reveal>
        <Link className="text-sm" href={"/wall-of-love"}>
          <button
            className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
          >
            Show More Highlights
          </button>
        </Link>
      </Reveal>
    </div>
  );
}
