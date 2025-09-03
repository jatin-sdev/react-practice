import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
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
          <div className="text-4xl w-full justify-center items-center flex mb-7 mt-1 text-zinc-50">
            Password Generator
          </div>
          <div className="flex ml-10 mr-10">
            <input
              type="text"
              value={password}
              placeholder="password"
              readOnly
              className=" border-0 pb-1  bg-zinc-200 border-zinc-600 outline-none text-3xl rounded-l-3xl text-gray-950 mx-auto max-w- pl-5 text-lg  w-full"
            />
            <button className="border-0 text-2xl pt-1 pb-2 pr-7 pl-7 text-zinc-100 bg-blue-600 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:scale-110 duration-200 ease-in-out border-zinc-600 rounded-r-3xl ">
              copy
            </button>
          </div>

          <div className=" text-2xl space-x-17 mt-5 flex ml-7 mr-10 mb-10 overflow-hidden">
            <span className="mt-0.5 block">
              <input
                className="w-full ml-3.5  duration-300 ease-in-out border-none border-blue-400 rounded-xl hover:scale-120"
                id="lengthInput"
                type="range"
                min={6}
                max={50}
                value={length}
                placeholder="Password"
                onChange={(e) => setLength(e.target.value)}
              />{" "}
              <br></br>
              <label
                className="flex justify-center items-center text-xl text-blue-400"
                htmlFor="lengthInput"
              >
                {length}
              </label>
            </span>
            <span className="space-x-1 text-md text-blue-400">
              <input
                type="checkbox"
                id="characterInput"
                className="active:scale-150 duration-200 ease-in-out border-2 border-blue-400 rounded-lg size-5"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <br></br>
              <label className="text-xl" htmlFor="characterInput">
                Characters
              </label>
            </span>
            <span className="space-x-1 text-md text-blue-400">
              <input
                className="active:scale-150 duration-200 ease-in-out border-none border-blue-400 rounded-xl size-5"
                type="checkbox"
                id="numberInput"
                defaultChecked={numAllowed}
                onChange={() => setNumAllowed((prev) => !prev)}
              />
              <br></br>
              <label className="text-xl" htmlFor="numberInput">
                Numbers
              </label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
