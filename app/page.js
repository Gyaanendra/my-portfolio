"use client";
import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>hello</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
