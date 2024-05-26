import React from 'react'
import Image from 'next/image'
import Call from '../../../public/assets/images/call.svg'
import Mail from '../../../public/assets/images/mail.svg'

export default function Contact() {
  return (
    <div className='pt-20 flex gap-8 min-h-screen bg-[#e0e0e0] flex-col justify-center items-center px-60'>
        <div className='flex gap-8 justify-center w-full mt-10 hover '>
            <div className='flex flex-col gap-8 items-start bg-white rounded-xl shadow-lg p-10 w-1/3 ease-in-out hover:scale-[1.05] hover:shadow-2xl duration-200'>
                <h1 className='text-5xl font-bold text-black'>Contact Us</h1>
                <div className='text-4xl font-bold'>Prof. K V Gangadharan</div>
                <div className='text-2xl font-semibold'>
                  Coordinator <br />Center for System Design NITK<br />Surathkal<br />P. O. Srinivasnagar<br />Mangalore - 575 025<br />Karnataka, India
                </div>
                <div className='flex flex-col items-start text-xl font gap-2'>
                  <div className='flex items-center gap-2'>
                    <Image src={Call} className='h-6 w-6'/>
                    <span className='text-black'>+91-0824-2473915</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Image src={Mail} className='h-6 w-6'/>
                    <span className='text-black'>solve@nitk.ac.in </span>
                  </div>
                </div>
            </div> 
            <div className='p-10 bg-white rounded-xl shadow-lg w-1/3 flex flex-col gap-8 ease-in-out hover:scale-[1.05] hover:shadow-2xl duration-200'>
            <div className='text-5xl font-bold text-black'>Find Us</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.3862818943358!2d74.78950971894889!3d13.010056409427534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211a8f87b71%3A0x98c62e6ee41ce923!2sCentre%20for%20System%20Design!5e0!3m2!1sen!2sin!4v1716722673829!5m2!1sen!2sin" width="400" height="600"></iframe>
            </div>
        </div>
        <div className='flex flex-col items-start gap-8 p-10 bg-white rounded-xl shadow-lg w-2/3 mb-10 ease-in-out hover:scale-[1.05] hover:shadow-2xl duration-200'>
          <div className='text-black font-bold text-5xl'>Write to us</div>
          <form action="" className='flex flex-col gap-4 w-3/4'>
            <span className='text-black text-2xl'>Name</span>
            <input type="text" placeholder="" className='border-b-4 focus:border-b-2 w-1/2 focus:border-b-1  border-[#161616] focus:outline-none placeholder-inherit'/>
            <span className='text-black text-2xl'>E-mail</span>
            <input type="email" placeholder="" className='border-b-4 w-1/2 focus:border-b-2 border-[#161616] focus:outline-none placeholder-inherit'/>
            <span className='text-black text-2xl'>Message</span>
            <textarea name="message" id="message" className='border-b-4 focus:border-b-2 border-[#161616] outline-none'></textarea>
          </form>
        </div>
    </div>
  )
}
