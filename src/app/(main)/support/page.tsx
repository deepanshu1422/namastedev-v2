import { Metadata } from "next";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
              href={"mailto:support@nightlightprojects.freshdesk.com"}
            >
              support@nightlightprojects.freshdesk.com
            </Link>
          </li>
          {/* <li>Phone: +1234567890</li> */}
          <li>
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
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-second capitalize">
          frequently asked questions
        </h3>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b">
            <AccordionTrigger className="text-start">
              How can I access my already purchased course which I am unable to
              find ?
            </AccordionTrigger>
            <AccordionContent>
              Do not worry all your purchased courses are safe just store on another platform, You can find all your purchased course on
              <Link
                target="_blank"
                className="font-semibold text-prime pl-2"
                href={"https://courses.30dayscoding.com/s/store"}
              >
                https://courses.30dayscoding.com/s/store
              </Link>. Visit here to get the access.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h3 className="text-2xl font-bold text-second">
          POWERED BY NIGHT LIGHT PROJECTS
        </h3>
      </div>
    </main>
  );
}
