import Btn from "@/app/(main)/mentorship/btn";
import Button from "@/components/home-components/button";
import { ArrowRight, GraduationCap, School, Star } from "lucide-react";
import Link from "next/link";

function Video({
  title,
  desc,
  youtubeId,
}: {
  title: string;
  desc: string;
  youtubeId: string;
}) {
  return (
    <div className="m-auto flex max-lg:flex-col items-start justify-between pb-5 px-10 lg:pb-10 pt-10 lg:pt-20 lg:px-20 gap-10 max-w-[75rem]">
      <div className="lg:w-2/4 grid gap-5 shrink">
        <span className="text-prime font-semibold uppercase"></span>
        <span className="text-4xl font-bold">{title}</span>
        <p className="text-lg max-tab:text-[1.05rem]">{desc}</p>
      </div>
      <div className="lg:w-2/4 w-full shrink-0 flex-1">
        <div
          className={`relative overflow-hidden max-md:min-h-60 max-lg:min-h-80 lg:min-h-64 bg-background/20 rounded-md shadow-inner transition-all duration-500`}
        >
          <iframe
            className="h-full w-full left-0 top-0 absolute"
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
}


export default function Hero({
  title,
  desc,
  subTitle,
  subDesc,
  ytId,
  heroImage,
}: {
  title?: string;
  desc?: string;
  subTitle: string;
  subDesc: string;
  ytId: string;
  heroImage?: string;
}) {
  return (
    <>
      <div className={`w-full grid ${heroImage} min-h-96 bg-cover`}>
        <div className="tab:p-[6.5rem_2.5rem_6.75rem] max-tab:pt-[5rem] max-tab:pb-[4.5rem] m-auto max-w-4xl grid gap-5 place-items-center max-phone:place-items-start phone:text-center text-white">
          <h1
            className={`font-jakarta phone:text-[3.7rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight px-2 max-phone:px-6 max-w-3xl`}
          >
            {title}
          </h1>

          <p className="tab:max-w-2xl max-tab:px-11 max-phone:px-6 text-xl max-tab:text-[1.05rem] max-tab:leading-6 tracking-wider">
            {desc}
          </p>

          <ul className="grid gap-2 tab:grid-cols-2 list-inside list-disc max-tab:px-11 max-phone:px-6 lg:text-lg">
            <li className="list-item">1,500+ Engaging Video Lessons</li>
            <li className="list-item">250+ Real Interview Questions</li>
            <li className="list-item">25+ Comprehensive Guides</li>
            <li className="list-item">Lifetime Access & Certifications</li>
          </ul>

          <div className="p-[.5rem_1.00rem_.5rem_1.00rem] rounded-[3.125rem] flex max-lg:flex-col max-lg:w-full lg:flex-wrap items-center justify-center max-w-xl gap-5 my-2 mb-1">
            <Link
              href={"https://courses.30dayscoding.com/s/store"}
              className={`font-jakarta flex items-center justify-between font-semibold gap-3 hover:bg-prime/80 bg-prime/35 border-2 border-prime/60 transition-all px-4 py-3 rounded-full max-lg:w-full`}
            >
              <span className="text-sm">All Courses</span>
              <School className="max-lg:hidden w-4 h-4" />
              <ArrowRight className="lg:hidden w-4 h-4" />
            </Link>
            <Link
              href={"/mentorship"}
              className={`font-jakarta flex items-center justify-between font-semibold gap-3 hover:bg-prime/80 bg-prime/35 border-2 border-prime/60 transition-all px-4 py-3 rounded-full max-lg:w-full`}
            >
              <span className="text-sm">1:1 Mentorship</span>
              <GraduationCap className="max-lg:hidden w-4 h-4" />
              <ArrowRight className="lg:hidden w-4 h-4" />
            </Link>
            <Link
              href={"https://30dayscoding.com/testimonials"}
              className={`font-jakarta flex items-center justify-between font-semibold gap-3 hover:bg-prime/80 bg-prime/35 border-2 border-prime/60 transition-all px-4 py-3 rounded-full max-lg:w-full`}
            >
              <span className="text-sm">Testimonials</span>
              <Star className="max-lg:hidden w-4 h-4" />
              <ArrowRight className="lg:hidden w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className='m-auto flex flex-col px-10 lg:px-20 pt-10 max-w-[75rem] lg:pt-20'>
        <span className="flex items-center justify-center relative pb-4">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h1 className="font-jakarta bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-[2rem] sm:text-6xl font-extrabold text-center">
            Welcome to 30DaysCoding!
          </h1>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
        <section className='flex mx-auto flex-wrap w-full items-center justify-center md:divide-x-2 divide-white py-2'>
          <span className='px-1 md:px-4'>25,000+ Members</span>
          <span className='md:hidden text-prime font-bold'>&</span>
          <span className='px-1 md:px-4'>213 joined this month</span>
          <span className='px-1 md:px-4 flex gap-2'>
            <div className='flex gap-2 items-center'>
              <Star className='h-5 w-5 fill-prime stroke-prime' />
              <Star className='h-5 w-5 fill-prime stroke-prime' />
              <Star className='h-5 w-5 fill-prime stroke-prime' />
              <Star className='h-5 w-5 fill-prime stroke-prime' />
              <Star className='h-5 w-5 fill-prime stroke-prime' />
            </div>4.93 <Link href={"/testimonials"} className='text-prime font-bold underline-offset-2 underline'>(200+ reviews)</Link></span>
        </section>

        <Btn cover="/welcome.jpg" yt="nTAHWER3K-0" />
      </div>

      <Video title={subTitle} desc={subDesc} youtubeId={ytId} />
    </>
  );
}







