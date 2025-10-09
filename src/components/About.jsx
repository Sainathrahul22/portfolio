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
          <p>
            I’m <strong>Sainath Rahul A</strong> — an AI/ML Developer and
            data-centric thinker passionate about building intelligent systems
            that bridge innovation and impact. I enjoy translating real-world
            problems into efficient, data-driven solutions through clean code
            and thoughtful design.
          </p>

          <p>
            Currently pursuing my <strong>B.Tech in Computer Science and Engineering</strong> at
            SRM University, I’ve worked on projects that blend
            <em> computer vision, predictive analytics, and full-stack
            development</em>. I also enjoy hackathons and research-driven
            development, which constantly challenge me to learn and grow.
          </p>

          <p>
            My goal is to specialize in <strong>Data Science and AI</strong>,
            leveraging technology to create meaningful, scalable innovations.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
