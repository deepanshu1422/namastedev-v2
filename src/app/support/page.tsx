'use client';

import SupportPageLayout from "@/components/support-pages/layout";
import { ExternalLink } from "lucide-react";

export default function Support() {
  return (
    <SupportPageLayout title="Support">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">How Can We Help You?</h2>
          <p className="text-gray-300 mb-6">
            We're here to assist you with any questions or issues you might have. Check our FAQ section below or contact our support team directly via email.
          </p>
          
          <div className="bg-[#0A1F1C] p-6 rounded-lg border border-[#22C55E]/20 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Email Support</h3>
            <p className="text-gray-300 mb-4">
              For direct assistance, please email our support team. We'll respond within 24 hours.
            </p>
            <a href="mailto:support@projectsnightlight.freshdesk.com" className="text-[#22C55E] hover:underline">support@projectsnightlight.freshdesk.com</a>
          </div>
          
          <div className="bg-[#0A1F1C] p-6 rounded-lg border border-[#22C55E]/20 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Support Documentation</h3>
            <p className="text-gray-300 mb-4">
              For detailed information and comprehensive guides, please visit our support document.
            </p>
            <a 
              href="https://docs.google.com/document/d/19vTDbF3tNO7WZemOKWoWERuZiVVeQoL4rJEGYPOMAWc/edit?tab=t.0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#22C55E] hover:underline flex items-center gap-1"
            >
              View Support Documentation
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-[#0A1F1C] p-6 rounded-lg border border-[#22C55E]/20">
            <h3 className="text-lg font-semibold text-white mb-3">Common Support Topics</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Course access issues</li>
              <li>• Payment and billing questions</li>
              <li>• Technical difficulties</li>
              <li>• Content-related questions</li>
              <li>• Certificate requests</li>
            </ul>
          </div>
        </div>
        
        <div id="faq" className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-[#0A1F1C] p-6 rounded-lg border border-[#22C55E]/20">
              <h3 className="text-lg font-semibold text-white mb-2">How long do I have access to the courses?</h3>
              <p className="text-gray-300">
                Once you purchase a course or package, you have lifetime access to the content. You can revisit the material whenever you need to refresh your knowledge.
              </p>
            </div>
            
            <div className="bg-[#0A1F1C] p-6 rounded-lg border border-[#22C55E]/20">
              <h3 className="text-lg font-semibold text-white mb-2">Can I upgrade my package later?</h3>
              <p className="text-gray-300">
                Absolutely! You can upgrade from a lower-tier package to a higher one at any time. You'll only need to pay the difference between your current package and the one you're upgrading to.
              </p>
            </div>
            
            <div className="bg-[#0A1F1C] p-6 rounded-lg border border-[#22C55E]/20">
              <h3 className="text-lg font-semibold text-white mb-2">Are the courses suitable for beginners?</h3>
              <p className="text-gray-300">
                Yes, we have courses designed specifically for beginners with no prior coding experience. Our beginner packages start with the fundamentals and gradually build up to more advanced concepts.
              </p>
            </div>
            
            <div className="bg-[#0A1F1C] p-6 rounded-lg border border-[#22C55E]/20">
              <h3 className="text-lg font-semibold text-white mb-2">How do I access my courses after purchase?</h3>
              <p className="text-gray-300">
                After completing your purchase, you'll receive an email with login instructions. You can also access your courses by logging into your account on our website and navigating to the dashboard.
              </p>
            </div>
            
            <div className="bg-[#0A1F1C] p-6 rounded-lg border border-[#22C55E]/20">
              <h3 className="text-lg font-semibold text-white mb-2">Do you provide certificates upon course completion?</h3>
              <p className="text-gray-300">
                Yes, we provide certificates of completion for all our courses. These certificates can be downloaded directly from your account once you've completed all the required modules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SupportPageLayout>
  );
} 