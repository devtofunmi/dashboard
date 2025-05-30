"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProjectCard, { Project } from "@/components/ProjectCard";
import AdminInfo from "@/components/AdminInfo";
import AddProjectModal from "@/components/AddProjectModal";


const defaultProjects: Project[] = [
  {
    id: "prettybio",
    name: "PrettyBio",
    status: "Launched",
    updated: "May 2025",
    live: "https://prettybio.up.railway.app",
    github: "https://github.com/devtofunmi/prettybio",
    notes: "Add new themes",
  },
  {
    id: "launchhunt",
    name: "LaunchHunt",
    status: "In Dev",
    updated: "May 2025",
    github: "https://github.com/devtofunmi/launchhunt",
    notes: "Working on search",
  },
  {
    id: "flashprompt",
    name: "FlashPrompt",
    status: "Testing",
    updated: "April 2025",
    github: "https://github.com/devtofunmi/flashprompt",
    notes: "Improve prompt UX",
  },
  {
    id: "lockit",
    name: "Lockit",
    status: "Idea",
    updated: "-",
    github: "https://github.com/devtofunmi/lockit",
    notes: "Think about encryption UI",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) router.push("/login");
  }, [router]);

  const addProject = (project: Project) => setProjects((prev) => [...prev, project]);

  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white p-6 space-y-6">
      <AdminInfo />

      <div className="flex justify-between items-center">
        <h1 className="md:text-3xl text-xl font-bold">📁</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 cursor-pointer px-4 py-2 rounded-full"
        >
          + Add Project
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addProject}
      />
    </main>
  );
};

export default DashboardPage;