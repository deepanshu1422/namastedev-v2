import type { Metadata } from "next";
import Testimonials from "@/components/mentorship-comp/testimonials";
import Video from "@/components/new-cohort/video";
import Hero from "./hero";
import Profile from "./profile";
import Faqs from "@/components/mentorship-comp/faq";
import Mentorship from "./mentorship";
import JoinUs from "./joinus";
import Features from "./features";
import MentorshipGallary from "./mentorship-gallery";
import Floating from "./floating";

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
    {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
      },
      {
      question: "I want to know how I will receive the certificate for the MERN full stack development course I purchased.",
      answer: "The process for receiving course completion certificates varies among providers. Contact the specific course provider to inquire about their certificate issuance procedure upon successful course completion."
      },
      {
      question: "I want to build a resume. Can you provide me with a resume builder?",
      answer: "Some course providers offer resume building tools or templates as part of their course materials. Check with the specific course provider if they provide such resources."
      },
      {
      question: "I have already purchased a MERN stack course and want to purchase all 10 courses. Can I get a discounted price?",
      answer: "If you have previously purchased a course and want to upgrade to the 10-course bundle, contact the course provider's support team. They may be able to offer a discounted price based on your existing purchase."
      },
      {
      question: "I want to take the MERN stack course instead of Next.js. Can you please exchange the course for me?",
      answer: "If you have mistakenly purchased the Next.js course but prefer the MERN stack course, contact the course provider's support team. They can assist you with exchanging the course."
      },
      {
      question: "Are the courses in Hindi or English?",
      answer: "The language of instruction for the courses can vary. It's best to confirm the course language with the specific course provider before enrolling."
      },
      {
      question: "I purchased the MERN stack course, but I'm still unable to access it. The money has been deducted from my account.",
      answer: "If you face issues accessing a course after successful payment, report the problem to the course provider's support team. They can investigate the payment and access status to resolve the issue."
      },
      {
      question: "I requested to delete my account a few weeks ago, but it hasn't been deleted yet. Can you please delete it or confirm that it won't be deleted?",
      answer: "Account deletion requests are typically processed within a specific timeframe. If you have concerns, contact the course provider's support team for an update on the status of your account deletion request."
      },
      {
      question: "The HTML section in the course is badly ordered, and the CSS section on Grid and Flexbox starts abruptly without any introduction.",
      answer: "Provide constructive feedback to the course provider regarding the organization and flow of the course content. They can consider your suggestions for potential improvements in future course updates."
      },
      {
      question: "I want to know if the courses are taught by experienced instructors.",
      answer: "The qualifications and experience of course instructors can vary. It's advisable to research the instructor profiles or reach out to the course provider for information on their teaching staff's background and expertise."
      },
      {
      question: "Can I get a demo of the course before purchasing?",
      answer: "Some course providers offer demo videos or free previews of their courses. Contact the specific course provider to inquire about the availability of demo content for the course you are interested in."
      },
      {
      question: "I'm facing issues with the MERN stack course project that uses HTML and CSS. The zip file for the e-commerce website project is missing.",
      answer: "If you encounter missing project files or assets, report the issue to the course provider's support team. They can investigate and provide the necessary files to help you complete the project."
      },
      {
      question: "I purchased the MERN stack course, but after resetting my phone, it's not downloading. Can you please fix this?",
      answer: "If you face difficulties re-downloading course content after a device reset, contact the course provider's support team. They can assist you in regaining access to the course materials."
      },
      {
      question: "I don't find the course useful. Can I get a refund?",
      answer: "If you are dissatisfied with the course and want a refund, follow the course provider's refund policy and process. Provide your order details and reasons for the refund request to the support team."
      },
      {
      question: "I can't download videos to watch offline. It's showing a login limit on multiple devices, but I'm only logged in on one device.",
      answer: "If you encounter issues with offline video downloads due to a device login limit, report the problem to the course provider's support team. They can investigate the login status and provide assistance."
      },
      {
      question: "I can't pay using my Visa debit card on Razorpay. I have sufficient balance in my account.",
      answer: "If you face payment issues with a specific payment gateway like Razorpay, contact the course provider's support team. They can assist you in troubleshooting the payment process or provide alternative payment options."
      },
      {
      question: "I want to know if the courses are suitable for beginners with no prior coding experience.",
      answer: "The suitability of courses for beginners can vary. It's best to review the course prerequisites and target audience information provided by the course provider. If unsure, reach out to them for guidance on the most suitable courses for your skill level."
      },
      {
      question: "I'm facing issues with the HTML and CSS section of the MERN stack course. The videos are not playing properly.",
      answer: "Report any video playback issues in specific course sections to the course provider's support team. They can investigate the problem and provide assistance to resolve the issue."
      },
      {
      question: "I want to know if the courses cover real-world projects and case studies.",
      answer: "Many courses include practical projects and case studies to provide hands-on experience. Check the course curriculum or reach out to the course provider for details on the types of projects covered."
      },
  ];
  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Lifetime 1:1 Mentorship + 10 Course Access"
        desc="Learn from Aryan, Deepanshu, and the 30DC team to get placed this season."
        heroImage="/main/hero_section_mentor.png"
      />
      <Features />
      <MentorshipGallary />
      <Video
        title={"1:1 Live Query Sessions"}
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
      <Floating />
    </main>
  );
}
