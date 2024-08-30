import type { Metadata } from "next";
import Hero from "./hero";
import Mid from "@/components/blog-comps/mid";
import Latest from "@/components/blog-comps/latest";
import Blog from "./blog";
import Gallery from "./gallery";
import { cache } from "react";
import prisma from "@/util/prismaClient";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const metadata: Metadata = {
  title: "Blog | 30dayscoding",
  description:
    "Explore insightful and engaging blog posts covering a range of topics to empower your career journey. From professional development tips to industry insights, find the inspiration and guidance you need to unlock your full potential.",
  openGraph: {
    images: "https://i.ibb.co/ZSkm4HH/30dc1.webp",
    title: "Blog | 30dayscoding",
    description:
      "Explore insightful and engaging blog posts covering a range of topics to empower your career journey. From professional development tips to industry insights, find the inspiration and guidance you need to unlock your full potential.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/ZSkm4HH/30dc1.webp",
    title: "Blog | 30dayscoding",
    description:
      "Explore insightful and engaging blog posts covering a range of topics to empower your career journey. From professional development tips to industry insights, find the inspiration and guidance you need to unlock your full potential.",
    site: "https://30dayscoding.com",
  },
};

export const revalidate = 3600;

const fetchBlogs = cache(async () => {
  const item = await prisma.blog.findMany({
    take: 200,
    orderBy: { createdAt: "desc" },
    take: 200,
    select: {
      title: true,
      description: true,
      slug: true,
      heroImage: {
        select: {
          url: true,
          alt: true,
        },
      },
      createdAt: true,
    },
  });
  // if (!item) throw { error: "Not found" };
  return item;
});

export default async function Home() {
  // let blogs = [
  //   {
  //     title:
  //       "The Ultimate Guide to Preparing for a Python Programming Interview as a Fresher",
  //     slug: "python-programming-interview-guide-for-freshers",
  //     metaDescription:
  //       "Learn how to ace your Python programming interview as a fresher with these essential tips, resources, and practice problems. Boost your confidence and land your dream job!",
  //     heroImage: {
  //       title: "laptop with typing hands",
  //       description: "laptop with typing hands",
  //       url: "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg",
  //       height: 832,
  //       width: 1088,
  //     },
  //   },
  //   {
  //     title: "Acing Your Technical Interview as a Fresher: Tips and Strategies",
  //     slug: "acing-technical-interviews-for-freshers",
  //     metaDescription:
  //       "Preparing for a technical interview as a fresher can be daunting. This blog post provides actionable tips and strategies to help you succeed, including what to study, practice problems, mock interviews, and more. Boost your confidence and land your dream job!",
  //     heroImage: {
  //       title: "laptop with typing hands",
  //       description: "laptop with typing hands",
  //       url: "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg",
  //       height: 832,
  //       width: 1088,
  //     },
  //   },
  //   {
  //     title:
  //       "Mastering the JavaScript Interview: Tips and Strategies for Success",
  //     slug: "mastering-the-javascript-interview-tips-and-strategies-for-success",
  //     metaDescription:
  //       "Ace your next JavaScript interview with these essential tips and strategies. Learn how to prepare, showcase your skills, and impress potential employers as a fresher in the field.",
  //     heroImage: {
  //       title: "bubble",
  //       description: "bubble sorting image",
  //       url: "https://images.ctfassets.net/f7l5sefbt57k/2bPliWwoP430YzGBvNRb6F/bc56e5f8d8d807f217c275dbaa9092b8/al.webp",
  //       height: 470,
  //       width: 1000,
  //     },
  //   },
  //   {
  //     title: "Cracking the Python Interview: Essential Tips for Freshers",
  //     slug: "python-interview-preparation-tips-for-freshers",
  //     metaDescription:
  //       "Preparing for a Python interview as a fresher can be daunting. This comprehensive guide provides essential tips, common questions, and valuable resources to help you ace your Python interview and land your dream job.",
  //     heroImage: {
  //       title: "dancing",
  //       description: "dancing with joy",
  //       url: "https://images.ctfassets.net/f7l5sefbt57k/5aNUJSEmbqAaUOLV9KFK6w/05c05830eb761c393f95f483681165b3/1_ev2YqevQZ6CPjE3i5PDtsw.gif",
  //       height: 208,
  //       width: 370,
  //     },
  //   },
  //   {
  //     title:
  //       "7 Essential Technical Interview Questions on JavaScript for Freshers",
  //     slug: "7-essential-javascript-interview-questions-for-freshers",
  //     metaDescription:
  //       "Ace your next JavaScript technical interview with these 7 essential questions covering core concepts like hoisting, closures, 'this' keyword, and more. Perfect prep for freshers and early-career developers.",
  //     heroImage: {
  //       title: "testa",
  //       description: "aff",
  //       url: "https://images.ctfassets.net/f7l5sefbt57k/2G8XDs8qOHKaNadIDFaztm/c192a64ffd015707934a072d618bebaf/node.webp",
  //       height: 533,
  //       width: 800,
  //     },
  //   },
  // ];

  const blogs = await fetchBlogs();

  if (!blogs) return <></>;

  if (blogs instanceof PrismaClientKnownRequestError) return <></>;

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Discover Success with Our Blogs"
        desc="Explore insightful and engaging blog posts covering a range of topics to empower your career journey."
        heroImage="https://p0.pxfuel.com/preview/728/375/731/aerial-analog-background-blog.jpg"
        blogs={blogs.slice(0, 10)}
      />
      <Mid blogs={blogs} />
      <Latest blogs={[blogs[0], blogs[1], blogs[2]]} />
      <Blog blog={blogs[4]} />
      <Gallery blogs={blogs} />
      {/* <Faqs faq={faq} /> */}
    </main>
  );
}
