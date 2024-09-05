import Hero from "@/components/home-components/new-hero";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/home-components/course";
import Highlights from "@/components/new-cohort/highligths";
import Mentor from "@/components/new-cohort/mentor";
import Testimonials from "@/components/mentorship-comp/testimonials";
import type { Metadata } from "next";
import Store from "@/components/home-components/store";
import Faqs from "@/components/mentorship-comp/faq";
import Program from "@/components/program";
import Script from "next/script";
import Success from "@/components/mentorship-comp/success";


export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "30 Days Coding - Learn Live",
  description:
    "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "30 Days Coding - Learn Live",
    description:
      "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "30 Days Coding - Learn Live",
    description:
      "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  let faq = [
    {
      question: "What is the validity of the course?",
      answer:
        "Once you enroll, you will have lifetime access to the course materials, including any future updates.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes, you will receive a verified certificate upon successful completion of the course, which you can share on LinkedIn and include in your resume.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "We offer a [X]-day money-back guarantee. If you're not satisfied within this period, you can request a full refund, no questions asked.",
    },
    {
      question: "Is this course beginner-friendly?",
      answer:
        "Absolutely! Our course is designed with beginners in mind, starting with the basics and gradually advancing to more complex topics.",
    },
    {
      question: "Will I work on projects to add to my resume?",
      answer:
        "Yes, our course includes hands-on projects that you can include in your portfolio to demonstrate your skills to potential employers.",
    },
    {
      question: "How will this course help with job placement?",
      answer:
        "Our course is designed to enhance your job readiness by teaching you industry-relevant skills. Additionally, we provide guidance on how to prioritize the projects and skills on your resume to attract recruiters.",
    },
    {
      question: "Why is this course priced affordably?",
      answer:
        "We believe in making quality education accessible to everyone. Our courses are affordably priced without compromising on content or value, thanks to our efficient online delivery and streamlined operations.",
    },
  ];

  return (
    <main className={`font-jakarta bg-bg min-h-svh`}>
      <Script
        id="main-faq"
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
      <Hero
        title="Become an Advanced, Job-Ready Developer!"
        desc="Join 10,000+ successful students who have transformed their lives with us."
        heroImage="https://i.ibb.co/KXHGnmY/home.webp"
        subTitle="Pocket Friendly Courses with Certificates!"
        subDesc="Whether you're a beginner looking to dive into programming or an experienced developer seeking skill enhancement, our mentors' guidance and courses are well-designed for all levels of proficiency."
        ytId="enw3DVa1r5k"
      />
      <Companies />
      <Store />
      <Success />
      {/* <Course /> */}
      <Program />
      <Mentor />
      {/* <Highlights />
      <Testimonials /> */}
      <Faqs faq={faq} />
      {/* <Floating /> */}
    </main>
  );
}
