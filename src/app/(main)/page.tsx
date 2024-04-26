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
        title="Premium MERN, Next JS, DSA, Blockchain, AI courses for less than your dinner!"
        desc="The most affordable premium courses. Projects, Guides, and Certificates included."
        heroImage="bg-[url('https://i.ibb.co/nn0YJDY/code-1.png')]"
        subTitle="Lifetime Validity Courses + Certificates"
        subDesc="Whether you're a beginner looking to dive into programming or an experienced developer seeking skill enhancement, our mentors' guidance and courses are well-designed for all levels of proficiency."
        ytId="1fPHHiluoDs"
      />
      <Course />
      <Store />
      <Mentor />
      <Companies />
      <Program />
      <Highlights />
      <Testimonials />
      <Faqs faq={faq} />
    </main>
  );
}
