import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Reveal from "@/components/framer/reveal";

type Faq = { index: number; question: string; answer: string };

function Faq({ index, question, answer }: Faq) {
  return (
    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="flex flex-col w-full items-start justify-center gap-5 rounded-xl border-head bg-second p-1 px-5">
      <AccordionItem
        className="flex flex-col items-start gap-4 self-stretch w-full"
        value={`item-${index}`}
      >
        <AccordionTrigger className="flex items-center gap-4 text-base text-start font-semibold leading-6 text-white w-full">
          <span itemProp="name">{question}</span>
        </AccordionTrigger>
        <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="flex bg-second flex-col gap-4">
          <hr className="h-px w-full border-prime" />
          <p itemProp="text" className="w-full max-lg:text-sm text-base leading-5">{answer}</p>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}

export default function Faqs({
  faq,
}: {
  faq: { question: string; answer: string }[];
}) {
  let faqs: Partial<Faq>[] = [
  //   {
  //   question: "What is the refund policy ?",
  //   answer: "At 30DC, we strive to ensure that our users have a positive and rewarding experience with our courses.If, for any reason, you are not satisfied with your purchase, we offer a hassle - free refund policy.You can request a refund within 30 days of your purchase.To initiate a refund, please contact our support team at projectsnightlight @gmail.com with your order details.Once your request is processed, you will receive a confirmation email, and the refund will be credited to your original method of payment within 5 - 7 business days."
  // },

  {
    question: "Do I get access to all courses ?",
    answer: "Yes, absolutely! When you purchase the mentorship, you gain access to all the courses available in our library.This means you can explore a wide range of topics and learn at your own pace.Our comprehensive course catalog is designed to cover various aspects of web development, data structures, AI, and much more.You can revisit any course as often as you like, ensuring that you have all the resources you need to achieve your learning goals."
  },

  {
    question: "How long is the mentorship ?",
    answer: "Our mentorship program is designed to provide you with lifetime support.Once you enroll in our courses, you will have access to mentors who are industry experts and experienced professionals.They will guide you throughout your learning journey, offering valuable insights, feedback, and personalized advice.Whether you have questions about course material, need career guidance, or seek project - specific advice, our mentors are here to help you succeed, long after you have completed your courses."
  },

  {
    question: "Any more questions?",
    answer: "If you have any additional questions or need further assistance, we are here to help! Please feel free to reach out to us at support@projectsnightlight.freshdesk.com. Our dedicated support team is always ready to provide you with the information and support you need. Whether you have inquiries about course content, technical issues, or any other concerns, don’t hesitate to contact us. We aim to respond to all queries promptly and ensure that your experience with Projects Nightlight is as smooth and enjoyable as possible."
  }]

  // [
  //   {
  //     question: "What is the validity of the Course?",
  //     answer:
  //       "The validity of the Course typically depends on the institution or organization offering it, as well as the specific nature of the Course itself. Most Courses come with a predetermined duration or validity period, which can range from a few weeks to several years, or certainly for lifetime. It's important for participants to carefully review the terms and conditions outlined by the provider to understand the duration for which the Course materials, access to resources, and any certifications or credentials awarded upon completion remain valid.",
  //   },
  //   {
  //     question: "What's the refund policy?",
  //     answer:
  //       "Our refund policy is designed to provide peace of mind to our participants. We offer a hassle-free refund process, ensuring complete satisfaction with your experience. If for any reason you're not satisfied with the Course, you can request a refund without encountering any problems. We value your trust and aim to make the refund process as straightforward as possible, prioritizing customer satisfaction above all else.",
  //   },

  //   {
  //     question: "How do I contact you?",
  //     answer:
  //       "Please email us at support@nightlightprojects.freshdesk.com. You all can directly DM us on our social media links provided below.",
  //   },

  //   {
  //     question: "Would there be any kind of certificate?",
  //     answer: "Yes, you will get a certificate after completion.",
  //   },
  // ];

  return (
    <div className="gap-5 lg:gap-7 m-auto grid grid-cols-1 place-items-center p-6 lg:p-10 max-w-[75rem]">
      <Reveal>
        <span className="flex items-center justify-center gap-4 relative">
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
          <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
            FAQs
          </h2>
          <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
        </span>
      </Reveal>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col items-start gap-4 self-stretch w-full"
      >
        {faq.map(({ answer, question }, i) => (
          <Reveal width="100%" key={i}>
            <Faq index={i} question={question!} answer={answer!} />
          </Reveal>
        ))}
      </Accordion>
    </div>
  );
}
