import { FaPython, FaReact, FaAws, FaDatabase, FaTools, FaBrain, FaEye } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiTableau, SiDocker, SiMongodb, SiAzuredevops, SiPandas, SiTensorflow } from "react-icons/si";

const Skills = () => (
  <section id="skills" className="py-20 px-6 text-center bg-gradient-to-b from-white to-pink-50" data-aos="fade-up">
    <h2 className="text-4xl font-bold text-pink-600 mb-10 underline decoration-pink-400 underline-offset-8">
      Skills
    </h2>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left text-gray-800">
      {/* Programming Languages */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-400">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <SiJavascript className="text-yellow-500" />
          Programming Languages
        </h3>
        <p>Python, JavaScript, SQL,  DAX</p>
      </div>

      {/* Machine Learning */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-400">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaBrain className="text-purple-500" />
          Machine Learning
        </h3>
        <p>Scikit-learn, TensorFlow, NLP, Regression, Classification, EfficientNet, Object Detection, YOLO, Haar Cascades
        </p>
      </div>

      {/* Data Tools */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-400">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <SiTableau className="text-blue-500" />
          Data Tools
        </h3>
        <p>Power BI, Tableau, Excel, Pandas, Seaborn</p>
      </div>

      {/* Web Development */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-400">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaReact className="text-blue-400" />
          Web Development
        </h3>
        <p>HTML, CSS, React, Node.js, Express, REST APIs</p>
      </div>

      {/* Cloud & DevOps */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-400">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaAws className="text-orange-400" />
          Cloud & DevOps
        </h3>
        <p>AWS, Docker, Azure DevOps, Git, GitHub, GitHub Pages, gh-pages, CI/CD Basic</p>
      </div>

      {/* Database & ETL */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-400">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaDatabase className="text-green-600" />
          Database & ETL
        </h3>
        <p>MySQL, Redshift, Apache Kafka, Hadoop, Real-time session tracking
        </p>
      </div>

      {/* Computer Vision */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-400 md:col-span-2">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaEye className="text-red-500" />
          Computer Vision & Real-Time Processing
        </h3>
        <p>OpenCV, Haar Cascades, Real-time Video Analysis, Yawn & Phone Detection
        </p>
      </div>
    </div>
  </section>
);

export default Skills;

