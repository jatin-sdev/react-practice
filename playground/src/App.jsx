import { useState, createContext } from "react";

import ChildA from "./components/ChildA.jsx";
import Hello from "./components/hello.jsx";
import Test from "./components/test.jsx";
import Card from "./props/Cards.jsx";

function App() {
  // const [count, setCount] = useState(0);

  const UserContext = createContext();

  return (
    <>
      <div className="bg-zinc-900 text-gray-100 text-3xl flex justify-center items-center w-screen h-screen ">
        <div className="text-center border-1 border-gray-600 p-10 rounded-2xl shadow-lg shadow-black/30 ">
          <ChildA />
        </div>
      </div>
      <div className="bg-zinc-900 text-gray-100 text-3xl flex justify-center items-center w-screen h-screen ">
        <div className="text-center border-1 border-gray-600 p-10 rounded-2xl shadow-lg shadow-black/30 ">
          <Test />
          <Card title="Card Title 1" content="This is the card content." />
          <Card title="Card Title 2" content="This is the card content." />
        </div>
      </div>
    </>
  );
}

export default App;
