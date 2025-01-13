import { Check, CheckCheck, CheckCheckIcon, CheckCircle, ChevronUpCircle, CreditCard, Star } from "lucide-react";
import Link from "next/link";

export default function Roadmap() {

    const analyticsSteps = [
        {
            title: "Module 1: Excel & Data Foundations 📊",
            description: "Master essential Excel skills for data analysis.",
            icon: "📈",
            details: [
                "Advanced Excel functions and formulas",
                "Pivot Tables and Data Modeling",
                "Statistical Analysis and Visualization",
                "Data Cleaning and Validation Techniques",
                "Business Intelligence Reporting",
            ],
        },
        {
            title: "Module 2: SQL Mastery 🗄️",
            description: "Comprehensive coverage of SQL for data analysis.",
            icon: "💾",
            details: [
                "Database fundamentals and SQL queries",
                "Data manipulation and aggregation",
                "Window functions and advanced SQL concepts",
                "Database Design and Optimization",
                "ETL Processes and Data Integration",
            ],
        },
        {
            title: "Module 3: Visualization Tools 📊",
            description: "Master key visualization platforms.",
            icon: "📈",
            details: [
                "Tableau dashboard creation and storytelling",
                "Power BI report development",
                "Interactive visualization best practices",
                "Advanced Chart Types and Custom Visualizations",
                "Data-Driven Decision Making Frameworks",
            ],
        },
        {
            title: "Module 4: Real-World Projects 🚀",
            description: "Build your portfolio with practical projects.",
            icon: "💼",
            details: [
                "End-to-end analytics projects",
                "Industry-specific case studies",
                "Portfolio development guidance",
                "Collaborative Project Management",
                "Business Impact Analysis",
            ],
        },
        {
            title: "Module 5: AI & Advanced Analytics 🤖",
            description: "Leverage AI tools for enhanced analysis.",
            icon: "🎯",
            details: [
                "AI-powered analytics tools",
                "Predictive analytics fundamentals",
                "Machine learning for analysts",
                "Natural Language Processing Applications",
                "Automated Decision Systems",
            ],
        },
    ];

    return <>
        <div className="w-full pt-">
            <div className="max-w-3xl mx-auto px-4">


                {/* Course Features Section */}
                <div className="mt-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Introducing the complete </h2>
                    <h3 className="text-5xl font-bold text-blue-500 mb-8">Data Analytics Mastery Course</h3>
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
