import { Metadata } from "next";
import Hero from "./hero";
import About from "./about";
import Course from "@/components/new-cohort/course";
import Success from "@/components/mentorship-comp/success";
import Mentor from "@/components/new-cohort/mentor";

export const metadata: Metadata = {
    title: "Live Cohort | 30dayscoding",
    description:
        "Know the secrets to cracking a 10 LPA job and crafting the perfect resume in our power-packed webinar. Upgrade your career with expert insights and practical strategies. Join us now!",
    openGraph: {
        images: "https://i.ibb.co/513C6Jm/webinar-1.webp",
        title: "Live Cohort | 30dayscoding",
        description:
            "Know the secrets to cracking a 10 LPA job and crafting the perfect resume in our power-packed webinar. Upgrade your career with expert insights and practical strategies. Join us now!",
        url: "https://30dayscoding.com",
        type: "website",
    },
    keywords: ["30 days coding, coding, coding challenges"],
    twitter: {
        card: "summary_large_image",
        images: "https://i.ibb.co/513C6Jm/webinar-1.webp",
        title: "Live Cohort | 30dayscoding",
        description:
            "Know the secrets to cracking a 10 LPA job and crafting the perfect resume in our power-packed webinar. Upgrade your career with expert insights and practical strategies. Join us now!",
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

    return (<main className="bg-background bg-bg min-h-svh transition-all">
        <Hero title="Master the art for Cracking 10 LPA Job" desc="Know the secrets to cracking a 10 LPA job and crafting the perfect resume in our power-packed live vohort. Upgrade your career with expert insights and practical strategies. Join us now!" heroImage="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <About />
        <Course course={course} />
        <Success />
        <Mentor />
    </main>)
}