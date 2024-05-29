import React from 'react'
import EventsCard from './eventsCard'

export default async function Events() {

    const token = process.env.TOKEN;
    if (!token) {
        throw new Error('Token not found!');
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?populate=*`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        cache: "no-cache"
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const events = await res.json();
    const events_data = events.data;

  return (
    <div className='mt-20 bg-gradient-to-r from-cobalt-200 to-shark-200 min-h-screen flex flex-col items-center p-10 px-60'>
        <h1 className='font-bold text-black text-4xl'>Events</h1>
        <div className='grid grid-cols-3 w-full'>
            {
                events_data.map((event, index) => (
                    <EventsCard key={index} event={event} />
                ))
            }
        </div>
    </div>
  )
}
