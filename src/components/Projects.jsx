"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "💰 Personal Expense Tracker",
    description:
      "Developed a full-stack web app built with Django, Django REST Framework, and token-based authentication, backed by PostgreSQL for secure and scalable data storage. Provides CRUD APIs and a responsive front-end for user-specific expense management. Implements MVC architecture, modular RESTful endpoints, and a dynamic UI for efficient personal finance tracking.",
    link: "https://github.com/Sainathrahul22/personal_expense_tracker_postgres", 
  },
  {
    title: "🧠 Multiple Disease Prediction System",
    description:
      "Developed a Flask-based web application that predicts multiple diseases using trained machine learning models. Implemented data preprocessing with Pandas and NumPy, and trained models in Google Colab. Designed an interactive frontend using HTML, CSS, JavaScript, and jQuery with a modular structure. Enabled real-time predictions based on user medical inputs with seamless model integration.",
    link: "https://github.com/Sainathrahul22/Multiple-Disease-Prediction", 
  },
  {
    title: "📊 Superstore Sales Dashboard",
    description:
      "Developed an interactive data analytics dashboard using Streamlit, Plotly, and SQLAlchemy to visualize and manage Superstore sales data. Implemented dynamic filters, CRUD operations, multi-page navigation, and real-time updates, enabling efficient data exploration and analysis. Integrated export functionality for CSV/Excel, providing actionable insights for decision-making.",
    link: "https://github.com/Sainathrahul22/Sales-Dashboard", 
  },
  {
    title: "💬 Real-Time Chat Application",
    description:
      "Developed the frontend of a real-time chat app using React, with support for instant messaging and online user tracking via Socket.io. Implemented a responsive UI using TailwindCSS and DaisyUI, and integrated JWT-based authentication with state management using Zustand. Focused on delivering a smooth user experience with clean UI and robust error handling.",
    link: "https://github.com/Sainathrahul22/Chat_App", 
  },
  {
    title: "📄 Contract Analysis — AI-Powered Legal Insights",
    description:
      "Contributed to the frontend development of an AI-driven legal contract analysis platform using Next.js 14, TypeScript, and Tailwind CSS. Built reusable UI components, responsive layouts, and seamless user workflows for contract upload, clause review, and risk visualization. Ensured a clean, intuitive interface aligned with modern design standards.",
    link: "https://github.com/Sainathrahul22/Contract_analysis", 
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">🚀 Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-left shadow-lg hover:shadow-blue-900/30 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-md leading-relaxed mb-4">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                className="inline-block mt-2 text-blue-400 font-medium hover:underline"
              >
                🔗 View on GitHub
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
