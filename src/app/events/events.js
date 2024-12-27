"use client";
import React from "react";
import EventsCard from "./eventsCard";
import { useEffect } from "react";

export default function Events({events}) {
  const [active, setActive] = React.useState("ongoing");

  const [pastEvents, setPastEvents] = React.useState([]);
  const [currentEvents, setCurrentEvents] = React.useState([]);
  const [upcomingEvents, setUpcomingEvents] = React.useState([]);

  useEffect(() => {
    const date = new Date();
    const pEvents = [];
    const cEvents = [];
    const uEvents = [];

    events.forEach((event) => {
      if (new Date(event.attributes.start) > date) {
        uEvents.push(event);
      } else if (new Date(event.attributes.end) < date) {
        pEvents.push(event);
      } else {
        cEvents.push(event);
      }
    });

    setPastEvents(pEvents);
    setCurrentEvents(cEvents);
    setUpcomingEvents(uEvents);
  }, [events]);

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <div className="flex gap-4 pt-10 text-2xl">
        <div
          className={`cursor-pointer rounded p-2 text-xl ${
            active == "ongoing"
              ? "bg-sky-950 text-white"
              : "bg-sky-100/50 text-sky-950"
          } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          onClick={() => {
            setActive("ongoing");
          }}
        >
          Ongoing Events
        </div>
        <div
          className={`cursor-pointer rounded p-2 text-xl ${
            active == "past"
              ? "bg-sky-950 text-white"
              : "bg-sky-100/50 text-sky-950"
          } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          onClick={() => {
            setActive("past");
          }}
        >
          Past Events
        </div>
        <div
          className={`cursor-pointer rounded p-2 text-xl ${
            active == "upcoming"
              ? "bg-sky-950 text-white"
              : "bg-sky-100/50 text-sky-950"
          } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          onClick={() => {
            setActive("upcoming");
          }}
        >
          Upcoming Events
        </div>
      </div>
      <div className="event-display">
        <div className={active == "past" ? "" : "hidden"}>
          <div className=" grid grid-cols-3">
            {pastEvents.map((event, index) => (
              <EventsCard key={index} event={event} />
            ))}
            {pastEvents.length == 0 ? (
              <p className="text-2xl items-center justify-center w-full">
                No past events
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={active == "ongoing" ? "" : "hidden"}>
          <div className="grid grid-cols-3 ">
            {currentEvents.map((event, index) => (
              <EventsCard key={index} event={event} />
            ))}
            {currentEvents.length == 0 ? (
              <p className="text-2xl items-center justify-center w-full">
                No ongoing events
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={active == "upcoming" ? "" : "hidden"}>
          <div className="grid grid-cols-3 ">
            {upcomingEvents.map((event, index) => (
              <EventsCard key={index} event={event} />
            ))}
            {upcomingEvents.length == 0 ? (
              <p className="text-2xl items-center justify-center w-full min-h-52">
                No upcoming events
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
