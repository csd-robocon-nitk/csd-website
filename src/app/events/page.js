"use client";
import React from "react";
import EventsCard from "./eventsCard";
import Image from "next/image";
import Drone from "../../../public/assets/images/drone.jpg";

export const fetchEvents = async (setPast, setCurrent, setUpcoming) => {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const events = await res.json();
  const events_data = events.data;

  const pastEvents = [];
  const ongoingEvents = [];
  const upcomingEvents = [];

  events_data.forEach((event) => {
    const date = new Date();

    if (new Date(event.attributes.start) > date) {
      upcomingEvents.push(event);
    } else if (new Date(event.attributes.end) < date) {
      pastEvents.push(event);
    } else {
      ongoingEvents.push(event);
    }
  });

  setPast(pastEvents);
  setCurrent(ongoingEvents);
  setUpcoming(upcomingEvents);
};

export default function Events() {
  const [active, setActive] = React.useState("ongoing");

  const [pastEvents, setPastEvents] = React.useState([]);
  const [currentEvents, setCurrentEvents] = React.useState([]);
  const [upcomingEvents, setUpcomingEvents] = React.useState([]);

  React.useEffect(() => {
    fetchEvents(setPastEvents, setCurrentEvents, setUpcomingEvents);
  });

  return (
    <div className="mt-20 px-5 min-h-screen flex flex-col items-center p-10">
      <div className="relative w-full md:w-2/3 flex flex-col items-center">
        <div className="md:overflow-hidden aspect-auto relative w-4/5 h-[400px]">
          <Image
            src={Drone}
            className="rounded-md border"
          />
          <h1 className="absolute bottom-0 left-0 m-4 font-extrabold text-3xl md:text-5xl text-white font-outline-1">
            News & Events
          </h1>
          {/* Background div for the event links */}
          {/* <div className="absolute right-0 top-0 bottom-0 bg-black opacity-50 z-10 w-2/5 rounded-r-md"></div> */}
          <div className="absolute right-0 top-0  flex flex-col items-center justify-center gap-4 text-lg md:text-2xl z-20 animate-slide-in bg-black opacity-75 w-2/5 h-full rounded-r-md">
            <div
              className={`cursor-pointer relative text-2xl text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full ${
                active == "ongoing" ? "after:scale-x-100" : "after:scale-x-0"
              } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
              onClick={() => {
                setActive("ongoing");
              }}
            >
              Ongoing Events
            </div>
            <div
              className={`cursor-pointer relative text-2xl text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full ${
                active == "past" ? "after:scale-x-100" : "after:scale-x-0"
              } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
              onClick={() => {
                setActive("past");
              }}
            >
              Past Events
            </div>
            <div
              className={`cursor-pointer relative text-2xl text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full ${
                active == "upcoming" ? "after:scale-x-100" : "after:scale-x-0"
              } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
              onClick={() => {
                setActive("upcoming");
              }}
            >
              Upcoming Events
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-4 pt-10 text-2xl">
        <div
          className={`cursor-pointer relative text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-shark-800 after:w-full ${
            active == "ongoing" ? "after:scale-x-100" : "after:scale-x-0"
          } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          onClick={() => {
            setActive("ongoing");
          }}
        >
          Ongoing Events
        </div>
        <div
          className={`cursor-pointer relative text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-shark-800 after:w-full ${
            active == "past" ? "after:scale-x-100" : "after:scale-x-0"
          } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          onClick={() => {
            setActive("past");
          }}
        >
          Past Events
        </div>
        <div
          className={`cursor-pointer relative text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-shark-800 after:w-full ${
            active == "upcoming" ? "after:scale-x-100" : "after:scale-x-0"
          } after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          onClick={() => {
            setActive("upcoming");
          }}
        >
          Upcoming Events
        </div>
      </div> */}
      <div className="event-display">
        <div className={active == "past" ? "" : "hidden"}>
          <div className="events">
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
        <div className={active == "ongoing" ? "" : "hidden"}>
          <div className="events">
            {currentEvents.map((event, index) => (
              <EventsCard key={index} event={event} />
            ))}
            {currentEvents.length == 0 ? (
              <p className="text-2xl flex items-center justify-center w-full min-h-52">
                No ongoing events
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={active == "upcoming" ? "" : "hidden"}>
          <div className="events">
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
      </div>
    </div>
  );
}
