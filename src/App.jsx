import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="scroll-smooth font-sans">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}


export default App;
