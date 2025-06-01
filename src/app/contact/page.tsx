"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://formspree.io/f/xvgrpnyv", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen p-8 bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      {/* Personal Info */}
      <div className="mb-8 space-y-2">
        <p><strong>Name:</strong> Sooham Bhattacharyya</p>
        <p><strong>Email:</strong> <a href="mailto:sunnysooham05@gmail.com" className="text-blue-600 underline">sunnysooham05@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-8101417215</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/SoohamBhattacharyya" target="_blank" className="text-blue-600 underline">https://github.com/SoohamBhattacharyya</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sooham-bhattacharyya-a90424228" target="_blank" className="text-blue-600 underline">https://www.linkedin.com/in/sooham-bhattacharyya-a90424228</a></p>
      </div>

      {/* Contact Form */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>
      )}
    </main>
  );
}
