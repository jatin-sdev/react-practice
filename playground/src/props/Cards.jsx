import React from "react";

function Card(props) {
  return (
    <div className="border-1 p-4 rounded m-3">
      <input
        className="border-1 p-2 rounded m-3"
        type="text"
        onChange={(e) => {
          props.setName(e.target.value);
        }}
      />
      <h2>{props.name}</h2>
    </div>
  );
}
export default Card;
