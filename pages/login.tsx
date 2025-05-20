"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js 13 app router, else use 'next/router'


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
      // Mock "login" success: store a flag in localStorage (or cookie)
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#151515] text-white p-6">
      <form
        onSubmit={handleSubmit}
        className="p-8 w-full max-w-md space-y-6"
      >
        <h1 className="md:text-2xl text-xl font-semibold text-center">Welcome codebreaker</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 rounded bg-[#222222] border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          
          <input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 rounded bg-[#222222] border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          L og In
        </button>
      </form>
    </main>
  );
}
