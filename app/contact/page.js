// contact / page.js file -----------------------------------------------------------


"use client";

import { useState } from "react";
import { sendMessage } from "@/services/contactApi";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(form);
      alert("Message sent ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed ❌");
    }
  };

  return (
    <div className="max-w-[600px] mx-auto py-20 px-4">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="border p-3 rounded h-32"
        />

        <button className="bg-green-600 text-white py-3 rounded">
          Send Message
        </button>

      </form>

    </div>
  );
}