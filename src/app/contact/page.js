import React from "react";
import Image from "next/image";
import Call from "../../../public/assets/images/call.svg";
import Mail from "../../../public/assets/images/mail.svg";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-wrap p-10 mt-20 gap-4 justify-center items-center">
      <div className="flex flex-col gap-8 w-2/3 rounded-lg shadow-sm bg-shark-100/50 p-10">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-extrabold text-center">Contact Us</h1>
        <div className="flex xl:flex-row flex-col items-center gap-8 w-full justify-evenly">
          <div className="flex flex-col justify-center lg:gap-8 gap-4">
            <div className="lg:text-3xl text-lg font-bold">
              Prof. K V Gangadharan
            </div>
            <div className="lg:text-xl text-md font-semibold">
              Coordinator <br />
              Centre for System Design NITK
              <br />
              Surathkal
              <br />
              P. O. Srinivasnagar
              <br />
              Mangalore - 575 025
              <br />
              Karnataka, India
            </div>
            <div className="flex flex-col items-start lg:text-xl text-md font gap-2">
              <div className="flex items-center gap-2">
                <Image src={Call} className="h-6 w-6" />
                <span className="">+91-0824-2473915</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Mail} className="h-6 w-6" />
                <span className="">solve@nitk.ac.in </span>
              </div>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-xl hidden lg:block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3873161701317!2d74.79241407591725!3d13.010989614011752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211a8f87b71%3A0x98c62e6ee41ce923!2sCentre%20for%20System%20Design!5e0!3m2!1sen!2sin!4v1716810078192!5m2!1sen!2sin"
              width="400"
              height="375"
            ></iframe>
            <iframe
              className="rounded-xl lg:hidden visible"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3873161701317!2d74.79241407591725!3d13.010989614011752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211a8f87b71%3A0x98c62e6ee41ce923!2sCentre%20for%20System%20Design!5e0!3m2!1sen!2sin!4v1716810078192!5m2!1sen!2sin"
              width="175"
              height="300"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/3 gap-8 items-center rounded-lg shadow-sm bg-shark-100/50 p-10">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-center">Write to Us</h1>
        <form action="" className="flex flex-col gap-2 w-full">
          <span className="lg:text-xl text-sm">Name</span>
          <input
            type="text"
            placeholder=""
            className="p-1 border-[2px] rounded-lg lg:text-2xl focus:border-[1px] w-full  border-shark-800/70 bg-shark-100/30 focus:outline-none placeholder-inherit"
          />
          <span className="lg:text-xl text-sm">E-mail</span>
          <input
            type="email"
            placeholder=""
            className="p-1 border-[2px] rounded-lg lg:text-2xl  focus:border-[1px] w-full border-shark-800/70 bg-shark-100/30 focus:outline-none placeholder-inherit"
          />
          <span className="lg:text-xl text-sm">Message</span>
          <textarea
            name="message"
            id="message"
            className="p-1 border-[2px] rounded-lg lg:text-2xl w-full focus:border-[1px] border-shark-800/70 bg-shark-100/30 outline-none"
          ></textarea>
          <button className="btn btn-primary w-1/5 text-white lg:text-2xl text-md bg-shark-800 hover:bg-shark-950 ease-in-out hover:scale-[1.01] duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
