"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  }

  return (
    <main className="min-h-screen p-12 bg-white text-gray-800 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-10 tracking-wide text-center text-blue-700">
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200"
      >
        <label className="block mb-6">
          <span className="block mb-2 font-semibold text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
        </label>

        <label className="block mb-6">
          <span className="block mb-2 font-semibold text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
        </label>

        <label className="block mb-6">
          <span className="block mb-2 font-semibold text-gray-700">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-6 text-center text-green-700 font-semibold text-lg">{status}</p>
      )}

      <section className="mt-16 max-w-md text-center text-gray-700">
        <p className="mb-3 text-lg font-medium">You can also reach me at:</p>
        <p className="mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:sunnysooham05@gmail.com"
            className="text-blue-700 underline hover:text-blue-900"
          >
            sunnysooham05@gmail.com
          </a>
        </p>
        <p className="mb-6">
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/918101417215"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 underline hover:text-green-900"
          >
            +91 81014 17215
          </a>
        </p>

        <div className="flex justify-center space-x-10 text-3xl">
          <a
            href="https://www.linkedin.com/in/sooham-bhattacharyya-a90424228"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88071 3.88071 6 2.5 6C1.11929 6 0 4.88071 0 3.5C0 2.11929 1.11929 1 2.5 1C3.88071 1 4.98 2.11929 4.98 3.5ZM0 8.5H5V24H0V8.5ZM8.5 8.5H13.26V10.52H13.33C13.94 9.55 15.34 8.5 17.54 8.5C22.2 8.5 23 11.67 23 16.3V24H18V17.62C18 15.42 17.53 13.75 15.16 13.75C12.8 13.75 12.09 15.4 12.09 17.46V24H7.13V8.5H8.5Z" />
            </svg>
          </a>

          <a
            href="https://github.com/SoohamBhattacharyya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-900 hover:text-black transition"
          >
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0.297C5.37 0.297 0 5.667 0 12.297C0 17.583 3.438 22.092 8.205 23.682C8.805 23.792 9.025 23.422 9.025 23.102C9.025 22.812 9.015 22.092 9.01 21.122C5.672 21.792 4.968 19.392 4.968 19.392C4.422 18.042 3.633 17.682 3.633 17.682C2.546 16.962 3.717 16.972 3.717 16.972C4.922 17.052 5.56 18.212 5.56 18.212C6.633 20.012 8.342 19.492 9.05 19.182C9.158 18.422 9.47 17.922 9.82 17.612C7.152 17.312 4.344 16.262 4.344 11.582C4.344 10.252 4.824 9.162 5.62 8.312C5.496 8.012 5.076 6.802 5.74 5.102C5.74 5.102 6.722 4.782 8.995 6.352C9.942 6.102 10.95 5.982 11.958 5.982C12.966 5.982 13.974 6.102 14.922 6.352C17.194 4.782 18.174 5.102 18.174 5.102C18.84 6.802 18.42 8.012 18.3 8.312C19.1 9.162 19.576 10.252 19.576 11.582C19.576 16.272 16.76 17.31 14.086 17.602C14.528 17.982 14.924 18.722 14.924 19.832C14.924 21.462 14.91 22.792 14.91 23.102C14.91 23.422 15.126 23.8 15.732 23.682C20.5 22.092 24 17.582 24 12.297C24 5.667 18.627 0.297 12 0.297Z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
