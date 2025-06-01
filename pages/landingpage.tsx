"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

const testimonials = [
  {
    quote: "Finally, a project tool that doesn't get in the way.",
    author: "Jane, Frontend Engineer",
  },
  {
    quote: "The UI is slick, and the features are exactly what I need.",
    author: "David, Fullstack Developer",
  },
  {
    quote: "I switched from Jira, and I’m never going back.",
    author: "Priya, Product Manager",
  },
  {
    quote: "Helps me stay on top of tasks without overwhelming me.",
    author: "Leo, Backend Developer",
  },
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

 

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="w-full max-w-2xl">
          <div className="inline-block mt-10 mb-4 text-sm font-medium text-purple-500 border border-purple-500 px-4 py-1 rounded-full">
            Built for developers
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Project management made for devs
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Add and edit projects, track detailed analytics, and access a full
            project overview page.
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

      {/* Features Section */}
      <section className="py-16 px-6 bg-[#121212]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Sprint Planning
            </h3>
            <p className="text-gray-400">
              Plan sprints, assign tasks, and keep track of team velocity and
              goals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Task & Issue Tracking
            </h3>
            <p className="text-gray-400">
              Create tasks, manage issues, break them into subtasks, and track
              status easily.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Custom Views
            </h3>
            <p className="text-gray-400">
              Visualize your workflow as tables, Kanban boards, or timelines.
            </p>
          </div>
        </div>
      </section>

      {/* UI Mockup */}
      <section className="py-20 px-6 bg-[#0e0e0e] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Built for modern dev workflows
          </h2>
          <p className="text-gray-400 mb-8">
            Everything you need to stay organized, collaborate with your team,
            and ship better projects.
          </p>
          <div className="w-full h-64 bg-[#1c1c1c] border border-[#2c2c2c] rounded-xl flex items-center justify-center text-gray-500">
            [ UI preview ]
          </div>
        </div>
      </section>

      {/* Animated Testimonials Section */}
      <section className="py-16 px-6 bg-[#121212] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">Trusted by developers</h2>
          <div className="relative h-20 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full"
              >
                <p className="text-lg text-gray-300 italic">
                  “{testimonials[index].quote}”
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  — {testimonials[index].author}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 px-6 bg-[#0e0e0e] text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to boost your productivity?
        </h3>
        <Link
          href="/signup"
          className="inline-block bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-6 py-3 rounded-full"
        >
          Create your free account
        </Link>
      </footer>
    </div>
  );
}