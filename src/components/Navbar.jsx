import { FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md shadow-lg z-50">
      
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo + Name */}

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Prudhvi Logo"
            className="w-14 h-14 rounded-xl"
          />

          <div className="leading-tight">
            <h2 className="text-xl font-bold text-white">
              Prudhvi
            </h2>

            <p className="text-xs text-cyan-400">
              AI & Full Stack Developer
            </p>
          </div>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-10 text-white font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Icon */}

        <div className="md:hidden text-white text-2xl cursor-pointer">
          <FaBars />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;