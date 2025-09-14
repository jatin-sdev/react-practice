import { useState } from "react";
// import ChildA from "./components/ChildA.jsx";
// import { useState, createContext } from "react";
// import Hello from "./components/hello.jsx";
// import Test from "./components/test.jsx";
import Card from "./props/Cards.jsx";

// const ChildBContext = createContext();
// const ChangeThemeContext = createContext();

function App() {
  // const childBData = { name: "Child B from App" };
  // const [theme, setTheme] = useState("dark");
  const [name, setName] = useState("");
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <Card name={name} setName={setName} />
      </div>

      {/* <div>
        <ChildBContext.Provider value={childBData}>
          <ChangeThemeContext.Provider value={{ theme, setTheme }}>
            <div>
              <ChildA />
            </div>
          </ChangeThemeContext.Provider>
        </ChildBContext.Provider>
      </div> */}
      {/* <div className="bg-zinc-900 text-gray-100 text-3xl flex justify-center items-center w-screen h-screen ">
        <div className="text-center border-1 border-gray-600 p-10 rounded-2xl shadow-lg shadow-black/30 ">
          <Test />
          <Card title="Card Title 1" content="This is the card content." />
          <Card title="Card Title 2" content="This is the card content." />
        </div>
      </div> */}
    </>
  );
}

export default App;
// export { ChildBContext };
// export { ChangeThemeContext };
