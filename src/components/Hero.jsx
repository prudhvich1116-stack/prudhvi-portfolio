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
  className="min-h-screen pt-28 px-8"
>
      <div className="max-w-7xl mx-auto w-full min-h-[calc(100vh-80px)] grid md:grid-cols-2 gap-16 items-center pt-10">

        {/* Left Side */}
          <div className="mt-12">

          <p className="text-cyan-400 text-xl mb-4">
            👋 Hello There,
             I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Prudhvi
            <br />
            Chalapareddy
          </h1>

          <h2 className="text-2xl text-cyan-400 mt-6">
            AI Engineer | Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8 max-w-lg">
            Passionate MCA student building AI-powered applications,
            full-stack web solutions, and software that solves real-world
            problems through technology.
          </p>

          <div className="flex gap-8 mt-10">

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=prudhvich1116@gmail.com&su=Job%20Opportunity%20for%20Prudhvi%20Chalapareddy"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-cyan-400 transition-all duration-300"
>
  Hire Me
</a>

            <a
  href="/resume.pdf"
  download="Prudhvi_Chalapareddy_Resume.pdf"
  className="border-2 border-cyan-500 text-white px-8 py-3 rounded-xl hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
>
  Download Resume
</a>

          </div>
          <div className="flex gap-6 mt-8 text-3xl text-cyan-400">

  <a
    href="https://github.com/prudhvich1116-stack"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white hover:scale-110 transition-all duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/prudhvi-chalapareddy?utm_source=share_via&utm_content=profile&utm_medium=member_android"
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

        <div className="flex justify-center md:justify-end">

          <img
            src={profile}
            alt="Prudhvi"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-500 shadow-2xl hover:scale-105 transition-all duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;