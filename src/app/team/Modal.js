"use client"
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import LinkedIn from '../../../public/assets/images/linkedin.svg';
import Scholar from '../../../public/assets/images/scholar-white.svg';
import NITK from '../../../public/assets/images/nitk.png';
import { X } from 'lucide-react';
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

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current.classList.add("open-modal");
    }

    document.addEventListener("mousedown", clickOutsideToClose);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", clickOutsideToClose);
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, [isOpen]);

  const achievements = data.attributes.Achievements?.split("\n");
  const highlightProjects = data.attributes.HighlightProjects?.split("\n");
  const academicBackground = data.attributes.academicBackground?.split("\n");

  return (
    <div className="fixed inset-0 h-screen w-screen flex justify-center items-center z-[1000] bg-sky-300/50 backdrop-blur-sm">
      <div
        className="rounded bg-white flex flex-col md:flex-row border-sky-900 border-2 m-4 md:m-10 w-full h-full max-w-[1300px] max-h-[90vh] overflow-y-auto"
        ref={modalRef}
      >
        <div className="flex flex-col w-full md:w-2/5 justify-between items-center gap-4 bg-sky-900 text-white p-4">
          <div className="flex flex-col gap-4 items-center">
            <figure className="flex-shrink-0">
              <Image
                width={90}
                height={90}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.attributes.pfp.data.attributes.url}`}
                alt={data.attributes.name}
                className="h-32 w-32 md:h-60 md:w-60 rounded-full object-cover mx-auto"
              />
            </figure>
            <div>
              <h1 className="font-extrabold text-xl md:text-2xl text-center">
                {data.attributes.name}
              </h1>
              <p className="text-center text-sm md:text-lg">{data.attributes.Designation}</p>
              <p className="text-center text-sm md:text-lg">{data.attributes.Department}</p>
            </div>
          </div>
          <div className="flex flex-col text-sm md:text-lg">
            <p>Telephone: {data.attributes.telephone}</p>
            <p>E-mail: {data.attributes.email}</p>
            <p>Mobile: {data.attributes.mobile}</p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href={data.attributes.linkedin}
                className="flex items-center gap-3 text-sm md:text-xl"
              >
                <Image src={LinkedIn} className="fill-current h-5 w-5" />
              </a>
              <a
                href={data.attributes.scholar}
                className="flex items-center gap-3 text-sm md:text-xl"
              >
                <Image src={Scholar} className="fill-current h-5 w-5" />
              </a>
              <a
                href={data.attributes?.nitk}
                className="flex items-center gap-3 text-sm md:text-xl"
              >
                <Image src={NITK} className="fill-current h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4 md:px-8 py-4 gap-5 w-full md:w-3/5 overflow-y-auto">
          <div>
            <h1 className="text-lg font-bold">Achievements: </h1>
            <ul className="text-sm md:text-lg list-disc list-inside">
              {achievements?.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Highlight Projects: </h1>
            <ul className="text-sm md:text-lg list-disc list-inside">
              {highlightProjects?.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Academic Background: </h1>
            <ul className="text-sm md:text-lg list-disc list-inside">
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