import type { Metadata } from "next";
import Video from "@/components/new-cohort/video";
import Faqs from "@/components/mentorship-comp/faq";
import JoinUs from "./joinus";
import Features from "./features";
import MentorshipGallary from "./mentorship-gallery";
import Script from "next/script";
import Lifetime from "./lifetime";
import Success from "@/components/mentorship-comp/success";
import Floating from "./floating";
import Mentor from "@/components/new-cohort/mentor";
import Interakt from "@/util/interakt";
import Mentors from "./mentors";
import Link from "next/link";
import { CreditCard } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Join 1:1 Mentorship | 30dayscoding",
  description:
    "Resolve all your queries related to the industry and latest jobs with the help of our mentors with live interactions and mentorship sessions.",
  openGraph: {
    images: "https://i.ibb.co/p2jp1S1/30dc2.webp",
    title: "Join 1:1 Mentorship | 30dayscoding",
    description:
      "Resolve all your queries related to the industry and latest jobs with the help of our mentors with live interactions and mentorship sessions.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/p2jp1S1/30dc2.webp",
    title: "Join 1:1 Mentorship | 30dayscoding",
    description:
      "Resolve all your queries related to the industry and latest jobs with the help of our mentors with live interactions and mentorship sessions.",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  let faq = [
    {
      question: "What is the refund policy ?",
      answer:
        "At 30DC, we strive to ensure that our users have a positive and rewarding experience with our courses.If, for any reason, you are not satisfied with your purchase, we offer a hassle - free refund policy.You can request a refund within 30 days of your purchase.To initiate a refund, please contact our support team at projectsnightlight @gmail.com with your order details.Once your request is processed, you will receive a confirmation email, and the refund will be credited to your original method of payment within 5 - 7 business days.",
    },

    {
      question: "Do I get access to all courses ?",
      answer:
        "Yes, absolutely! When you purchase the mentorship, you gain access to all the courses available in our library.This means you can explore a wide range of topics and learn at your own pace.Our comprehensive course catalog is designed to cover various aspects of web development, data structures, AI, and much more.You can revisit any course as often as you like, ensuring that you have all the resources you need to achieve your learning goals.",
    },

    {
      question: "How long is the mentorship ?",
      answer:
        "Our mentorship program is designed to provide you with lifetime support.Once you enroll in our courses, you will have access to mentors who are industry experts and experienced professionals.They will guide you throughout your learning journey, offering valuable insights, feedback, and personalized advice.Whether you have questions about course material, need career guidance, or seek project - specific advice, our mentors are here to help you succeed, long after you have completed your courses.",
    },

    {
      question: "Any more questions?",
      answer:
        "If you have any additional questions or need further assistance, we are here to help! Please feel free to reach out to us at support@nightlightprojects.freshdesk.com. Our dedicated support team is always ready to provide you with the information and support you need. Whether you have inquiries about course content, technical issues, or any other concerns, don’t hesitate to contact us. We aim to respond to all queries promptly and ensure that your experience with Projects Nightlight is as smooth and enjoyable as possible.",
    },
  ];

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Script
        id="mentorship-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [${faq.map(({ answer, question }) =>
            JSON.stringify({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: `<p>${answer}</p>`,
              },
            })
          )}]
        }`,
        }}
      />
      {/* <NewHero /> */}
      {/* <Hero
        title="Lifetime 1:1 Mentorship + 10 Course Access"
        desc="Learn from Aryan, Deepanshu, and the 30DC team to get placed this season."
        heroImage="/main/hero_section_mentor.png"
        /> */}
      <Lifetime />
      <Mentors />
      <Success />
      <Video
        title={"Trusted by 1000s of Students"}
        desc={
          "We will help you till you find the best job opportunity across the globe. hear it from our students and decide for yourselves."
        }
        youtubeId={"2cZ_7LuxEQI"}
      />
      <MentorshipGallary />
      {/* <JoinUs /> */}
      <Features />
      <Faqs faq={faq} />
      {/* <Interakt /> */}
      <Floating />
      {/* <Highlights /> */}
      {/* <Testimonials /> */}
      {/* <Video
        title={"Best Practices for Developers by Our Mentors"}
        desc={
          "Explore the latest technologies wit the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"KMufzzSF6SE"}
      /> */}
      {/* <Video
        title={"1:1 Live Session with our Mentors"}
        desc={
          "Explore the latest technologies with the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"gIx8D2pyXVI"}
      /> */}
    </main>
  );
}
