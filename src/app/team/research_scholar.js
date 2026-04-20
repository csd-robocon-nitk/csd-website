"use client"
import React from "react";
import StaffCard from "./staffCard";

function Scholar({data}) {
  return (
    <div className="w-full flex flex-col justify-center items-center p-2 mt-5">

        <div className="grid gap-10 px-10 py-12 justify-center justify-items-center [grid-template-columns:repeat(auto-fit,minmax(288px,288px))]">
            {
                data.map((item, index) => (
                    <StaffCard key={index} item={item} />
                ))
            }
        </div>
    </div>
  );
}

export default Scholar;
