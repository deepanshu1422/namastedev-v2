import { Metadata } from "next";
import Link from "next/link";

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

        {/* <h2 className="text-2xl font-bold pt-2">
          Frequently Asked Questions (FAQs)
        </h2>
        <p>
          Before reaching out to us, you may find the answer to your question in
          our frequently asked questions section:
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a href="#faq1">How do I create an account?</a>
          </li>
          <li>
            <a href="#faq2">What payment methods do you accept?</a>
          </li>
          <li>
            <a href="#faq3">How can I track my order?</a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold pt-2" id="faq1">
          How do I create an account?
        </h2>
        <p>
          To create an account, simply click on the "Sign Up" button on the top
          right corner of our website and follow the prompts to fill in your
          details.
        </p>

        <h2 className="list-inside list-disc" id="faq2">
          What payment methods do you accept?
        </h2>
        <p>
          We accept various payment methods, including credit/debit cards,
          PayPal, and bank transfers. You can view all available payment options
          during the checkout process.
        </p>

        <h2 className="text-2xl font-bold pt-2" id="faq3">
          How can I track my order?
        </h2>
        <p>
          Once your order has been shipped, you will receive a tracking number
          via email. You can use this tracking number to monitor the status and
          location of your package.
        </p> */}

        {/* <h2 className="text-2xl font-bold pt-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          
          .
        </p> */}
        <h3 className="text-2xl font-bold text-second">
          POWERED BY NIGHT LIGHT PROJECTS
        </h3>
      </div>
    </main>
  );
}
