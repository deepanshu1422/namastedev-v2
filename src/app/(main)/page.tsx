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
import Success from "@/components/mentorship-comp/success";

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
  let faq = [{
    question: "What is the refund policy ?",
    answer: "At 30DC, we strive to ensure that our users have a positive and rewarding experience with our courses.If, for any reason, you are not satisfied with your purchase, we offer a hassle - free refund policy.You can request a refund within 30 days of your purchase.To initiate a refund, please contact our support team at projectsnightlight @gmail.com with your order details.Once your request is processed, you will receive a confirmation email, and the refund will be credited to your original method of payment within 5 - 7 business days."
  },

  {
    question: "Do I get access to all courses ?",
    answer: "Yes, absolutely! When you purchase the mentorship, you gain access to all the courses available in our library.This means you can explore a wide range of topics and learn at your own pace.Our comprehensive course catalog is designed to cover various aspects of web development, data structures, AI, and much more.You can revisit any course as often as you like, ensuring that you have all the resources you need to achieve your learning goals."
  },

  {
    question: "How long is the mentorship ?",
    answer: "Our mentorship program is designed to provide you with lifetime support.Once you enroll in our courses, you will have access to mentors who are industry experts and experienced professionals.They will guide you throughout your learning journey, offering valuable insights, feedback, and personalized advice.Whether you have questions about course material, need career guidance, or seek project - specific advice, our mentors are here to help you succeed, long after you have completed your courses."
  },

  {
    question: "Any more questions?",
    answer: "If you have any additional questions or need further assistance, we are here to help! Please feel free to reach out to us at projectsnightlight@gmail.com. Our dedicated support team is always ready to provide you with the information and support you need. Whether you have inquiries about course content, technical issues, or any other concerns, don’t hesitate to contact us. We aim to respond to all queries promptly and ensure that your experience with Projects Nightlight is as smooth and enjoyable as possible."
  }]

  // [
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses cover the latest technologies and frameworks.",
  //     answer: "Course providers strive to keep their content up-to-date with the latest technologies and frameworks. However, it's advisable to check the course curriculum or reach out to the provider for specific information on the technologies covered."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses provide career guidance and job assistance.",
  //     answer: "Some course providers offer career guidance and job assistance services. Check the course details or reach out to the provider to inquire about the availability of such support."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses have a structured learning path or if they are self-paced.",
  //     answer: "Course formats can vary between structured learning paths and self-paced options. Review the course details or contact the provider to understand the learning approach for the specific course you are interested in."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses provide lifetime access or have a limited duration.",
  //     answer: "Course access durations can differ among providers. Check the course details or reach out to the specific course provider for information on the access period for the course you are interested in."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses have interactive quizzes and assessments to test my learning.",
  //     answer: "Many courses include quizzes, assessments, and coding challenges to evaluate and reinforce learning. Review the course details or contact the provider for specifics on the types of assessments included."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses provide a certificate of completion upon successful course completion.",
  //     answer: "Most course providers offer certificates of completion to students who successfully finish the course requirements. Check the course details or contact the provider for information on their certificate issuance process."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses have a community forum or support channels for students.",
  //     answer: "Many course providers have student communities, forums, or support channels to facilitate discussions and provide assistance. Check the course details or reach out to the provider for information on the available student support resources."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses have regular updates and new content additions.",
  //     answer: "Course providers often update their content regularly to keep it current. However, the frequency of updates can vary. Check the course details or contact the provider for information on their content update schedule."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "I want to know if the courses have a mobile app for on-the-go learning.",
  //     answer: "Some course providers offer mobile apps for their courses, allowing students to learn on the go. Check the course details or contact the provider to inquire about the availability of a mobile app for the specific course you are interested in."
  //   },
  //   {
  //     question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
  //     answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
  //   },
  //   {
  //     question: "How can I get a refund for the course I purchased?",
  //     answer: "To request a refund, fill out the refund request form and follow the steps provided by the course provider."
  //   },
  //   {
  //     question: "I'm facing issues downloading videos for offline viewing. What should I do?",
  //     answer: "If you encounter problems downloading videos, ensure you are logged in on only one device and clear your browser cache. If issues persist, contact customer support for assistance."
  //   },
  //   {
  //     question: "Can I change my password?",
  //     answer: "Yes, you can change your password by contacting the course provider's support team with your account details."
  //   },
  //   {
  //     question: "What is the password for the password-protected PDFs in the course?",
  //     answer: "If you have trouble accessing password-protected PDFs, reach out to the course provider's support team for the password or assistance."
  //   },
  //   {
  //     question: "How long is the validity of the MERN stack development course?",
  //     answer: "The validity period of the MERN stack development course can vary. Contact the course provider for specific details on the course duration and access."
  //   },
  //   {
  //     question: "Do you guarantee lifetime access to the courses?",
  //     answer: "The course provider offers lifetime access to their courses, but it's best to confirm the exact terms with their support team."
  //   },
  //   {
  //     question: "I'm facing issues with video playback in the React JS section of the MERN stack course. Can you help?",
  //     answer: "If you encounter video playback issues in specific course sections, report the problem to the course provider's support team for troubleshooting and resolution."
  //   },
  //   {
  //     question: "I want to enroll in the DSA course, but I only know JavaScript. Can I still take the course?",
  //     answer: "The DSA course may be taught in languages like C or C++. If you are only familiar with JavaScript, it's best to clarify with the course provider if the course is suitable for your skill level."
  //   },
  //   {
  //     question: "Can I get help with job placement after completing the courses?",
  //     answer: "Some course providers offer job assistance programs. Reach out to the specific course provider to inquire about their placement support services."
  //   },
  //   {
  //     question: "I purchased the MERN stack course, but I want to switch to the Next.js full stack course. Is it possible to change my course?",
  //     answer: "Contact the course provider's support team to request a course change from MERN stack to Next.js full stack. They can assist you with the process."
  //   },
  //   {
  //     question: "I bought the MERN stack course, but the videos are not playing properly. Can you help?",
  //     answer: "If you encounter issues with video playback in the MERN stack course, report the problem to the course provider's support team. They can investigate the issue and provide assistance."
  //   },
  //   {
  //     question: "I purchased the 10+ course bundle, but I'm unable to access it. Can you help me with that?",
  //     answer: "If you face difficulties accessing the 10+ course bundle after purchase, contact the course provider's support team with your account details. They can investigate and resolve the access issue."
  //   },
  //   {
  //     question: "I want to know if the Next.js full stack web development course is in Hindi or English.",
  //     answer: "The language of instruction for the Next.js full stack web development course can vary. It's best to confirm the course language with the course provider before enrolling."
  //   },
  //   {
  //     question: "I already purchased a course, but I want to buy the complete 10-course bundle. Can I get a discounted price?",
  //     answer: "If you have already purchased a course and want to upgrade to the 10-course bundle, contact the course provider's support team. They may be able to provide a discounted price based on your previous purchase."
  //   },
  // ];

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
