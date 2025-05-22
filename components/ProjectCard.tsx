"use client";

import React from "react";
import Link from "next/link";

type ProjectStatus = "Launched" | "In Dev" | "Testing" | "Idea";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  updated: string;
  live?: string;
  github?: string;
  notes: string;
}

const statusColors: Record<ProjectStatus, string> = {
  Launched: "bg-green-500",
  "In Dev": "bg-blue-500",
  Testing: "bg-yellow-500",
  Idea: "bg-gray-500",
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      onClick={() => window.location.href = `/${project.id}`}
      className="bg-[#222222] rounded-xl shadow p-4 space-y-3 block hover:ring-2 ring-purple-600 transition cursor-pointer"
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          window.location.href = `/${project.id}`;
        }
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{project.name}</h2>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded ${statusColors[project.status]} text-white`}
        >
          {project.status}
        </span>
      </div>
      <p className="text-sm text-gray-400">Last Updated: {project.updated}</p>
      <p className="text-sm">📝 {project.notes}</p>
      <div
        className="flex gap-2 pt-2"
        onClick={(e) => e.stopPropagation()} // Prevent card click when clicking these buttons
      >
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-gray-700 px-3 py-1 rounded hover:bg-gray-800"
          >
            Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-gray-700 px-3 py-1 rounded hover:bg-gray-800"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;