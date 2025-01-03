import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Terms & Conditions | 30DaysCoding",
  description:
    "This is a terms and condition page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
};

export default function Home() {
  return (
    <main className="bg-white text-black py-16 px-10">
      <div className="max-w-[75rem] m-auto flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>

        <h2 className="text-2xl font-bold pt-2">Introduction</h2>
        <p>
          Welcome to 30DaysConding! These terms and conditions outline the rules
          and regulations for the use of our website.
        </p>

        <h2 className="text-2xl font-bold pt-2">
          Intellectual Property Rights
        </h2>
        <p>
          Unless otherwise stated, 30DaysConding and its licensors own the
          intellectual property rights for all material on our website. All
          intellectual property rights are reserved.
        </p>

        <h2 className="text-2xl font-bold pt-2">Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul className="list-inside list-disc">
          <li>publishing any website material in any other media;</li>
          <li>
            selling, sublicensing and otherwise commercializing any website
            material;
          </li>
          <li>publicly performing or showing any website material;</li>
          <li>
            using this website in any way that is or may be damaging to this
            website;
          </li>
          <li>
            using this website in any way that impacts user access to this
            website;
          </li>
          <li>
            using this website contrary to applicable laws and regulations, or
            in any way may cause harm to the website, or to any person or
            business entity;
          </li>
          <li>
            engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this website;
          </li>
          <li>using this website to engage in any advertising or marketing.</li>
        </ul>

        <h2 className="text-2xl font-bold pt-2">Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </p>
        <ul className="list-inside list-disc">
          <li>
            limit or exclude our or your liability for death or personal injury;
          </li>
          <li>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
          </li>
          <li>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law; or
          </li>
          <li>
            exclude any of our or your liabilities that may not be excluded
            under applicable law.
          </li>
        </ul>

        <h2 className="text-2xl font-bold pt-2">Changes</h2>
        <p>
          We reserve the right to revise these terms and conditions at any time
          as we see fit, and by using this website you are expected to review
          these terms and conditions regularly.
        </p>

        <h2 className="text-2xl font-bold pt-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <Link
            className="font-semibold text-prime"
            href={"mailto:support@projectsnightlight.freshdesk.com"}
          >
            support@projectsnightlight.freshdesk.com
          </Link>
          .
        </p>
        <p>
          This Privacy Policy describes how we collect, use, and disclose
          information when you use our website. By accessing or using our
          website, you agree to the terms of this Privacy Policy.
        </p>
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
            SkillSetMaster's
          </Link>{" "}
          services should review the specific policies on that platform.
        </p>
        <h3 className="text-2xl font-bold text-second">
          POWERED BY NIGHT LIGHT PROJECTS LLP
        </h3>
      </div>
    </main>
  );
}
