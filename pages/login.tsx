"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const mockUsers = [
    { username: "user1", password: "password123" },
    { username: "admin", password: "password" },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <main className="min-h-screen flex items-start md:items-center justify-center bg-[#0e0e0e] text-white px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-xl shadow-xl space-y-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-500">Welcome Chairman!</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to your workspace</p>
        </div>

        {error && (
          <p className="text-red-500 bg-red-500/10 px-3 py-2 rounded text-sm text-center">
            {error}
          </p>
        )}

        <div>
          <label htmlFor="username" className="block text-sm text-gray-300 mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="e.g. devguy"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md bg-[#262626] text-white border border-[#3b3b3b] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md bg-[#262626] text-white border border-[#3b3b3b] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 transition-all font-semibold py-2 rounded-md"
        >
          L og In
        </button>
        <div className="flex gap-2 text-sm text-gray-400">
          <p>Dont have an account?</p>
          <Link href="/signup" className="text-purple-500 underline">
            Sign Up
          </Link>
        </div>
      </form>
    </main>
  );
}

