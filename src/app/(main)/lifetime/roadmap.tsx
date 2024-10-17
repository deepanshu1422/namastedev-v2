import { Check, ChevronUpCircle } from "lucide-react";
import Link from "next/link";

export default function Roadmap() {

    const jobSearchSteps = [
        {
            title: "Expert Q&A Calls and Workshops 🎓",
            description: "Engage with industry experts Aryan, Deepanshu, and Ashok.",
            icon: "🗣️",
            details: [
                "Get insights from experienced professionals",
                "Ask questions relevant to your career journey",
                "Learn about current industry trends and demands",
            ],
        },
        {
            title: "24/7 Chat Support 📱",
            description: "Get immediate assistance for urgent questions and guidance.",
            icon: "💬",
            details: [
                "Receive timely answers to your queries",
                "Get support during critical career moments",
                "Stay connected with mentors and peers",
            ],
        },
        {
            title: "20+ Comprehensive Skill Courses 📚",
            description: "Access to all our courses covering in-demand skills.",
            icon: "🧠",
            details: [
                "Learn skills that are highly sought after in the industry",
                "Follow structured learning paths",
                "Practice with real-world projects and assignments",
            ],
        },
        {
            title: "Lifetime Access to Live Classes and Cohorts ✅",
            description: "Join all upcoming live classes and cohorts with no time limit.",
            icon: "🎓",
            details: [
                "Participate in live interactive sessions",
                "Learn from industry experts in real-time",
                "Join cohort-based learning experiences",
            ],
        },
        {
            title: "25+ Interview Mastery Guides 🏆",
            description: "Prepare with 25 guides to ace your tech interviews.",
            icon: "📝",
            details: [
                "Study common interview questions and best answers",
                "Learn strategies for different interview formats",
                "Practice with mock interviews and feedback",
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
