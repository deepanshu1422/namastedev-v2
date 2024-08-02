import { Metadata } from "next";
import Hero from "./hreo";
import About from "./about";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Webinar | 30dayscoding",
  description:
    "Know the secrets to cracking a 10 LPA job and crafting the perfect resume in our power-packed webinar. Upgrade your career with expert insights and practical strategies. Join us now!",
  openGraph: {
    images: "https://i.ibb.co/513C6Jm/webinar-1.webp",
    title: "Webinar | 30dayscoding",
    description:
      "Know the secrets to cracking a 10 LPA job and crafting the perfect resume in our power-packed webinar. Upgrade your career with expert insights and practical strategies. Join us now!",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/513C6Jm/webinar-1.webp",
    title: "Webinar | 30dayscoding",
    description:
      "Know the secrets to cracking a 10 LPA job and crafting the perfect resume in our power-packed webinar. Upgrade your career with expert insights and practical strategies. Join us now!",
    site: "https://30dayscoding.com",
  },
};

export default function Webinar() {
  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Master the art for Cracking 10 LPA Job"
        desc="Know the secrets to cracking a 10 LPA job and crafting the perfect resume in our power-packed webinar. Upgrade your career with expert insights and practical strategies. Join us now!"
        heroImage="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <About />
    </main>
  );
}
