import Image from "next/image";
import YoutubeEmbed from "./youtube-embed";
import Link from "next/link";
import Button from "@/components/home-components/button";
import AnimatedButton from "@/components/animated-button";

type VideoTestimony = {
  name?: string;
  designation?: string;
  videoId?: string;
  imageUrl?: string;
  linkedinUrl: string;
};

export function VideoTestimony({
  name,
  designation,
  videoId,
  imageUrl,
  linkedinUrl,
}: VideoTestimony) {
  return (
    <div className=" w-full p-6 bg-second rounded-lg min-h-72 relative grid gap-4">
      <YoutubeEmbed embedId={videoId!} />
      <section className="flex justify-between">
        <div className="flex gap-3">
          <Image
            src={imageUrl!}
            alt="instrutor"
            width={60}
            height={60}
            className="rounded-full object-cover h-12 w-12"
          />
          <div className="flex flex-col gap-1">
            <span className="text-cyan-400 text-sm font-semibold font-jakarta">
              {name}
            </span>
            <span className="text-sm text-white/80 leading-4">
              {designation}
            </span>
          </div>
        </div>

        <Link href={linkedinUrl} className="rounded-md p-1.5 bg-prime/30 h-fit">
          <svg
            className="h-4 w-4 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </Link>
      </section>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="grid place-items-center gap-5">
      {/* <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold text-center max-phone:px-10">
        What do our learners have to say?
      </h1> */}

      <div className="w-full relative">
        <div className="m-auto flex max-lg:flex-col items-start max-lg:items-center justify-between px-10 pt-5 gap-10 max-w-fit">
          <div className="lg:w-1/2 grid gap-5 shrink-0">
            <h1 className="font-jakarta max-phone:text-[2rem] text-[2.5rem] font-extrabold">
              What do our learners have to say?
            </h1>
            <p className="text-lg max-tab:text-[1.05rem]">
              Whether you&apos;re a beginner or an intermediate professional
              seeking to upskill, transition, or broaden your horizons in the
              field, our program is designed to help you succeed.
            </p>
            <div className="flex flex-wrap py-3 gap-3 max-lg:hidden">
              <Button>
                <Link
                  className="flex items-center gap-2 px-12"
                  href={"https://courses.30dayscoding.com/s/store"}
                >
                  Buy Courses
                </Link>
              </Button>
              <Button>
                <Link
                  className="flex items-center gap-2 px-12"
                  href={"https://30dayscoding.gumroad.com/"}
                >
                  Buy Guides
                </Link>
              </Button>
              <span className="max-w-96">
                <AnimatedButton
                  link={
                    "https://docs.google.com/forms/d/1XUinNoUE-sCZCpAinqxijgSwpuMACiSIHEgit-R49Fo/edit"
                  }
                >
                  <span className="flex gap-2 px-10 items-center">
                    Send Feedback
                  </span>
                </AnimatedButton>
              </span>
            </div>
          </div>

          <div className="">
            {/* {title.map((e, i) => (
            <Reveal key={i}>
              <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-head/40 to-transparent rounded-lg shadow-inner">
                <LucideCheckCircle className="w-4 h-4 translate-y-2 stroke-prime shrink-0" />
                <p className="text-lg" key={i}>
                  {e}
                </p>
              </div>
            </Reveal>
          ))} */}

            <VideoTestimony
              name="Deepanshu Udhwani"
              designation="Founder 30dayscoding | Ex. MakeMytrip | Ex. Alibaba Cloud"
              linkedinUrl="https://www.linkedin.com/in/deepanshu-udhwani/"
              imageUrl="/instructor2.jfif"
              videoId="gIx8D2pyXVI"
            />
          </div>

          <div className="flex flex-col items-center gap-5 lg:hidden">
            <Button>
              <Link
                className="flex items-center gap-2 px-12"
                href={"https://courses.30dayscoding.com/s/store"}
              >
                Buy Courses
              </Link>
            </Button>
            <Button>
              <Link
                className="flex items-center gap-2 px-12"
                href={"https://30dayscoding.gumroad.com/"}
              >
                Buy Guides
              </Link>
            </Button>
            <AnimatedButton link="https://docs.google.com/forms/d/1XUinNoUE-sCZCpAinqxijgSwpuMACiSIHEgit-R49Fo/edit">
              <span className="flex gap-2 px-10 items-center">
                Send Feedback
              </span>
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* <div className="flex gap-8 justify-center p-3"> */}
      {/* <VideoTestimony
            name="Aryan Singh"
            designation="@Google SWE"
            linkedinUrl="https://www.linkedin.com/in/singh1aryan/"
            imageUrl="/instructor.jpg"
            videoId="FVHtu6tuA9E"
          />
          <VideoTestimony
            name="Aryan Singh"
            designation="@Google SWE"
            linkedinUrl="https://www.linkedin.com/in/singh1aryan/"
            imageUrl="/instructor.jpg"
            videoId="39MArMcq5Oc"
          /> */}
      {/* </div> */}
    </div>
  );
}
