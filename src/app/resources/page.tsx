import Hero from "./hero";
import Course from "./course";
import Testimonials from "@/components/mentorship-comp/testimonials";
import type { Metadata } from "next";
import Store from "@/components/home-components/store";
import Faqs from "@/components/mentorship-comp/faq";

export const metadata: Metadata = {
  title: "Resources | 30dayscoding",
  description:
    "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
};

export default function Resources() {
  let faq = [
    {
      question: "What is the validity of the Course?",
      answer:
        "The validity of the Course typically depends on the specific nature of the Course itself. Most Courses come with a predetermined duration or validity period, which can range from a few weeks to several years, or certainly for lifetime. It's important for participants to carefully review the terms and conditions outlined by the provider to understand the duration for which the Course materials, access to resources, and any certifications or credentials awarded upon completion remain valid.",
    },
    {
      question: "What's the refund policy?",
      answer:
        "Our refund policy is designed to provide peace of mind to our participants. We offer a hassle-free refund process, ensuring complete satisfaction with your experience. If for any reason you're not satisfied with the Course, you can request a refund without encountering any problems. We value your trust and aim to make the refund process as straightforward as possible, prioritizing customer satisfaction above all else.",
    },

    {
      question: "How do I contact you?",
      answer:
        "Please email us at projectsnightlight@gmail.com. You all can directly DM us on our social media links provided below.",
    },

    {
      question: "Would there be any kind of certificate?",
      answer: "Yes, you will get a certificate after completion.",
    },
  ];
  return (
    <main className={`font-jakarta bg-bg min-h-svh`}>
      <Hero
        title="Free Resources by the 30 Days Coding"
        desc="Update every single day"
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
