'use client'
import Video from "@/components/new-cohort/video";
import Faqs from "@/components/mentorship-comp/faq";
import JoinUs from "./joinus";
import Features from "./features";
import MentorshipGallary from "./mentorship-gallery";
import Lifetime from "./lifetime";
import Success from "@/components/mentorship-comp/success";
import Floating from "./floating";
import Mentor from "@/components/new-cohort/mentor";
import Interakt from "@/util/interakt";
import Mentors from "./mentors";
import { PaymentModal, PaymentSheet } from "./payment";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function Main({
  faq,
}: {
  faq: {
    question: string;
    answer: string;
  }[];
}) {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* <NewHero /> */}
      {/* <Hero
        title="Lifetime 1:1 Mentorship + 10 Course Access"
        desc="Learn from Aryan, Deepanshu, and the 30DC team to get placed this season."
        heroImage="/main/hero_section_mentor.png"
        /> */}
        {/* <Script
        id="mentorship-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [${faq.map(({ answer, question }) =>
            JSON.stringify({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: `<p>${answer}</p>`,
              },
            })
          )}]
        }`,
        }}
      /> */}
      <Lifetime setOpen={setOpen} />
      <Mentors />
      <Success />
      <Video
        title={"Trusted by 1000s of Students"}
        desc={
          "We will help you till you find the best job opportunity across the globe. hear it from our students and decide for yourselves."
        }
        youtubeId={"2cZ_7LuxEQI"}
      />
      {/* <MentorshipGallary setOpenPay={setOpen} /> */}
      <Features />
      <Faqs faq={faq} />
      {/* <Interakt /> */}
      <Floating setOpen={setOpen} />
      <PaymentSheet
        amount={8000}
        courseId="querty"
        cover="./mentorship.jpg"
        curreny="USD"
        open={open}
        setOpen={setOpen}
        setOpenPay={setOpenModal}
        title="1:1 Mentorship Lifetime Access"
      />
      <PaymentModal payModal={openModal} setOpenPay={setOpenModal} />
      {/* <Highlights /> */}
      {/* <Testimonials /> */}
      {/* <Video
        title={"Best Practices for Developers by Our Mentors"}
        desc={
          "Explore the latest technologies wit the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"KMufzzSF6SE"}
      /> */}
      {/* <Video
        title={"1:1 Live Session with our Mentors"}
        desc={
          "Explore the latest technologies with the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"gIx8D2pyXVI"}
      /> */}
    </div>
  );
}
