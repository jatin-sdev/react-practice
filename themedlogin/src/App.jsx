import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // State for background and text color
  const [bgColor, setBgColor] = useState("#d1d5db");
  const [textColor, setTextColor] = useState("black");
  //const [shadow, setShadow] = useState("md");

  function lightTheme() {
    setBgColor("#d1d5db"); //gray-300
    setTextColor("#111827");
    // setShadow("111827"); //gray-900
  }

  function darkTheme() {
    setBgColor("#111827"); //gray-900
    setTextColor("#d1d5db");
    // setShadow("d1d5db");
  }

  return (
    <div
      className="w-full h-screen duration-500 flex justify-center items-center "
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="fixed flex-wrap justify-center items-center border-0 p-4 w-max ">
        <div
          className="border-0 p-6 rounded-lg  duration-500"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            //boxShadow: shadow,
          }}
        >
          <h2
            className="text-5xl w-full flex justify-center items-center duration-500 mb-10 font-semibold"
            style={{
              color: textColor,
              //boxShadow: shadow,
            }}
          >
            Login
          </h2>

          <label className="block" htmlFor="email">
            Email:
          </label>
          <input
            className=" p-2 rounded-md w-full mb-3 focus:outline-none text-gray-900 bg-gray-200 active:scale-97"
            type="email"
            placeholder="Email"
            id="email"
          />

          <label className="block" htmlFor="password">
            Password:
          </label>
          <input
            className=" p-2  rounded-md w-full mb-7 focus:outline-none  text-gray-900 bg-gray-200 active:scale-97"
            type="password"
            id="password"
            placeholder="Password"
          />

          <button
            className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-blue-500 hover:pointer-fine:not-2xl: duration-300 active:scale-95 active:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
        <span className=" w-full flex justify-center items-center gap-4 mt-10">
          <h1 className="text-1xl">Theme</h1>
          <button
            className="border-0 p-2 rounded-md text-gray-900 bg-gray-400 px-4 py-1 border-gray-900 active:scale-97"
            onClick={lightTheme}
          >
            light
          </button>
          <button
            className="border-0 p-2 rounded-md text-gray-900 bg-gray-400 px-4 py-1 border-gray-900 active:scale-97"
            onClick={darkTheme}
          >
            dark
          </button>
        </span>
      </div>
    </div>
  );
}

export default App;
