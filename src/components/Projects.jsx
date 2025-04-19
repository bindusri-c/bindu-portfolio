import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => (
  <section id="projects" className="py-20 px-6 text-center bg-gray-100" data-aos="fade-up">
    <h2 className="text-4xl font-bold text-pink-600 mb-10 underline decoration-pink-400 underline-offset-8">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "ArtifactNet Real/Fake + Classifier",
          github: "https://devpost.com/software/artifactnet?ref_content=user-portfolio&ref_feature=in_progress",
          demo: "#",
          img: "realvsfake.jpg",
        },
        {
          title: "Real-Time Yawning Detection",
          github: "https://github.com/bindusri-c/yawn-phone-detector",
          demo: "#",
          img: "yawning.jpg",
        },
        {
          title: "Crime Trend Forecast",
          github: "https://devpost.com/software/forecasting-crime-trends-across-india?ref_content=user-portfolio&ref_feature=in_progress",
          demo: "#",
          img: "india_crime.jpg",
        },
        {
          title: "Power BI Movie Recommender",
          github: "https://drive.google.com/file/d/1u-9l-HDk8PrYJonwccIzXgpfdte37kuL/view?usp=drive_link",
          demo: "#",
          img: "dashboard.jpg",
        },
        {
          title: "Docker: Raft Assignment",
          github: "https://github.com/bindusri-c/Docker",
          demo: "",
          img: "docker.png",
        },
        {
          title: "Heart Disease Prediction",
          github: "https://github.com/bindusri-c/Heart-disease-prediction-",
          demo: "#",
          img: "ML.png",
        },
      ].map((project, i) => (
        <div
          key={i}
          className="bg-white rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-[1.03] hover:shadow-xl border border-gray-200"
        >
          {/* Image with hover overlay */}
          <div className="relative group">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../assets/${project.img}`)}
                alt={project.title}
                className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-30 text-white text-sm font-medium">
                Click to View Demo
              </div>
            </a>
          </div>

          {/* Title + Links */}
          <div className="p-4 text-left">
            <h3 className="text-lg font-bold mb-2 text-gray-800">{project.title}</h3>
            <div className="flex justify-between text-sm text-pink-600">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <FaGithub /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
