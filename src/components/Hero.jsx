"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-black text-white">
      {/* Left Section - Text */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-400">Sainath Rahul A</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I’m an <span className="text-blue-400">AI/ML Developer</span> and a{" "}
          <span className="text-blue-400">Data-Centric Thinker</span>.
        </p>
        <p className="mt-3 text-gray-400 max-w-lg mx-auto md:mx-0">
          I specialize in developing intelligent systems that bridge data and
          innovation, turning real-world problems into smart, scalable
          solutions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
          >
            Let’s Connect
          </motion.a>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <div className="w-48 h-48 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
          <Image
            src="/profile.jpg" // make sure this file exists in /public
            alt="Sainath Rahul"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
