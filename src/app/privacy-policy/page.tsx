import React from 'react';
import {url} from "../components/constants";
import Breadcrumb from '../components/Breadcrumb';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#011126] to-[#01204d] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumb />
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. Information We Collect</h2>
            <div className="space-y-4 text-blue-100/90 leading-relaxed">
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information like name, email, password</li>
                <li>Business information for AI training</li>
                <li>Chat logs and interaction data</li>
                <li>Payment information</li>
                <li>Usage statistics and analytics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. How We Use Your Information</h2>
            <div className="space-y-4 text-blue-100/90 leading-relaxed">
              <p>
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To train and improve our AI models</li>
                <li>To personalize your experience</li>
                <li>To communicate with you about updates and offers</li>
                <li>To prevent fraud and abuse</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. Data Security</h2>
            <p className="text-blue-100/90 leading-relaxed">
              We implement appropriate technical and organizational measures to maintain the security of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Data Retention</h2>
            <p className="text-blue-100/90 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">5. Your Rights</h2>
            <div className="space-y-4 text-blue-100/90 leading-relaxed">
              <p>
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to restrict processing of your data</li>
                <li>Right to data portability</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">6. Contact Us</h2>
            <p className="text-blue-100/90 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@{url}.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;