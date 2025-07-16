import React from "react";

// eslint-disable-next-line no-unused-vars
import salis2 from "../assets/salis2.png";
import uiux from "../assets/service/uiux.jpg";

const About = () => (
  <section>
    <div className="min-h-screen bg-zinc-900 rounded-[5rem] shadow-lg p-12">
      <div className="flex justify-between items-start mb-8 border-b-2 border-gray-500 mt-8">
        <h1 className="text-4xl font-bold text-white">
          My <span className="text-red-500">Service</span>
        </h1>
        <p className=" md:text-base text-teal-900 text-left max-w-2xl pb-5 md:-mt-8">
          I am a passionate developer with a keen interest in creating
          innovative solutions. My journey in the tech world has been driven by
          curiosity and a desire to learn continuously...
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-zinc-700 rounded-xl p-6 relative">
          <h1 className="text-xl font-bold text-gray-400 mb-4 border-b-2">
            UI/UX Design
          </h1>

          <img
            src={uiux}
            alt="Stalis Ahmad"
            className="h-80 w-full object-cover rounded-lg"
          />

          <div className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white mb-4 border-b-2">
            Web Design
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white mb-4 border-b-2">
            Landing Page
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default About;
