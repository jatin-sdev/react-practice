import { useState } from "react";

function Test() {
  const [time, setTime] = useState("00:00:00"); // 2. initial time 000000
  const [clock, setClock] = useState(null);

  function newTime() {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  function clockEverySecond() {
    const clockTime = new Date().toLocaleTimeString();
    setClock(clockTime);
  }

  setInterval(clockEverySecond, 1000);

  return (
    <div className="space-y-5">
      <h1>Current Time</h1>
      <div>{time}</div>
      <div className=" bg-blue-600 p-2 rounded-lg hover:bg-blue-700 active:scale-95 duration-200 text-center cursor-pointer">
        <button
          onClick={() => {
            newTime();
          }}
        >
          Get Time
        </button>
      </div>
      <div>{clock}</div>
    </div>
  );
}

export default Test;
