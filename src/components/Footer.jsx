import {
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-cyan-500/30">

      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Main Footer */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}

          <div className="text-center md:text-left">

            <h2 className="text-3xl font-bold text-cyan-400">
              Prudhvi
            </h2>

            <p className="text-gray-400 mt-2">
              AI & Full Stack Developer
            </p>

          </div>

          {/* Navigation */}

          <div className="flex flex-wrap justify-center gap-6 text-gray-300">

            <a
              href="#home"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </a>

          </div>

          {/* Social Links */}

          <div className="flex gap-4">

            <a
              href="https://www.linkedin.com/in/prudhvi-chalapareddy/"
              className="w-11 h-11 flex items-center justify-center
              rounded-full border border-cyan-500
              text-cyan-400
              hover:bg-cyan-500 hover:text-slate-950
              hover:scale-110
              transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/prudhvich1116-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center
              rounded-full border border-cyan-500
              text-cyan-400
              hover:bg-cyan-500 hover:text-slate-950
              hover:scale-110
              transition-all duration-300"
            >
              <FaGithub />
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © 2026 Prudhvi Chalapareddy. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Built with React & Tailwind CSS
          </p>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center
            rounded-full bg-cyan-500 text-slate-950
            hover:bg-cyan-400
            hover:-translate-y-1
            transition-all duration-300"
            title="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;