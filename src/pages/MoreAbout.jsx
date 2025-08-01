import React from "react";
import logo from "../assets/service/salis2.png";
// import reactImg from "../assets/logo/javascript.svg";
// import nodeImg from "../assets/logo/javascript.svg";
// import tailwindImg from "../assets/logo/javascript.svg";
// import mongodbImg from "../assets/logo/javascript.svg";
// import gitImg from "../assets/logo/javascript.svg";

import CurvedLoop from "../components/CurvedLoop";
import { Scroll } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import FallingText from "../components/FallingTex";

const MoreAbout = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 font-fredoka">
      {/* Hero Profile Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-1 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Profile Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image with Accent */}
                <div className="relative w-32 h-32">
                  <div className="w-32 h-32 rounded-full bg-jeruk flex items-center justify-center text-white text-2xl font-bold shadow-xl overflow-hidden">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    About Me
                  </h1>
                  <p className="text-lg text-gray-800 mb-4 max-w-lg text-justify">
                    20 years old | Informatics Engineering Student | Aspiring
                    Software Developer | Frontend Developer | Backend Developer
                    | Mobile Developer | Fullstack Developer | Tech Enthusiast
                  </p>
                  <p className="text-gray-500 leading-relaxed max-w-lg text-justify">
                    Hey there! I'm a tech enthusiast and aspiring web developer
                    from Lamongan, East Java, Indonesia. Currently, I'm pursuing
                    a Diploma (D3) in Informatics Engineering at the Electronic
                    Engineering Polytechnic Institute of Surabaya (PENS). I have
                    strong programming skills in JavaScript (React.js), PHP
                    (Laravel), and Flutter. I'm experienced in application
                    development projects and passionate about crafting
                    innovative software solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Projects Completed
                  </div>
                </div>
              </div>
              {/* <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    25+
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Team Members
                  </div>
                </div>
              </div> */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    2+
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Skills & Technologies
      </h2>
      {/* Skills/Tools Section */}
      <div className="h-[20rem] bg-gray-50 py-16">
        <FallingText
          text={`My core skills include React.js Laravel PHP Flutter JavaScript Tailwind CSS MongoDB and Git. These technologies form the foundation of my development toolkit.`}
          highlightWords={[
            "React.js",
            "Laravel",
            "PHP",
            "Flutter",
            "JavaScript",
            "Tailwind CSS",
            "MongoDB",
            "Git",
          ]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1rem"
          mouseConstraintStiffness={0.9}
        />
      </div>

      {/* Services Navigation */}
      <div className=" bg-white py-8">
        {/* <CurvedLoop
          marqueeText="Web Developer ✦ Mobile Developer ✦ Frontend Programmer ✦ Backend Programmer ✦"
          speed={1}
          curveAmount={10}
          direction="left"
          interactive={true}
        /> */}
        {/* <CurvedLoop marqueeText="Web Developer ✦ Mobile Developer ✦ Frontend Programmer ✦ Backend Programmer ✦" /> */}
      </div>

      {/* Experience & Education Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company History */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Company Journey
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">Founded</h4>
                    <p className="text-sm text-gray-600">Started our journey</p>
                  </div>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    2019 - Now
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">Expansion</h4>
                    <p className="text-sm text-gray-600">Grew our team</p>
                  </div>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    2020 - 2022
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-sm text-gray-600">New tech adoption</p>
                  </div>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    2023 - Now
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Achievements
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Best Startup
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tech Innovation Award
                    </p>
                  </div>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    2023
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Top Developer
                    </h4>
                    <p className="text-sm text-gray-600">
                      Regional Recognition
                    </p>
                  </div>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    2022
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Client Choice
                    </h4>
                    <p className="text-sm text-gray-600">
                      Excellence in Service
                    </p>
                  </div>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}

      <div>{/* <SmoothScroll /> */}</div>
    </section>
  );
};

export default MoreAbout;
