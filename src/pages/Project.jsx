import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lp from "../assets/service/landingpage.jpg";
import ui from "../assets/service/uiux.jpg";
import wd from "../assets/service/webdesign.jpg";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

const projects = [
  {
    title: "TrashGo",
    description: "Sistem manajemen bank sampah berbasis web.",
    image: lp,
    link: "https://github.com/aminssmile/trashgo",
  },
  {
    title: "Portfolio Website",
    description: "Website portofolio pribadi modern.",
    image: wd,
    link: "#",
  },
  {
    title: "To Do App",
    description: "Aplikasi manajemen tugas harian.",
    image: ui,
    link: "#",
  },
  {
    title: "UI Kit",
    description: "Kumpulan UI reusable berbasis Tailwind.",
    image: wd,
    link: "#",
  },
];

const Project = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    if (startIndex + itemsPerPage < projects.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section
      id="projects"
      className="min-h-screen md:min-h-[110vh] px-4 md:px-10 py-20 bg-white text-white font-fredoka"
    >
      <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-herogreen text-center md:text-left">
          Let's Have a Look at
          <br /> my <span className="text-bravepink">Portfolio</span>
        </h1>
        <button className="text-sm text-herogreen hover:text-bravepink transition">
          See More...
        </button>
      </div>

      <div className="relative">
        {/* Arrow Left */}
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-zinc-700 text-white rounded-full hover:bg-red-500 transition"
          >
            <ChevronLeft />
          </button>
        )}

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 justify-center">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-resistanceblue rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm px-4 py-2 border border-white text-white hover:bg-herogreen hover:text-white rounded-full transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow Right */}
        {startIndex + itemsPerPage < projects.length && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-zinc-700 text-white rounded-full hover:bg-red-500 transition"
          >
            <ChevronRight />
          </button>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
        <span className="text-white border rounded-full p-2 px-4 bg-resistanceblue">
          UI/UX Design
        </span>
        <span className="text-white border rounded-full p-2 px-4 bg-resistanceblue">
          Web Developer
        </span>
        <span className="text-white border rounded-full p-2 px-4 bg-resistanceblue">
          Mobile Developer
        </span>
      </div>

      {/* More Text */}
      <div className="mt-10">
        <h1 className="text-herogreen text-center text-xl md:text-2xl">
          <span className="text-resistanceblue">More</span> projects coming soon!
        </h1>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-24">
        <h1 className="text-2xl md:text-4xl font-bold text-herogreen">
          Have An Awesome Project <br className="block md:hidden" />
          Idea? <span className="text-bravepink">Let's Discuss</span>
        </h1>

        {/* Form Email */}
        <form className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full border border-resistanceblue w-72 focus:outline-none focus:ring-2 focus:ring-resistanceblue"
            required
          />
          <button
            type="submit"
            className="bg-resistanceblue text-white px-6 py-2 rounded-full hover:bg-black transition"
          >
            Back Call
          </button>
        </form>
      </div>
    </section>
  );
};

export default Project;
