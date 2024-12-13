import { Metadata } from "next";
import Main from "./main"

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Thank You and Check Your Mail - 30DaysCoding",
  description:
    "Thank you for joining our community! We're thrilled that you've taken the first step towards success. Your purchase supports our mission to provide high-quality education and resources.",
  openGraph: {
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Thank You and Check Your Mail - 30DaysCoding",
    description:
      "Thank you for joining our community! We're thrilled that you've taken the first step towards success. Your purchase supports our mission to provide high-quality education and resources.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Thank You and Check Your Mail - 30DaysCoding",
    description:
      "Thank you for joining our community! We're thrilled that you've taken the first step towards success. Your purchase supports our mission to provide high-quality education and resources.",
    site: "https://30dayscoding.com",
  },
};

export default function Page() {

    return <Main />
}
