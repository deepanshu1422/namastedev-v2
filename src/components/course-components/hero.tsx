import Reveal from "@/components/framer/reveal";
import YoutubeEmbed from "@/components/yotube-embed";
import { Check, CheckCircle, Star, TimerReset, Users } from "lucide-react";
import AnimatedButton from "../animated-button";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  title: string;
  youtube: string;
  courseLink: string;
};

function CheckTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex gap-2 items-center">
      <CheckCircle className="h-5 w-5" />
      <p className="font-semibold">{children}</p>
    </span>
  );
}

export default function Hero({ title, courseLink, youtube }: Props) {
  return (
    <div className="flex max-md:flex-col items-center gap-7 md:gap-12 lg:gap-20 text-white pt-5 max-w-[80rem] mx-auto">
      {/* <div className="flex flex-col items-start justify-start text-start gap-2 flex-1">
        <div className="mb-6">
          <span className="bg-gray-700 text-sm px-3 py-1 rounded-full">
            For professionals
          </span>
          <h1 className="text-5xl font-bold mt-4">
            Full Stack Web Development Job Bootcamp
          </h1>
          <p className="text-lg mt-2">
            Choose MERN stack or Spring Boot and acquire expertise through
            practical application and real-world projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-4 mb-8">
          <span className="flex items-start bg-gray-700 px-3 py-1 rounded">
            <span className="mr-2">💼</span> Placement assistance
          </span>
          <span className="flex items-center bg-gray-700 px-3 py-1 rounded">
            <span className="mr-2">🤖</span> AI-infused curriculum
          </span>
          <span className="flex items-center bg-gray-700 px-3 py-1 rounded">
            <span className="mr-2">👨‍🏫</span> Faculty from MAANG
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h2 className="text-2xl font-bold">95%</h2>
            <p>placement rate</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">1200+</h2>
            <p>Companies Hiring</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">128%</h2>
            <p>Average hike</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">1.5 L+</h2>
            <p>Learners</p>
          </div>
        </div>

        <Link href={courseLink} target="_blank">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-8">
            Enroll Now
          </button>
        </Link>
      </div> */}

      <div className="flex flex-col sm:text-center md:text-left h-fit flex-1">
        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-3 sm:gap-4 mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-second/30 border border-prime/30">
            <Star className="h-4 w-4 text-[#FFD700] mr-2" />
            <span className="text-sm sm:text-base text-white">
              Top rated Data Analytics Program in India
            </span>
          </div>
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-second/30 border border-prime/30">
            <Users className="h-4 w-4 text-lime-400 mr-2" />
            <span className="text-sm sm:text-base text-white">
              5,000+ Success Stories
            </span>
          </div>
        </div>
        <h1 className="text-3xl phone:text-center md:text-left sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
          Learn <span className="text-prime">MERN Full Stack Development </span>
          Course in 8 Weeks
        </h1>
        <p className="text-lg phone:text-center md:text-left sm:text-xl text-gray-200 mb-6 sm:mb-8">
          Join 5,000+ Indian students who are earning ₹6-15 LPA with our
          industry-recognized program
        </p>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mb-8">
          <div className="flex items-center gap-3 bg-second/30 px-4 py-2 rounded-lg border border-prime/30">
            <Users className="h-5 w-5 text-prime" />
            <div>
              <div className="font-bold text-white">5,000+</div>
              <div className="text-sm text-gray-300">Students Placed</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-second/30 px-4 py-2 rounded-lg border border-prime/30">
            <Star className="h-5 w-5 text-[#FFD700]" />
            <div>
              <div className="font-bold text-white">4.9/5</div>
              <div className="text-sm text-gray-300">Student Rating</div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="flex flex-wrap justify-center md:justify-start gap-1">
          {[
            "Practical Projects",
            "Industry Case Studies",
            "Job-Ready Portfolio",
            "Placement Support",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-second/30 px-3 py-1.5 rounded-full border border-prime/20"
            >
              <Check className="h-4 w-4 text-lime-400" />
              <span className="text-xs text-gray-200">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex-1"> */}

      <div className="relative mt-8 md:mt-0 flex-1">
        <div className="bg-gradient-to-r from-prime/10 to-head/10 backdrop-blur rounded-xl p-6 border border-prime/20">
          <div className="absolute -top-4 right-4 px-4 py-1 bg-gradient-to-r from-prime to-head rounded-full text-sm font-bold text-white shadow-lg">
            90% Scholarship Ending Soon
          </div>

          <YoutubeEmbed embedId="MWwjXittkCs" />

          <button
            className="w-full mt-5 py-4 px-6 rounded-full bg-gradient-to-r from-prime/80 to-head/80 
                    hover:from-prime hover:to-head text-white font-bold text-lg transition-all duration-300
                    hover:shadow-lg hover:shadow-prime/25 hover:-translate-y-0.5 transform"
          >
            Secure Your Seat ₹1,499{" "}
            <span className="line-through opacity-75">₹14,899</span>
          </button>

          {/* Price Card Trust Indicators */}
          <div className="mt-4 space-y-2">
            {[
              "Industry-Led Curriculum",
              "Real-World Projects Portfolio",
              "Placement Assistance Program",
              "Interview Preparation Support",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#00E676] flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
