'use client'
// import Lifetime from "./lifetime";
import { useEffect, useState } from "react";
import Roadmap from "./roadmap";
import Mentors from "../mentorship/mentors";
import { CreditCard } from "lucide-react";
import Lifetime from "./lifetime";
// import Card from "@/components/Card"; // Adjust the import based on your project structure
// import CardContent from "@/components/CardContent"; // Adjust the import based on your project structure

const steps = [
  {
    title: "Comprehensive Learning",
    description: "Access to USA & Canada Jobs Courses, 15+ Technical Interview Courses, and AI tools workflows.",
    details: "Dive deep into job market skills with our extensive course library.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-book ${className}`} />,
    learningPoints: ["Learn USA & Canada Jobs Courses", "Understand AI tools workflows"],
    estimatedTime: "4-6 weeks",
  },
  {
    title: "Interactive Group Sessions",
    description: "2 Group Q&A calls/week with expert mentors.",
    details: "Engage in live sessions to clarify doubts and gain insights.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-users ${className}`} />,
    learningPoints: ["Participate in 2 Group Q&A calls/week", "Engage in live sessions"],
    estimatedTime: "2-3 weeks",
  },
  {
    title: "Personalized Career Materials",
    description: "Resume review sessions, guides for resumes and cold emails.",
    details: "Craft compelling career documents with personalized feedback.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-file-alt ${className}`} />,
    learningPoints: ["Get personalized resume review", "Guides for resumes and cold emails"],
    estimatedTime: "2-3 weeks",
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews and salary negotiation training.",
    details: "Sharpen your interview skills and learn effective strategies.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-comments ${className}`} />,
    learningPoints: ["Practice mock interviews", "Learn salary negotiation strategies"],
    estimatedTime: "4-6 weeks",
  },
  {
    title: "Mindset and Resilience Training",
    description: "Develop a growth mindset and build resilience.",
    details: "Cultivate the mental fortitude to overcome challenges.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-brain ${className}`} />,
    learningPoints: ["Develop a growth mindset", "Build resilience"],
    estimatedTime: "2-3 weeks",
  },
  {
    title: "Community and Networking",
    description: "Access to a thriving community with mobile and web apps.",
    details: "Connect with peers, find opportunities, and access resources.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-network-wired ${className}`} />,
    learningPoints: ["Join a thriving community", "Connect with peers and find opportunities"],
    estimatedTime: "2-3 weeks",
  },
];

export default function Main({
  faq,
}: {
  faq: {
    question: string;
    answer: string;
  }[];
}) {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
        
      <Lifetime setOpen={setOpen} />
      
      <button onClick={() => {
            setOpen(true);
          }}
            className="bg-prime rounded-full mt-8 px-4 text-center py-2 max-w-3xl mx-auto w-full text-2xl sm:text-3xl font-extrabold flex items-center gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase"
          >
            <CreditCard className="h-10 w-10" />
            Join for just Rs. 5499
          </button>
      <Roadmap />
      <Mentors />
    </div>
  );
}

