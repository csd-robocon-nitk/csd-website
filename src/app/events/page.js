import React from 'react'
import EventsAndVisits from './eventsAndVisits';
import Splash from '@/components/splash';

async function Events() {

    const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  const event = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  if (!event.ok) {
    throw new Error(`Failed to fetch data: ${event.status} ${event.Text}`);
  }

  const visit = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/visits?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  if (!visit.ok) {
    throw new Error(`Failed to fetch data: ${visit.status} ${visitText}`);
  }

  const events = await event.json();
  const events_data = events.data;
  
  const visits = await visit.json();
  const visits_data = visits.data;


  return (
    <div className='pt-20 w-full flex flex-col'>
    <Splash
    title={"Events & Visits"}
    subtitle={"All the CSD Events and Visits at One Place!"}
  />
    <EventsAndVisits events={events_data} visits={visits_data}/>
    </div>
  )
}

export default Events