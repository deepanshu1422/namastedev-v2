"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import GridCard from "./grid-card";
import { YTModal } from "@/app/(main)/testimonials/slider";

const successStories = [
  {
    id: 1,
    name: "Sahil",
    role: "Full Stack Developer",
    company: "Oracle",
    ytId: "OHyO1PGny2Y",
    description: "Cracking 31 LPA as a fresher",
    story:
      "Discover Sahil's journey of landing a 31 LPA job straight out of college! He shares his insights on the importance of skills, managing academics with extracurriculars, and the keys to nailing job interviews.",
  },
  {
    id: 2,
    name: "Harsh Bhatt",
    role: "Founding Engineer",
    company: "Remix AI",
    ytId: "-1K9jSgAakg",
    description: "19-Year-Old Harsh Bags $$$$ Remote Job",
    story:
      "Join Harsh as he shares his journey from starting coding at 12 to landing a $100k remote job at just 19! Discover insights on machine learning, building in public, and how to navigate career opportunities without a college degree.",
  },
  {
    id: 3,
    name: "Rhythm",
    role: "Intern",
    company: "Google",
    ytId: "DN3lwSjJDlY",
    description: "How to crack Google internship",
    story:
      "Dive into the journey of securing a Google internship with insights into the preparation and interview process. Discover essential tips and strategies that can help you navigate your way to success in this competitive landscape",
  },
  {
    id: 4,
    name: "Love Jain",
    role: "Intern",
    company: "JP Morgan",
    ytId: "-luEAFZ6zmU",
    description:
      "Learn How He Earned ₹XXXXXX Lakhs at Amazon & JP Morgan with Winning Hackathon Tips and Strategies",
    story:
      "Join Love Jain as he shares his journey from college at DTU to working at top companies like Amazon and JP Morgan! Learn how hackathons helped him discover his love for coding, leading to internships and exciting projects in tech and finance. Love also talks about starting a business in India and the challenges of being innovative. Tune in for his tips on making the most of your college years and achieving success!",
  },
  {
    id: 5,
    name: "Shubhankar",
    role: "Intern",
    company: "Dell",
    ytId: "40un-KXZzxo",
    description:
      "From UMass Amherst to Dell | Shubhankar’s Inspiring Path as a Data Science Intern & Researcher",
    story:
      "Shubhankar's journey from India to UMass Amherst Data Science is a testament to perseverance, from navigating COVID challenges to interning at Dell and researching at MIT and Berkeley. His story highlights overcoming time management, technical hurdles, and imposter syndrome, offering key lessons in resilience and growth.",
  },
  {
    id: 6,
    name: "Dhyey Mavani",
    role: "Intern",
    company: "LinkedIn",
    ytId: "YbbsRWPJlP0",
    description:
      "100% scholarship in the USA | Study abroad 2024 tips and tricks | Complete roadmap for USA education",
    story:
      "Dive into Dhyey’s inspiring story – from securing a full scholarship to scoring internships at Amazon and LinkedIn. If you're interested in studying abroad, internships, or simply curious about what it's like to navigate life as an international student, this podcast is for you!",
  },
  {
    id: 7,
    name: "Piyush",
    role: "Full Stack Developer",
    company: "RoadSideCoder",
    ytId: "YtfhT8rdRNg",
    description:
      "Frontend Engineering in 2024: What Skills Do You Need to Succeed?",
    story:
      "Dive into this discussion as Piyush shares his journey, and invaluable tips for both freshers and experienced developers. Whether you're looking to become a full-stack developer, ace interviews, or understand the future of coding in the age of AI, this video has something for everyone! ",
  },
  {
    id: 8,
    name: "Hetarth Chopra",
    role: "Intern",
    company: "CrowdStrike",
    ytId: "xh8QpKmgctg",
    description:
      "How Hetarth Cracked a High-Paying CrowdStrike Internship & Master’s at UIUC – His Proven Strategy!",
    story:
      "Join Hetarth as he shares his insightful journey from an intern at CrowdStrike to pursuing a Master’s at UIUC. Discover the challenges, experiences, and valuable lessons learned along the way, including the importance of perspective in learning and the transition to a data science career.",
  },
  {
    id: 9,
    name: "Ankit Raj",
    role: "SDE",
    company: "Remote",
    ytId: "dqUFv86zQ6E",
    description:
      "This Is How He Landed Remote Engineering Job & Internship from a Tier 3 College",
    story:
      "In this inspiring video, Ankit Raj shares his incredible journey as a remote engineer, overcoming challenges from a Tier 3 college to find success in the tech industry. Discover the obstacles he faced, the lessons he learned, and his valuable tips for aspiring engineers.",
  },
  {
    id: 10,
    name: "Paras",
    role: "SDE",
    company: "Google",
    ytId: "QoTENxP9jpE",
    description:
      "Journey of Paras to Google with competitive coding | Success story",
    story:
      "Tune in to hear Paras's incredible journey from a tier-3 college to cracking a Google job. Discover his secrets for acing FAANG interviews, insights on DSA, and how he navigated the tough job market of 2024.",
  },
  {
    id: 11,
    name: "Divyanshu Verma",
    role: "SDE",
    company: "Remote (Korea)",
    ytId: "yqOxWxxCdnU",
    description:
      "From Tier-3 College to Korea | How Divyanshu Turned His Freelancing Skills into a Dream Remote Job!",
    story:
      "Join us as we explore Divyanshu’s incredible journey from a Tier-3 college grad to a successful freelancer, ultimately landing a dream remote job in Korea. Discover his insights and tips for leveraging freelancing skills to unlock amazing opportunities in the tech world!",
  },
  {
    id: 12,
    name: "Puneet Kohli",
    role: "SDE",
    company: "Apple",
    ytId: "U-dc8t9jS64",
    description:
      "Land 10x more job opportunities in 2024 | Ex-Apple Software Engineer reveals",
    story:
      "(SWE at Apple and Amazon intern). He is building an awesome product for all job seekers ",
  },
  {
    id: 13,
    name: "Harsh",
    role: "SDE",
    company: "Remote",
    ytId: "Z4gQbG4oR4k",
    thumbnail: "/thumbs/1.jpg",
    description:
      "Cracking Tier 3 to Remote job as a fresher | Software engineering secrets 2024",
    story: "",
  },
  {
    id: 14,
    name: "Uziar",
    role: "SDE",
    company: "CIVO",
    ytId: "izIyB107f6o",
    description: "3 Internships and Remote job in 2024 without DSA (secrets)",
    story: "",
  },
  {
    id: 15,
    name: "Paras Madan",
    role: "SDE",
    company: "Paytm",
    ytId: "aIDSrB_caqc",
    description:
      "Become an AI, Full stack developer in 2024 😱 Tips from ex-PayTm engineer building AI products",
    story: "",
  },
  {
    id: 16,
    name: "Mannu",
    role: "Founder",
    company: "Aceternity UI",
    ytId: "87mM5ps6Gto",
    description:
      "How the top freelancer from India makes $$$ every month? Top 1% developer secrets revealed",
    story: "Top freelancer from India!",
  },
  {
    id: 17,
    name: "Abhinav Awasthi",
    role: "Intern",
    company: "Zeta",
    ytId: "N7AN5lcXljc",
    description:
      "Tier 3 college to LinkedIn, Zeta Intern - DSA, CP Masterclass",
    story: "",
  },
  {
    id: 18,
    name: "Vineet Joglaker",
    role: "Manager",
    company: "FFANG",
    ytId: "nOpaLTDiJAo",
    description:
      "Make your journey to FAANG and Big Tech by learning from Vineet (Manager at FAANG)",
    story: "",
  },
  {
    id: 19,
    name: "Parikh Jain",
    role: "SDE",
    company: "FFANG",
    ytId: "Gv_G4PBwUwU",
    description:
      "Best Full stack and DSA ROADMAP for Software Engineers in 2024",
    story: "",
  },
];

export default function main() {
  const [open, setOpen] = useState(false);
  const [ytId, setYtId] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[320px] bg-gradient-to-b from-prime/20 to-background/20">
        <div className="mx-auto px-4 h-full flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Student Success Stories
          </h1>
          <p className="md:text-lg text-muted-foreground max-w-2xl mb-3">
            Discover how people achieved their dreams through dedication and
            comprehensive learning programs.
          </p>
          <div className="flex gap-2">
            <Link
              className="text-sm underline text-green-600"
              target="_blank"
              href={
                "https://www.instagram.com/reel/DDMntGkzQ0S/?igsh=NnZvYTc3OW1zMmM5"
              }
            >
              <Button
                size="default"
                className="rounded-full text-white bg-prime/60 hover:bg-prime/80"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Listen Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, i) => (
            <GridCard key={i} story={story} setOpen={setOpen} setYtId={setYtId} />
          ))} 
        </div>
      </section>
      <YTModal open={open} setOpen={setOpen} url={ytId} />
    </div>
  );
}
