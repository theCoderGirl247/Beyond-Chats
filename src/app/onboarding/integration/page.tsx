'use client'
import React, { useState, useEffect } from 'react';
import Breadcrumb from '@/app/components/Breadcrumb';

const IntegrationPage = () => {
  const [showIntegrationOptions, setShowIntegrationOptions] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the website URL from local storage
    const storedWebsiteUrl = localStorage.getItem('websiteUrl');
    if (storedWebsiteUrl) {
      setWebsiteUrl(storedWebsiteUrl);
    }
  }, []);

  const handleTestChatbot = () => {
    if (websiteUrl) {
      window.open(websiteUrl, '_blank');
    } else {
      alert('No website URL found. Please go back and enter a website URL.');
    }
  };

  return (
    <div className="relative flex flex-col items-center bg-gradient-to-br from-[#011126] to-[#01204d] text-white min-h-screen w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative flex flex-col items-start justify-start flex-grow p-5 w-full max-w-4xl mx-auto z-10">
        <div className="p-5 w-full">
          <Breadcrumb />
        </div>

        {/* Alert Bar */}
        <div className="backdrop-blur-md bg-white/5 rounded-lg p-4 mb-8 w-full border border-white/10">
          <p className="text-center text-gray-300">
            Chatbot not working as intended?
            <button className="text-blue-400 hover:text-blue-300 ml-2 underline">
              Share feedback
            </button>
          </p>
        </div>

        {/* Main Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          {/* Test Chatbot */}
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="font-semibold mb-3">Test Chatbot</h3>
            <p className="text-sm text-gray-300 mb-4">Preview Chatbot</p>
            <button
              className="w-full bg-gradient-to-r from-[#2C72F5] to-[#4af764] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              onClick={handleTestChatbot}
            >
              Test Chatbot
            </button>
          </div>

          {/* Integration Options */}
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="font-semibold mb-3">Integrate</h3>
            <p className="text-sm text-gray-300 mb-4">Get integration instructions</p>
            <button
              className="w-full bg-gradient-to-r from-[#2C72F5] to-[#4af764] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              onClick={() => setShowIntegrationOptions(true)}
            >
              Integration Options
            </button>
          </div>

          {/* Test Integration */}
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="font-semibold mb-3">Verify Setup</h3>
            <p className="text-sm text-gray-300 mb-4">Check if integration is working</p>
            <button
              className="w-full bg-gradient-to-r from-[#2C72F5] to-[#4af764] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              onClick={() => setShowSuccess(true)}
            >
              Test Integration
            </button>
          </div>
        </div>

        {/* Integration Options Modal */}
        {showIntegrationOptions && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 w-full max-w-md relative">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setShowIntegrationOptions(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h3 className="font-semibold mb-6 text-center">Choose Integration Method</h3>
              <div className="space-y-4">
                <button className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-left hover:bg-white/10 transition-all duration-200">
                  <h4 className="font-medium mb-1">Copy Integration Code</h4>
                  <p className="text-sm text-gray-300">Add chatbot to your website with a simple code snippet</p>
                </button>
                <button className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-left hover:bg-white/10 transition-all duration-200">
                  <h4 className="font-medium mb-1">Email Instructions to Developer</h4>
                  <p className="text-sm text-gray-300">Send integration steps to your development team</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success State Modal */}
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 w-full max-w-md relative">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setShowSuccess(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center">Integration Successful! 🎉</h3>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <button className="w-full bg-gradient-to-r from-[#2C72F5] to-[#4af764] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200">
                  Explore Admin Panel
                </button>
                <button className="w-full bg-gradient-to-r from-[#2C72F5] to-[#4af764] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200">
                  Start Talking to Your Chatbot
                </button>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm hover:bg-white/10 transition-all duration-200">
                  Share on Twitter
                </button>
                <button className="bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm hover:bg-white/10 transition-all duration-200">
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default IntegrationPage;