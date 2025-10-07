import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./counterSlice.jsx";



// UI
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button onClick={() => dispatch(reset())}>
          reset
        </button>
        <div><input 
          type="number"
          aria-label="Set increment amount"
        placeholder="enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
          Add Amount
        </button>
      </div>
    </div>
    </div>
  );
}

export default Counter;   
