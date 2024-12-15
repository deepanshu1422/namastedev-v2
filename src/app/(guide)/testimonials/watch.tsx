import Image from "next/image";

function TestimonyImages({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <div className="p-1 bg-second rounded-lg relative max-w-[350px]">
      <Image
        src={imageUrl}
        alt={alt}
        width={600}
        height={600}
        className="object-cover rounded-md shadow-md aspect-square"
      />
    </div>
  );
}

export default function Watch() {
  const images = [
    // New images
    {
      src: "https://i.ibb.co/F3nFkMs/image.png",
      alt: "New testimonial image 1",
    },
    {
      src: "https://i.ibb.co/W6Fbr8n/image.png",
      alt: "New testimonial image 2",
    },
    {
      src: "https://i.ibb.co/xHjcb88/image.png",
      alt: "New testimonial image 3",
    },
    {
      src: "https://i.ibb.co/5WSN7F4/image.png",
      alt: "New testimonial image 4",
    },
    { src: "https://i.ibb.co/9HBX8KR/p5.webp", alt: "30dc courses" },
    { src: "https://i.ibb.co/0XfP66P/p4.webp", alt: "30dc mern stack course" },
    {
      src: "https://i.ibb.co/mTLQfhJ/p3.webp",
      alt: "30dayscoding dsa course review",
    },
    {
      src: "https://i.ibb.co/CBW9cBx/p2.webp",
      alt: "30dayscoding mern course review",
    },
    {
      src: "https://i.ibb.co/C0HM0LF/p1.webp",
      alt: "30dayscoding next js course review",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-1 w-full max-w-[75rem] m-auto px-6 lg:px-10">
      <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
        1000+ Job offers every month
      </h1>
      <div className="relative grid md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center md:p-3">
        {images.map(({ alt, src }, i) => (
          <TestimonyImages key={i} imageUrl={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}
