"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen text-center">
      {/* Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg mb-6 object-cover"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Name */}
      <motion.h1
        className="text-5xl font-extrabold mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Hi, I'm <span className="text-blue-400">Sainath Rahul A</span>
      </motion.h1>

      {/* Role */}
      <motion.p
        className="text-xl text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        AI/ML Developer | Data-Centric Thinker
      </motion.p>

      {/* Resume Button */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        📄 View Resume
      </motion.a>
    </section>
  );
}

