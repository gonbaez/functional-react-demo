import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0); // This is a closure (!)

  // This is the same:
  // const myState = setCount(0);
  // const count = myState[0];
  // const setCount = myState[1];

  // Everytime you use setCoung it re runs the App funciton.

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button onClick={minus}>-</button>
      <p>Count: {count}</p>
    </>
  );
};

export default App;
