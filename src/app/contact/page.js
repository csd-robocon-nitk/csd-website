import React from "react";
import Image from "next/image";
import Call from "../../../public/assets/images/call.svg";
import Mail from "../../../public/assets/images/mail.svg";

export default function Contact() {
  return (
    <div className="pt-20 flex gap-2  bg-bg-light flex-col justify-center items-center">
      <div className="flex gap-8 justify-center w-full mt-10">
        <div className="flex flex-col gap-8 bg-white rounded-b-sm rounded-t-2xl shadow-lg p-10 w-1/2">
          <h1 className="xl:text-5xl text-xl font-bold">Contact Us</h1>
          <div className="w-full flex xl:flex-row flex-col items-center justify-between">
            <div className="flex flex-col items-start lg:gap-4 justify-between">
              <div className="lg:text-4xl text-lg font-bold">Prof. K V Gangadharan</div>
              <div className="lg:text-lg text-sm font-semibold">
                Coordinator <br />
                Center for System Design NITK
                <br />
                Surathkal
                <br />
                P. O. Srinivasnagar
                <br />
                Mangalore - 575 025
                <br />
                Karnataka, India
              </div>
              <div className="flex flex-col items-start lg:text-xl text-xs font gap-2">
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
              <iframe className="rounded-xl hidden md:block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3873161701317!2d74.79241407591725!3d13.010989614011752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211a8f87b71%3A0x98c62e6ee41ce923!2sCentre%20for%20System%20Design!5e0!3m2!1sen!2sin!4v1716810078192!5m2!1sen!2sin" width="300" height="350"></iframe>
              <iframe className="rounded-xl md:hidden visible" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3873161701317!2d74.79241407591725!3d13.010989614011752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211a8f87b71%3A0x98c62e6ee41ce923!2sCentre%20for%20System%20Design!5e0!3m2!1sen!2sin!4v1716810078192!5m2!1sen!2sin" width="175" height="250"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 p-10 bg-white rounded-t-sm rounded-b-2xl shadow-lg w-1/2 mb-10">
        <div className="font-bold lg:text-5xl text-xl">Write to us</div>
        <form action="" className="flex flex-col gap-4 w-3/4">
          <span className="lg:text-2xl text-sm">Name</span>
          <input
            type="text"
            placeholder=""
            className="border-b-[2px] focus:border-b-[0.5px] w-1/2  border-[#161616] focus:outline-none placeholder-inherit"
          />
          <span className="lg:text-2xl text-sm">E-mail</span>
          <input
            type="email"
            placeholder=""
            className="border-b-[2px] focus:border-b-[0.5px] w-1/2 border-[#161616] focus:outline-none placeholder-inherit"
          />
          <span className="lg:text-2xl text-sm">Message</span>
          <textarea
            name="message"
            id="message"
            className="border-b-[2px] focus:border-b-[0.5px] border-[#161616] outline-none"
          ></textarea>
          <button className="btn text-white lg:text-2xl text-sm btn-primary bg-page-accent hover:bg-page-accent-light ease-in-out hover:scale-[1.05] hover:shadow-2xl duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
