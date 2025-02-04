import { ArrowRight, GraduationCap, School, Star, Users, Target, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <div className="w-full relative overflow-hidden bg-gradient-to-b from-background to-background/50 min-h-[90vh]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        {/* Hero Image */}
        <Image
          src={heroImage ?? ""}
          alt="30dc homepage"
          fill
          className="opacity-20 object-cover"
          priority
        />

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Main Heading */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Project-Based Learning Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight">
              Become a Highly Paid{" "}
              <span className="block mt-2">Software Developer</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master in-demand skills through hands-on projects and real-world applications. Get structured roadmaps and interview preparation to land high-paying tech roles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/bundle/complete-package-all-course-bundle" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold transition-all">
                Explore Projects
                <Target className="h-4 w-4" />
              </Link>
            </div>

            {/* YouTube Video Section */}
            <div className="w-full max-w-4xl mx-auto mt-8 rounded-xl overflow-hidden bg-secondary/5 border border-primary/10">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={`https://www.youtube.com/embed/hOcTPtZYTto`}
                  title="Introduction Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto w-full">
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/10 backdrop-blur">
              <Users className="h-6 w-6 text-primary mb-2" />
              <span className="text-2xl font-bold">25,000+</span>
              <span className="text-sm text-muted-foreground">Active Learners</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/10 backdrop-blur">
              <Star className="h-6 w-6 text-yellow-500 mb-2" />
              <span className="text-2xl font-bold">4.9/5</span>
              <span className="text-sm text-muted-foreground">Student Rating</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/10 backdrop-blur">
              <School className="h-6 w-6 text-primary mb-2" />
              <span className="text-2xl font-bold">15+</span>
              <span className="text-sm text-muted-foreground">Pro Courses</span>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {[
              "Industry-Ready Projects",
              "Interview Preparation",
              "Lifetime Access",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm bg-secondary/5 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className='m-auto flex flex-col px-10 lg:px-20 pt-10 max-w-[75rem] lg:pt-20'>
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
          <span className='px-1 md:px-4 flex flex-wrap justify-center max-sm:pt-1 gap-2'>
            <div className='flex gap-2 items-center'>
              <Star className='h-5 w-5 fill-prime stroke-prime' />
              <Star className='h-5 w-5 fill-prime stroke-prime' />
              <Star className='h-5 w-5 fill-prime stroke-prime' />
              <Star className='h-5 w-5 fill-prime stroke-prime' />
              <Star className='h-5 w-5 fill-prime stroke-prime' />
            </div>
            <div className="flex gap-1">4.93
              <Link href={"/testimonials"} className='text-prime font-bold underline-offset-2 underline'>(200+ reviews)</Link>
            </div>
          </span>
        </section>

        <Btn cover="/welcome.jpg" yt="05xRJjzcYcQ" />
      </div>

      <Video title={subTitle} desc={subDesc} youtubeId={ytId} /> */}
    </>
  );
}
