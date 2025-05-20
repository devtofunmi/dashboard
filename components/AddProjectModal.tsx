"use client";

import React, { useState } from "react";
import { Project } from "./ProjectCard";

type ProjectStatus = "Launched" | "In Dev" | "Testing" | "Idea";

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (project: Project) => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<ProjectStatus>("Idea");
  const [updated, setUpdated] = useState("");
  const [live, setLive] = useState("");
  const [github, setGithub] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !updated) return;

    const newProject: Project = {
      id: name.toLowerCase().replace(/\s+/g, ""),
      name,
      status,
      updated,
      live: live.trim() || undefined,
      github: github.trim() || undefined,
      notes,
    };

    onAdd(newProject);
    setName("");
    setStatus("Idea");
    setUpdated("");
    setLive("");
    setGithub("");
    setNotes("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="relative bg-[#151515] p-6 rounded-lg w-11/12 max-w-lg space-y-4">
        <div className="absolute top-2 right-2">
            <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 cursor-pointer rounded-md bg-gray-700 hover:bg-gray-600 "
          >
            X
          </button>
        </div>

        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 mt-10 rounded bg-[#222222] border  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as ProjectStatus)}
          className="w-full p-2 rounded bg-[#222222] border focus:outline-none"
        >
          {["Launched", "In Dev", "Testing", "Idea"].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Last Updated (e.g. May 2025)"
          value={updated}
          onChange={(e) => setUpdated(e.target.value)}
          required
          className="w-full p-2 rounded bg-[#222222] border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="url"
          placeholder="Live URL (optional)"
          value={live}
          onChange={(e) => setLive(e.target.value)}
          className="w-full p-2 rounded bg-[#222222] border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="url"
          placeholder="GitHub URL (optional)"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="w-full p-2 rounded bg-[#222222] border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="w-full p-2 rounded bg-[#222222] border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="">
          
          <button
            type="submit"
            className="px-8 py-2 w-full cursor-pointer rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectModal;