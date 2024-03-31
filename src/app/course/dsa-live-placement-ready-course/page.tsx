import Hero from "@/components/new-cohort/hero";
import type { Metadata } from "next";
import Testimonials from "@/components/mentorship-comp/testimonials";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import NewMentor from "@/components/new-cohort/new-mentor";
import Highlights from "@/components/new-cohort/highligths";
import Faqs from "@/components/mentorship-comp/faq";
import { notFound } from "next/navigation";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Get Placed Faster with Live DSA Classes",
  description:
    "A live dsa placement ready course from 30 days coding. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/dsa.jpg",
  },
};

export default function Home() {
  let faq = [
    {
      question: "What is the duration of the DSA Placement Ready Cohort?",
      answer:
        "The DSA Placement Ready Cohort typically lasts for 12 weeks, providing comprehensive mentorship and training to prepare participants for successful placements.",
    },
    {
      question: "How often are live sessions conducted during the cohort?",
      answer:
        "Live sessions are conducted regularly throughout the week, offering interactive discussions, Q&A sessions, and guidance from experienced mentors to enhance learning and skill development.",
    },
    {
      question: "What topics are covered in the DSA Placement Ready Cohort?",
      answer:
        "The cohort covers a wide range of topics essential for Data Structures and Algorithms mastery, including but not limited to arrays, linked lists, trees, sorting algorithms, graph algorithms, and dynamic programming.",
    },
    {
      question: "Are there any prerequisites to join the cohort?",
      answer:
        "While there are no strict prerequisites, participants are expected to have basic programming knowledge and familiarity with concepts like variables, loops, conditionals, and functions.",
    },
    {
      question:
        "How are mentorship and support provided throughout the cohort?",
      answer:
        "Participants receive personalized mentorship and support from industry experts through one-on-one sessions, group discussions, and dedicated forums, ensuring their individual learning needs are addressed effectively.",
    },
    {
      question: "Is there any hands-on project work included in the cohort?",
      answer:
        "Yes, participants engage in hands-on projects and coding challenges to apply their knowledge in real-world scenarios, enhancing their practical problem-solving skills and portfolio.",
    },
    {
      question:
        "What kind of assistance is provided for placement preparation?",
      answer:
        "The cohort offers comprehensive placement preparation assistance, including resume review, mock interviews, and career guidance sessions, to help participants confidently navigate the recruitment process and secure job offers.",
    },
    {
      question: "What is the refund policy for the DSA Placement Ready Cohort?",
      answer:
        "We understand that circumstances may change, so we offer a refund policy that ensures satisfaction. If for any reason you're not satisfied with the cohort, you can request a refund within X days of enrollment.",
    },
  ];

  return notFound();

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Get Placed Faster with Live DSA Classes starting from April 20th"
        desc="Learn from Aryan, Abhinav, Deepanshu, and the 30DC team to get placed this season."
        subTitle="Crack Top Tech Product Companies"
        subDesc="Master DSA through practicing algorithms under expert's guidance from industry professionals. A placement driven course."
        ytId="tJkZA9JoZCw"
        heroImage="https://i.ibb.co/q5k6zZz/dsa.jpg"
        // heroImage="https://i.ibb.co/SdZJSMh/algo.gif"
      />
      <Course course={course} />
      <NewMentor />
      <Companies />
      <Highlights />
      <Testimonials />
      <Faqs faq={faq} />
    </main>
  );
}
