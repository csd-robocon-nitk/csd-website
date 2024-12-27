import React from 'react'

export default function EventsCard({event}) {

   const startDateTime = new Date(event.attributes.start)
   const endDateTime = new Date(event.attributes.end) 

  return (
    <div className="flex flex-col items-center overflow-hidden rounded-md shadow-sm m-10 bg-sky-100/50 p-2">
      <img
        src={
          process.env.NEXT_PUBLIC_STRAPI_API_URL +
          event.attributes.media.data.attributes.formats.thumbnail.url
        }
        alt="Image"
        className='rounded-lg'
      />
      <div className='p-2 flex flex-col gap-1'>
        <p className='text-xl font-bold'>{event.attributes.title}</p>
        <p className='text-black'>{event.attributes.desc}</p>
        <div className='grid grid-cols-2 text-black/80'>
          <div>
            <p className="text-sm">Begins at: </p>
            <p className="text-sm">
              {startDateTime
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toUpperCase()}
            </p>
            <p className="text-sm">
              {startDateTime.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div>
            <p className="text-sm">Ends at: </p>
            <p className="text-sm">
              {endDateTime
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toUpperCase()}
            </p>
            <p className="text-sm">
              {endDateTime.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className='py-1'>
              <button className='rounded p-2 text-sm text-white bg-sky-800 hover:bg-sky-950'>Register</button>
        </div>
      </div>
    </div>
  );
}
