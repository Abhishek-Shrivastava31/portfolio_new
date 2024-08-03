// components/AnimatedTagline.js
import React from "react";

const AnimatedTagline = ({ tagline }: { tagline: string[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full p-7 my-0">
      {tagline.map((word, index) => (
        <span
          key={index}
          className="opacity-0 animate-fadeIn"
          style={{ animationDelay: `${index * 0.35}s` }}
        >
          <h1
            className={`sm:text-6xl text-3xl  font-bold text-center sm:leading-[1.1] ${
              index > 3 && index < 6 && "text-blue-300"
            }`}
          >
            {word}
          </h1>
        </span>
      ))}
    </div>
  );
};

export default AnimatedTagline;
