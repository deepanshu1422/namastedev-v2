import { Metadata } from "next";
import Main from "./main"

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Find My Email - 30DaysCoding",
  description: "Recover your registered email address using your phone number.",
  openGraph: {
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Find My Email - 30DaysCoding",
    description: "Recover your registered email address using your phone number.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding", "email recovery", "find email"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Find My Email - 30DaysCoding",
    description: "Recover your registered email address using your phone number.",
    site: "https://30dayscoding.com",
  },
};

export default function Page() {
  return <Main />;
}
