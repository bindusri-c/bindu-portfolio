import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-yellow-100 via-rose-200 to-pink-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-pink-600 tracking-widest animate-bounce cursor-pointer">
          SRI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-semibold text-lg">
          {[
            "about",
            "experience",
            "skills",
            "projects",
            "education",
            "achievements",
            "contact",
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative group transition-colors duration-300 hover:text-pink-500"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="block h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="text-2xl md:hidden text-pink-600 z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-yellow-100 via-rose-200 to-pink-200 shadow-lg md:hidden px-6 py-4">
            <ul className="flex flex-col gap-4 text-lg font-semibold text-gray-800">
              {[
                "about",
                "experience",
                "skills",
                "projects",
                "education",
                "achievements",
                "contact",
              ].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="block hover:text-pink-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
