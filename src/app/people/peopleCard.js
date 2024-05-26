import React from 'react'

export default function PeopleCard({item}) {
    return (
      <div className="ease-in-out hover:scale-110 hover:shadow-2xl duration-200 h-[500px] dark:bg-base-200 rounded-xl shadow-xl mb-4 p-5">
        <figure className="px-10">
          <img
            src={`${process.env.STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`}
            alt={item.attributes.name}
            className="rounded-3xl border-4 border-[#262626] w-55 h-55 object-cover mx-auto"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold">{item.attributes.name}</h2>
          <p>{item.attributes.Designation}</p>
          <p>{item.attributes.Department}</p>
          <div className="card-actions">
            <button className="btn hover:bg-black bg-[#161616] text-white">Read More</button>
          </div>
        </div>
      </div>
    );
}
