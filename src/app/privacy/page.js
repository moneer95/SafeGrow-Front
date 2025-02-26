"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar darkMode={true} />
      
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          href="/"
          className="inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last Updated: 26 Feb 2025</p>
            
            <p className="text-gray-700">
              SafeGrow ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit and use our website, www.safe-grow.com (the "Website"). By using our Website, you agree to the terms of this Privacy Policy.
            </p>
            <p className="text-gray-700 font-medium">
              Please read this Privacy Policy carefully to understand how your personal data will be handled.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700">
              We may collect the following types of information when you visit our Website or interact with our services:
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">a. Personal Information</h3>
            <p className="text-gray-700">
              This includes identifiable information that you provide to us directly, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address (if necessary for payment or shipping)</li>
              <li>Payment information (e.g., credit card details)</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">b. Usage Data</h3>
            <p className="text-gray-700">
              We may collect non-personally identifiable information about your interaction with our Website, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited on our Website</li>
              <li>Date and time of your visit</li>
              <li>Geolocation data (if you grant permission)</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">c. Cookies</h3>
            <p className="text-gray-700">
              Our Website uses cookies to improve user experience. Cookies are small text files placed on your device to store preferences and track Website activity. You can control or disable cookies through your browser settings. However, doing so may impact your experience on the Website.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="font-medium">To Provide Services:</span> To process your orders, deliver digital products, and provide access to grants, mentorship, and other resources.</li>
              <li><span className="font-medium">To Improve Our Website:</span> To enhance and personalize your experience on the Website and improve the functionality of our services.</li>
              <li><span className="font-medium">To Communicate with You:</span> To send updates, newsletters, and promotional materials, as well as respond to inquiries or customer support requests.</li>
              <li><span className="font-medium">To Process Payments:</span> To complete financial transactions related to the purchase of digital products or services.</li>
              <li><span className="font-medium">For Legal and Security Purposes:</span> To comply with applicable laws and regulations, investigate fraudulent activities, and protect the security of our Website.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Sharing Your Information</h2>
            <p className="text-gray-700">
              We value your privacy and will not sell, rent, or share your personal information with third parties except in the following cases:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="font-medium">Service Providers:</span> We may share your information with trusted third-party companies that assist us in operating our Website and providing services, such as payment processors, email marketing services, or hosting providers. These third parties are obligated to protect your information and use it solely to provide services to us.</li>
              <li><span className="font-medium">Legal Compliance:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as government agencies or law enforcement.</li>
              <li><span className="font-medium">Business Transfers:</span> If SafeGrow is involved in a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction. You will be notified if your personal data is transferred to a new entity.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Retention</h2>
            <p className="text-gray-700">
              We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. After this period, we will securely delete or anonymize your personal data.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Data Protection Rights</h2>
            <p className="text-gray-700">
              Under Egyptian law, you have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="font-medium">Right to Access:</span> You have the right to request access to the personal information we hold about you.</li>
              <li><span className="font-medium">Right to Rectification:</span> You have the right to request corrections to any inaccurate or incomplete personal information we hold about you.</li>
              <li><span className="font-medium">Right to Erasure:</span> You may request the deletion of your personal data, subject to certain conditions (such as if it is no longer necessary for the purposes for which it was collected).</li>
              <li><span className="font-medium">Right to Restrict Processing:</span> You have the right to restrict the processing of your personal information under certain circumstances.</li>
              <li><span className="font-medium">Right to Object:</span> You have the right to object to the processing of your personal information for specific purposes, such as direct marketing.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              If you wish to exercise any of these rights, please contact us at <a href="mailto:info@safe-grow.com" className="text-[#009688] hover:text-[#007a6c]">info@safe-grow.com</a>.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Security of Your Data</h2>
            <p className="text-gray-700">
              We take reasonable steps to protect your personal information from unauthorized access, use, alteration, and disclosure. We use industry-standard security measures, including encryption and secure servers, to ensure that your information is handled securely. However, no method of data transmission or storage is entirely secure, and we cannot guarantee the absolute security of your information.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700">
              Our Website may contain links to third-party websites. These third-party sites have their own privacy policies, which we recommend you review. We are not responsible for the content or privacy practices of third-party websites.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700">
              As SafeGrow operates within Egypt, your personal data will primarily be stored and processed within Egypt. However, if we share your information with service providers located outside Egypt, we will ensure that adequate safeguards are in place to protect your personal data, in accordance with applicable laws.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700">
              Our Website is not intended for use by children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. We encourage you to review this Privacy Policy periodically for any updates.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Email:</span> <a href="mailto:info@safe-grow.com" className="text-[#009688] hover:text-[#007a6c]">info@safe-grow.com</a>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span> <a href="tel:01044081993" className="text-[#009688] hover:text-[#007a6c]">0104 4081993</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}