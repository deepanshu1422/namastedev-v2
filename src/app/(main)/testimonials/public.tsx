import Image from "next/image";

function TestimonyImages({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <div className="max-w-[23.75rem] w-full p-1 bg-second rounded-lg lg:min-h-72 relative">
      <Image
        src={imageUrl}
        alt={alt}
        width={600}
        height={600}
        className="object-cover h-full w-full rounded-md shadow-md aspect-square"
      />
    </div>
  );
}

export default function Public() {
  const images = [
    { src: "https://i.ibb.co/vhX2GJ4/linkedin1.jpg", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/WcCx9hn/linkedin2.jpg",
      alt: "30dc mern stack course",
    },
    {
      src: "https://i.ibb.co/zXGgPxS/linkedin3.jpg",
      alt: "30dc next js course",
    },
    { src: "https://i.ibb.co/Bj0F1BS/linkedin4.jpg", alt: "30dc dsa course" },
    {
      src: "https://i.ibb.co/3dgLfHg/linkedin5.jpg",
      alt: "30dayscoding dsa course",
    },
    {
      src: "https://i.ibb.co/qxYYvSh/linkedin6.jpg",
      alt: "30dayscoding mern course",
    },
    {
      src: "https://i.ibb.co/3R61d67/linkedin7.jpg",
      alt: "30dayscoding next js course",
    },
    {
      src: "https://i.ibb.co/Rz2MzV2/linkedin8.jpg",
      alt: "30dayscoding courses review",
    },
    { src: "https://i.ibb.co/YWNZDpN/linkedin9.jpg", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/cc8L54K/linkedin10.jpg",
      alt: "30dc mern stack course",
    },
    {
      src: "https://i.ibb.co/C8Xtq0G/linkedin11.jpg",
      alt: "30dayscoding dsa course review",
    },
    {
      src: "https://i.ibb.co/6HnQy38/linkedin12.jpg",
      alt: "30dayscoding mern course review",
    },
    {
      src: "https://i.ibb.co/YymwwZ9/linkedin13.jpg",
      alt: "30dayscoding next js course review",
    },
    {
      src: "https://i.ibb.co/1btWRkn/linkedin14.jpg",
      alt: "30dayscoding next js course",
    },
    {
      src: "https://i.ibb.co/x3cMF2B/linkedin15.jpg",
      alt: "30dayscoding courses review",
    },
    { src: "https://i.ibb.co/pv99N4L/linkedin16.jpg", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/9pydRcw/linkedin17.jpg",
      alt: "30dc mern stack course",
    },
    {
      src: "https://i.ibb.co/XYp5Dbm/linkedin18.jpg",
      alt: "30dayscoding dsa course review",
    },
    {
      src: "https://i.ibb.co/9crgVhD/linkedin19.jpg",
      alt: "30dayscoding mern course review",
    },
  ];

  const newTestimonials = [
    { src: "https://i.ibb.co/k3jxFpP/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/Kj8xHfc/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/m8vF15J/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/7GxGnKJ/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/sRC3pCT/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/j5QK1TZ/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/pyxKFx8/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/zZvZbNQ/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/wyjXhXZ/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/ZMWt8t8/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/Btrd8WN/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/q0NnJDD/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/j32sf26/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/dcNjN4v/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/V293mvX/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/XVxhSHF/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/F3bsz7r/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/JRrXpjf/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/Pr25mhc/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/jy8Cf5J/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/64HDR6m/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/HnBG8gF/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/WkNqNH2/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/bvM9MCQ/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/ssxLrb2/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/rQJfyqd/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/87Rj4C6/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/ThMBTNS/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/8bV4Cgc/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/vZysV5V/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/Tk0znCb/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/Qc3r9WW/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/rsm0c9Y/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/86Xt91s/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/yWJWnqW/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/QYJXMy6/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/QYtWDtZ/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/nM5NYSr/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/X2Sw0n1/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/GPWV544/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/BPkJxz4/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/QPtbB6v/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/LSKPQH1/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/zFWz6ZM/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/7bvXTL6/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/djhNdKW/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/rySkHHp/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/m46NMz7/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/sqFF872/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/RN4x8rq/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/qFQh8Pn/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/HD3dL3s/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/HP1D11N/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/TmNTBq1/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/0fdHzy0/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/LR35zgt/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/xqzYBLC/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/PD4JvFq/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/h7xxQb3/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/rcwG4JS/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/4MBfjFn/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/0f0vKsq/image.png", alt: "Testimonial image" },
    { src: "https://i.ibb.co/2ytcKzV/image.png", alt: "Testimonial image" },
  ];
  return (
    <div className="grid grid-cols-1 gap-1 w-full max-w-[75rem] m-auto px-6 lg:px-10">
      <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
       Become part of the next generation of developers
      </h1>
      <div className="relative grid md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center md:p-3">
        {newTestimonials.map(({ src, alt }, i) => (
          <TestimonyImages key={i} imageUrl={src} alt={alt} />
        ))}
      </div>

      <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center">
        More people are building in public with us
      </h1>
      <div className="relative grid md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center md:p-3">
        {images.map(({ src, alt }, i) => (
          <TestimonyImages key={i} imageUrl={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}