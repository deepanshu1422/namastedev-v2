import Reveal from "@/components/framer/reveal";
import Image from "next/image";

function TestimonyImages({ imageUrl, alt }: { imageUrl: string, alt: string }) {
  return (
    <div className="max-w-[23.75rem] w-full p-2 bg-second rounded-lg lg:min-h-72 relative">
      <Image
        src={imageUrl}
        alt={alt}
        width={600}
        height={600}
        className="object-cover h-full w-full rounded-md shadow-md"
      />
    </div>
  );
}

export default function Watch() {
  const images = [
    { src: "https://i.ibb.co/9HBX8KR/p5.webp", alt: "30dc courses" },
    { src: "https://i.ibb.co/0XfP66P/p4.webp", alt: "30dc mern stack course" },
    { src: "https://i.ibb.co/mTLQfhJ/p3.webp", alt: "30dayscoding dsa course review" },
    { src: "https://i.ibb.co/CBW9cBx/p2.webp", alt: "30dayscoding mern course review" },
    { src: "https://i.ibb.co/C0HM0LF/p1.webp", alt: "30dayscoding next js course review" },
  ];
  return (
    <div className="grid place-items-center gap-8 max-md:px-10">
      <Reveal>
        <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
          Highlights
        </h1>
      </Reveal>
      <div className="relative flex flex-wrap gap-4 justify-center md:p-3">
        {images.map(({alt, src}, i) => (
          <Reveal key={i}>
            <TestimonyImages imageUrl={src} alt={alt} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
