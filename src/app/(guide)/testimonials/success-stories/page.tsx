import { Metadata } from "next";
import Main from "./main";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Success Stories | 30dayscoding",
  description:
    "Be inspired by real success stories! Discover how our connections started their journeys, overcame challenges, and achieved their goals. Learn from their experiences to fuel your own path to success.",
  openGraph: {
    images: "https://i.ibb.co/N9T5CPg/thumbnailss.jpg",
    title: "Success Stories | 30dayscoding",
    description:
      "Be inspired by real success stories! Discover how our connections started their journeys, overcame challenges, and achieved their goals. Learn from their experiences to fuel your own path to success.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/N9T5CPg/thumbnailss.jpg",
    title: "Success Stories | 30dayscoding",
    description:
      "Be inspired by real success stories! Discover how our connections started their journeys, overcame challenges, and achieved their goals. Learn from their experiences to fuel your own path to success.",
    site: "https://30dayscoding.com",
  },
};


export default function Page() {
  return (
    <Main />
  );
}