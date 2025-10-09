"use client";
import { motion } from "framer-motion";
import { Mail, Copy, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sainathrahul2003@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">📬 Contact</h2>

        <p className="max-w-2xl mx-auto text-lg mb-10 text-gray-200">
          Let’s connect and collaborate!  
          I’m always open to exciting opportunities, meaningful collaborations, or just a good tech chat.
        </p>

        <div className="space-y-8 text-lg">
          {/* Email Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">sainath.rahul2004@gmail.com</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-3 py-1 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>

          {/* Phone */}
          <div className="flex justify-center items-center space-x-3">
            <Phone className="w-6 h-6 text-green-400" />
            <span className="text-gray-300">+91 7358736473</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mt-4">
            <a
              href="https://www.linkedin.com/in/sainath-rahul-a-3950b02aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Sainathrahul22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
