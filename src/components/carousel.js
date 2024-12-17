"use client";
import React from "react";
import { useState } from "react";
import { ChevronRightCircle, ChevronLeftCircle } from "lucide-react";

function Carousel({ children }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex gap-4 relative w-full items-center">
        <button onClick={prev}>
          <ChevronLeftCircle
            size={40}
            color="#075985"
            className="cursor-pointer"
          />
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform ease-out duration-500 w-full"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {children.map((child, index) => (
              <div className="w-full flex-shrink-0 h-full" key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>

        <button onClick={next}>
          <ChevronRightCircle
            size={40}
            color="#075985"
            className="cursor-pointer"
          />
        </button>
      </div>

        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-sky-600 rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
    </div>
  );
}

export default Carousel;
