import React from 'react'
import Image from 'next/image';

export default function PeopleCard({item}) {
    return (
      <div className="flex flex-col border-2 items-center max-w-[300px] ease-in-out hover:scale-[1.05] shadow-md duration-200 h-[450px] rounded-lg mb-4 px-3 py-5">
        <figure className="px-10">
          <Image
            width={110}
            height={90}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`}
            alt={item.attributes.name}
            className="rounded-full object-cover mx-auto"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="sm:text-2xl text-xl font-bold">{item.attributes.name}</h2>
          <p>{item.attributes.Designation}</p>
          <div className='bg-slate-900 h-[1px] w-full'></div>
          <p>{item.attributes.Department}</p>
          <div className="card-actions">
            <button className="btn btn-primary border-cobalt-700 hover:bg-shark-950 bg-shark-900 text-white h-10 px-10 min-h-0">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
}
