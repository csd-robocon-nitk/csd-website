"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Ham from "../../public/assets/images/ham.svg"
import Close from "../../public/assets/images/close.svg"

export default function Header () {
    const [open, setOpen] = useState(false)

    const pathname = usePathname()
    const [path, setPath] = useState(pathname)

    const [navTransparency, setNavTransparency] = useState(false)

    const changeNavColor = () => {
        if (window.scrollY <= 100 && pathname === "/") {
            setNavTransparency(true)
        }
        else {
            setNavTransparency(false)
        }
    }

    useEffect(() => {
        changeNavColor()
        window.addEventListener("scroll", changeNavColor)
    })

    {/* <img src="/ham.svg" className="invert h-12 cursor-pointer" alt="" /> */}

    const handleClick = () => {
        setOpen(!open)
    }


    return (
      <div
        className={
          navTransparency
            ? ("flex flex-wrap fixed items-center justify-center z-50 w-full h-20 top-0 " + (open ? " bg-[#161616]" : ""))
            : ("flex flex-wrap fixed items-center justify-center z-50 w-full h-20 top-0 " + (open ? "bg-[#161616]" : "bg-gradient-to-r from-[#353e43] to-[#161616]"))
        }
      >
        <div className="pt-3 flex items-center md:gap-8 justify-evenly w-full">
          <img src="/logo.png" className={"xl:h-16 w-auto md:h-12 h-6"} alt="" />
          <ul className="hidden lg:flex lg:jusitfy-evenly lg:font-bold lg:text-white lg:uppercase">
            <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
              <Link href="/people">People</Link>
            </li>
            <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
              <Link href="/resources">Resources</Link>
            </li>
            <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
              <Link href="/events">Events</Link>
            </li>
            <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button className={open ? "hidden" : ""} onClick={handleClick}><img src={Ham.src} className="h-10 cursor-pointer" alt="" /></button>
            <button className={open ? "" : "hidden"} onClick={handleClick}><img src={Close.src} className="h-10 cursor-pointer" alt="" /></button> 
          </div>
        </div>
        <div className="w-full">
          {
            open ? (
              <ul className="flex p-20 flex-col justify-evenly bg-[#161616] h-screen text-2xl items-center gap-8 font-bold text-white uppercase">
                <li onClick={handleClick} className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
                  <Link href="/people">People</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
                  <Link href="/blog">Blog</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
                  <Link href="/resources">Resources</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
                  <Link href="/events">Events</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            ) : null
          }
        </div>
      </div>
    );
}