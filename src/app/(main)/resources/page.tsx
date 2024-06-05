import Hero from "./hero";
import Course from "./course";
import Testimonials from "@/components/mentorship-comp/testimonials";
import type { Metadata } from "next";
import Store from "@/components/home-components/store";
import Faqs from "@/components/mentorship-comp/faq";
import Script from "next/script";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Resources | 30dayscoding",
  description:
    "Latest resources for all the new technologies updating every day. Resources from our 30 Days Coding Community",
  openGraph: {
    images: "https://i.ibb.co/9wb8t8m/30dc4.webp",
    title: "Resources | 30dayscoding",
    description:
      "Latest resources for all the new technologies updating every day. Resources from our 30 Days Coding Community",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/9wb8t8m/30dc4.webp",
    title: "Resources | 30dayscoding",
    description:
      "Latest resources for all the new technologies updating every day. Resources from our 30 Days Coding Community",
    site: "https://30dayscoding.com",
  },
};

export default function Resources() {
  let faq = [
    {
      question: "How can I get a refund for the course I purchased?",
      answer: "To request a refund, fill out the refund request form and follow the steps provided by the course provider."
      },
      {
      question: "I'm facing issues downloading videos for offline viewing. What should I do?",
      answer: "If you encounter problems downloading videos, ensure you are logged in on only one device and clear your browser cache. If issues persist, contact customer support for assistance."
      },
      {
      question: "Can I change my password?",
      answer: "Yes, you can change your password by contacting the course provider's support team with your account details."
      },
      {
      question: "What is the password for the password-protected PDFs in the course?",
      answer: "If you have trouble accessing password-protected PDFs, reach out to the course provider's support team for the password or assistance."
      },
      {
      question: "How long is the validity of the MERN stack development course?",
      answer: "The validity period of the MERN stack development course can vary. Contact the course provider for specific details on the course duration and access."
      },
      {
      question: "Do you guarantee lifetime access to the courses?",
      answer: "The course provider offers lifetime access to their courses, but it's best to confirm the exact terms with their support team."
      },
      {
      question: "I'm facing issues with video playback in the React JS section of the MERN stack course. Can you help?",
      answer: "If you encounter video playback issues in specific course sections, report the problem to the course provider's support team for troubleshooting and resolution."
      },
      {
      question: "I want to enroll in the DSA course, but I only know JavaScript. Can I still take the course?",
      answer: "The DSA course may be taught in languages like C or C++. If you are only familiar with JavaScript, it's best to clarify with the course provider if the course is suitable for your skill level."
      },
      {
      question: "Can I get help with job placement after completing the courses?",
      answer: "Some course providers offer job assistance programs. Reach out to the specific course provider to inquire about their placement support services."
      },
      {
      question: "I purchased the MERN stack course, but I want to switch to the Next.js full stack course. Is it possible to change my course?",
      answer: "Contact the course provider's support team to request a course change from MERN stack to Next.js full stack. They can assist you with the process."
      },
      {
      question: "I bought the MERN stack course, but the videos are not playing properly. Can you help?",
      answer: "If you encounter issues with video playback in the MERN stack course, report the problem to the course provider's support team. They can investigate the issue and provide assistance."
      },
      {
      question: "I purchased the 10+ course bundle, but I'm unable to access it. Can you help me with that?",
      answer: "If you face difficulties accessing the 10+ course bundle after purchase, contact the course provider's support team with your account details. They can investigate and resolve the access issue."
      },
      {
      question: "I want to know if the Next.js full stack web development course is in Hindi or English.",
      answer: "The language of instruction for the Next.js full stack web development course can vary. It's best to confirm the course language with the course provider before enrolling."
      },
      {
      question: "I already purchased a course, but I want to buy the complete 10-course bundle. Can I get a discounted price?",
      answer: "If you have already purchased a course and want to upgrade to the 10-course bundle, contact the course provider's support team. They may be able to provide a discounted price based on your previous purchase."
      },
  ];

  return notFound()

  return (
    <main className={`font-jakarta bg-bg min-h-svh`}>
      <Script id="resource-faq" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [${faq.map(({ answer, question }) => JSON.stringify({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `<p>${answer}</p>`
          }
        }))}]
        }`
      }} />
      <Hero
        title="Free Resources by the 30DaysCoding team!"
        desc="Update every week with new resources"
        heroImage="bg-[url('https://i.ibb.co/85mmMDk/dsa-cover.png')]"
        subTitle="Explore Coding Resources and Join Our Community!"
        subDesc="Welcome to our coding resources page! Here, you'll find a wealth of resources to enhance your coding skills and expand your knowledge in various programming languages, frameworks, and tools."
        ytId="5qCq4_HdCiI"
      />
      <Course />
      <Store />
      <Testimonials />
      <Faqs faq={faq} />
    </main>
  );
}
