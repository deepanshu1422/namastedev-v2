import type { Metadata } from "next";
import Script from "next/script";
import Main from "./main";

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
      <Main faq={faq} />
    </main>
  );
}
