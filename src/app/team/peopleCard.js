import React from 'react'
import Image from 'next/image';
import Modal from './Modal';

export default function PeopleCard({item}) {

    const [isOpen, setIsOpen] = React.useState(false)


    const openHandler = () => {
      setIsOpen(!isOpen)
    }


    return (
      <>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={item} />}
      <div className="flex jusitfy-center flex-col border-2 ease-in-out hover:scale-[1.05] shadow-md duration-200 h-[400px] rounded-lg mb-4 px-3 py-5">
        <figure className='h-1/3'>
          <Image
            width={90}
            height={120}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`}
            alt={item.attributes.name}
            className="rounded-full w-[90px] h-[120px] object-cover mx-auto"
          />
        </figure>
        <div className="flex flex-col gap-2 h-2/3 p-4 items-center text-center">
          <h2 className="sm:text-2xl text-xl font-bold">{item.attributes.name}</h2>
          <p>{item.attributes.Designation}</p>
          <div className='bg-slate-900 h-[1px] w-full'></div>
          <p>{item.attributes.Department}</p>
          <div className="card-actions">
            <button className="btn btn-primary border-cobalt-700 hover:bg-shark-950 bg-shark-900 text-white px-10 min-h-0" onClick={openHandler}>
              Read More
            </button>
          </div>
        </div>
      </div>
      </>
    );
}
