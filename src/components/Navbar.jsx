import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `text-base transition ${
      activeSection === id ? "text-jeruk font-bold" : "text-white"
    }`;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-black p-4 rounded-full shadow-lg max-w-4xl w-[90%] z-50">
      <ul className="flex justify-center gap-10 list-none m-0 p-0">
        <li>
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={linkClass("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
