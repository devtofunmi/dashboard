"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
        <nav className="text-2xl p-5 font-bold">A d m i n<span className="text-purple-500">.</span></nav>
        <main className=" flex flex-col items-center justify-center  px-6 py-12">
      <div className="w-full max-w-2xl text-center">
        <div className="inline-block mt-10 mb-4 text-sm font-medium text-purple-500 border border-purple-500 px-4 py-1 rounded-full">
          Built for developers
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Project management made for devs
        </h1>

       <p className="mt-4 text-lg text-gray-300"> 
         Add and edit projects, track detailed analytics, and access a full project overview page.
       </p>


        <div className="mt-8">
          <Link
            href="/login"
            className="inline-block bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-6 py-3 rounded-full shadow-lg"
          >
            Start Managing Projects
          </Link>
        </div>
      </div>
    </main>
    </div>
    
  );
}