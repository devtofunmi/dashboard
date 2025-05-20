"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

type ProjectStatus = "Launched" | "In Dev" | "Testing" | "Idea";

interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  updated: string;
  live?: string;
  github?: string;
  notes: string;
}

const analyticsMock = {
  views: 1234,
  visits: 789,
  avgDuration: "1m 23s",
  topReferrers: ["Twitter", "Reddit", "HackerNews"],
};

const statusColor: Record<ProjectStatus, string> = {
  Launched: "bg-green-500",
  "In Dev": "bg-blue-500",
  Testing: "bg-yellow-500",
  Idea: "bg-gray-500",
};

// Dummy project data
const projectsData: Project[] = [
  {
    id: "prettybio",
    name: "PrettyBio",
    status: "Launched",
    updated: "May 2025",
    live: "https://prettybio.up.railway.app",
    github: "https://github.com/your-username/prettybio",
    notes: "Add new themes",
  },
  {
    id: "launchhunt",
    name: "LaunchHunt",
    status: "In Dev",
    updated: "May 2025",
    github: "https://github.com/your-username/launchhunt",
    notes: "Working on search",
  },
  {
    id: "flashprompt",
    name: "FlashPrompt",
    status: "Testing",
    updated: "April 2025",
    github: "https://github.com/your-username/flashprompt",
    notes: "Improve prompt UX",
  },
  {
    id: "lockit",
    name: "Lockit",
    status: "Idea",
    updated: "-",
    notes: "Think about encryption UI",
  },
];

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { projectName } = router.query;

  // While waiting for param (on first render in client), show loading
  if (!projectName || typeof projectName !== "string") {
    return (
      <main className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center justify-center">
        <p className="text-xl">Loading...</p>
      </main>
    );
  }

  const project = projectsData.find((p) => p.id === projectName);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#151515] text-white p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link href="/dashboard" className="text-blue-500 underline">
          Back to Dashboard
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#151515] text-white p-6 space-y-6 ">
      <div className="max-w-4xl mx-auto w-full">
        <Link href="/dashboard" className="text-blue-500 underline">
        ←
      </Link>
      <div className="flex justify-between text-center mt-5 items-center">
        <h1 className="md:text-4xl text-2xl font-bold mt-5">{project.name}</h1>
      <span
        className={`inline-block px-3 py-1  rounded text-white text-sm ${statusColor[project.status]}`}
      >
        {project.status}
      </span>
      </div>

      

      <p className="mt-2 text-gray-400">Last updated: {project.updated}</p>
      <p className="mt-2">📝 {project.notes}</p>

      <div className="flex gap-4 mt-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Live site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub repo
          </a>
        )}
      </div>

      <section className="mt-12 bg-[#222222] p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Analytics (Mock Data)</h2>
        <ul className="space-y-2">
          <li>
            <strong>Page Views:</strong> {analyticsMock.views}
          </li>
          <li>
            <strong>Unique Visits:</strong> {analyticsMock.visits}
          </li>
          <li>
            <strong>Average Duration:</strong> {analyticsMock.avgDuration}
          </li>
          <li>
            <strong>Top Referrers:</strong>{" "}
            {analyticsMock.topReferrers.join(", ")}
          </li>
        </ul>
      </section>
      </div>
    </main>
  );
}