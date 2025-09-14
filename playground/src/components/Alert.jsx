import React from "react";
function handleClick() {
  return alert("Hello, this is an alert!");
}

const Alert = () => {
  return (
    <div>
      <button
        className="border-2 p-5 rounded-lg hover:bg-blue-700 active:scale-95 duration-200 text-center cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      >
        Alert
      </button>
    </div>
  );
};

export default Alert;
