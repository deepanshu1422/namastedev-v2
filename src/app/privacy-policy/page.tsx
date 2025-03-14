'use client';

import SupportPageLayout from "@/components/support-pages/layout";

export default function PrivacyPolicy() {
  return (
    <SupportPageLayout title="Privacy Policy">
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          At 30DC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>
        <p className="text-gray-300 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Register for our courses or services</li>
          <li>Sign up for our newsletter</li>
          <li>Participate in contests or surveys</li>
          <li>Contact us with inquiries</li>
          <li>Post comments or feedback</li>
        </ul>
        <p className="text-gray-300 mt-4">This information may include:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Name, email address, and contact details</li>
          <li>Billing information and payment details</li>
          <li>Educational background and professional information</li>
          <li>User preferences and course progress</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">We may use the information we collect for various purposes, including:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Providing and maintaining our services</li>
          <li>Processing transactions and sending related information</li>
          <li>Responding to inquiries and offering support</li>
          <li>Sending administrative information</li>
          <li>Sending marketing and promotional communications</li>
          <li>Improving our website and services</li>
          <li>Analyzing usage patterns and trends</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Cookies and Tracking Technologies</h2>
        <p className="text-gray-300 mb-4">
          We use cookies and similar tracking technologies to track activity on our website and store certain information. 
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Third-Party Disclosure</h2>
        <p className="text-gray-300 mb-4">
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described below:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Service providers who assist us in operating our website and conducting our business</li>
          <li>Partners with whom we offer joint products or services</li>
          <li>When required by law or to protect our rights</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Data Security</h2>
        <p className="text-gray-300 mb-4">
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-300 mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-300">
          If you have any questions about this Privacy Policy, please contact us at <span className="text-[#22C55E]">support@projectsnightlight.freshdesk.com</span>.
        </p>
      </div>
    </SupportPageLayout>
  );
} 