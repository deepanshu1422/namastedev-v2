import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Privacy Policy | 30DaysCoding",
  description:
    "A privacy policy page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
};

export default function Home() {
  return (
    <main className="bg-white text-black py-16 px-10">
      <div className="max-w-[75rem] m-auto flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p>
          This Privacy Policy describes how we collect, use, and disclose
          information when you use our website. By accessing or using our
          website, you agree to the terms of this Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold pt-2">Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          and contact details when you submit forms or interact with our
          website. We also automatically collect certain information, such as
          your IP address and browsing activity, using cookies and similar
          technologies.
        </p>

        <h2 className="text-2xl font-bold pt-2">How We Use Your Information</h2>
        <p>
          We use the information we collect to provide and improve our services,
          communicate with you, and personalize your experience on our website.
          We may also use your information for marketing purposes or to comply
          with legal obligations.
        </p>

        <h2 className="text-2xl font-bold pt-2">Information Sharing</h2>
        <p>
          We may share your information with third-party service providers who
          help us operate our website or perform business functions. We may also
          share your information in response to legal requests or to protect our
          rights or the rights of others.
        </p>

        <h2 className="text-2xl font-bold pt-2">Security</h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the Internet or electronic storage is completely
          secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold pt-2">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of any
          material changes by posting the updated policy on this page.
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
          POWERED BY NIGHT LIGHT PROJECTS LLP
        </h3>
      </div>
    </main>
  );
}
