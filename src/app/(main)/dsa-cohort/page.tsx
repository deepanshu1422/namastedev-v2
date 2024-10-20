import { Metadata } from "next";
import Hero from "./hero";
import About from "./about";
import Course from "@/components/new-cohort/course";
import Success from "@/components/mentorship-comp/success";
import Mentor from "@/components/new-cohort/mentor";

export const metadata: Metadata = {
    title: "DSA Cohort | 30dayscoding",
    description:
        "Master Data Structures and Algorithms in our intensive 12-week cohort. Learn essential problem-solving skills, ace technical interviews, and boost your career in software development. Join now!",
    openGraph: {
        images: "https://i.ibb.co/513C6Jm/webinar-1.webp",
        title: "DSA Cohort | 30dayscoding",
        description:
            "Master Data Structures and Algorithms in our intensive 12-week cohort. Learn essential problem-solving skills, ace technical interviews, and boost your career in software development. Join now!",
        url: "https://30dayscoding.com/dsa-cohort",
        type: "website",
    },
    keywords: ["DSA", "Data Structures", "Algorithms", "Coding Interview", "30 days coding", "Programming"],
    twitter: {
        card: "summary_large_image",
        images: "https://i.ibb.co/513C6Jm/webinar-1.webp",
        title: "DSA Cohort | 30dayscoding",
        description:
            "Master Data Structures and Algorithms in our intensive 12-week cohort. Learn essential problem-solving skills, ace technical interviews, and boost your career in software development. Join now!",
        site: "https://30dayscoding.com",
    },
};

export default function Webinar() {

    let course = [
        {
            week: 1,
            title: "Foundations of DSA: Arrays and Hashing",
            topics: [
                "Introduction to Data Structures and Algorithms",
                "Complexity Analysis",
                "Arrays and String manipulation",
                "Introduction to Hashing",
                "Problem-solving using Arrays and Hashmaps",
            ],
        },
        {
            week: 2,
            title: "Enhancing Array Techniques: Two Pointers",
            topics: [
                "Two Pointers technique",
                "Problems involving sorting and searching",
                "Multi-pointer problems in multidimensional arrays",
                "Case studies: Two Pointer technique in real-world scenarios",
            ],
        },
        {
            week: 3,
            title: "Stacks and Linked Lists",
            topics: [
                "Introduction to Stacks",
                "Stack operations and problem-solving",
                "Singly and Doubly Linked Lists",
                "Linked List operations and algorithms",
            ],
        },
        {
            week: 4,
            title: "Deep Dive into Linked Lists and Sliding Windows",
            topics: [
                "Advanced problems on Linked Lists",
                "Introduction to the Sliding Window technique",
                "Applying Sliding Window in complex problems",
                "Integration of Linked Lists with other data structures",
            ],
        },
        {
            week: 5,
            title: "Mastering Searching: Binary Search",
            topics: [
                "Understanding Binary Search",
                "Variants of Binary Search",
                "Binary Search in multi-dimensional data",
                "Binary Search in problem-solving",
            ],
        },
        {
            week: 6,
            title: "Trees and Backtracking",
            topics: [
                "Introduction to Trees",
                "Tree Traversal and Manipulation",
                "Introduction to Backtracking",
                "Backtracking problems and techniques",
            ],
        },
        {
            week: 7,
            title: "Advanced Trees and Tries",
            topics: [
                "Binary Search Trees (BST)",
                "Balanced Trees: AVL and Red-Black Trees",
                "Introduction to Tries",
                "Trie operations and applications",
            ],
        },
        {
            week: 8,
            title: "Heap, Priority Queue, and Graph Theory",
            topics: [
                "Introduction to Heap and Priority Queue",
                "Heap operations and problems",
                "Fundamentals of Graph Theory",
                "Graph representation and traversal",
            ],
        },
        {
            week: 9,
            title: "Advanced Graph Algorithms",
            topics: [
                "Shortest path algorithms (Dijkstra's, Bellman-Ford)",
                "Graph problems and cycle detection",
                "Network flow problems",
                "Real-world applications of graph algorithms",
            ],
        },
        {
            week: 10,
            title: "Dynamic Programming",
            topics: [
                "Understanding 1-D Dynamic Programming",
                "Introduction to 2-D Dynamic Programming",
                "DP strategies and techniques",
                "Practice problems on DP",
            ],
        },
        {
            week: 11,
            title: "Specialized Techniques and Topics",
            topics: [
                "Bit Manipulation techniques",
                "Greedy algorithms",
                "Interval problems",
                "Problem-solving using Bit Manipulation and Greedy algorithms",
            ],
        },
        {
            week: 12,
            title: "Finalizing with Math, Geometry, and Revision",
            topics: [
                "Math and geometric algorithms",
                "Comprehensive revision of all topics",
                "Advanced problem-solving",
                "Mock interviews and final tips",
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
            title="Master Data Structures and Algorithms"
            desc="Join our intensive 12-week cohort to become proficient in DSA. Learn essential problem-solving skills, ace technical interviews, and boost your career in software development. Start your journey to mastering DSA today!"
            heroImage="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
