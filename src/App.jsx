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
import ScrollStack, { ScrollStackItem } from '../src/components/ScrollStack';

function App() {
  return (
    <>
      <div>
        <Home />
        <MoreAbout />
        <Service />
        <Project />
        <div className="bg-white h-screen border-t border-gray-500">
          <ScrollStack>
            <ScrollStackItem>
              <h2>Card 1</h2>
              <p>This is the first card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
              <h2>Card 2</h2>
              <p>This is the second card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
              <h2>Card 3</h2>
              <p>This is the third card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
              <h2>Card 4</h2>
              <p>This is the fourth card in the stack</p>
            </ScrollStackItem>
          </ScrollStack>
        </div>
        <Scroll />
        <Contac />
      </div>
      {/* <MoreAbout /> */}
    </>
  );
}

export default App;
