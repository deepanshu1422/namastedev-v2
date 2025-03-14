'use client';

import SupportPageLayout from "@/components/support-pages/layout";

export default function RefundPolicy() {
  return (
    <SupportPageLayout title="Refund Policy">
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          At 30DC, we are committed to providing high-quality digital educational content and services. Please read our refund policy carefully before making a purchase.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">No-Refund Policy</h2>
        <p className="text-gray-300 mb-4">
          Due to the digital nature of our products and services, all sales are final and non-refundable. When you purchase our courses, you gain immediate access to valuable digital content that cannot be returned.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Reasons for Our No-Refund Policy</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Our courses provide immediate access to premium digital content that cannot be "returned" once accessed.</li>
          <li>We invest significant resources in creating high-quality educational materials.</li>
          <li>Detailed course descriptions, previews, and curriculum outlines are provided before purchase to help you make informed decisions.</li>
          <li>Our team is available to answer any questions about course content before you make a purchase.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Exceptions</h2>
        <p className="text-gray-300 mb-4">
          In rare circumstances, we may consider exceptions to our no-refund policy:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Technical issues that prevent course access and cannot be resolved by our support team.</li>
          <li>Significant and verifiable discrepancies between the course description and the actual content delivered.</li>
        </ul>
        <p className="text-gray-300 mt-4">
          These exceptions are evaluated on a case-by-case basis and require substantial documentation.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Before You Purchase</h2>
        <p className="text-gray-300 mb-4">
          We encourage you to:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Thoroughly review course descriptions, curriculum outlines, and any available previews.</li>
          <li>Check system requirements to ensure compatibility with your devices.</li>
          <li>Contact our support team with any questions about course content or technical requirements.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Payment Security</h2>
        <p className="text-gray-300 mb-4">
          We use industry-standard security measures to protect your payment information. All transactions are processed through secure payment gateways.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-300">
          If you have any questions about our refund policy, please contact us at <span className="text-[#22C55E]">support@projectsnightlight.freshdesk.com</span>.
        </p>
      </div>
    </SupportPageLayout>
  );
} 