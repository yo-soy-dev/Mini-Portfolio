import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaNodeJs />, name: "Node.js" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-6 bg-gray-900 shadow-md rounded-xl transition-transform transform hover:scale-110 hover:shadow-xl"
          >
            <div className="text-4xl text-blue-500 mb-2">{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;