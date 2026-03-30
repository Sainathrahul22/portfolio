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
            I’m passionate about building intelligent systems and scalable web applications 
            that solve real-world problems. With a strong foundation in Data Science, 
            Machine Learning, and Full Stack Development, I focus on creating solutions 
            that are both practical and impactful.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-6">
            I have hands-on experience in data analysis, predictive modeling, and developing 
            end-to-end applications. I work with technologies like Python, Django, Flask, React, 
            and modern data tools to build efficient and user-friendly systems.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-6">
            My strengths lie in combining analytical thinking with strong development skills, enabling me 
            to design robust backends, clean user interfaces, and data-driven solutions.
          </p>
          
          <p className="text-lg text-gray-200 leading-relaxed mt-6">
            My core interests include Machine Learning, backend development, and building data-centric applications 
            that deliver meaningful insights and real value.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-6">
            I’m currently seeking opportunities in Data Science, Machine Learning, or Software Development where
             I can contribute, learn, and grow in a dynamic environment.
          </p>

        </div>
      </motion.div>
    </section>
  );
}
