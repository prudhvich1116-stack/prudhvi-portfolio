import {
  FaUserGraduate,
  FaUniversity,
  FaSchool,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaUserGraduate className="text-slate-900 text-2xl" />,
      degree: "Master of Computer Applications (MCA)",
      college: "Andhra Loyola College (Autonomous), Vijayawada",
      year: "2025 – Present",
    },
    {
      icon: <FaUniversity className="text-slate-900 text-2xl" />,
      degree: "B.Sc. Computer Science",
      college: "SRR & CVR Govt. Degree College, Vijayawada",
      year: "2022 – 2025",
    },
    {
      icon: <FaSchool className="text-slate-900 text-2xl" />,
      degree: "Intermediate (MPC)",
      college: "Andhra Loyola College (Autonomous), Vijayawada",
      year: "2019 – 2021",
    },
    {
      icon: <FaBookOpen className="text-slate-900 text-2xl" />,
      degree: "Secondary School Certificate (SSC)",
      college: "Sree Seven Hills E.M. High School, Vijayawada",
      year: "2018 – 2019",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 text-white px-8 py-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Education
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 text-lg">
          My academic journey and qualifications.
        </p>

        {/* Education Cards */}

        <div className="space-y-10">

          {education.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 border border-cyan-500 rounded-2xl
              px-8 py-7
              hover:-translate-y-2
              hover:scale-[1.01]
              hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
              transition-all duration-300"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                {/* Left */}

                <div className="flex items-center gap-5">

                  <div className="bg-cyan-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.degree}
                    </h3>

                    <p className="text-cyan-400 mt-2 text-lg">
                      {item.college}
                    </p>

                  </div>

                </div>

                {/* Right */}

                <div className="flex items-center gap-3 bg-slate-700 px-6 py-3 rounded-full shadow-lg">

                  <FaCalendarAlt className="text-cyan-400 text-lg" />

                  <span className="text-cyan-400 font-semibold text-lg">
                    {item.year}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;