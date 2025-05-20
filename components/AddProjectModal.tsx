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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg w-full max-w-md space-y-4">
        <h3 className="text-xl font-semibold">Add New Project</h3>

        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as ProjectStatus)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
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
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <input
          type="url"
          placeholder="Live URL (optional)"
          value={live}
          onChange={(e) => setLive(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <input
          type="url"
          placeholder="GitHub URL (optional)"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectModal;