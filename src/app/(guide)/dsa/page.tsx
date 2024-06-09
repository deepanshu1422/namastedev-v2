import { Metadata } from "next";
import Hero from "./hero";
import Cards from "./cards";
import ChallengesTabs from "./challenges";
import Modal from "./modal";

export const metadata: Metadata = {
  title: "The only DSA tracking sheet you NEED | 30dayscoding",
  description:
    "Explore our DSA code platform for mastering Data Structures and Algorithms. Access a wide range of DSA tutorials, practice problems, and coding challenges to enhance your programming skills and ace your technical interviews.",
  openGraph: {
    images: "https://i.ibb.co/7KP3CJp/dsa-1.webp",
    title: "The only DSA tracking sheet you NEED | 30dayscoding",
    description:
      "Explore our DSA code platform for mastering Data Structures and Algorithms. Access a wide range of DSA tutorials, practice problems, and coding challenges to enhance your programming skills and ace your technical interviews.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/7KP3CJp/dsa-1.webp",
    title: "The only DSA tracking sheet you NEED | 30dayscoding",
    description:
      "Explore our DSA code platform for mastering Data Structures and Algorithms. Access a wide range of DSA tutorials, practice problems, and coding challenges to enhance your programming skills and ace your technical interviews.",
    site: "https://30dayscoding.com",
  },
}

export default async function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <div className="mx-auto w-full max-w-[90rem] px-4 lg:px-8 pb-8 flex flex-col gap-2">
        <ChallengesTabs />
        <Modal />
        <h2 className="m-auto text-2xl font-bold text-center py-3 text-pretty">Special Courses just for Prepared for You</h2>
        <Cards data={[
          {
            title: "DSA Complete Placement Course",
            image: "/courses/dsa.jpg",
            link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
            alt: "30 days coding dsa courses",
            description: "Prepare for your dream job with our comprehensive DSA Complete Placement Course. Gain in-depth knowledge of Data Structures and Algorithms through expert-led tutorials and hands-on coding challenges. Perfect for acing technical interviews and boosting your coding proficiency."
          },
          {
            title: "MERN FullStack Web Development",
            image: "/courses/mern.jpg",
            link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
            alt: "30 days coding mern fullstack courses",
            description: "Become a proficient full-stack developer with our MERN FullStack Web Development course. Learn to build dynamic and responsive web applications using MongoDB, Express, React, and Node.js. Ideal for aspiring web developers seeking a comprehensive learning experience."
          },
          {
            title: "Next JS FullStack Web Development",
            image: "/courses/nextjs.jpg",
            link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
            alt: "30 days coding nextjs fullstack web dev courses",
            description: "Master the Next.js framework with our Next JS FullStack Web Development course. Build scalable and high-performance web applications with ease. This course covers everything from basics to advanced techniques, tailored for developers aiming to enhance their skills in modern web development."
          },
        ]} />
      </div>
    </main>
  );
}
