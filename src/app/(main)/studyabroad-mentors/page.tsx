import { Metadata } from "next";
import Main from "./main";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Study Abroad Mentors Book Live Sessions Now",
  description:
    "Kickstart your study abroad journey with a live session starting from just INR 499! Get expert insights, personalized guidance, and actionable steps to achieve your dreams.",
  openGraph: {
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Study Abroad Mentors Book Live Sessions Now",
    description:
      "Kickstart your study abroad journey with a live session starting from just INR 499! Get expert insights, personalized guidance, and actionable steps to achieve your dreams.",
    url: "https://30dayscoding.com/styudyabroad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Study Abroad Mentors Book Live Sessions Now",
    description:
      "Kickstart your study abroad journey with a live session starting from just INR 499! Get expert insights, personalized guidance, and actionable steps to achieve your dreams.",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  return <Main />;
}
