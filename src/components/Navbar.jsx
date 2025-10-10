"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // offset for navbar height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ The correct section flow and label names
  const links = [
    { href: "hero", label: "Home" },
    { href: "about", label: "About" },
    { href: "tech", label: "Tech Stack" },
    { href: "projects", label: "Projects" },
    { href: "achievements", label: "Achievements & Certifications" },
    { href: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-xl font-bold text-blue-400 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("hero")}
        >
          Sainath <span className="text-white">Rahul A</span>
        </motion.h1>

        <ul className="flex space-x-6 text-gray-300 font-medium">
          {links.map((link) => (
            <li
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`cursor-pointer hover:text-blue-400 transition ${
                active === link.href ? "text-blue-400" : ""
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
