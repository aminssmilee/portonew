import React from "react";
import banner from "../assets/service/landingpage.jpg"; // Adjust the path as necessary

const MoreAbout = () => {
  return (
    <section
      id="about"
      className="min-h-screen md:min-h-[150vh] bg-gray-100 font-fredoka"
    >
      <div className="p-10">
        <div>
          <h1 className="text-black justify-center items-center text-center text-8xl">
            About Us.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-80 mt-12">
          <div className="flex flex-col gap-4 ">
            <h3>About_Us.</h3>
            <h3>Our_team.</h3>
            <h3>Press.</h3>
          </div>
          <div className="text-justify">
            <p>
              We are a team of passionate developers and designers dedicated to
              creating innovative solutions that make a difference. Our journey
              in the tech world has been driven by curiosity and a desire to
              learn continuously. We believe in the power of collaboration and
              strive to deliver exceptional results for our clients.
            </p>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating innovative solutions that make a difference. Our journey
              in the tech world has been driven by curiosity and a desire to
              learn continuously. We believe in the power of collaboration and
              strive to deliver exceptional results for our clients.
            </p>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating innovative solutions that make a difference. Our journey
              in the tech world has been driven by curiosity and a desire to
              learn continuously. We believe in the power of collaboration and
              strive to deliver exceptional results for our clients.
            </p>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating innovative solutions that make a difference. Our journey
              in the tech world has been driven by curiosity and a desire to
              learn continuously. We believe in the power of collaboration and
              strive to deliver exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>
      <img
        src={banner}
        alt="About Us Banner"
        className="w-full h-[50vh] object-cover rounded-lg"
      />
      <div className="flex justify-between items-center py-8 md:p-20 gap-6 flex-col md:flex-row">
        <div className="max-w-xl">
          <h1 className="text-xl md:text-4xl text-black font-semibold">
            Our work does make sense only if it is a faithful witness of its
            time.
          </h1>
        </div>
        <div className="w-full md:w-[400px]">
          <img
            src={banner}
            alt="About Us Banner"
            className="w-full h-60 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="p-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-80 mt-12">
          <img
            src={banner}
            alt="About Us Banner"
            className="w-full h-[50vh] object-cover rounded-lg"
          />
          <div className="text-justify">
            <h1 className="text-black justify-center items-center text-center text-8xl">
          The team.
        </h1>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating innovative solutions that make a difference. Our journey
              in the tech world has been driven by curiosity and a desire to
              learn continuously. We believe in the power of collaboration and
              strive to deliver exceptional results for our clients.
            </p>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating innovative solutions that make a difference. Our journey
              in the tech world has been driven by curiosity and a desire to
              learn continuously. We believe in the power of collaboration and
              strive to deliver exceptional results for our clients.
            </p>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating innovative solutions that make a difference. Our journey
              in the tech world has been driven by curiosity and a desire to
              learn continuously. We believe in the power of collaboration and
              strive to deliver exceptional results for our clients.
            </p>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating innovative solutions that make a difference. Our journey
              in the tech world has been driven by curiosity and a desire to
              learn continuously. We believe in the power of collaboration and
              strive to deliver exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
