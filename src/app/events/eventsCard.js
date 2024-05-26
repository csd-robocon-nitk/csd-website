import React from 'react'

export default function EventsCard({event}) {

   const startDateTime = new Date(event.attributes.start)
   const endDateTime = new Date(event.attributes.end) 

  return (
    <div className="card overflow-hidden shadow-xl m-10 bg-[#ffffff] w-full">
      <img
        src={
          process.env.STRAPI_API_URL +
          event.attributes.media.data.attributes.formats.thumbnail.url
        }
        alt=""
      />
      <div className="card-body">
        <p className="card-title">{event.attributes.title}</p>
        <p>{event.attributes.desc}</p>
        <div className='grid grid-cols-2'>
          <div>
            <p>Begins at: </p>
            <p className="text-lg">
              {startDateTime
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toUpperCase()}
            </p>
            <p className="text-lg">
              {startDateTime.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div>
            <p>Ends at: </p>
            <p className="text-lg">
              {endDateTime
                .toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toUpperCase()}
            </p>
            <p className="text-lg">
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
              <button className='btn btn-primary bg-[#161616] hover:bg-black'>Details</button>
        </div>
      </div>
    </div>
  );
}
