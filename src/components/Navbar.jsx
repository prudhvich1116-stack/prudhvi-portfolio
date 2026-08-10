import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">

        {/* Logo + Name */}
        <a
          href="#home"
          onClick={closeMenu}
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
            <a href="#home" className="hover:text-cyan-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-cyan-500/30">
          <ul className="flex flex-col text-center text-white font-medium">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-slate-900 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-slate-900 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-slate-900 transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-slate-900 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-4 hover:bg-cyan-500 hover:text-slate-900 transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;