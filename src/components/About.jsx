function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white px-8 py-24"
    >
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              I am Prudhvi Chalapareddy, currently pursuing my
              Master of Computer Applications (MCA). I enjoy building
              AI-powered applications, modern websites, and solving
              real-world problems through technology.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              My goal is to become a Full Stack AI Engineer capable of
              developing intelligent software that makes people's lives
              easier.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500">
              <h4 className="text-cyan-400 text-xl font-bold">Education</h4>
              <p className="mt-3 text-gray-300">
                MCA Student
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500">
              <h4 className="text-cyan-400 text-xl font-bold">Experience</h4>
              <p className="mt-3 text-gray-300">
                Billing Executive
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500">
              <h4 className="text-cyan-400 text-xl font-bold">Projects</h4>
              <p className="mt-3 text-gray-300">
                05+ Projects
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500">
              <h4 className="text-cyan-400 text-xl font-bold">Location</h4>
              <p className="mt-3 text-gray-300">
                Vijayawada, India
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;