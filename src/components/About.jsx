import StatsSection from './StatsSection';

const About = () => (
  <section id="about" className="px-6 py-20 bg-gradient-to-b from-white via-pink-50 to-white text-center" data-aos="fade-up">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-pink-600 mb-8 underline decoration-pink-400 underline-offset-8">
      About Me
    </h2>

    {/* Bio Section */}
    <p className="max-w-3xl mx-auto text-gray-800 text-lg leading-relaxed mb-8">
      I'm a passionate <span className="font-semibold text-pink-500">Data Scientist</span> and <span className="font-semibold text-pink-500">Full-Stack Developer</span> based in Dallas, Texas. My interests span machine learning, web design, data analytics, computer vision, and automation. As a fresher with real-world projects under my belt, I love creating intelligent, user-friendly, and scalable tech solutions.
    </p>

    {/* Quote Section */}
    <blockquote className="italic text-pink-500 text-xl max-w-xl mx-auto mb-12 transition-all duration-300 hover:text-pink-700 hover:scale-105">
      “I solve problems you didn’t know you had.”
    </blockquote>

    {/* Fun Facts */}
    <h3 className="text-2xl font-semibold text-gray-700 mb-6">Fun Facts 💁‍♀️</h3>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left text-gray-700">
      {[
        "🧠 I think in Python. Like, literally.",
        "🎨 I design UIs while binge-watching *Modern Family*.",
        "🤖 My dream project: an AI that roasts you if you slack off.",
        "☕ Coffee is not a want, it's a **system dependency**.",
      ].map((fact, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-xl p-6 border-l-4 border-pink-400 hover:bg-pink-100 hover:border-pink-600 hover:text-pink-700 transition-all duration-300 cursor-pointer"
        >
          <div dangerouslySetInnerHTML={{ __html: fact }} />
        </div>
      ))}
    </div>

    <StatsSection />
  </section>
);

export default About;
