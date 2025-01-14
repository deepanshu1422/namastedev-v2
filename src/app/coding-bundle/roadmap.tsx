import { Check, CheckCheck, CheckCheckIcon, CheckCircle, ChevronUpCircle, CreditCard, Star } from "lucide-react";
import Link from "next/link";

export default function Roadmap() {

    const analyticsSteps = [
        {
            title: "Learning 1: Web Development Foundations 🌐",
            description: "Master the core building blocks of web development",
            icon: "💻",
            details: [
                "HTML5 structure and semantic elements",
                "CSS3 styling, flexbox, and grid layouts",
                "JavaScript fundamentals and ES6+ features",
                "Responsive design and mobile-first approach",
                "DOM manipulation and web APIs",
            ],
        },
        {
            title: "Learning 2: Frontend Development 🎨",
            description: "Build modern, interactive user interfaces",
            icon: "⚛️",
            details: [
                "React.js fundamentals and hooks",
                "Next.js 14 and server components",
                "State management (Context, Redux)",
                "API integration and data fetching",
                "Modern UI libraries and styling solutions",
            ],
        },
        {
            title: "Learning 3: Backend Development 🔧",
            description: "Create robust server-side applications",
            icon: "🖥️",
            details: [
                "Node.js and Express.js fundamentals",
                "MongoDB and Mongoose ODM",
                "RESTful API design principles",
                "Authentication and authorization",
                "Database design and optimization",
            ],
        },
        {
            title: "Learning 4: Advanced Technologies 🚀",
            description: "Explore cutting-edge tech stack",
            icon: "⚡",
            details: [
                "Python programming fundamentals",
                "SQL and database management",
                "Blockchain development basics",
                "Web3 and smart contracts",
                "Cloud deployment (AWS/Vercel)",
            ],
        },
        {
            title: "Learning 5: DSA & Interview Prep 📚",
            description: "Prepare for technical interviews",
            icon: "🎯",
            details: [
                "Data Structures fundamentals",
                "Algorithm analysis and problem-solving",
                "System design principles",
                "Technical interview strategies",
                "Coding challenges and solutions",
            ],
        },
    ];

    return <>
        <div className="w-full pt-">
            <div className="max-w-3xl mx-auto px-4">


                {/* Course Features Section */}
                <div className="mt-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Introducing the complete </h2>
                    <h3 className="text-5xl font-bold text-blue-500 mb-8">Foundation to Mastery Bundle</h3>
                </div>
                <div className="relative">
                    {analyticsSteps.map((step, index) => (
                        <div key={index} className="mb-12 flex items-start relative">
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-blue-800 text-white flex items-center justify-center text-2xl font-bold z-10 shadow-md shadow-black">
                                {index + 1}
                            </div>
                            <div className="ml-4 sm:ml-8 flex-grow sm:border sm:border-green-800 rounded-xl sm:p-6 sm:bg-second/70 sm:shadow-md sm:hover:shadow-lg transition-shadow duration-300">
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold mb-3 flex items-center break-words text-white">
                                        {step.title}
                                    </h3>
                                    {/* <p className="text-base text-gray-300 mb-3">
                                        {step.description}
                                    </p>
                                    <p className="text-sm mb-5 text-gray-400">{step.details}</p> */}

                                    <ul className="space-y-2">
                                        {step.details.map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center text-white text-sm"
                                            >
                                                <span className="mr-2">
                                                    <CheckCheck className="text-prime" />
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {index < analyticsSteps.length - 1 && (
                                <div className="absolute left-7 top-14 w-0.5 bg-blue-800 from-head to-blue-300 h-full transform -translate-x-1/2" />
                            )}
                        </div>
                    ))}
                </div>


                {/* <a
                    href="https://www.skool.com/usa-ca-jobs/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-prime my-5 rounded-full px-4 text-center py-2 max-w-3xl mx-auto w-full text-2xl sm:text-3xl font-extrabold flex items-center gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase"
                >
                    <CreditCard className="h-10 w-10" />
                    Join for $99/year
                </a> */}

            </div>
        </div>
    </>
}
