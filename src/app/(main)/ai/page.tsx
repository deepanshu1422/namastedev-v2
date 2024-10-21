import type { Metadata } from "next";
import Script from "next/script";
import Main from "./main";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Become a Modern AI Developer | 30dayscoding",
  description:
    "Master AI development with our comprehensive mentorship program. Learn cutting-edge techniques, work on real-world projects, and get guidance from industry experts.",
  openGraph: {
    images: "https://i.ibb.co/p2jp1S1/30dc2.webp",
    title: "Become a Modern AI Developer | 30dayscoding",
    description:
      "Master AI development with our comprehensive mentorship program. Learn cutting-edge techniques, work on real-world projects, and get guidance from industry experts.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["AI development", "machine learning", "deep learning", "artificial intelligence", "coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/p2jp1S1/30dc2.webp",
    title: "Become a Modern AI Developer | 30dayscoding",
    description:
      "Master AI development with our comprehensive mentorship program. Learn cutting-edge techniques, work on real-world projects, and get guidance from industry experts.",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  let faq = [
    {
      question: "What topics are covered in the AI developer program?",
      answer:
        "Our AI developer program covers a wide range of topics essential for modern AI development. This includes machine learning, deep learning, natural language processing, computer vision, reinforcement learning, and ethical AI. You'll also learn about popular AI frameworks and tools such as TensorFlow, PyTorch, and scikit-learn.",
    },

    {
      question: "Do I need prior experience in AI to join this program?",
      answer:
        "While some programming experience is beneficial, our program is designed to accommodate learners at various levels. We start with the fundamentals and progressively move to more advanced topics. However, a basic understanding of Python programming is recommended to get the most out of the course.",
    },

    {
      question: "How hands-on is the AI developer mentorship?",
      answer:
        "Our AI developer mentorship is highly practical. You'll work on real-world projects, participate in coding challenges, and build your own AI applications. Our mentors provide guidance, code reviews, and help you troubleshoot issues, ensuring you gain practical experience alongside theoretical knowledge.",
    },

    {
      question: "Can I specialize in a particular area of AI?",
      answer:
        "Absolutely! While our program provides a comprehensive overview of AI development, you can choose to specialize in areas like computer vision, natural language processing, or reinforcement learning. Our mentors can guide you towards resources and projects that align with your specific interests within the AI field.",
    },

    {
      question: "How does the program keep up with the rapidly evolving AI field?",
      answer:
        "We continuously update our curriculum to reflect the latest advancements in AI. Our mentors are active practitioners in the field, ensuring you learn cutting-edge techniques and best practices. We also encourage students to explore recent research papers and implement state-of-the-art models as part of their learning journey.",
    },

    {
      question: "Are there opportunities to collaborate on AI projects?",
      answer:
        "Yes! We foster a collaborative learning environment. You'll have opportunities to work on team projects, participate in AI hackathons, and engage in discussions with fellow learners. This not only enhances your learning but also helps you build a network within the AI community.",
    },

    {
      question: "How can I showcase my AI projects to potential employers?",
      answer:
        "We guide you in building a strong portfolio of AI projects. You'll learn how to document your work, create GitHub repositories, and present your projects effectively. We also provide advice on how to discuss your AI projects in interviews and how to contribute to open-source AI initiatives to gain visibility in the community.",
    },
  ];

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Main faq={faq} />
    </main>
  );
}
