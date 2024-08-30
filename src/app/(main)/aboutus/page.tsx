import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "About Us | 30DaysCoding",
  description:
    "This is a about page for our development course for 30 days coding challenge. You can reachout to use anytime. Checkout on www.courses.30dayscoding.com",
};

export default function Home() {
  return (
    <main className="bg-white text-black py-16 px-10 min-h-[90vh] ">
      <div className="max-w-[75rem] m-auto flex flex-col gap-3">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p>
          Stay ahead with our cutting-edge courses. Join Deepanshu Udhwani to
          master coding, software development, web design, and data analysis.
          Gain practical skills and insights into industry trends. All levels
          welcome.
        </p>
        <h2 className="text-2xl font-bold pt-2">Contact Information</h2>
        <p>
          For any support inquiries or assistance, please feel free to contact
          us through the following channels:
        </p>
        <ul className="list-inside list-disc">
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
        <h3 className="text-2xl font-bold text-second">
          POWERED BY NIGHT LIGHT PROJECTS
        </h3>
      </div>
    </main>
  );
}
