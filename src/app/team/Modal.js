"use client"
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import LinkedIn from '../../../public/assets/images/linkedin.svg';
import Scholar from '../../../public/assets/images/scholar-white.svg';
import NITK from '../../../public/assets/images/nitk.png';
import "./modal.css";


function Modal({ isOpen, setIsOpen, data }) {
  const modalRef = useRef(null);

  const closeModal = () => {
    modalRef.current.classList.remove("open-modal");
    modalRef.current.classList.add("close-modal");
    setTimeout(() => {
      setIsOpen(false);
    }, 300)
  }

  const clickOutsideToClose = (e) => {
    if (modalRef.current === null) {
      return;
    }

    if (!modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {

    modalRef.current.classList.add("open-modal");

    document.addEventListener("mousedown", clickOutsideToClose);
  });

  const achievements = data.attributes.Achievements?.split("\n");
  const highlightProjects = data.attributes.HighlightProjects?.split("\n");
  const academicBackground = data.attributes.academicBackground?.split("\n");

  return (
    <div className="fixed inset-0 h-screen w-screen flex justify-center items-center z-50 bg-shark-300/50 backdrop-blur-md">
      <div
        className={"rounded bg-white flex flex-col border-shark-900 border-2"}
        ref={modalRef}
      >
        <div className="flex justify-between w-full items-center gap-4 bg-shark-900 text-white p-4 px-16">
          <div className="flex gap-4 items-center">
            <figure className="h-1/3">
              <Image
                width={90}
                height={90}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.attributes.pfp.data.attributes.formats.thumbnail.url}`}
                alt={data.attributes.name}
                className="rounded-full object-cover mx-auto"
              />
            </figure>
            <div>
              <h1 className="font-extrabold text-2xl">
                {data.attributes.name}
              </h1>
              <p>{data.attributes.Designation}</p>
              <p>{data.attributes.Department}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Telephone: {data.attributes.telephone}</p>
            <p>E-mail: {data.attributes.email}</p>
            <p>Mobile: {data.attributes.mobile}</p>
            <div className="flex gap-4 mt-2">
            <a
              href={data.attributes.linkedin}
              className="flex items-center gap-3 lg:text-xl text-sm"
            >
              <Image src={LinkedIn} className="fill-current h-5 w-5" />
            </a>
            <a
              href={data.attributes.scholar}
              className="flex items-center gap-3 lg:text-xl text-sm"
            >
              <Image src={Scholar} className="fill-current h-5 w-5" />
            </a>
            <a
              href={data.attributes?.nitk}
              className="flex items-center gap-3 lg:text-xl text-sm"
            >
              <Image src={NITK} className="fill-current h-5 w-5" />
            </a>
          </div>
          </div>
        </div>

        <div className="p-4 px-8">
          <h1 className="text-lg font-bold">Achievements: </h1>
          <ul className="list-disc list-inside">
            {achievements?.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="p-4 px-8">
          <h1 className="text-lg font-bold">Highlight Projects: </h1>
          <ul className="list-disc list-inside">
            {highlightProjects?.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="p-4 px-8">
          <h1 className="text-lg font-bold">Academic Background: </h1>
          <ul className="list-disc list-inside">
            {academicBackground?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
