"use client";

import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  let [selected, setSelected] = useState(0);
  let [dropdownOpen, setDropdownOpen] = useState(false);
  // 0 - ongoing
  // 1 - completed

  useEffect(() => {
    function handleClose() {
      setDropdownOpen(false);
    }

    document.addEventListener("click", handleClose);

    return () => document.removeEventListener("click", handleClose);
  });

  let statuses = ["Ongoing", "Completed"];
  let projectsShown = projects.filter(
    (project) => project.attributes.status == statuses[selected].toLowerCase()
  );

  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <div className="relative">
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold">Our Projects</h1>
          <div>
            {statuses.map((status, i) => (
              <button
                onClick={() => {
                  setSelected(i);
                }}
                className={`${
                  selected === i ? "bg-shark-900 text-white" : "bg-slate-100"
                } px-4 py-2 rounded-md shadow-md font-semibold mr-2`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        {projectsShown.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
