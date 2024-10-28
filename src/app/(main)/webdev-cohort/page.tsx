import { Metadata } from "next";
import Hero from "./hero";
import About from "./about";
import Course from "@/components/new-cohort/course";
import Success from "@/components/mentorship-comp/success";
import Mentor from "@/components/new-cohort/mentor";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Full Stack Web Development Cohort | 30dayscoding",
    description:
        "Master full stack web development in our intensive 12-week cohort. Learn modern technologies like React, Node.js, and MongoDB. Build real-world projects and launch your tech career!",
    openGraph: {
        images: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        title: "Full Stack Web Development Cohort | 30dayscoding",
        description:
            "Master full stack web development in our intensive 12-week cohort. Learn modern technologies like React, Node.js, and MongoDB. Build real-world projects and launch your tech career!",
        url: "https://30dayscoding.com/webdev-cohort",
        type: "website",
    },
    keywords: ["web development", "full stack", "React", "Node.js", "MongoDB", "coding bootcamp", "30 days coding"],
    twitter: {
        card: "summary_large_image",
        images: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        title: "Full Stack Web Development Cohort | 30dayscoding",
        description:
            "Master full stack web development in our intensive 12-week cohort. Learn modern technologies like React, Node.js, and MongoDB. Build real-world projects and launch your tech career!",
        site: "https://30dayscoding.com",
    },
};

export default function Webinar() {

    let course = [
        {
            week: 1,
            title: "Foundations of Web Development: HTML & CSS",
            topics: [
                "Introduction to Web Development",
                "HTML5 structure and semantics",
                "CSS3 styling and layouts",
                "Responsive design principles",
                "CSS Flexbox and Grid",
            ],
        },
        {
            week: 2,
            title: "JavaScript Fundamentals",
            topics: [
                "JavaScript syntax and data types",
                "Functions and scope",
                "DOM manipulation",
                "Event handling",
                "Asynchronous JavaScript (Promises, async/await)",
            ],
        },
        {
            week: 3,
            title: "Advanced JavaScript and ES6+",
            topics: [
                "ES6+ features (arrow functions, destructuring, etc.)",
                "Modules and import/export",
                "Object-oriented JavaScript",
                "Functional programming concepts",
                "Error handling and debugging",
            ],
        },
        {
            week: 4,
            title: "Introduction to React",
            topics: [
                "React fundamentals and JSX",
                "Components and props",
                "State and lifecycle methods",
                "Hooks (useState, useEffect)",
                "Handling forms in React",
            ],
        },
        {
            week: 5,
            title: "Advanced React and State Management",
            topics: [
                "Context API",
                "Redux fundamentals",
                "React Router",
                "Custom hooks",
                "Performance optimization in React",
            ],
        },
        {
            week: 6,
            title: "Next.js Fundamentals",
            topics: [
                "Introduction to Next.js",
                "Pages and routing in Next.js",
                "Static Site Generation (SSG)",
                "Server-Side Rendering (SSR)",
                "API routes in Next.js",
            ],
        },
        {
            week: 7,
            title: "Advanced Next.js and Deployment",
            topics: [
                "Dynamic imports and code splitting",
                "Authentication in Next.js",
                "Styling in Next.js (CSS Modules, Styled Components)",
                "SEO optimization",
                "Deploying Next.js applications",
            ],
        },
        {
            week: 8,
            title: "Node.js and Express Fundamentals",
            topics: [
                "Introduction to Node.js",
                "Node.js modules and npm",
                "Express.js basics",
                "Middleware in Express",
                "RESTful API design",
            ],
        },
        {
            week: 9,
            title: "Advanced Express and API Development",
            topics: [
                "Authentication and authorization",
                "Error handling in Express",
                "Input validation and sanitization",
                "File uploads",
                "API testing with Jest",
            ],
        },
        {
            week: 10,
            title: "MongoDB and Mongoose",
            topics: [
                "Introduction to MongoDB",
                "CRUD operations in MongoDB",
                "Mongoose ODM",
                "Data modeling with Mongoose",
                "Indexing and query optimization",
            ],
        },
        {
            week: 11,
            title: "Full Stack Integration",
            topics: [
                "Connecting React frontend with Express backend",
                "State management in full-stack applications",
                "Handling CORS",
                "Deployment of full-stack applications",
                "Performance optimization techniques",
            ],
        },
        {
            week: 12,
            title: "Advanced Topics and Project",
            topics: [
                "WebSockets and real-time applications",
                "GraphQL basics",
                "Docker fundamentals",
                "CI/CD pipelines",
                "Final project development and presentation",
            ],
        },
    ];

    const successStories = [
        { name: "Aditya", linkedIn: "https://www.linkedin.com/in/aditya-maheshwari-05/", jobOffer: "PayPal", salary: "35+ LPA" },
        { name: "Nikhil", linkedIn: "https://www.linkedin.com/in/nikhil-seth9", jobOffer: "Air Canada", salary: "35+ LPA" },
        { name: "Rojal", linkedIn: "https://www.linkedin.com/in/rojal-sapkota-787130237/", jobOffer: "Google", salary: "30+ LPA" },
        { name: "Rishabh", linkedIn: "https://www.linkedin.com/in/rishabh5301", jobOffer: "Arrow, Google", salary: "15+ LPA" },
        { name: "Roktim", linkedIn: "https://x.com/roktim___", jobOffer: "Luppa AI", salary: "15+ LPA" },
    ];
    return (<main className="bg-background bg-bg min-h-svh transition-all">
        <Hero 
            startDate="November 1st"
            title="Master Full Stack Web Development"
            desc="Join our intensive 12-week cohort to become a proficient full stack developer. Learn modern technologies like React, Node.js, and MongoDB. Build real-world projects and launch your tech career!"
            heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <About />
        <Course course={course} />


        {/* New section for success stories */}
        <div className="grid place-items-center gap-4 m-auto ">

            <span className="flex items-center gap-4 relative">
                <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
                <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
                    Recent Success stories (100+ more)
                </h2>
                <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
            </span>

            <div className="overflow-x-auto">
                <table className="w-full max-w-2xl mx-auto text-foreground/90 border-2 border-white rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-prime/10">
                            <th className="py-3 px-4 text-left border-b border-prime/30">Name</th>
                            <th className="py-3 px-4 text-left border-b border-prime/30">Company</th>
                            <th className="py-3 px-4 text-left border-b border-prime/30">Job Offer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {successStories.map((story, index) => (
                            <tr key={index} className="border-b border-prime hover:bg-prime/5 transition-colors duration-200">
                                <td className="py-3 px-4">
                                    <a href={story.linkedIn} target="_blank" rel="noopener noreferrer" className="underline hover:text-prime transition-colors duration-200">
                                        {story.name}
                                    </a>
                                </td>
                                <td className="py-3 px-4">{story.jobOffer}</td>

                                <td className="py-3 px-4">{story.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* <Success /> */}
        <Mentor />
    </main>)
}
