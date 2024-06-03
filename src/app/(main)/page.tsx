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
import Floating from "./resources/floating";
import Script from "next/script";

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
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses cover the latest technologies and frameworks.",
      answer: "Course providers strive to keep their content up-to-date with the latest technologies and frameworks. However, it's advisable to check the course curriculum or reach out to the provider for specific information on the technologies covered."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses provide career guidance and job assistance.",
      answer: "Some course providers offer career guidance and job assistance services. Check the course details or reach out to the provider to inquire about the availability of such support."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses have a structured learning path or if they are self-paced.",
      answer: "Course formats can vary between structured learning paths and self-paced options. Review the course details or contact the provider to understand the learning approach for the specific course you are interested in."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses provide lifetime access or have a limited duration.",
      answer: "Course access durations can differ among providers. Check the course details or reach out to the specific course provider for information on the access period for the course you are interested in."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses have interactive quizzes and assessments to test my learning.",
      answer: "Many courses include quizzes, assessments, and coding challenges to evaluate and reinforce learning. Review the course details or contact the provider for specifics on the types of assessments included."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses provide a certificate of completion upon successful course completion.",
      answer: "Most course providers offer certificates of completion to students who successfully finish the course requirements. Check the course details or contact the provider for information on their certificate issuance process."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses have a community forum or support channels for students.",
      answer: "Many course providers have student communities, forums, or support channels to facilitate discussions and provide assistance. Check the course details or reach out to the provider for information on the available student support resources."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses have regular updates and new content additions.",
      answer: "Course providers often update their content regularly to keep it current. However, the frequency of updates can vary. Check the course details or contact the provider for information on their content update schedule."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
    {
      question: "I want to know if the courses have a mobile app for on-the-go learning.",
      answer: "Some course providers offer mobile apps for their courses, allowing students to learn on the go. Check the course details or contact the provider to inquire about the availability of a mobile app for the specific course you are interested in."
    },
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
    },
  ];

  return (
    <main className={`font-jakarta bg-bg min-h-svh`}>
      <Script id="main-faq" type="application/ld+json" dangerouslySetInnerHTML={{
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
        title="Job Ready Premium Coding Courses"
        desc="500+ Videos • 45+ Projects • 20+ Interview Guides • 25k+ Students • Beginner Friendly • Certificates included. Checkout the reviews."
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
      {/* <Floating /> */}
    </main>
  );
}
