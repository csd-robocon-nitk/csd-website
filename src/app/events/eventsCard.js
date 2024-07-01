import React from 'react'

export default function EventsCard({event}) {

   const startDateTime = new Date(event.attributes.start)
   const endDateTime = new Date(event.attributes.end) 

  return (
    <div className="flex flex-col items-center overflow-hidden rounded-md shadow-sm m-10 bg-shark-100/50 p-2">
      <img
        src={
          process.env.NEXT_PUBLIC_STRAPI_API_URL +
          event.attributes.media.data.attributes.formats.thumbnail.url
        }
        alt="Image"
        className='rounded-lg'
      />
      <div className="card-body">
        <p className="card-title">{event.attributes.title}</p>
        <p>{event.attributes.desc}</p>
        <div className='grid grid-cols-2'>
          <div>
            <p className="xl:text-lg text-sm">Begins at: </p>
            <p className="xl:text-lg text-sm">
              {startDateTime
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toUpperCase()}
            </p>
            <p className="xl:text-lg text-sm">
              {startDateTime.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div>
            <p className="xl:text-lg text-sm">Ends at: </p>
            <p className="xl:text-lg text-sm">
              {endDateTime
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toUpperCase()}
            </p>
            <p className="xl:text-lg text-sm">
              {endDateTime.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className='card-actions'>
              <button className='btn btn-primary text-sm xl:text-lg text-white bg-shark-800 hover:bg-shark-950'>Details</button>
        </div>
      </div>
    </div>
  );
}
