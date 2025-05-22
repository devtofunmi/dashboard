"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Mock signup success
    localStorage.setItem("signedUp", "true");
    router.push("/setup"); // Or /dashboard or wherever the user should go next
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0e0e0e] text-white px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md  p-8 rounded-xl shadow-xl space-y-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-500">Create your free trial</h1>
          <p className="text-gray-400 text-sm mt-1">Start managing your developer projects</p>
        </div>

        {error && (
          <p className="text-red-500 bg-red-500/10 px-3 py-2 rounded text-sm text-center">
            {error}
          </p>
        )}

        <div>
          <label className="block text-sm text-gray-300 mb-1">Username</label>
          <input
            type="text"
            placeholder="e.g. devguy"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md bg-[#262626] border border-[#3b3b3b] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.dev"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md bg-[#262626] border border-[#3b3b3b] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md bg-[#262626] border border-[#3b3b3b] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md bg-[#262626] border border-[#3b3b3b] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 transition-all font-semibold py-2 rounded-md"
        >
          Sign Up
        </button>
         <div className="flex gap-2 text-sm text-gray-400">
          <p>Already have an account on admin?</p>
          <Link href="/login" className="text-purple-500 underline">
            Sign in
          </Link>
        </div>
      </form>
    </main>
  );
}