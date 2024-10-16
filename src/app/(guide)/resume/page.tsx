import { Metadata } from "next";
import ResumeBuilder from "./main";

export const metadata: Metadata = {
  title: "Free Resume Builder | Create Your Perfect Resume | 30dayscoding",
  description:
    "Build your perfect resume with our free, easy-to-use resume builder. Craft a professional resume that stands out to employers and showcases your skills and experience effectively.",
  openGraph: {
    images: "https://i.ibb.co/7KP3CJp/dsa-1.webp",
    title: "Free Resume Builder | Create Your Perfect Resume | 30dayscoding",
    description:
      "Create a standout resume with our free builder. Easily customize your resume to highlight your skills and experience for your dream job.",
    url: "https://30dayscoding.com/resume",
    type: "website",
  },
  keywords: [
    "resume builder, free resume, professional resume, job application, career tools",
  ],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/7KP3CJp/dsa-1.webp",
    title: "Free Resume Builder | Create Your Perfect Resume | 30dayscoding",
    description:
      "Build a professional resume that gets you noticed. Use our free resume builder to create a customized resume that highlights your unique skills and experience.",
    site: "https://30dayscoding.com",
  },
};

export default function Page() {
  return <ResumeBuilder />;
}
