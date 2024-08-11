import React from 'react'
import EventsCard from './eventsCard'

export default async function Events() {

    const token = process.env.NEXT_PUBLIC_TOKEN;
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
    <div className='mt-20 px-5 min-h-screen flex flex-col items-center p-10'>
        <h1 className='font-extrabold text-5xl'>Events</h1>
        <div className='flex flex-wrap items-center justify-center gap-2'>
            {
                events_data.map((event, index) => (
                    <EventsCard key={index} event={event} />
                ))
            }
        </div>
    </div>
  )
}
