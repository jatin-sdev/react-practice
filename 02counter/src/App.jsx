import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //const counter = 25;

  const [counter, setCounter] = useState(25); // [variable, function]

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
      <h1>Counter Practice</h1>
      <h1>State 1 : {counter}</h1>
      <h2>State 2 : {counter}</h2>
      <p>State 3 : {counter}</p>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
