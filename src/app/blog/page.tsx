import type { Metadata } from "next";
import Hero from "./hero";
import Mid from "@/components/blog-comps/mid";
import Latest from "@/components/blog-comps/latest";
import Blog from "./blog";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Blog | 30dayscoding",
  description:
    "Explore insightful and engaging blog posts covering a range of topics to empower your career journey. From professional development tips to industry insights, find the inspiration and guidance you need to unlock your full potential.",
  openGraph: {
    images: "/cohort.jpg",
  },
};

export default function Home() {
  let blogs = [
    {
      title: "Mastering JavaScript Closures: The Definitive Guide",
      slug: "javascript-closures",
      metaDescription:
        "Unlock the power of closures in JavaScript with this comprehensive guide. Learn what closures are, how they work, use cases, and best practices to level up your JavaScript fundamentals and JavaScript concepts.",
      heroImage: {
        title: "laptop with typing hands",
        description: "laptop with typing hands",
        url: "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg",
        height: 832,
        width: 1088,
      },
    },
    {
      title:
        "7 JavaScript Interview Questions to Prepare for Technical Interviews",
      slug: "javascript-interview-questions",
      metaDescription:
        "Get ahead of the competition with these 7 must-know JavaScript interview questions. From variables to closures, this guide covers key concepts to ace coding interviews.",
      heroImage: {
        title: "laptop with typing hands",
        description: "laptop with typing hands",
        url: "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg",
        height: 832,
        width: 1088,
      },
    },
    {
      title: "Bubble Sort – Data Structure and Algorithm Tutorials",
      slug: "bubble-sort",
      metaDescription:
        "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
      heroImage: {
        title: "bubble",
        description: "bubble sorting image",
        url: "https://images.ctfassets.net/f7l5sefbt57k/2bPliWwoP430YzGBvNRb6F/bc56e5f8d8d807f217c275dbaa9092b8/al.webp",
        height: 470,
        width: 1000,
      },
    },
    {
      title:
        "Using JWT (JSON Web Tokens) to authorize users and protect API routes",
      slug: "jwt-auth",
      metaDescription:
        "Using JWT (JSON Web Tokens) to authorize users and protect API routes",
      heroImage: {
        title: "dancing",
        description: "dancing with joy",
        url: "https://images.ctfassets.net/f7l5sefbt57k/5aNUJSEmbqAaUOLV9KFK6w/05c05830eb761c393f95f483681165b3/1_ev2YqevQZ6CPjE3i5PDtsw.gif",
        height: 208,
        width: 370,
      },
    },
    {
      title: "our first blog",
      slug: "this-is-stupid",
      metaDescription:
        "how the hell am i supposed to know what is blog is about ",
      heroImage: {
        title: "testa",
        description: "aff",
        url: "https://images.ctfassets.net/f7l5sefbt57k/2G8XDs8qOHKaNadIDFaztm/c192a64ffd015707934a072d618bebaf/node.webp",
        height: 533,
        width: 800,
      },
    },
  ];

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Discover Success with Our Blogs"
        desc="Explore insightful and engaging blog posts covering a range of topics to empower your career journey."
        heroImage="https://p0.pxfuel.com/preview/728/375/731/aerial-analog-background-blog.jpg"
        blogs={blogs}
      />
      <Mid blogs={blogs} />
      <Latest />
      <Blog />
      {/* <Faqs faq={faq} /> */}
    </main>
  );
}
