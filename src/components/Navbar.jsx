"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
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

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements & Certifications" },
  { href: "#contact", label: "Contact" },
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
          onClick={() => scrollToSection("home")}
        >
          Sainath <span className="text-white">Rahul A</span>
        </motion.h1>

        <ul className="flex space-x-6 text-gray-300 font-medium">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer hover:text-blue-400 transition ${
                active === link.id ? "text-blue-400" : ""
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
