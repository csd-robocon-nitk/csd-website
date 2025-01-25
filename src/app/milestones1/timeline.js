"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {

  const length = data.length;

  return (
    <div className="hidden relative lg:flex flex-col items-center no-scrollbar px-32 overflow-scroll h-[75vh] pt-10">
      <div className="sticky top-0 translate-x-[-225px] text-8xl font-bold">
        20
      </div>
      <div className="absolute top-10 max-w-[600px] translate-x-[50px]">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center gap-16">
            {/* Left */}

            <div className="relative text-8xl font-bold w-1/3 justify-center items-center text-center h-[50vh]">
              <h1 className="absolute top-0 left-1/2 bg-sky-50 z-[10] p-0 m-0">
                {item.title.slice(-2)}
              </h1>
              { !(length == (index+1)) && <div className="absolute z-0 w-[4px] bg-sky-950 left-1/2 h-full translate-x-[60px]">
              </div>}
            </div>

            {/* Right */}
            <div className="w-2/3 text-wrap pt-12 px-12">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
