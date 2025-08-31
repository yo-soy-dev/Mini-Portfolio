import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="py-16 text-center bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <input
        type="text"
        placeholder="Search projects..."
        className="border border-gray-700 bg-gray-800 text-white px-4 py-2 mb-10 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6 max-w-6xl mx-auto">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
