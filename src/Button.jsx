import React, { useState, useEffect, useRef } from "react";
import { useToggle } from "./useToggle";

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

  //USE TOGGLE
  const [open, toggle] = useToggle(false);

  return (
    <div>
      <hr />

      <h1>useState</h1>
      <span>rerender component without refresh page</span>
      <button onClick={() => setButtonText("clicked")}>{buttonText}</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={decrementCount}>-</button>
        <h1>{count}</h1>
        <button onClick={incrementCount}>+</button>
      </div>

      <hr />

      <h1>useRef</h1>
      <span>
        for "behind-the-scenes" stuff (i.e. updating variables) without
        re-rendering component
      </span>
      <div className="flex">
        <input ref={inputEl} />
        <button onClick={() => inputEl.current.focus()}>Focus the input</button>
      </div>

      <hr />

      <h1>useEffect</h1>
      <span>(open console)<br />"watches" for changes of whatever stated in array and then executes the function within the useEffect</span>
      <span></span>

      <hr />
      
      <h1>useToggle</h1>
      <span>equivalent of v-if in Vue</span>
      <br />
      {open && <span>JANJAN!</span>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
