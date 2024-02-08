// Bring in React
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

// Create a class component
const App = () => {
  return (
    <>
      <Header />
      <p className="my-class">
        I can also have normal HTML and JS operations {42 + 1}
      </p>
      <Main />
      <Footer />
    </>
  );
};

export default App;
