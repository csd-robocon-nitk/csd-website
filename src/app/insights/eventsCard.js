import React from 'react'
import { Clock, Calendar } from 'lucide-react'

export default function EventsCard({event}) {

   const startDateTime = new Date(event.attributes.start)
   const endDateTime = new Date(event.attributes.end) 

  return (
    <div className="flex flex-col items-center overflow-hidden rounded-md shadow-sm p-2 bg-sky-100 border-2 border-sky-800">
      <img
        src={
          process.env.NEXT_PUBLIC_STRAPI_API_URL +
          event.attributes.media.data.attributes.formats.thumbnail.url
        }
        alt="Image"
        className='rounded-lg'
      />
      <div className='p-2 flex flex-col gap-2'>
        <p className="text-xl font-semibold">{event.attributes.title}</p>
        <p className='text-black/80'>{event.attributes.desc}</p>
        <div className='grid grid-cols-2 gap-2 text-black/80'>
          <div className='flex flex-col gap-0'>
            <p className="text-sm">Begins at: </p>
            <p className="ext-sm flex items-center gap-2">
              <Clock size={20} />
              {startDateTime
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toUpperCase()}
            </p>
            <p className="text-sm flex items-center gap-2">
              <Calendar size={20} />
              {startDateTime.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className='flex flex-col gap-0'>
            <p className="text-sm">Ends at: </p>
            <p className="text-sm flex items-center gap-2">
              <Clock size={20} />
              {endDateTime
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toUpperCase()}
            </p>
            <p className="text-sm flex items-center gap-2">
              <Calendar size={20} />
              {endDateTime.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div>
              <button className='btn btn-primary text-sm xl:text-lg text-white bg-sky-800 hover:bg-sky-950'>Details</button>
        </div>
      </div>
    </div>
  );
}
