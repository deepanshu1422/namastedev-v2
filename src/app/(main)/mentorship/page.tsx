import type { Metadata } from "next";
import Testimonials from "@/components/mentorship-comp/testimonials";
import Video from "@/components/new-cohort/video";
import Hero from "./hero";
import Profile from "./profile";
import Faqs from "@/components/mentorship-comp/faq";
import Mentorship from "./mentorship";
import JoinUs from "./joinus";

export const metadata: Metadata = {
  title: "Mentorship | 30dayscoding",
  description:
    "Resolve all your queries related to the industry and latest jobs with the help of our mentors with live interactions and mentorship sessions.",
  openGraph: {
    images: "https://i.ibb.co/p2jp1S1/30dc2.webp",
    title: "Mentorship | 30dayscoding",
    description:
      "Resolve all your queries related to the industry and latest jobs with the help of our mentors with live interactions and mentorship sessions.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/p2jp1S1/30dc2.webp",
    title: "Mentorship | 30dayscoding",
    description:
      "Resolve all your queries related to the industry and latest jobs with the help of our mentors with live interactions and mentorship sessions.",
    site: "https://30dayscoding.com",
  },
};

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
        title="30DC Mentorship Group: Get All Courses + 1:1 Help"
        desc="Learn from Aryan, Deepanshu, and the 30DC team to get placed this season."
        heroImage="/main/hero_section_mentor.png"
      />
      <Mentorship />
      <Video
        title={"1:1 Live Query Seesions"}
        desc={
          "Resolve all your queries related to the industry and latest jobs with the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"ylUk7kImBeE"}
      />
      <Profile />
      <Video
        title={"Best Practices for Developers by Our Mentors"}
        desc={
          "Explore the latest technologies wit the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"KMufzzSF6SE"}
      />
      <JoinUs />
      <Video
        title={"1:1 Live Session with our Mentors"}
        desc={
          "Explore the latest technologies with the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"gIx8D2pyXVI"}
      />
      <Testimonials />
      <Faqs faq={faq} />
      {/* <Highlights /> */}
      {/* <Testimonials /> */}
    </main>
  );
}
