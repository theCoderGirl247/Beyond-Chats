import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#011126] to-[#01204d] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumb />
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Terms and Conditions
        </h1>
        
        <div className="space-y-8 bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. Agreement to Terms</h2>
            <p className="text-blue-100/90 leading-relaxed">
              By accessing or using Beyond Chats&apos; AI Brand Manager services, you agree to be bound by these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. Use License</h2>
            <div className="space-y-4 text-blue-100/90 leading-relaxed">
              <p>
                Permission is granted to temporarily use our AI Brand Manager service for personal or business use, subject to the following restrictions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The service may not be used for any illegal purposes</li>
                <li>You may not modify or copy our proprietary software and algorithms</li>
                <li>You may not use the service to harvest or collect user data</li>
                <li>You may not use the service to send unsolicited commercial messages</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. Service Modifications</h2>
            <p className="text-blue-100/90 leading-relaxed">
              Beyond Chats reserves the right to modify, suspend, or discontinue any part of the service at any time. Prices for our services are subject to change upon 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Account Terms</h2>
            <div className="space-y-4 text-blue-100/90 leading-relaxed">
              <p>
                You are responsible for maintaining the security of your account and password. Beyond Chats cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
              </p>
              <p>
                You are responsible for all content posted and activity that occurs under your account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">5. Limitation of Liability</h2>
            <p className="text-blue-100/90 leading-relaxed">
              In no event shall Beyond Chats be liable for any damages arising out of the use or inability to use our services, including but not limited to damages for loss of profits, goodwill, use, data or other intangible losses.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;