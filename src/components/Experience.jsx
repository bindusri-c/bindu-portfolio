import React, { useState } from "react";
import utaLogo from "../assets/uta.png";
import quantumLogo from "../assets/quantum.png";
import srkrLogo from "../assets/srkr.jpg";

const experiences = [
  {
    org: "University of Texas at Arlington",
    role: "Administrative Assistant",
    time: "Aug 2024 – Present",
    logo: utaLogo,
    points: [
      "Automated and analyzed data for 20,000+ graduation attendees using SQL, Power BI, Python.",
      "Reduced manual tasks by 40% with Azure DevOps + Excel workflows.",
      "Created dashboards to track onboarding/offboarding for 10+ departments.",
      "Improved reporting accuracy by 95% through data validation.",
      "Coordinated with cross-functional teams for smoother operations.",
    ],
  },
  {
    org: "Quantum Learnings India",
    role: "Machine Learning Engineer",
    time: "Jan 2023 – Jul 2023",
    logo: quantumLogo,
    points: [
      "Built real-time ETL pipelines with Kafka, Hadoop, and Redshift.",
      "Improved feedback analysis with Python, NLP, and Tableau dashboards.",
      "Deployed sentiment analysis model to identify satisfaction in <2s.",
      "Created pre-processing pipelines for efficient ML training.",
      "Integrated ML models into production using CI/CD pipelines.",
    ],
  },
  {
    org: "Sagi Rama Krishnam Raju Engineering College",
    role: "Campus Ambassador",
    time: "Dec 2021 – May 2022",
    logo: srkrLogo,
    points: [
      "Represented campus during inter-college tech initiatives.",
      "Organized 2+ workshops and 1 university-wide event.",
      "Handled 100+ student registrations and coordination.",
      "Promoted cross-department collaboration for events.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-10 bg-gradient-to-b from-white via-softpink to-white text-left max-w-5xl mx-auto"
      data-aos="fade-up"
    >
      
      <h2 className="text-4xl font-bold text-pink-500 mb-14 underline decoration-pink-300 underline-offset-8 text-center">
      Experience
      </h2>


      <div className="relative border-l-2 border-roseborder ml-6 space-y-16">
        {experiences.map((item, i) => (
          <div
            key={i}
            className="relative pl-12 group cursor-pointer"
            onClick={() => toggleCard(i)}
          >
            {/* Pulsing Dot */}
            <div className="absolute -left-6 top-1 w-10 h-10 rounded-full bg-white border-2 border-roseborder shadow-lg ring-2 ring-roseborder ring-opacity-30 animate-pulse overflow-hidden">
              <img
                src={item.logo}
                alt={item.org}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Experience Card */}
            <div
              className={`transition-all duration-500 ease-in-out bg-softpink text-pink-800 p-6 rounded-xl border border-roseborder shadow-md group-hover:shadow-lg group-hover:shadow-lightrose hover:scale-[1.02] ${
                activeIndex === i ? "scale-[1.03] bg-white border-pink-400 shadow-xl" : ""
              }`}
            >
              <h3 className="text-2xl font-bold mb-2 text-pink-500 group-hover:text-pink-600 transition-colors">
                {item.org}
              </h3>
              <p className="text-md font-semibold mb-4 text-pink-400 group-hover:text-pink-500">
                {item.role} | {item.time}
              </p>
              <ul className="list-disc ml-5 space-y-2 text-base leading-relaxed text-gray-700 group-hover:text-pink-600 transition-all">
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
