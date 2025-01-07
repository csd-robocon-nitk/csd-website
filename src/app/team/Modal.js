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
    <div className="fixed inset-0 h-screen w-screen flex justify-center items-center z-[1000] bg-sky-300/50 backdrop-blur-sm">
      <div
        className={"rounded bg-white flex border-sky-900 border-2 m-10 w-full h-full max-w-[1300px] max-h-[550px]"}
        ref={modalRef}
      >
        <div className="flex flex-col w-2/5 justify-between items-center gap-4 bg-sky-900 text-white p-4">
          <div className="flex flex-col gap-4 items-center">
            <figure className="flex-shrink-0">
              <Image
                width={90}
                height={90}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.attributes.pfp.data.attributes.url}`}
                alt={data.attributes.name}
                className="h-60 w-60 rounded-full object-cover mx-auto"
              />
            </figure>
            <div>
              <h1 className="font-extrabold text-2xl text-center">
                {data.attributes.name}
              </h1>
              <p className="text-center">{data.attributes.Designation}</p>
              <p className="text-center">{data.attributes.Department}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Telephone: {data.attributes.telephone}</p>
            <p>E-mail: {data.attributes.email}</p>
            <p>Mobile: {data.attributes.mobile}</p>
            <div className="flex justify-center gap-4 mt-2">
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

        <div class="flex flex-col px-8 py-4 gap-5">
          <div className="">
            <h1 className="text-lg font-bold">Achievements: </h1>
            <ul className="list-disc list-inside">
              {achievements?.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="text-lg font-bold">Highlight Projects: </h1>
            <ul className="list-disc list-inside">
              {highlightProjects?.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="text-lg font-bold">Academic Background: </h1>
            <ul className="list-disc list-inside">
              {academicBackground?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
