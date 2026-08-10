import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";

function Projects() {
  return (
    <section
  id="projects"
  className="min-h-screen bg-slate-950 text-white py-20 px-6 scroll-mt-24"
>
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center text-cyan-400">
          My Projects
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 text-lg">
          Here are some of the projects I have built during my learning
          journey.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ================================================= */}
          {/* PROJECT 1 */}
          {/* ================================================= */}

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-cyan-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-300">

            <img
              src={project1}
              alt="AI Face Sketch Generator"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-cyan-400">
                AI Face Sketch Generator
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Real-time face sketch generation application built with
                Python and OpenCV. The system detects faces and converts
                captured images into pencil-style sketches.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Python
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  OpenCV
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  NumPy
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Flask
                </span>
              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="#projects"
                  className="bg-cyan-500 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                >
                  View Project
                </a>

                <a
                  href="#contact"
                  className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition"
                >
                  Contact Me
                </a>

              </div>

            </div>
          </div>


          {/* ================================================= */}
          {/* PROJECT 2 */}
          {/* ================================================= */}

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-cyan-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-300">

            <img
              src={project2}
              alt="Titanic Data Analysis and EDA"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-cyan-400">
                Titanic Data Analysis & EDA
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Exploratory data analysis project using the Titanic dataset
                to study passenger survival patterns, feature relationships,
                statistical insights, and data distributions through
                visualization.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Python
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Pandas
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  NumPy
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Matplotlib
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Seaborn
                </span>
              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="#projects"
                  className="bg-cyan-500 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                >
                  View Analysis
                </a>

                <a
                  href="#contact"
                  className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition"
                >
                  Contact Me
                </a>

              </div>

            </div>
          </div>


          {/* ================================================= */}
          {/* PROJECT 3 */}
          {/* ================================================= */}

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-cyan-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-300">

            <img
              src={project3}
              alt="Andhra Loyola PG Library Website"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-cyan-400">
                Andhra Loyola PG Library Website
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Responsive digital library portal designed for postgraduate
                students, providing access to PG resources, model and
                question papers, syllabi, e-resources, and library
                information.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  HTML5
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  CSS3
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Responsive Design
                </span>
              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="#projects"
                  className="bg-cyan-500 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                >
                  View Project
                </a>

                <a
                  href="#contact"
                  className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition"
                >
                  Contact Me
                </a>

              </div>

            </div>
          </div>


          {/* ================================================= */}
          {/* PROJECT 4 */}
          {/* ================================================= */}

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-cyan-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-300">

            <img
              src={project4}
              alt="Personal Portfolio Website"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-cyan-400">
                Personal Portfolio Website
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Modern responsive portfolio website developed with React,
                Tailwind CSS, JavaScript, and Vite to showcase my skills,
                projects, education, experience, certifications, and
                professional profile.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  React
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>

                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                  Vite
                </span>
              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="#home"
                  className="bg-cyan-500 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                >
                  Live Portfolio
                </a>

                <a
                  href="#contact"
                  className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition"
                >
                  Contact Me
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;