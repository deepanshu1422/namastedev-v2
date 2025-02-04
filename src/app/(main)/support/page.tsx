import { Metadata } from "next";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Support | 30DaysCoding",
  description:
    "This is a support page for our development course for 30 days coding challenge. You can reachout to use anytime. Checkout on www.courses.30dayscoding.com",
};

export default function Home() {
  return (
    <main className="bg-white text-black py-16 px-10 min-h-[90vh] ">
      <div className="max-w-[75rem] m-auto flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Support</h1>
        <h2 className="text-2xl font-bold pt-2">Unable to find email ??</h2>
        <p>Find your email associated with your account </p>
        <Link className="font-semibold text-prime" href={"/find-my-email"}>
          <Button className="text-white bg-prime/90 hover:bg-prime max-sm:w-full"> Find My Email</Button>
        </Link>
        <h2 className="text-2xl font-bold pt-2">Contact Information</h2>
        <p>
          For any support inquiries or assistance, please feel free to contact
          us through the following channels:
        </p>
        <ul className="list-inside list-disc break-words">
          <li>
            Email:{" "}
            <Link
              className="font-semibold text-prime"
              href={"mailto:projectsnightlight@gmail.com"}
            >
              projectsnightlight@gmail.com
            </Link>
          </li>
          {/* <li>Phone: +1234567890</li> */}
          {/* <li>
            DM Chats:{" "}
            <Link
              target="_blank"
              className="font-semibold text-prime pl-2"
              href={"https://www.instagram.com/singh.aryan.45/"}
            >
              Aryan Singh
            </Link>
            ,
            <Link
              target="_blank"
              className="font-semibold text-prime pl-2"
              href={"https://www.instagram.com/itsudhwani/"}
            >
              Deepanshu Udawani
            </Link>
          </li> */}
        </ul>

        <h3 className="text-2xl font-bold text-second capitalize">
          frequently asked questions
        </h3>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border p-2">
            <AccordionTrigger className="text-start">
              How can I access my already purchased course which I am unable to
              find ?
            </AccordionTrigger>
            <AccordionContent>
              If you purchased courses before September 1st, You can find all
              your purchased course on
              <Link
                target="_blank"
                className="font-semibold text-prime pl-2"
                href={"https://courses.30dayscoding.com/s/store"}
              >
                https://courses.30dayscoding.com/s/store
              </Link>
              . Visit here to get the access.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" className="border p-2">
            <AccordionTrigger className="text-start">
              I am facing login issues
            </AccordionTrigger>
            <AccordionContent>
              Please visit{" "}
              <Link
                target="_blank"
                className="font-semibold text-prime pl-2"
                href={"https://30dayscoding.com/dashboard"}
              >
                https://30dayscoding.com/dashboard
              </Link>{" "}
              and see if you have the course access. If you purchased courses
              before September 1st, You can find all your purchased course on
              <Link
                target="_blank"
                className="font-semibold text-prime pl-2"
                href={"https://courses.30dayscoding.com/s/store"}
              >
                https://courses.30dayscoding.com/s/store
              </Link>
              . Visit here to get the access.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-2xl font-bold pt-2">Related Platforms</h2>
        <p>
          30DaysCoding is associated with{" "}
          <Link
            target="_blank"
            className="font-semibold text-prime pl-1"
            href={"https://skillsetmaster.com/"}
          >
            SkillSetMaster
          </Link>
          , a platform dedicated to providing personalized skill development
          courses for learners of all levels. While these platforms are
          connected, they operate independently and maintain separate terms and
          conditions. Users interested in{" "}
          <Link
            target="_blank"
            className="font-semibold text-prime pl-1"
            href={"https://skillsetmaster.com/"}
          >
            SkillSetMaster&apos;s
          </Link>{" "}
          services should review the specific policies on that platform.
        </p>
        <h3 className="text-2xl font-bold text-second">
          POWERED BY NIGHT LIGHT PROJECTS
        </h3>
      </div>
    </main>
  );
}
