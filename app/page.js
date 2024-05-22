"use client";
import React from "react";
import { useState, useEffect  } from "react";
import ImageButton from "./imagebtn";
import style from './page.module.css'
export default function Counter() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500); // Duration of animation
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const handleClick = () => {
    setCount(count + 1);
    setAnimate(true);
  };
  return (
    <div>
      <p className="style.btntext">You touched <p className={`${style.count} ${animate ? style.animate : ''}`}>{count}</p> times</p>
      
      <ImageButton src="./jasbir.png" alt="btn" onClick={handleClick} />
    </div>
  );
}
