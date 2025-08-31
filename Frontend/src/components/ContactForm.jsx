import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }
    setErrors({});

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("http://localhost:8000/messages.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.status === "success") {
        toast.success(result.message);
        setForm({ name: "", email: "", message: "" }); 
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 shadow-lg rounded-lg p-6">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-700 bg-black text-white p-3 w-full mb-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm mb-3">{errors.name}</p>}

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-700 bg-black text-white p-3 w-full mb-3 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}

        <textarea
          placeholder="Message"
          className="border border-gray-700 bg-black text-white p-3 w-full mb-3 rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="text-red-500 text-sm mb-3">{errors.message}</p>}

        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
