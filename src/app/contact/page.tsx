"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/xvgrpnyv", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("sent");
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" name="name" required className="w-full border border-gray-300 px-4 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" name="email" required className="w-full border border-gray-300 px-4 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea name="message" rows={5} required className="w-full border border-gray-300 px-4 py-2 rounded" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && <p className="text-green-600">Thanks! Your message was sent.</p>}
        {status === "error" && <p className="text-red-600">Oops! Something went wrong.</p>}
      </form>
    </main>
  );
}
