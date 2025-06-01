"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Teaching", path: "/teaching" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-lg sm:text-xl font-bold">Sooham&rsquo;s Portfolio</span>

        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`$${
            menuOpen ? "block" : "hidden"
          } sm:flex space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block sm:inline hover:underline ${
                pathname === item.path ? "font-bold underline" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
