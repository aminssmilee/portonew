import { Typewriter } from "react-simple-typewriter";
import salis2 from "../assets/salis2.png";
import Navbar from "../components/Navbar";
import DecryptedText from "../components/DecryptedText";

const Home = () => {
  return (
    <section id="home" className="h-full">
      <div className="font-fredoka">
        <Navbar />

        <div className="flex flex-col items-center min-h-screen relative overflow-hidden px-4 md:px-0 pb-[13rem] md:pb-0">
          <div className="flex items-center justify-center mt-24">
            <h1 className="border-black rounded-full border px-5 text-xl">
              Hello!
            </h1>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold roboto">
              I'm{" "}
              <span className="text-red-500 md:text-4xl text-4xl block md:inline">
                <DecryptedText
                  text="Stalis Ahmad"
                  className="text-red-500"
                  encryptedClassName="text-black"
                  animateOn="view"
                  sequential={true}
                />
              </span>{" "}
              <span className="block md:inline">a.k.a aminssmile</span>
            </h1>
          </div>

          <span className="text-black font-bold text-4xl md:text-9xl text-center">
            <Typewriter
              words={[
                "Web Developer",
                "Mobile Developer",
                "Backend Developer",
                "Frontend Developer",
                "Fullstack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>

          {/* LEFT TEXT */}
          <div
            className="absolute bottom-28 md:bottom-8 left-0 ml-4 md:ml-10 text-sm md:text-xl font-bold text-gray-500 
                translate-y-[-6rem] sm:translate-y-[-7rem] md:translate-y-0 z-10"
          >
            <p>
              I am a passionate developer <br /> with a keen interest in
              creating <br /> innovative solutions.
            </p>

            <div className="mt-3 flex gap-2 flex-wrap">
              <a
                href="mailto:salisahmad48@gmail.com"
                className="bg-red-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition text-sm md:text-base"
              >
                Hire Me
              </a>
              <a
                href="https://drive.google.com/file/d/194nfx8DW_e9WI8swJKPO9uFN2VpwhRyq/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="border border-jeruk text-jeruk px-5 py-2 rounded-full shadow-md hover:bg-jeruk hover:text-white transition text-sm md:text-base"
              >
                CV
              </a>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="absolute right-0 bottom-0 mb-10 mr-4 md:mr-20 text-center text-sm md:text-xl translate-y-[-3rem] md:translate-y-0">
            <h3 className="text-lg md:text-2xl font-bold text-gray-700">
              ★ 2 Years
            </h3>
            <p className="text-gray-500">Expertise</p>
          </div>

          {/* IMAGE + BACKGROUND */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end">
            <div className="relative w-[16rem] h-[8rem] md:w-[40rem] md:h-[20rem]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-jeruk rounded-t-full z-0" />
              <img
                src={salis2}
                alt="Stalis Ahmad"
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-[15rem] md:w-[30rem] h-auto object-contain z-10 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
