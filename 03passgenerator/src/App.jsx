import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="w-full h-screen duration-500 flex justify-center items-center bg-zinc-900 ">
        <div className="fixed flex-wrap justify-center items-center border-0 p-4 w-max text-5xl text-zinc-200 bg-zinc-800 rounded-[3vw] shadow-2xl shadow-white/5">
          <div className="flex justify-center-safe invert mt-10  ">
            <img
              src="/passwordgenerator-svgrepo-com.svg"
              alt="Password Generator"
              width={50}
              height={50}
            />
          </div>
          <div className="text-4xl w-full justify-center items-center flex mb-7 mt-1">
            Password Generator
          </div>
          <div className="flex ml-10 mr-10">
            <input
              type="text" //value={password}
              readOnly
              className=" border-0 pb-2  bg-zinc-200 border-zinc-600 outline-none text-3xl rounded-l-3xl text-gray-950"
            />
            <button className="border-0 text-2xl pt-1 pb-2 pr-7 pl-7 text-zinc-100 bg-blue-600 hover:bg-blue-500 active:bg-blue-600 active:scale-105 rounded-r-3xl ">
              copy
            </button>
          </div>
          <div className=" text-2xl space-x-8 mt-5 flex ml-10 mr-10 mb-10">
            <span className="mt-0.5">
              <input
                className=" ml-2"
                type="range"
                min={6}
                max={20}
                value={length}
                placeholder="Password"
                onChange={(e) => setLength(e.target.value)}
              />
            </span>
            <span className="space-x-1 text-md text-zinc-300">
              <input
                type="checkbox"
                id="characterInput"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput">Characters</label>
            </span>
            <span className="space-x-1 text-md text-zinc-300">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numAllowed}
                onChange={() => setNumAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput">Numbers</label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
