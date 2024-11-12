import { Check, ChevronUpCircle } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export default function Journey() {

    const motivationalSteps = [
        {
            title: "Complete Tech Roadmap 2025 🗺️",
            description: "Master the essential skills for a high-paying tech job.",
            icon: "🎯",
            details: [
                "Understand the current tech landscape",
                "Learn in-demand programming languages",
                "Focus on practical skills that employers want",
            ],
            videoUrl: "https://www.youtube.com/embed/uEz_H7LU6T8",
        },
        {
            title: "Master DSA for Coding Interviews 💻",
            description: "Crack technical interviews with confidence.",
            icon: "🧮",
            details: [
                "Learn fundamental data structures",
                "Practice algorithm problem-solving",
                "Understand time and space complexity",
            ],
            videoUrl: "https://www.youtube.com/embed/DiuFbYd5EOw",
        },
        {
            title: "Become a Full Stack Developer 🚀",
            description: "Build end-to-end applications and increase your market value.",
            icon: "⚡",
            details: [
                "Master frontend and backend technologies",
                "Learn database management and API design",
                "Build real-world projects for your portfolio",
            ],
            videoUrl: "https://www.youtube.com/embed/Na96P-3vnmY",
        },
        {
            title: "Build AI-Powered Projects 🤖",
            description: "Create impressive portfolio projects using AI tools.",
            icon: "🔧",
            details: [
                "Leverage AI tools for rapid development",
                "Create projects that stand out to employers",
                "Build practical solutions to real problems",
            ],
            videoUrl: "https://www.youtube.com/embed/-oeX-rQujQs",
        },
        {
            title: "Perfect Your Tech Resume ✨",
            description: "Craft a resume that gets you interviews.",
            icon: "📝",
            details: [
                "Highlight your technical skills effectively",
                "Showcase your projects and achievements",
                "Optimize for ATS systems",
            ],
            videoUrl: "https://www.youtube.com/embed/WG_fJ5mIbzI",
        },
        {
            title: "Ace Tech Interviews 🎯",
            description: "Master both technical and behavioral interviews.",
            icon: "🎤",
            details: [
                "Practice common interview patterns",
                "Prepare for system design questions",
                "Master behavioral interview techniques",
            ],
            videoUrl: "https://www.youtube.com/embed/SLvKiSp3Qj0",
        },
        {
            title: "LinkedIn Optimization 🌐",
            description: "Build a strong professional presence online.",
            icon: "💼",
            details: [
                "Create an attractive LinkedIn profile",
                "Network with industry professionals",
                "Attract recruiters and job opportunities",
            ],
            videoUrl: "https://www.youtube.com/embed/BTUJrOdVjcM",
        },
    ];

    return <>
        <div className="w-full pt-16">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Your Software Engineering Journey: <span className="decoration-red-500 underline decoration-4">7 Steps to Success</span>
                </h2>
                {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Follow this proven roadmap to transform from a beginner to a professional software engineer. Each step includes practical guidance and resources.
                </p> */}
                <div className="relative">
                    {motivationalSteps.map((step, index) => (
                        <div key={index} className="mb-12 flex items-start relative">
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-head to-second/70 text-white flex items-center justify-center text-2xl font-bold z-10 shadow-md shadow-black">
                                {index + 1}
                            </div>
                            <div className="ml-4 sm:ml-8 flex-grow sm:border sm:border-green-800 rounded-xl sm:p-6 sm:bg-second/70 sm:shadow-md sm:hover:shadow-lg transition-shadow duration-300">
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold mb-3 flex items-center break-words text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-gray-300 mb-3">
                                        {step.description}
                                    </p>
                                    <p className="text-sm mb-5 text-gray-400">{step.details}</p>


                                    <div className="mt-12 mb-12 w-full aspect-video">
                                        <iframe
                                            className="w-full h-full rounded-xl shadow-lg"
                                            src={step.videoUrl}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    <ul className="space-y-2">
                                        {step.details.map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center text-white text-sm"
                                            >
                                                <span className="mr-2">
                                                    <Check className="text-prime" />
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {index < motivationalSteps.length - 1 && (
                                <div className="absolute left-7 top-14 w-0.5 bg-gradient-to-b from-head to-second/70 h-full transform -translate-x-1/2" />
                            )}
                        </div>
                    ))}
                </div>
                {/* <Link href={"#join-waitlist"}>
            <button className="border-4 border-prime rounded-full px-4 text-center py-2 max-w-3xl mx-auto w-full text-2xl sm:text-2xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase">
              <ChevronUpCircle className="h-8 w-8" />
              Join Waitlist
            </button>
          </Link> */}
            </div>
        </div>
    </>
}
