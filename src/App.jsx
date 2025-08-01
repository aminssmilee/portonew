import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Scroll from "./pages/Scroll";
import { Contact } from "lucide-react";
import Contac from "./pages/Contact";
import MoreAbout from "./pages/MoreAbout";

function App() {
  return (
    <>
      <div>
        <Home />
        <MoreAbout />
        <Service />
        <Project />
        <Scroll />
        <Contac />
      </div>
      {/* <MoreAbout /> */}
    </>
  );
}

export default App;
