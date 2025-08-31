import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data)});
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
        className="border px-4 py-2 mb-6 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition">
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
        ))}
      </div>
    </section>
  );
};

export default Projects;