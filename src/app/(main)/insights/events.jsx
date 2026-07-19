"use client"
import React from "react";
import { useState } from "react";
import EventsCard from "./eventsCard";
import Image from "next/image";
import { motion } from "framer-motion";

function AllEvents({ pastEvents, ongoingEvents, upcomingEvents }) {

  const [active, setActive] = useState("Ongoing");
  const categories = ["Past","Ongoing", "Upcoming"]

  return (
    <motion.div className="mt-20 flex flex-col gap-8 items-center w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <div className="relative w-full flex items-center justify-end px-16">
        <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl px-4 font-semibold text-sky-800 text-start w-full">All Events</motion.h1>
        <div className="flex gap-4">
          {
            categories.map((category, index) => (
              <div className={category == active ? "rounded-full bg-sky-800 text-white px-4 py-2 cursor-pointer" : "cursor-pointer rounded-full p-4 border-2 border-sky-800 px-4 py-2"} onClick={() => {
                setActive(category)
              }}>
                  {category}
              </div>
            ))
          }
        </div>
      </div>
      <motion.div className="px-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
        <div className={active == "Past" ? "" : "hidden"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <EventsCard key={index} event={event} />
            ))}
            {pastEvents.length == 0 ? (
              <p className="text-2xl flex items-center justify-center w-full min-h-52">
                No past events
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={active == "Ongoing" ? "" : "hidden"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingEvents.map((event, index) => (
              <EventsCard key={index} event={event} />
            ))}
            {ongoingEvents.length == 0 ? (
              <p className="text-2xl flex items-center justify-center w-full min-h-52">
                No ongoing events
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={active == "Upcoming" ? "" : "hidden"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <EventsCard key={index} event={event} />
            ))}
            {upcomingEvents.length == 0 ? (
              <p className="text-2xl flex items-center justify-center w-full min-h-52">
                No upcoming events
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AllEvents;
