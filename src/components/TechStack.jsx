"use client";
import { motion } from "framer-motion";

export default function TechStack() {
  const categories = [
    {
      title: "🚀 Programming & Scripting",
      items: ["Python", "C", "Java", "JavaScript", "SQL"],
    },
    {
      title: "📊 Data Science & AI/ML",
      items: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Hugging Face Transformers",
        "Sentence-Transformers",
        "Scikit-Learn",
        "PyTorch",
      ],
    },
    {
      title: "🧰 Tools & Libraries",
      items: [
        "Selenium",
        "BeautifulSoup",
        "Requests",
        "Framer Motion",
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
        "REST API's",
        "React",
        "Django",
        "Flask",
        "Streamlit",
        "Node.js",
      ],
    },
    {
      title: "🗄️ Databases",
      items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      title: "☁️ DevOps & Tools",
      items: ["Git", "GitHub", "Heroku", "Vercel", "GitHub Actions"],
    },
  ];

  return (
    <section
      id="tech"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
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
              <div className="flex flex-wrap gap-2 justify-center">
                {cat.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-gray-800/50 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-gray-700/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}