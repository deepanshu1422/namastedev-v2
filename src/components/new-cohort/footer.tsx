import Reveal from "@/components/framer/reveal";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Reveal>
      <div className="bg-footer w-full">
        <div
          className={`flex max-lg:flex-col items-start p-[4rem_min(6.25rem,_7%)] max-w-[90rem] mx-auto gap-4`}
        >
          <section className="flex-1 flex flex-col gap-3">
            <Reveal>
              <Link href={"/"} className="flex gap-1 items-center">
                <Image src={"/logo.png"} alt="name" width={40} height={40} />
                <span className="text-xl">30DC</span>
              </Link>
            </Reveal>

            <Reveal>
              <span className="max-w-lg">
                Transforming the way individuals learn and network for
                professional excellence!
              </span>
            </Reveal>

            <Reveal>
              <section className="flex gap-4">
                <Link href={"https://www.linkedin.com/company/30dc/"}>
                  <svg
                    className="h-6 w-6 fill-white stroke-white transition-all lg:hover:fill-prime"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </Link>

                <Link href={"https://www.instagram.com/30dayscoding/"}>
                  <svg
                    className="h-6 w-6 fill-white stroke-white transition-all lg:hover:fill-prime"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>

                <Link
                  href={
                    "https://www.youtube.com/channel/UCdu8HnchmMbDqbbC4GdPrjw"
                  }
                >
                  <svg
                    className="h-6 w-6 fill-white stroke-white transition-all lg:hover:fill-prime"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </Link>

                <Link href={"https://twitter.com/30dayscoding"}>
                  <svg
                    className="h-6 w-6 fill-white stroke-white transition-all lg:hover:fill-prime"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>
              </section>
            </Reveal>
          </section>

          <section className="flex max-md:flex-col flex-[2] lg:justify-around font-semibold lg:p-5 py-5 w-full max-lg:gap-8">
            <Reveal>
              <div className="flex text-sm gap-4 flex-col max-w-64">
                <span className="text-muted-foreground uppercase">
                  Our Info
                </span>
                <Link
                  className="lg:hover:text-prime transition-all"
                  href={"/refundpolicy"}
                >
                  Refund Policy
                </Link>
                <Link
                  className="lg:hover:text-prime transition-all"
                  href={"/privacy-policy"}
                >
                  Privacy Policy
                </Link>
                <Link
                  className="lg:hover:text-prime transition-all"
                  href={"/terms-conditions"}
                >
                  Term & Conditions
                </Link>
                <Link
                  className="lg:hover:text-prime transition-all"
                  href={"/support"}
                >
                  Support
                </Link>
                {/* <Link
                  className="lg:hover:text-prime transition-all"
                  href={"/aboutus"}
                >
                  About Us
                </Link> */}
              </div>
            </Reveal>
          </section>
        </div>
        <Reveal>
          <div className="p-4 flex gap-1 text-xs font-semibold items-center justify-center bg-zinc-950">
            <span>© 2023</span>
            <span>30DayCoding</span>
            <span>Inc.</span>
          </div>
        </Reveal>
      </div>
      <div className="lg:hidden h-20 bg-zinc-950" />
    </Reveal>
  );
}
