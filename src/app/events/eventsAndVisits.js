"use client"
import React from 'react'
import Events from './events';
import Visits from './visits';
import { useState } from 'react';

function EventsAndVisits({events, visits}) {

 const [type, setType] = useState("Visits");
 
   const handleType = (key) => {
     setType(key);
   };
 
   const dropDown = {
     Events: "events",
     Visits: "visits",
   };
 
   return (
     <div className="w-full flex flex-col justify-center items-center">
       <div className="flex flex-col justify-center w-full px-20 py-10">
         <div className="w-full justify-center flex mb-4">
           {Object.keys(dropDown).map((key) => (
             <button
               onClick={() => handleType(key)}
               className={`${
                 type === key ? "bg-sky-900 text-white" : "bg-slate-100"
               } px-4 py-2 rounded-md shadow-md font-semibold mr-2`}
             >
               {key}
             </button>
           ))}
         </div>
         {/* Blogs */}
         <div>
           {type === "Events" && (
             <div className="w-full">
                <Events events={events} />
             </div>
           )}
         </div>
 
         {/* News */}
         <div>
           {type === "Visits" && (
             <div className="w-full">
               <Visits visits={visits} />
             </div>
           )}
         </div>
       </div>
     </div>
   )
}

export default EventsAndVisits