/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, AlertCircle, ChevronRight, Globe, FileText } from 'lucide-react';
import { DUMMY_PAGES, Page, PageStatus } from '../components/constants';
import Breadcrumb from '../components/Breadcrumb';
import { useRouter } from 'next/navigation';

const OnboardingPage = () => {
  const [username, setUsername] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [pages] = useState<Page[]>(DUMMY_PAGES);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const moveToIntegration = () => {
    router.push(`/onboarding/integration`);
  }

  const handleUrlBlur = async () => {
  if (!websiteUrl) return;

  setIsLoading(true);
  setError('');

  try {
    const url = new URL(websiteUrl);
    
    const response = await fetch('/api/fetch-meta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: websiteUrl }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch meta description');
    }

    const data: { description?: string } = await response.json();
    if (data.description) {
      setDescription(data.description);
    } else {
      setError('No meta description found');
    }

    // Store the website URL in local storage
    localStorage.setItem('websiteUrl', websiteUrl);

  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('Invalid URL')) {
        setError('Please enter a valid URL');
      } else {
        setError('Failed to fetch website description');
      }
    }
    console.error('Error fetching meta description:', error);
  } finally {
    setIsLoading(false);
  }
};


  const getStatusIcon = (status: PageStatus) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in_progress':
        return <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#011126] to-[#01204d] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumb />
        <div className="space-y-8">
          {/* Welcome Message */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Welcome, {username}! 
          </h1>

          {/* Company Information Form */}
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Tell us about your company
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Website URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    onBlur={handleUrlBlur}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://your-company.com"
                  />
                  {error && (
                    <p className="mt-1 text-sm text-red-400">{error}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Company Description
                </label>
                <div className="relative">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                    placeholder="Describe your company"
                  />
                  {isLoading && (
                    <Loader2 className="absolute right-3 top-3 w-5 h-5 animate-spin text-blue-400" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Website Scraping Progress */}
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-blue-200">
              Website Scraping Progress
            </h2>

            <div className="space-y-6">
              {/* Progress Overview */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-blue-200">Completed</div>
                  <div className="text-2xl font-bold">2</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-blue-200">In Progress</div>
                  <div className="text-2xl font-bold">1</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-blue-200">Pending</div>
                  <div className="text-2xl font-bold">2</div>
                </div>
              </div>

              {/* Pages List */}
              <div className="space-y-2">
                {pages.map((page, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={() => setSelectedPage(selectedPage === page ? null : page)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-blue-400" />
                        <span>{page.url}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(page.status)}
                        <ChevronRight className={`w-5 h-5 transition-transform ${selectedPage === page ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                    
                    {/* Chunks */}
                    {selectedPage === page && page.chunks.length > 0 && (
                      <div className="mt-4 pl-8 space-y-2">
                        {page.chunks.map((chunk, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm text-blue-100">
                            <FileText className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>{chunk}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end">
            <button onClick= {moveToIntegration} className="bg-gradient-to-r from-[#2C72F5] to-[#4af764] text-white py-3 px-8 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200">
              Continue Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;