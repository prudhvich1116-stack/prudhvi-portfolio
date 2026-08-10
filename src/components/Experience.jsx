import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-900 text-white px-8 py-24 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Experience
        </h2>

        <p className="text-center text-gray-400 mt-4 text-lg">
          My professional journey and work experience.
        </p>

        {/* Experience Card */}

        <div className="max-w-5xl mx-auto mt-20">

          <div
            className="bg-slate-800 border border-cyan-500 rounded-3xl p-10
            hover:-translate-y-3
            hover:scale-[1.01]
            hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
            transition-all duration-300"
          >

            {/* Header */}

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

              {/* Left Side */}

              <div>

                <div className="flex items-center gap-4">

                  <FaBriefcase className="text-cyan-400 text-4xl" />

                  <h3 className="text-3xl font-bold text-white">
                    Billing Executive
                  </h3>

                </div>

                <div className="flex items-center gap-3 mt-4 text-cyan-400">

                  <FaBuilding />

                  <p className="text-xl">
                    Lalithaa Jewellery Mart Ltd.
                  </p>

                </div>

              </div>

              {/* Right Side */}

              <div className="space-y-4">

                <div className="flex items-center gap-3">

                  <FaCalendarAlt className="text-cyan-400" />

                  <span className="bg-cyan-500 text-slate-900 px-4 py-1 rounded-full font-semibold">
                    Dec 2022 – Jun 2025
                  </span>

                </div>

                <div className="flex items-center gap-3 text-cyan-400">

                  <FaMapMarkerAlt />

                  <span>Vijayawada, Andhra Pradesh</span>

                </div>

              </div>

            </div>

            {/* Divider */}

            <hr className="border-cyan-500 opacity-40 my-8" />

            {/* Responsibilities */}

            <div className="grid md:grid-cols-2 gap-4">

              {[
                "Billing Operations",
                "Customer Support",
                "Transaction Records",
                "MS Excel Reports",
                "Cash Handling",
                "Team Collaboration",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-700 rounded-xl px-5 py-4
                  hover:bg-cyan-500
                  hover:text-slate-900
                  transition-all duration-300 cursor-pointer"
                >

                  <span className="font-bold text-cyan-400 group-hover:text-slate-900">
                    ✔
                  </span>

                  <span className="font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;