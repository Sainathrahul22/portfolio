"use client";
import { motion } from "framer-motion";

export default function TechStack() {
  const categories = [
    {
      title: "🚀 Programming & Scripting",
      items: ["Python", "C", "C++", "Java", "JavaScript", "SQL"],
    },
    {
      title: "📊 Data Science & AI/ML",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Scikit-Learn",
      "TensorFlow",
      ],
    },
    
    {
      title: "🧰 Tools & Libraries",
      items: [  
        "Power BI",
        "Tableau",
        "Google Colab",
        "Jupyter Notebook",
        "VS Code",
        "Anaconda",
      ],
    },
    {
      title: "🌐 Web Development",
      items: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React",
        "Django",
        "Flask",
        "Streamlit",
      ],
    },
    {
      title: "🗄️ Databases",
      items: ["MySQL", "PostgreSQL", "SQLite"],
    },
    {
      title: "☁️ DevOps & Tools",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Heroku",
        "AWS",
        "GitHub Actions",
      ],
    },
  ];

  return (
    <section
      id="techstack"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          💻 Tech Stack
        </h2>

        <div className="space-y-12 text-lg text-gray-200">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-gray-900/40 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-blue-400/60 hover:shadow-blue-500/10 transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {cat.title}
              </h3>
              <p className="text-gray-300">{cat.items.join(" • ")}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
