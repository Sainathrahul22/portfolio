"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">👨‍💻 About Me</h2>

        <div className="space-y-8 text-lg text-gray-200">
          <p className="text-lg text-gray-200 leading-relaxed space-y-6">
            I’m passionate about building intelligent systems and impactful web
            applications that solve real-world problems. With a strong foundation
            in Data Science, Machine Learning, and Python-based Full Stack Web
            Development, I constantly strive to grow as a developer and problem
            solver.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-6">
            I have hands-on experience in Python programming, having developed
            projects involving data analysis, prediction models, and automation.
            I also build robust and scalable web applications using frameworks
            like Django and Flask, combining backend logic with clean and
            responsive user interfaces.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-6">
            My focus areas include Machine Learning, RESTful APIs, and cloud
            integration. I aim to turn data into actionable insights and create
            technology that adds tangible value.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-6">
            I’m currently seeking opportunities in Data Science, Machine
            Learning, or Software Development, where I can collaborate,
            contribute, and continue to grow in a dynamic environment. 
          </p>

        </div>
      </motion.div>
    </section>
  );
}
