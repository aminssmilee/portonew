import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lp from "../assets/service/landingpage.jpg";
import ui from "../assets/service/uiux.jpg";
import wd from "../assets/service/webdesign.jpg";

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
      className="min-h-[110vh] px-10 py-20 bg-white text-white font-fredoka"
    >
      <div className="mb-12 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-black">
          Let's Have a Look at
          <br /> my <span className="text-jeruk">Portfolio</span>
        </h1>
        <button className="text-sm text-jeruk hover:text-red-500 transition">
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
              className="bg-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition"
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
                  className="inline-block text-sm px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition"
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
      <div className="flex items-center text-center justify-center gap-4 content-center mt-8 ">
        <h1 className="text-black border rounded-full p-2 bg-zinc-300">
          UI/UX Design
        </h1>
        <h1 className="text-black border rounded-full p-2 bg-zinc-300">
          Web Developer
        </h1>
        <h1 className="text-black border rounded-full p-2 bg-zinc-300">
          Mobile Developer
        </h1>
      </div>
      <div>
        <h1 className="text-black text-center mt-10">
          <span className="text-jeruk">More</span> projects coming soon!
        </h1>
      </div>
      <div className="text-center mt-40">
        <h1 className="text-4xl font-bold text-black">
          Have An Awesome Project <br /> Idea?{" "}
          <span className="text-jeruk">Let's Discuss</span>
        </h1>

        {/* Form Email */}
        <form className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full border border-jeruk w-72 focus:outline-none focus:ring-2 focus:ring-jeruk"
            required
          />
          <button
            type="submit"
            className="bg-jeruk text-white px-6 py-2 rounded-full hover:bg-red-500 transition"
          >
            Back Call
          </button>
        </form>
      </div>
    </section>
  );
};

export default Project;
