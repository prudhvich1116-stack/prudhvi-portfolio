import profile from "../assets/images/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 md:pt-28 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto w-full min-h-0 md:min-h-[calc(100vh-80px)] grid md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center pt-4 md:pt-10">

        {/* Left Side */}
        <div className="mt-0 md:mt-12">

          <p className="text-cyan-400 text-lg md:text-xl mb-3 md:mb-4">
            👋 Hello There, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Prudhvi
            <br />
            Chalapareddy
          </h1>

          <h2 className="text-xl md:text-2xl text-cyan-400 mt-4 md:mt-6">
            AI Engineer | Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-5 md:mt-6 text-base md:text-lg leading-7 md:leading-8 max-w-lg">
            Passionate MCA student building AI-powered applications,
            full-stack web solutions, and software that solves real-world
            problems through technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 md:gap-8 mt-7 md:mt-10">

            {/* Hire Me */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prudhvich1116@gmail.com&su=Job%20Opportunity%20for%20Prudhvi%20Chalapareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-slate-900 px-6 md:px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-cyan-400 transition-all duration-300"
            >
              Hire Me
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Prudhvi_Chalapareddy_Resume.pdf"
              className="border-2 border-cyan-500 text-white px-6 md:px-8 py-3 rounded-xl hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-7 md:mt-8 text-3xl text-cyan-400">

            <a
              href="https://github.com/prudhvich1116-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/prudhvi-chalapareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:prudhvich1116@gmail.com"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">

          <img
            src={profile}
            alt="Prudhvi"
            className="w-52 h-52 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-500 shadow-2xl hover:scale-105 transition-all duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;