import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Instructions() {
  // ... existing LinkMe component ...
  const LinkMe = ({ title, href }: { title?: string; href: string }) => (
    <Link
      href={href}
      target="_blank"
      className="text-prime font-bold max-sm:underline hover:underline break-all"
    >
      {title ?? href}
    </Link>
  );
  return (
    <main className="flex gap-6 bg-background bg-bg min-h-svh transition-all p-4">
      <title>30DC Jobs, Networking, Mentorship Community Roadmap</title>
      <div className="flex gap-5 mx-auto sm:pt-6">
        <div className="max-w-4xl w-full text-wrap">
          <section className="grid gap-3 md:gap-5 place-items-center text-white sm:text-center">
            <h1 className="text-4xl max-md:text-2xl font-bold max-w-3xl text-pretty">
              30DC Jobs, Networking, Mentorship Community Roadmap 🚀
            </h1>
            {/* ... existing welcome content ... */}
          </section>
          
          <div className="flex flex-col gap-6 py-5 sm:py-10">
            {/* Roadmap sections */}
            <RoadmapSection
              title="Get Started"
              steps={[
                { 
                  label: "Connect with us", 
                  checked: false,
                  subSteps: [
                    "Join our Discord server",
                    "Follow us on LinkedIn",
                    "Subscribe to our newsletter"
                  ]
                },
                { 
                  label: "Review your resume", 
                  checked: false,
                  subSteps: [
                    "Update your work experience",
                    "Highlight relevant skills",
                    "Tailor it for tech roles"
                  ]
                },
                { label: "Prepare discussion points", checked: false },
                { label: "Start posting on LinkedIn", checked: false },
                { label: "Be active in Discord", checked: false },
              ]}
            />

            <RoadmapSection
              title="Build Your Foundation"
              steps={[
                { 
                  label: "Learn Full Stack Development", 
                  checked: false,
                  subSteps: [
                    "Master HTML, CSS, and JavaScript",
                    "Learn a backend language (e.g., Node.js)",
                    "Understand databases and APIs"
                  ]
                },
                { 
                  label: "Study DSA for interviews", 
                  checked: false,
                  subSteps: [
                    "Focus on common data structures",
                    "Practice algorithm problem-solving",
                    "Use platforms like LeetCode or HackerRank"
                  ]
                },
                { 
                  label: "Work on your portfolio", 
                  checked: false,
                  subSteps: [
                    "Create personal projects",
                    "Contribute to open-source",
                    "Document your work process"
                  ]
                },
              ]}
            />

            <RoadmapSection
              title="Prepare for Job Search"
              steps={[
                { label: "Optimize your resume", checked: false },
                { label: "Create strong online profiles", checked: false },
                { label: "Practice cold emailing", checked: false },
              ]}
            />

            <RoadmapSection
              title="Interview Preparation"
              steps={[
                { label: "Review JS and React questions", checked: false },
                { label: "Practice DSA problems", checked: false },
                { label: "Study full stack interview questions", checked: false },
              ]}
            />

            <RoadmapSection
              title="Apply and Network"
              steps={[
                { label: "Apply to jobs online", checked: false },
                { label: "Reach out to recruiters", checked: false },
                { label: "Connect with hiring managers", checked: false },
                { label: "Participate in community events", checked: false },
              ]}
            />

            {/* ... existing content sections ... */}
          </div>
        </div>
      </div>
      {/* ... existing Table of Content ... */}
    </main>
  );
}

function RoadmapSection({ title, steps }: { 
  title: string; 
  steps: { label: string; checked: boolean; subSteps?: string[] }[] 
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-3xl max-md:text-xl font-bold">{title}</h2>
      <ul className="flex flex-col gap-2">
        {steps.map((step, index) => (
          <li key={index} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id={`${title}-${index}`} checked={step.checked} />
              <label htmlFor={`${title}-${index}`} className="text-white/80 max-sm:text-sm">
                {step.label}
              </label>
            </div>
            {step.subSteps && (
              <ul className="ml-6 flex flex-col gap-1">
                {step.subSteps.map((subStep, subIndex) => (
                  <li key={subIndex} className="text-white/60 max-sm:text-xs">
                    • {subStep}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
