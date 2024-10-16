import { Check, ChevronUpCircle } from "lucide-react";
import Link from "next/link";

export default function Roadmap() {

    const motivationalSteps = [
        {
            title: "Stop Wasting Your Time 🕰️",
            description: "Learn how to make the most of your precious time.",
            icon: "⏳",
            details: [
                "Identify time-wasting activities",
                "Implement effective time management strategies",
                "Focus on productive tasks that align with your goals",
            ],
            videoUrl: "https://www.youtube.com/embed/nvY7OK1YSrs",
        },
        {
            title: "12 Ghante mehnat karni padegi 💪",
            description: "Dedicate yourself to 12 hours of concentrated effort.",
            icon: "🎯",
            details: [
                "Eliminate distractions and create a productive environment",
                "Break down your work into manageable chunks",
                "Stay motivated through small wins and progress tracking",
            ],
            videoUrl: "https://www.youtube.com/embed/FfiRIMG0Z64",
        },
        {
            title: "Minimize Phone Distractions 📵",
            description: "Reduce phone usage to boost your success.",
            icon: "🚫",
            details: [
                "Set boundaries for phone usage",
                "Use productivity apps to limit distractions",
                "Find alternative activities to replace mindless scrolling",
            ],
            videoUrl: "https://www.youtube.com/embed/c6SsnbQ1rjA",
        },
        {
            title: "Overcome Self-Doubt 🌟",
            description: "Believe in yourself and your potential for greatness.",
            icon: "🙏",
            details: [
                "Recognize and challenge negative self-talk",
                "Celebrate your achievements, no matter how small",
                "Surround yourself with supportive people",
            ],
            videoUrl: "https://www.youtube.com/embed/3yl2qCJmK3g",
        },
        {
            title: "Quit Social Media for Success 🚀",
            description: "Discover how leaving social media can propel your success in 2024.",
            icon: "🔒",
            details: [
                "Reclaim your time and focus",
                "Reduce comparison and FOMO",
                "Invest in real-life relationships and personal growth",
            ],
            videoUrl: "https://www.youtube.com/embed/rELb_gwyXls",
        },
    ];

    return <>
        <div className="w-full pt-16">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Feeling low? Watch the <span className="decoration-red-500 underline decoration-4">5 video series</span> to get motivated
                </h2>
                {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Embark on a transformative journey that combines comprehensive
            learning, personalized guidance, and community support to accelerate
            your career growth.
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
