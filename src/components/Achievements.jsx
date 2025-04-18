const Achievements = () => (
    <section
      id="achievements"
      className="py-16 px-8 text-center bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 shadow-2xl rounded-2xl mx-4 my-10 border-4 border-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-pink-600 tracking-widest">
        Achievements
      </h2>
      <ul className="space-y-6 max-w-3xl mx-auto text-left text-lg text-gray-800 font-medium">
        <li className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-l-4 border-purple-400">
          🏆 <strong>1st Place @ UTA Hackathon</strong> – Built a deepfake detector using Gemini API. May or may not have surprised myself (and the judges) with how well it worked.
        </li>
        <li className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-l-4 border-yellow-400">
          📣 <strong>Campus Ambassador @ SRKR ISTE</strong> – Managed outreach for 200+ students. Basically became the go-to person for “Hey can you help me with this event?”
        </li>
        <li className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-l-4 border-pink-400">
          🧠 <strong>Best Paper @ SRKR WEC</strong> – Delivered an AI-driven research talk that didn’t just land — it hit like a well-placed semicolon.
        </li>
        <li className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-l-4 border-blue-400">
          🔍 <strong>Innovation Award @ SRKR ISTE Tech Fest</strong> – Presented crime prediction analytics. Somewhere between CSI and a spreadsheet, but make it futuristic.
        </li>
        <li className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-l-4 border-green-400">
          💡 <strong>Jury Mention @ SRKR Research Day</strong> – Talked sustainable ML tech. Got that polite head nod + “hmm interesting” from the panel (which we all know means: nailed it).
        </li>
        <li className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-l-4 border-red-400">
          💻 <strong>Solved 300+ Coding Questions</strong> – Debugged everything from arrays to existential crises. Still not over that one “off-by-one” error.
        </li>
      </ul>
    </section>
  );
  
  export default Achievements;
  