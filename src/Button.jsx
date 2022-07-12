import React, { useState, useEffect, useRef } from "react";

export default function Button() {
  //USE STATE
  const [buttonText, setButtonText] = useState("click me please");
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }

  //USE REF
  const inputEl = useRef(null);
  const intervalRef = useRef();

  //USE EFFECT
  useEffect(() => {
    const id = setInterval(() => {
      console.log("useEffect");
    }, 3000);

    intervalRef.current = id;

    return () => clearInterval(intervalRef.current);
  });

  return (
    <div>
      <h1>useState</h1>
      <div className="flex">
        <button onClick={() => setButtonText("clicked")}>{buttonText}</button>
      </div>
      <div className="flex">
        <button onClick={decrementCount}>-</button>
        <h1>{count}</h1>
        <button onClick={incrementCount}>+</button>
      </div>

      <h1>useRef</h1>
      <div className="flex">
        <input ref={inputEl} />
        <button onClick={() => inputEl.current.focus()}>Focus the input</button>
      </div>

      <h1>useEffect</h1>
      <p>open console</p>
    </div>
  );
}
