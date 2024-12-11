import { Metadata } from "next";
import Main from "./main";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Wall of Love | 30dayscoding",
  description:
    "Watch authentic video testimonials from our students! Hear their stories, experiences, and success journeys as they review how our courses transformed their skills and careers.",
  openGraph: {
    images: "https://i.ibb.co/N9T5CPg/thumbnailss.jpg",
    title: "Wall of Love | 30dayscoding",
    description:
      "Watch authentic video testimonials from our students! Hear their stories, experiences, and success journeys as they review how our courses transformed their skills and careers.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/N9T5CPg/thumbnailss.jpg",
    title: "Wall of Love | 30dayscoding",
    description:
      "Watch authentic video testimonials from our students! Hear their stories, experiences, and success journeys as they review how our courses transformed their skills and careers.",
    site: "https://30dayscoding.com",
  },
};


export default function Page() {
  return (
    <Main />
  );
}