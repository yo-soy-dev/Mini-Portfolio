import React, { useState, useEffect } from "react";
import testimonialsData from "../data/testimonials.json";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-black text-gray-200 text-center">
      <h2 className="text-3xl font-bold text-white mb-10">What People Say</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-2 border-gray-700"
            />
            <p className="italic text-gray-400 mb-4">“{t.feedback}”</p>
            <h4 className="text-lg font-semibold text-white">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
