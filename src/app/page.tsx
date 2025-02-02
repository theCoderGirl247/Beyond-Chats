'use client'
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { name } from './components/constants'

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-br from-[#011126] to-[#01204d] text-white min-h-screen w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative flex flex-col items-center justify-center min-h-screen p-5 w-full max-w-4xl mx-auto text-center z-10">
        {/* Logo/Brand Name */}
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            {name}
          </span>
        </h1>

        {/* Hero Title */}
        <h2 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Transform Your Brand
          <br />
          With AI
        </h2>

        {/* Description */}
        <p className="text-xl mb-12 text-blue-100 max-w-2xl">
          Leverage the power of artificial intelligence to enhance your brand&#39;s 
          presence and automate customer interactions. Start your journey today.
        </p>

        {/* CTA Button */}
        <Link 
          href="/login"
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium overflow-hidden"
        >
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C72F5] to-[#4af764] opacity-80" />
          
          {/* Animated shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C72F5] to-[#4af764]" />
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
          </div>
          
          {/* Button content */}
          <span className="relative text-white font-semibold">
            Get Started
          </span>
          <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          
          {/* Pulsing border effect */}
          <div className="absolute inset-0 rounded-lg border-2 border-white/30">
            <div className="absolute inset-0 rounded-lg border-2 border-white/30 scale-105 animate-pulse" />
          </div>
        </Link>

        {/* Footer Links */}
        <div className="absolute bottom-8 flex gap-8 text-sm text-blue-200">
          <Link 
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-condition"
            className="hover:text-white transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;