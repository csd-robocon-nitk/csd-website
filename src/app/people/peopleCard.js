import React from 'react'
import Image from 'next/image';

export default function PeopleCard({item}) {
    return (
      <div className="flex flex-col backdrop-blur-2xl border-2 border-white/30 items-center bg-shark-50/30 max-w-[300px] ease-in-out hover:scale-[1.05] hover:shadow-md duration-200 h-[500px] rounded-lg shadow-xl mb-4 p-5">
        <figure className="px-10">
          <Image
            width={125}
            height={100}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`}
            alt={item.attributes.name}
            className="rounded-full w-55 h-55 object-cover mx-auto"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold">{item.attributes.name}</h2>
          <p>{item.attributes.Designation}</p>
          <p>{item.attributes.Department}</p>
          <div className="card-actions">
            <button className="btn btn-primary border-cobalt-700 hover:bg-shark-950 bg-shark-900 text-white">Read More</button>
          </div>
        </div>
      </div>
    );
}
