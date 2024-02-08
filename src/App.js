import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { Link } from "react-router-dom";
import Nav from "./pages/Nav";

import Character from "./components/Character";

const App = () => {
  return (
    <>
      <div>
        {/* <a href="/">Home</a>
        <a href="about">About</a>
        <a href="contact">Contact</a> */}
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact/:country" element={<Contact />} />
        <Route path="simpsons/:name" element={<Character />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
