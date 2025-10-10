"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // for hamburger and close icons

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "hero";
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
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "tech", name: "Tech Stack" },
    { id: "projects", name: "Projects" },
    { id: "achievements", name: "Achievements & Certifications" },
    { id: "contact", name: "Contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click
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
        {/* Logo / Name */}
        <motion.h1
          className="text-xl font-bold text-blue-400 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("hero")}
        >
          Sainath <span className="text-white">Rahul A</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              className="text-white w-7 h-7 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              className="text-white w-7 h-7 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md text-white text-center py-4 space-y-4"
          >
            {links.map((link) => (
              <div
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`cursor-pointer hover:text-blue-400 transition ${
                  active === link.id ? "text-blue-400" : ""
                }`}
              >
                {link.name}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
