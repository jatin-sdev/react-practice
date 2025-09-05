// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Hello from "./components/hello.jsx";
import Watchlist from "./components/watchlist.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-zinc-900 text-gray-100 text-3xl flex justify-center items-center w-screen h-screen ">
        <div className="text-center border-1 border-gray-600 p-10 rounded-2xl shadow-lg shadow-black/30 flex-row  gap-5">
          <Hello />
          <Watchlist />
        </div>
      </div>
    </>
  );
}

export default App;
