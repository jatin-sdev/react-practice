import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let countRef = useRef(0);
  let colorRef = useRef("");

  const [time, setTime] = useState(0);

  let timerRef = useRef(0);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
    setTime((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
  };

  const handleRef = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };
  const handleColorRef = () => {
    if (colorRef.current.style.color === "red") {
      colorRef.current.style.color = "blue";
    } else {
      colorRef.current.style.color = "red";
    }
  };
  return (
    <div>
      <div>
        <h2 ref={colorRef}>UseRef Hook</h2>
        <h3>Count: {count}</h3>
        <h3>CountRef: {countRef.current}</h3>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={handleRef}>Increment CountRef</button>
        <button onClick={handleColorRef}>Change color</button>
      </div>
      <div>
        <h2>Stopwatch</h2>
        <h3>{time}</h3>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
