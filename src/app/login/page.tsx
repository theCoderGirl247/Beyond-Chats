'use client'
import React, { useState } from 'react';
import Image from "next/image";
import GoogleImg from "../../../public/images/login/GoogleLogo.png"
import Link from 'next/link';
import { name } from '../components/constants';
import { useRouter } from 'next/navigation';
import Breadcrumb from '../components/Breadcrumb';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Store user data in localStorage
    localStorage.setItem('username', formData.username);
    localStorage.setItem('email', formData.email);
    
    // Navigate to onboarding page
    router.push('/onboarding');
  };

  const handleGoogleLogin = () => {
    // Fill form with dummy data
    setFormData({
      username: 'aashi',
      email: 'aashi@gmail.com',
      password: 'aashi123'
    });
  };

  return (
    <div className="relative flex flex-col items-center bg-gradient-to-br from-[#011126] to-[#01204d] text-white min-h-screen w-full overflow-hidden">
      {/* Background  */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Breadcrumb - Now positioned at the top */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-6">
        <Breadcrumb />
      </div>

      {/* Main Content */}
      <main className="relative flex flex-col items-center justify-center flex-grow p-5 w-full max-w-4xl mx-auto text-center z-10">
        {/* Header Section */}
        <h1 className="text-2xl font-bold tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            {name}
          </span>
        </h1>
        
        <h2 className="text-5xl font-bold mt-5 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Make AI your Brand Manager
        </h2>

        <p className="text-lg mt-5 w-2/3">
          Don&apos;t let your brand lose customers. Qualify your leads to 3X your
          sales with our intelligent AI chatbot. It&apos;s like hiring a sales
          manager who knows your business in and out and works 24*7.
        </p>

        {/* Login Card */}
        <div className="mt-10 w-full max-w-md">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 shadow-2xl border border-white/10">
            {/* Google Login Button */}
            <button 
              onClick={handleGoogleLogin}
              className="group relative w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 active:scale-[0.98] transition-all duration-200"
            >
              <span className="flex items-center justify-center gap-3">
                <Image 
                  src={GoogleImg} 
                  height={24} 
                  width={24} 
                  alt="Google Login"
                  className="object-contain" 
                />
                Continue with Google
              </span>
            </button>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300/20"></div>
              <span className="px-4 text-sm text-gray-400">OR</span>
              <div className="flex-1 border-t border-gray-300/20"></div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Input Fields */}
              <div className="space-y-4">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email Login Button */}
              <button 
                type="submit" 
                className="w-full mt-6 bg-gradient-to-r from-[#2C72F5] to-[#4af764] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              >
                Continue with email
              </button>
            </form>

            {/* Terms */}
            <p className="mt-6 text-xs text-gray-400 leading-relaxed">
              By continuing, you agree to {name}&nbsp;
              <Link 
                href="/terms-condition" 
                title={`${name} Terms of Service`}
                className="text-blue-400 hover:text-blue-300"
              >
                Terms of Service
              </Link> and&nbsp;
              <Link 
                href="/privacy-policy" 
                title={`${name} Privacy Policy`}
                className="text-blue-400 hover:text-blue-300"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;