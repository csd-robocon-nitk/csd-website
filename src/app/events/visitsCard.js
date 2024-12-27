import React from 'react'

function VisitsCard({visit}) {
  return (
    <div
    onClick={() => {
        window.location.href = `/visit/${visit.id}`;
    }}
    className='w-full rounded bg-sky-100 p-2 flex flex-col items-center justify-center cursor-pointer gap-2'>
        <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${visit.attributes.Thumbnail.data.attributes.url}`} alt="thumbnail" />
        <div className='flex flex-col gap-1'>
            <h1 className='text-xl font-bold'>{visit.attributes.Title}</h1>
            <p className='text-black'>{visit.attributes.Description}</p>
        </div>
    </div>
  )
}

export default VisitsCard