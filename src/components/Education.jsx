import React from "react";
import utaLogo from "../assets/uta.png";
import srkrLogo from "../assets/srkr.jpg";

const educationList = [
  {
    logo: utaLogo,
    name: "University of Texas at Arlington",
    degree: "Master of Science in Computer Science",
    duration: "2023 – 2025",
    highlights: [
      "Specialized in AI, Data Science, Cloud.",
      "Attended alternative breaks where we serve people in need",
      "Projects: Yawning Detection, Crime Forecasting.",
    ],
  },
  {
    logo: srkrLogo,
    name: "Sagi Rama Krishnam Raju Engineering College",
    degree: "B.Tech in Computer Science",
    duration: "2019 – 2023",
    highlights: [
      "Graduated with Distinction .",
      "Campus Ambassador & Coding Club Organizer.",
      "Hosted tech events and attended DSA training events.",
    ],
  },
];

const Education = () => (
  <section
    id="education"
    className="py-20 px-4 md:px-10 bg-gradient-to-b from-pink-50 to-white text-left max-w-6xl mx-auto"
    data-aos="fade-up"
  >
    <h2 className="text-4xl font-bold text-pink-600 mb-14 underline decoration-pink-400 underline-offset-8 text-center">
      Education
    </h2>

    <div className="space-y-10">
      {educationList.map((edu, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-start bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-200 rounded-xl overflow-hidden"
        >
          {/* Logo */}
          <div className="bg-white flex-shrink-0 p-6 md:w-1/4 w-full flex items-center justify-center">
            <img
              src={edu.logo}
              alt={edu.name}
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Info */}
          <div className="p-6 md:w-3/4 w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.name}</h3>
            <p className="text-pink-600 text-lg font-semibold mb-3">
              {edu.degree} | {edu.duration}
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 text-base leading-relaxed">
              {edu.highlights.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
