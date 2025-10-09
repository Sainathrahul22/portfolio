"use client";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          🏆 Achievements
        </h2>

        <div className="space-y-10 text-lg text-gray-200">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Hackathons & Competitions
            </h3>
            <ul className="list-disc list-inside text-left space-y-4">
              <li>
                <strong>Adobe India Hackathon 2025 (via Unstop):</strong> Advanced
                past Round 1 in a national-level competition by contributing to
                the conceptualization and development of an intelligent document
                understanding solution.
              </li>
              <li>
                <strong>SRM Datathon 2024 (organized by GUVI):</strong> Participated
                in a 24-hour team event to build a <em>Multiple Disease Prediction
                System</em> using Python, Flask, and Machine Learning. Responsible
                for training the ML model and integrating backend logic to deliver
                a functional prototype within the timeframe.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-left space-y-4">
              <li>
                <strong>Python Programming and Data Exploration — NIIT (2022):</strong>{" "}
                Completed a 44-hour, hands-on training course covering Python
                fundamentals and applied data analysis techniques.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
