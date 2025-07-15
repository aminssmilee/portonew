import React, { useState, useEffect } from "react";
import ScrollVelocity from "../components/ScrollVelocity";

const ScrollPage = () => {
  const [velocity, setVelocity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollSpeed = window.scrollY;
      setVelocity(scrollSpeed * 0.01);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-black flex items-center justify-center w-full overflow-x-hidden">
      <div className="max-w-screen-2xl w-full text-center">
        <ScrollVelocity
          texts={[
            "Frontend Developer",
            "Backend Developer",
            "Mobile Developer",
          ]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div>
    </div>
  );
};

export default ScrollPage;
