import React from "react";

const MoreAbout = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">More About Me</h1>
        <p className="text-gray-700 mb-6">
          I am a passionate developer with a keen interest in creating innovative solutions. My journey in the tech world has been driven by curiosity and a desire to learn continuously.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-6">
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>Backend Development</li>
          <li>Frontend Development</li>
          <li>Fullstack Development</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Interests</h2>
        <p className="text-gray-700">
          I enjoy exploring new technologies, contributing to open-source projects, and collaborating with other developers to create impactful applications.
        </p>
      </div>
    </section>
  );
}   

export default MoreAbout;