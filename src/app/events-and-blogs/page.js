import React from "react";
import AllEvents from "./events";
import Blogs from "./blogs";
import HighlightedBlogs from "./highlightedBlogs";

async function Events() {
  const events_res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      cache: "no-cache",
    }
  );
  let events = await events_res.json();
  events = events.data;

  const blogs_res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      cache: "no-cache",
    }
  );
  let blogs = await blogs_res.json();
  blogs = blogs.data;

  const pastEvents = [];
  const ongoingEvents = [];
  const upcomingEvents = [];

  events.forEach((event) => {
    const date = new Date();

    if (new Date(event.attributes.start) > date) {
      upcomingEvents.push(event);
    } else if (new Date(event.attributes.end) < date) {
      pastEvents.push(event);
    } else {
      ongoingEvents.push(event);
    }
  });

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center w-full">
      {/* Highlight Blogs */}
      <HighlightedBlogs  blogs={blogs} />

      {/* Events */}
      <AllEvents  pastEvents={pastEvents} ongoingEvents={ongoingEvents} upcomingEvents={upcomingEvents} />

      {/* Blogs */}
      <Blogs blogs={blogs} />
    </div>
  );
}

export default Events;
