import type { Metadata } from "next";
import Hero from "./hero";
import Reveal from "@/components/framer/reveal";
import { ReactNode } from "react";
import Mid from "./Mid";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Blog | 30dayscoding",
  description:
    "Explore insightful and engaging blog posts covering a range of topics to empower your career journey. From professional development tips to industry insights, find the inspiration and guidance you need to unlock your full potential.",
  openGraph: {
    images: "/cohort.jpg",
  },
};

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="max-w-lg md:max-w-3xl m-auto md:text-lg lg:text-xl py-4 px-8 lg:px-5">
        {children}
      </p>
    </Reveal>
  );
}

function Heading2({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="max-w-lg md:max-w-3xl m-auto text-2xl max-md:text-xl font-bold px-8 lg:px-5 pt-8 break-words">
        {children}
      </h2>
    </Reveal>
  );
}

export default function Home() {
  let faq = [
    {
      question:
        " I have an upcoming interview. Can I take this long-term mentorship package?",
      answer:
        "Yes, absolutely. This program is highly suitable for you if you have an interview coming up. As this mentorship is 1:1 and completely personalised, there are no restrictions on the timeline. Be it 15 days or 1 month, your mentor will plan the timeline and preparation based on your upcoming interview schedule and help you crack it in the best possible manner. If you want to enrol right away to prepare for an upcoming interview, you may select your mentor, make the payment and get started in an instant. For any doubts related to enrolment, please get in touch with us at mentee-support@preplaced.in. We’d be happy to help you.",
    },
    {
      question: "Who are 30dayscoding mentors?",
      answer:
        "Our mentors are top industry experts who are associated with global brands and companies across tiers. They are selected to work as mentors after a thorough screening process. We, at Preplaced, ensure that you always get the best-qualified mentors to guide you.",
    },
    {
      question: "What does mentorship till you get your dream job mean?",
      answer:
        "It means your mentor will handhold you till you achieve your goal of getting into your dream job. That is what makes your mentor happy. Your mentor will take complete responsibility to prepare you in every aspect. Not leaving your hand till you achieve your goal.",
    },
    {
      question: "For whom is the long-term 1:1 interview preparation suitable?",
      answer:
        "This long-term interview preparation mentorship is suitable for people who want to upgrade their careers and get into their dream job in a strategic manner. Whether you’re a fresher or someone with 10 years of experience, we have the suitable mentors and resources to pave the path for your interview success. Preplaced is India’s first platform that focuses on practising through personalised and customisable mentorship programs that aim at complete and all-rounded interview preparation.",
    },
    {
      question: " Do you provide any student discount?",
      answer:
        "We offer a 30% discount for students. Just shoot us an email at mentee-support@preplaced.in before purchasing! Make sure you use your student email or attach a valid student ID/proof.",
    },
    {
      question:
        " What are the advantages of interview preparation through mentorship",
      answer:
        "Your mentors can accurately pinpoint your skill gaps and correct them. They encourage and empower you to do better in your career. You can define your career goals clearly with their astute guidance. Moreover, you can build your network, learn the industry nitty-gritty, and also win referrals and recommendations from your mentors who will be truly rooting for your success",
    },
  ];
  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Discover Success with Our Blogs"
        desc="Explore insightful and engaging blog posts covering a range of topics to empower your career journey."
        heroImage="https://p0.pxfuel.com/preview/728/375/731/aerial-analog-background-blog.jpg"
      />
      <Heading2>Introduction</Heading2>
      <Paragraph>
        Apple’s newest store in Shanghai opened this Thursday, March 21, to
        excited customers ready to discover Apple’s full lineup of products and
        services. Located next to the landmark Jing’an Temple, Apple Jing’an
        will host a special six-week Today at Apple program that pays homage to
        the local community and its creatives.
      </Paragraph>
      <Paragraph>
        The series, Let Diverse Creativity Bloom in Jing’an, showcases
        Shanghai’s next generation of creators and how they use the
        groundbreaking capabilities of iPhone.
      </Paragraph>
      <Mid
        blogImage="https://www.apple.com/newsroom/images/2024/03/apple-jingan-opens-to-thousands-of-customers-in-shanghai/article/Apple-Jingan-China-opening-day-plaza-overhead_big.jpg.small_2x.jpg"
        desc="Located near Jing’an Temple and Jing’an Park in Shanghai, the store offers the community a gathering place for special events, as well as providing a one-of-a-kind shopping destination."
      />
    </main>
  );
}
