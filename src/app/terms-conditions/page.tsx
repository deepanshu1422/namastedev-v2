'use client';

import SupportPageLayout from "@/components/support-pages/layout";

export default function TermsConditions() {
  return (
    <SupportPageLayout title="Terms & Conditions">
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          Welcome to 30DC. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
          Please review these terms carefully before using our platform.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-300 mb-4">
          By accessing or using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. 
          If you do not agree to these terms, please do not use our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">2. User Accounts</h2>
        <p className="text-gray-300 mb-4">
          When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">3. Course Access and Licenses</h2>
        <p className="text-gray-300 mb-4">
          Upon purchasing a course, you are granted a non-exclusive, non-transferable license to access and use the course materials for personal, non-commercial purposes. You may not:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Share your account or course access with others</li>
          <li>Copy, reproduce, distribute, or publicly display course materials</li>
          <li>Modify, create derivative works, or reverse engineer any part of our platform</li>
          <li>Use our content for commercial purposes without explicit permission</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">4. Payment and Refunds</h2>
        <p className="text-gray-300 mb-4">
          All payments are processed securely through our payment processors. Prices for courses are subject to change without notice. 
          Refunds are governed by our Refund Policy, which is incorporated into these Terms and Conditions.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">5. Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          All content on our platform, including courses, videos, text, graphics, logos, and software, is the property of 30DC or our content creators and is protected by intellectual property laws.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">6. User Conduct</h2>
        <p className="text-gray-300 mb-4">
          You agree not to engage in any conduct that may:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on the rights of others</li>
          <li>Interfere with the operation of our platform</li>
          <li>Contain harmful content or malware</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">7. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          To the maximum extent permitted by law, 30DC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">8. Changes to Terms</h2>
        <p className="text-gray-300 mb-4">
          We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">9. Contact Information</h2>
        <p className="text-gray-300">
          If you have any questions about these Terms and Conditions, please contact us at <span className="text-[#22C55E]">support@projectsnightlight.freshdesk.com</span>.
        </p>
      </div>
    </SupportPageLayout>
  );
} 