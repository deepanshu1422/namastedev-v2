import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

export default function Hero({
  title,
  desc,
  heroImage,
}: {
  title: string;
  desc: string;
  heroImage: {
    url: string;
    description: string;
  };
}) {
  return (
    <div className={`w-full grid relative overflow-hidden`}>
      <div className="tab:p-[4.5rem_5.5rem_2.75rem] max-tab:pt-[4rem] max-tab:pb-[2rem] m-auto max-w-lg md:max-w-[75rem] grid gap-5 md:gap-7 place-items-center text-white text-center">
        <Reveal>
          <span className="text-sm text-muted-foreground font-bold uppercase text-prime">
            Photos &#183; 21 March 2023
          </span>
        </Reveal>
        <Reveal>
          <h1 className="text-5xl max-md:text-4xl font-bold max-w-3xl max-sm:px-8 px-5">
            {title}
          </h1>
        </Reveal>
        <Reveal>
          <p className="max-w-3xl px-8 font-medium max-md:text-sm max-md:w-11/12 m-auto md:text-lg">
            {desc}
          </p>
        </Reveal>
        <Reveal>
          <section className="md:py-2 flex gap-4">
            <Link
              target="_blank"
              href={
                "https://api.whatsapp.com/send?text=Exploring the coding kingdom - 30DC Blog https://30dayscoding.com/  "
              }
              title={"Share via Whatsapp"}
            >
              <svg
                className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </Link>

            <Link
              href={
                "mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.website.com."
              }
              title={"Share via Mail"}
            >
              <svg
                className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </Link>

            <Link
              href={"https://www.youtube.com/channel/UCdu8HnchmMbDqbbC4GdPrjw"}
              title={"Copy Link"}
            >
              <svg
                className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
              </svg>
            </Link>

            <Link
              href={"https://twitter.com/30dayscoding"}
              title={"Share via X"}
            >
              <svg
                className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </Link>
          </section>
        </Reveal>
      </div>
      {/* Cover Image */}
      <div className="grid gap-2">
        <Reveal>
          <div className="relative w-full max-md:max-w-lg max-w-3xl lg:max-w-6xl xl:max-w-[120rem] m-auto h-full bg-slate-500">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                src={heroImage.url}
                alt={heroImage.description}
                fill
                className="phone:rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
        </Reveal>
        <Reveal>
          <section className="flex gap-4 justify-between max-w-lg md:max-w-3xl m-auto md:py-2 px-6">
            <p className="text-muted-foreground md:text-sm max-md:text-xs">
              {heroImage.description}
            </p>
            {/* <div className="p-2 rounded-full bg-second h-fit">
              <Save className="h-4 w-4" />
            </div> */}
          </section>
        </Reveal>
      </div>
    </div>
  );
}
