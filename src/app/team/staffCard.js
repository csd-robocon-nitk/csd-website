import React from "react";
import Image from "next/image";
import Youtube from '../../../public/assets/images/youtube-card.svg';
import LinkedIn from '../../../public/assets/images/linkedin-card.svg';

function StaffCard({ item }) {

    const skills = item.attributes.skills.split("\n")

  return (
    <div className="flex group flex-col justify-around border-2 items-center w-[250px] ease-in-out hover:scale-[1.05] shadow-md duration-200 h-[250px] rounded-lg p-3">
      <figure className="group-hover:hidden px-5 w-full">
        <Image
          width={200}
          height={200}
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`}
          alt={item.attributes.name}
          className="rounded-md object-cover mx-auto w-full"
        />
      </figure>
      <div className="items-center flex flex-col gap-2 text-center w-full">
        <h2 className="sm:text-2xl text-xl font-bold">
          {item.attributes.name}
        </h2>
        <div className="hidden group-hover:inline">
          <ul className="flex flex-col gap-0">
            {
                skills.map((skill, index) => (
                    <li className="text-left" key={index}>{skill}</li>
                ))
            }
          </ul>
        </div>
        <div className="hidden group-hover:inline">
          <ul className="flex justify-center items-center gap-4">
            <li>
              <a
                href="https://www.youtube.com/channel/UCLj5czsa3vwEGO3zkox3cuA"
                className="flex items-center gap-3 lg:text-xl text-sm"
              >
                <Image src={Youtube} className="fill-current h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/csd.nitk/"
                className="flex items-center gap-3 lg:text-xl text-sm"
              >
                <Image src={LinkedIn} className="fill-current h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;
