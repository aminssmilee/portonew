import React from 'react';
import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';
// import img1 from '../assets/amns1.jpg';
import Lanyard from '../components/Lanyard';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center rounded-t-[3rem]  px-6 py-20 font-fredoka"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-bravepink">Get In Touch</h1>
          <p className="text-herogreen">
            Feel free to contact me if you have any questions or just want to say hi.
          </p>
          <div className="bg-white border border-resistanceblue text-resistanceblue px-4 py-2 inline-block rounded-md font-mono text-sm shadow">
            salisahmad48@gmail.com
          </div>

          <div className="flex items-center gap-4 mt-4 text-gray-800">
            <a
              href="mailto:salisahmad48@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-500"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://instagram.com/aminssmile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/aminssmilee"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aminssmile/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500"
            >
              <FaDiscord size={24} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center md:justify-end border-2 border-gray-200 bg-gray-100 overflow-hidden">
          {/* Lapisan Gradient 3 Warna */}
          <div className="absolute inset-0 bg-gradient-to-tr from-herogreen via-bravepink to-resistanceblue pointer-events-none"></div>

          {/* Konten */}
          <Lanyard />
          {/* <img
    src={img1}
    alt="Desk Setup"
    className="shadow-xl w-[90%] md:w-[80%] grayscale relative z-10"
  /> */}
        </div>

      </div>
    </section>
  );
}

export default Contact;
