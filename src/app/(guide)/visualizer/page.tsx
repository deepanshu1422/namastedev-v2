import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "DSA Visualizations | 30dayscoding",
  description:
    "Explore interactive visualizations for key Data Structures and Algorithms concepts. Enhance your understanding of DSA with our visual learning tools.",
  openGraph: {
    images: "https://i.ibb.co/7KP3CJp/dsa-1.webp",
    title: "DSA Visualizations | 30dayscoding",
    description:
      "Dive into interactive visualizations for Data Structures and Algorithms. Improve your DSA skills with our visual learning platform.",
    url: "https://30dayscoding.com/visualizer",
    type: "website",
  },
  keywords: ["DSA visualizations, algorithm visualization, data structures, algorithms, visual learning"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/7KP3CJp/dsa-1.webp",
    title: "DSA Visualizations | 30dayscoding",
    description:
      "Explore interactive visualizations for key Data Structures and Algorithms concepts. Enhance your understanding of DSA with our visual learning tools.",
    site: "https://30dayscoding.com",
  },
};

const dsaSections = [
  { title: "Sliding Window", href: "/visualizer/sliding-window" },
  { title: "Two Pointers", href: "/visualizer/two-pointers" },
  { title: "Fast & Slow Pointers", href: "/visualizer/fast-slow-pointers" },
  { title: "Linked List Cycle", href: "/visualizer/linked-list-cycle" },
//   { title: "Cyclic Sort", href: "/visualizer/cyclic-sort" },
//   { title: "In-place Reversal of a LinkedList", href: "/visualizer/in-place-reversal-linkedlist" },
//   { title: "Tree Breadth First Search", href: "/visualizer/tree-bfs" },
//   { title: "Tree Depth First Search", href: "/visualizer/tree-dfs" },
//   { title: "Two Heaps", href: "/visualizer/two-heaps" },
//   { title: "Subsets", href: "/visualizer/subsets" },
//   { title: "Modified Binary Search", href: "/visualizer/modified-binary-search" },
//   { title: "Bitwise XOR", href: "/visualizer/bitwise-xor" },
//   { title: "Top 'K' Elements", href: "/visualizer/top-k-elements" },
//   { title: "K-way Merge", href: "/visualizer/k-way-merge" },
//   { title: "0/1 Knapsack", href: "/visualizer/0-1-knapsack" },
//   { title: "Topological Sort", href: "/visualizer/topological-sort" },
];

export default async function Home() {
  return (
    <main className="w-full flex flex-col">
      <div className="mx-auto w-full max-w-[90rem] px-4 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">DSA Visualizations</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dsaSections.map((section, index) => (
            <Link key={index} href={section.href} className="block h-full">
              <div className="border-white border-2 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow h-full flex items-center justify-center">
                <h2 className="text-xl font-semibold text-center">{section.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <p className="w-full max-w-4xl mx-auto mb-4 border-2 border-gray-300 p-4 text-center my-5">
        Adding more visualizations soon!
        Check out our <a
          href="https://30dayscoding.com/bundle/complete-package-all-course-bundle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 underline ml-1"
        >
          upskilling courses
        </a>. Any bugs? Give <a
          href="https://forms.gle/X5bgfQbhcAPNaZaB8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 underline ml-1"
        > feedback
        </a>
      </p>
    </main>
  );
}
