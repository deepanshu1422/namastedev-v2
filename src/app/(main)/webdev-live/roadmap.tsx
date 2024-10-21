import { Check, ChevronUpCircle } from "lucide-react";
import Link from "next/link";

export default function Roadmap() {

    const jobSearchSteps = [
        {
            title: "Prompt Engineering Mastery 🧠",
            description: "Learn the art and science of crafting effective prompts for AI models.",
            icon: "🗣️",
            details: [
                "Understand the principles of prompt design",
                "Practice creating prompts for various AI tasks",
                "Learn techniques to optimize AI responses",
            ],
        },
        {
            title: "Coding with AI 🤖",
            description: "Harness the power of AI to enhance your coding skills and productivity.",
            icon: "💻",
            details: [
                "Explore AI-powered code completion and generation",
                "Learn to use AI for code review and optimization",
                "Develop AI-assisted debugging techniques",
            ],
        },
        {
            title: "AI Workflows and Automations ⚙️",
            description: "Design and implement AI-driven workflows to streamline processes.",
            icon: "🔄",
            details: [
                "Create AI-powered automation pipelines",
                "Integrate AI into existing workflows",
                "Optimize business processes with AI",
            ],
        },
        {
            title: "AI Tools for 10x Learning 📚",
            description: "Discover and master AI tools that accelerate your learning process.",
            icon: "🚀",
            details: [
                "Explore AI-powered learning platforms",
                "Use AI for personalized study plans and content curation",
                "Leverage AI for knowledge retention and recall",
            ],
        },
        {
            title: "Generative AI Applications 🎨",
            description: "Dive into the world of generative AI and its practical applications.",
            icon: "✨",
            details: [
                "Understand the fundamentals of generative AI models",
                "Explore applications in text, image, and audio generation",
                "Create projects using state-of-the-art generative AI tools",
            ],
        },
    ];

    return <>
        <div className="w-full pt-8">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">
                    When you join us, you get <span className="decoration-red-500 underline decoration-4"> immediate access </span> to:
                </h2>
                {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Embark on a transformative journey that combines comprehensive
            learning, personalized guidance, and community support to accelerate
            your career growth.
          </p> */}
                <div className="relative">
                    {jobSearchSteps.map((step, index) => (
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
                            {index < jobSearchSteps.length - 1 && (
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
