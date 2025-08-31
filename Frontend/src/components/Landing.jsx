import React from "react";

const Landing = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white text-center p-6">
      <img
        src="/Devansh.png"
        alt="Profile"
        className="rounded-full w-40 h-40 shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold">Devansh Kumar Tiwari</h1>
      <p className="text-xl mt-2">Full-Stack Developer Specializing in MERN Stack | Proven Track in Building Scalable Web Apps</p>
    </section>
  );
};

export default Landing;