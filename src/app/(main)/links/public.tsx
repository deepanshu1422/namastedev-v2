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

export default function Public() {
  const images = [
    { src: "https://i.ibb.co/vhX2GJ4/linkedin1.jpg", alt: "30dc courses" },
    { src: "https://i.ibb.co/WcCx9hn/linkedin2.jpg", alt: "30dc mern stack course" },
    { src: "https://i.ibb.co/zXGgPxS/linkedin3.jpg", alt: "30dc next js course" },
    { src: "https://i.ibb.co/Bj0F1BS/linkedin4.jpg", alt: "30dc dsa course" },
    { src: "https://i.ibb.co/3dgLfHg/linkedin5.jpg", alt: "30dayscoding dsa course" },
    { src: "https://i.ibb.co/qxYYvSh/linkedin6.jpg", alt: "30dayscoding mern course" },
    { src: "https://i.ibb.co/3R61d67/linkedin7.jpg", alt: "30dayscoding next js course" },
    { src: "https://i.ibb.co/Rz2MzV2/linkedin8.jpg", alt: "30dayscoding courses review" },
    { src: "https://i.ibb.co/YWNZDpN/linkedin9.jpg", alt: "30dc courses" },
    { src: "https://i.ibb.co/cc8L54K/linkedin10.jpg", alt: "30dc mern stack course" },
    { src: "https://i.ibb.co/C8Xtq0G/linkedin11.jpg", alt: "30dayscoding dsa course review" },
    { src: "https://i.ibb.co/6HnQy38/linkedin12.jpg", alt: "30dayscoding mern course review" },
    { src: "https://i.ibb.co/YymwwZ9/linkedin13.jpg", alt: "30dayscoding next js course review" },
    { src: "https://i.ibb.co/1btWRkn/linkedin14.jpg", alt: "30dayscoding next js course" },
    { src: "https://i.ibb.co/x3cMF2B/linkedin15.jpg", alt: "30dayscoding courses review" },
    { src: "https://i.ibb.co/pv99N4L/linkedin16.jpg", alt: "30dc courses" },
    { src: "https://i.ibb.co/9pydRcw/linkedin17.jpg", alt: "30dc mern stack course" },
    { src: "https://i.ibb.co/XYp5Dbm/linkedin18.jpg", alt: "30dayscoding dsa course review" },
    { src: "https://i.ibb.co/9crgVhD/linkedin19.jpg", alt: "30dayscoding mern course review" },
  ];
  return (
    <div className="grid place-items-center gap-8 max-md:px-10">
      <Reveal>
        <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
          More people are building in public with us
        </h1>
      </Reveal>
      <div className="relative flex flex-wrap gap-4 justify-center md:p-3">
        {images.map(({src, alt}, i) => (
          <Reveal key={i}>
            <TestimonyImages imageUrl={src} alt={alt} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
