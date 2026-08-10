import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiMysql,
  SiTensorflow,
  SiOpencv,
  SiGit,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white px-8 py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          My Skills
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-20 text-lg">
          Technologies and tools I use to build modern applications.
        </p>

        {/* Skill Cards */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* Frontend */}

          <div className="bg-slate-800 rounded-2xl p-8 border border-cyan-500 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-300">

            <h3 className="text-3xl font-bold text-cyan-400 text-center mb-8">
              Frontend
            </h3>

            <ul className="space-y-5">

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <FaHtml5 className="text-4xl text-orange-500" />
                HTML5
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <FaCss3Alt className="text-4xl text-blue-500" />
                CSS3
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <FaJsSquare className="text-4xl text-yellow-400" />
                JavaScript
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <FaReact className="text-4xl text-cyan-400" />
                React.js
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <SiTailwindcss className="text-4xl text-sky-400" />
                Tailwind CSS
              </li>

            </ul>

          </div>

          {/* Backend */}

          <div className="bg-slate-800 rounded-2xl p-8 border border-cyan-500 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-300">

            <h3 className="text-3xl font-bold text-cyan-400 text-center mb-8">
              Backend
            </h3>

            <ul className="space-y-5">

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <FaJava className="text-4xl text-red-500" />
                Java
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <FaPython className="text-4xl text-yellow-400" />
                Python
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <SiDjango className="text-4xl text-green-500" />
                Django
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <FaCode className="text-4xl text-gray-300" />
                Flask
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <SiMysql className="text-4xl text-blue-500" />
                MySQL
              </li>

            </ul>

          </div>

          {/* AI & Tools */}

          <div className="bg-slate-800 rounded-2xl p-8 border border-cyan-500 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-300">

            <h3 className="text-3xl font-bold text-cyan-400 text-center mb-8">
              AI • Tools
            </h3>

            <ul className="space-y-5">

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <SiTensorflow className="text-4xl text-orange-500" />
                TensorFlow
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <SiOpencv className="text-4xl text-blue-500" />
                OpenCV
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <FaGitAlt className="text-4xl text-red-500" />
                Git & GitHub
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <VscVscode className="text-4xl text-blue-500" />
                VS Code
              </li>

              <li className="flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition">
                <SiPostman className="text-4xl text-orange-500" />
                Postman
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;