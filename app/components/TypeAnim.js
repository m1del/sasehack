"use client";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
function TypeAnim({ text, inf }) {
  const [text2, setText2] = useState(text);
  useEffect(() => {
    setText2(text);
  }, [text]);
  return (
    <div>
      <TypeAnimation
        sequence={[text2, 500]}
        speed={90}
        style={{
          backgroundColor: "#fff",
          lineHeight: 1.25,
          fontWeight: 600,
          fontSize: "1.6rem",
          whiteSpace: "pre-line",
        }}
        repeat={inf}
      />
    </div>
  );
}

export default TypeAnim;
