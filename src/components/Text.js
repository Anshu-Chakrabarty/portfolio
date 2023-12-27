"use client"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./TextStyles.css"
function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Student"," Web Developer"," App Developer","ML Developer"], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span className="text-color" ref={el}></span>
  );
}

export default TypingText;