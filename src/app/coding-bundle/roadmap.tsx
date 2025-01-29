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
            title: "Learning 5: Data Structures & Algorithms 📊",
            description: "Master fundamental DSA concepts",
            icon: "🔍",
            details: [
                "Array and string manipulation",
                "Trees, graphs, and linked lists",
                "Sorting and searching algorithms",
                "Dynamic programming",
                "Time and space complexity analysis",
            ],
        },
        {
            title: "Learning 6: Interview Preparation 📚",
            description: "Excel in technical interviews",
            icon: "🎯",
            details: [
                "System design fundamentals",
                "Technical interview strategies",
                "Behavioral interview preparation",
                "Mock interview practice",
                "Common coding challenges",
            ],
        },
    ];

    return <>
        <div className="w-full">
            <div className="max-w-3xl mx-auto px-4">
                {/* Hero Section */}
                <div className="mt-10 text-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rotate-3">
                        <div className="bg-yellow-500 text-black font-bold px-4 py-1 rounded-lg shadow-lg animate-bounce">
                            🔥 Limited Time Offer
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Transform Your Career With The
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-8">
                        Ultimate Coding Bundle
                    </h3>
                    <div className="flex flex-wrap gap-4 justify-center mb-8">
                        <div className="flex items-center gap-2 text-green-400">
                            <CheckCircle className="h-5 w-5" />
                            <span>Lifetime Access</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400">
                            <Star className="h-5 w-5" />
                            <span>Premium Support</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400">
                            <ChevronUpCircle className="h-5 w-5" />
                            <span>Regular Updates</span>
                        </div>
                    </div>
                </div>

                {/* Price Banner */}
                <div className="relative mb-12 text-center">
                    <div className="bg-gradient-to-r from-green-900/50 to-green-700/50 p-4 rounded-xl border border-green-500/30">
                        <div className="text-2xl text-gray-300 line-through">Regular Price: ₹9999</div>
                        <div className="text-3xl font-bold text-white">Today's Price: ₹999</div>
                        <div className="text-green-400 text-sm mt-2">🎉 90% OFF - Save ₹9000 Today!</div>
                    </div>
                </div>

                <div className="relative">
                    {analyticsSteps.map((step, index) => (
                        <div key={index} className="mb-12 flex items-start relative">
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-green-800 text-white flex items-center justify-center text-2xl font-bold z-10 shadow-lg shadow-green-900/20">
                                {index + 1}
                            </div>
                            <div className="ml-4 sm:ml-8 flex-grow sm:border sm:border-green-800 rounded-xl sm:p-6 sm:bg-second/70 backdrop-blur-sm sm:shadow-xl hover:scale-[1.02] transition-all duration-300">
                                <div className="p-4">
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center break-words text-white">
                                        {step.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {step.details.map((point, idx) => (
                                            <li key={idx} className="flex items-center text-white text-sm">
                                                <span className="mr-2">
                                                    <CheckCheck className="text-green-400 h-5 w-5" />
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {index < analyticsSteps.length - 1 && (
                                <div className="absolute left-7 top-14 w-0.5 bg-gradient-to-b from-green-400 to-green-800 h-full transform -translate-x-1/2" />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="space-y-4 mb-12">
                    <a
                        href="#feature"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .querySelector("#feature")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-gradient-to-r from-green-500 to-green-700 my-5 rounded-xl px-4 text-center py-4 max-w-3xl mx-auto w-full text-xl sm:text-2xl font-bold flex items-center gap-3 justify-center hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-green-500/20 hover:-translate-y-1"
                    >
                        <CreditCard className="h-6 w-6" />
                        START YOUR JOURNEY NOW
                    </a>
                    <p className="text-center text-gray-400 text-sm">
                        Lifetime validity ⭐️ Instant Access
                    </p>
                </div>
            </div>
        </div>
    </>
}
