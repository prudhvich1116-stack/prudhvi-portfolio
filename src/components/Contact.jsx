import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white px-8 pt-32 pb-24 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Get In Touch
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 text-lg">
          Have a project idea, opportunity, or just want to connect?
          I'd love to hear from you.
        </p>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ================= CONTACT INFORMATION ================= */}

          <div
            className="bg-slate-800 border border-cyan-500 rounded-2xl p-8
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
            transition-all duration-300"
          >

            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Let's Connect
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, collaborations, and ideas related to software,
              artificial intelligence, and technology.
            </p>

            {/* Email */}

            <div className="flex items-center gap-5 mb-6">

              <div className="bg-cyan-500 p-4 rounded-full">
                <FaEnvelope className="text-slate-900 text-xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=prudhvich1116@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-cyan-400 transition-colors"
                >
                  prudhvich1116@gmail.com
                </a>
              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-5 mb-6">

              <div className="bg-cyan-500 p-4 rounded-full">
                <FaPhone className="text-slate-900 text-xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Phone
                </p>

                <a
                  href="tel:+917013055180"
                  className="text-white font-medium hover:text-cyan-400 transition-colors"
                >
                  +91 70130 55180
                </a>
              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-5 mb-8">

              <div className="bg-cyan-500 p-4 rounded-full">
                <FaMapMarkerAlt className="text-slate-900 text-xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Location
                </p>

                <p className="text-white font-medium">
                  Vijayawada, Andhra Pradesh, India
                </p>
              </div>

            </div>

            {/* Social Links */}

            <div className="flex gap-4">

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/prudhvi-chalapareddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center
                border-2 border-cyan-500 rounded-full
                text-cyan-400
                hover:bg-cyan-500 hover:text-slate-900
                hover:scale-110
                transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>

              {/* GitHub */}

              <a
                href="https://github.com/prudhvich1116-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center
                border-2 border-cyan-500 rounded-full
                text-cyan-400
                hover:bg-cyan-500 hover:text-slate-900
                hover:scale-110
                transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}

          <div
            className="bg-slate-800 border border-cyan-500 rounded-2xl p-8
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
            transition-all duration-300"
          >

            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Send Me a Message
            </h3>

            <form className="space-y-6">

              {/* Name */}

              <div>
                <label className="block text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-slate-900 border border-slate-600
                  rounded-xl px-5 py-3 text-white
                  outline-none
                  focus:border-cyan-400
                  transition-all duration-300"
                />
              </div>

              {/* Email */}

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-slate-600
                  rounded-xl px-5 py-3 text-white
                  outline-none
                  focus:border-cyan-400
                  transition-all duration-300"
                />
              </div>

              {/* Subject */}

              <div>
                <label className="block text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full bg-slate-900 border border-slate-600
                  rounded-xl px-5 py-3 text-white
                  outline-none
                  focus:border-cyan-400
                  transition-all duration-300"
                />
              </div>

              {/* Message */}

              <div>
                <label className="block text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-slate-900 border border-slate-600
                  rounded-xl px-5 py-3 text-white
                  outline-none resize-none
                  focus:border-cyan-400
                  transition-all duration-300"
                ></textarea>
              </div>

              {/* Send Button */}

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3
                bg-cyan-500 text-slate-900
                font-bold
                px-6 py-3
                rounded-xl
                hover:bg-cyan-400
                hover:scale-[1.02]
                transition-all duration-300"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;