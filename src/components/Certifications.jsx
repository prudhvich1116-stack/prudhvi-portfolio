import {
  FaCertificate,
  FaMicrosoft,
  FaRobot,
  FaShieldAlt,
  FaNetworkWired,
  FaChartLine,
  FaFileExcel,
  FaUsers,
} from "react-icons/fa";

import aiSkillsPassport from "../assets/certificates/AI-Skills-Passport.pdf";
import aiToolsChatGPT from "../assets/certificates/AI-Tools-ChatGPT.pdf";
import ethicalHacking from "../assets/certificates/Ethical-Hacking.pdf";
import ciscoNetworking from "../assets/certificates/Cisco-Hardware-Networking.pdf";
import msExcel from "../assets/certificates/MS-Excel-Advanced.pdf";
import tataDataAnalytics from "../assets/certificates/Tata-GenAI-Data-Analytics.pdf";
import hrAnalytics from "../assets/certificates/HR-Analytics.pdf";

function Certifications() {
  const certifications = [
    {
      title: "AI Skills Passport",
      issuer: "EY & Microsoft",
      icon: <FaMicrosoft />,
      certificate: aiSkillsPassport,
    },
    {
      title: "AI Tools & ChatGPT",
      issuer: "be10x",
      icon: <FaRobot />,
      certificate: aiToolsChatGPT,
    },
    {
      title: "Ethical Hacking",
      issuer: "Certification",
      icon: <FaShieldAlt />,
      certificate: ethicalHacking,
    },
    {
      title: "Hardware & Networking",
      issuer: "Cisco Level 1",
      icon: <FaNetworkWired />,
      certificate: ciscoNetworking,
    },
    {
      title: "Advanced Excel",
      issuer: "Microsoft Excel",
      icon: <FaFileExcel />,
      certificate: msExcel,
    },
    {
      title: "GenAI Data Analytics",
      issuer: "Tata Group • Forage",
      icon: <FaChartLine />,
      certificate: tataDataAnalytics,
    },
    {
      title: "HR Analytics",
      issuer: "Certification",
      icon: <FaUsers />,
      certificate: hrAnalytics,
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Certifications
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 text-lg">
          Certifications that showcase my continuous learning and technical
          growth.
        </p>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl border border-cyan-500
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
              transition-all duration-300
              overflow-hidden"
            >

              {/* Certificate Icon */}
              <div className="flex justify-center pt-8">
                <div
                  className="w-16 h-16 rounded-full
                  bg-cyan-500/10
                  flex items-center justify-center
                  text-cyan-400 text-4xl"
                >
                  {certification.icon}
                </div>
              </div>

              {/* Certificate Information */}
              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold text-white">
                  {certification.title}
                </h3>

                <p className="text-cyan-400 text-lg mt-2">
                  {certification.issuer}
                </p>

                <p className="text-gray-400 mt-4 text-sm">
                  Professional certification demonstrating continuous learning
                  and technical development.
                </p>

                {/* View Certificate Button */}
                <div className="mt-6 flex justify-center">
                  <a
                    href={certification.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 text-slate-900
                    px-5 py-2 rounded-lg
                    font-semibold
                    hover:bg-cyan-400
                    hover:scale-105
                    transition-all duration-300
                    flex items-center gap-2"
                  >
                    <FaCertificate />
                    View Certificate
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;