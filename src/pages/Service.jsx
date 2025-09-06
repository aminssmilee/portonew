import React, { useRef } from "react";
import Crosshair from "../components/Crosshair"; // sesuaikan path-nya
import uiux from "../assets/service/uiux.jpg";
import lp from "../assets/service/landingpage.jpg";
import wd from "../assets/service/webdesign.jpg";

const Service = () => {
  const containerRef = useRef(null);

  return (
    <section id="service " className="font-fredoka">
      <div
        ref={containerRef}
        className="relative min-h-screen bg-resistanceblue shadow-lg px-12 py-20 overflow-hidden"
      >
        <Crosshair containerRef={containerRef} color="#ffffff" />

        <div className="flex justify-between items-start mb-16">
          <h1 className="text-4xl md:text-4xl font-bold text-herogreen">
            My <span className="text-bravepink text-4xl md:text-4xl">Services</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-left hidden md:block">
            I am a passionate developer with a keen interest in creating
            innovative solutions. My journey in the tech world has been driven
            by curiosity and a desire to learn continuously.
          </p>
        </div>

        <div className="border-b-2 border-gray-500 mb-8"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group bg-zinc-800 text-white rounded-2xl p-5 shadow-md hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:text-zinc-800 transition">
            <h2 className="text-xl font-bold mb-4">UI/UX Design</h2>
            <div className="border-b-2 border-gray-500 mb-8"></div>
            <div className="overflow-hidden rounded-xl">
              <img
                src={uiux}
                alt="UI/UX"
                className="object-cover w-full h-60"
              />
            </div>
          </div>

          <div className="relative group bg-zinc-800 text-white rounded-2xl p-5 shadow-md hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:text-zinc-800 transition">
            <h2 className="text-xl font-bold mb-4">Web Design</h2>
            <div className="border-b-2 border-gray-500 mb-8"></div>
            <div className="overflow-hidden rounded-xl">
              <img
                src={wd}
                alt="Web Design"
                className="object-cover w-full h-60"
              />
            </div>
          </div>

          <div className="relative group bg-zinc-800 text-white rounded-2xl p-5 shadow-md hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:text-zinc-800 transition">
            <h2 className="text-xl font-bold mb-4">Landing Page</h2>
            <div className="border-b-2 border-gray-500 mb-8"></div>
            <div className="overflow-hidden rounded-xl">
              <img
                src={lp}
                alt="Landing Page"
                className="object-cover w-full h-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
