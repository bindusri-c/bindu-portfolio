import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import profile1 from '../assets/bindu.jpg';
import profile2 from '../assets/bindu2.jpg';
import profile3 from '../assets/grad_5.jpg';

const Hero = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => setShowText(true), 1000); // hide for 1s
    }, 10000); // every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0f172a] to-black text-white flex items-center justify-center px-6 overflow-hidden" data-aos="fade-up">
      {/* Background collage */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-10 opacity-80 pointer-events-none">
        <img src={profile1} alt="1" className="object-cover w-full h-full rounded-xl shadow-xl" />
        <img src={profile2} alt="2" className="object-cover w-full h-full rounded-xl shadow-xl" />
        <img src={profile3} alt="3" className="object-cover w-full h-full rounded-xl shadow-xl" />
      </div>

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-[0px]"></div>

      {/* Foreground content */}
      <div className="z-10 text-center max-w-3xl">
        <div className="inline-block border-l-4 border-pink-500 pl-4 text-left mb-6">
          <div className={`transform transition-all duration-1000 ease-in-out ${showText ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-pink-400 mb-2 inline-block px-4 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-outline hover:text-white transition-colors duration-300">
              Bindu Srivalli Nagineni
            </h1>
            <p className="text-lg md:text-xl text-pink-300 font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md inline-block mt-2 hover:text-white transition-colors duration-300">
              Data Scientist | Full-Stack Developer | Web Designer <br />
              <span className="text-lg text-white/70">("Yes, I write code. No, I won’t fix your printer.")</span>
            </p>
          </div>
        </div>

        {/* Resume + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          <a
            href="/Bindu_srivalli_Resume_MLH.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white py-3 px-6 text-lg rounded-full hover:bg-pink-600 transition-colors"
          >
            View My Resume
          </a>

          {/* Socials with backdrop */}
          <div className="flex items-center gap-5 text-4xl text-pink-400 bg-black/60 px-6 py-3 rounded-full shadow-lg mt-4 md:mt-0 backdrop-blur-md border border-pink-400">
            <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-125 transition duration-300 ease-in-out">
              <FaLinkedin />
            </a>
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-125 transition duration-300 ease-in-out">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-125 transition duration-300 ease-in-out">
              <SiLeetcode />
            </a>
            <a href="https://www.hackerrank.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-125 transition duration-300 ease-in-out">
              <FaHackerrank />
            </a>
            <a href="https://auth.geeksforgeeks.org/user/YOUR_USERNAME/profile" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-125 transition duration-300 ease-in-out">
              <SiGeeksforgeeks />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
