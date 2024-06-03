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

    const [navTransparency, setNavTransparency] = useState(true)

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
            ? ("flex flex-wrap fixed items-center justify-center h-24 z-50 w-full top-0 " + (open ? " bg-shark-950" : ""))
            : "flex flex-wrap fixed items-center justify-center h-24 z-50 w-full top-0 bg-shark-950"
        }
      >
        <div className="py-3 flex flex-wrap items-center lg:gap-4 justify-evenly w-full">
          <div className="flex flex-col items-center">
            <img src="/logo.png" className={"w-auto md:h-14 h-10"} alt="" />
          </div>
          <ul className="hidden lg:flex lg:jusitfy-evenly lg:font-bold lg:text-lg text-white lg:uppercase">
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/">Home</Link>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/people">People</Link>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/blog">Blog</Link>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/resources">Resources</Link>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/events">Events</Link>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/contact">Contact</Link>
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
              <ul className="flex px-20 pb-5 flex-col justify-evenly bg-shark-950 h-screen text-2xl items-center gap-8 font-bold text-white uppercase">
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/people">People</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/blog">Blog</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/resources">Resources</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/events">Events</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            ) : null
          }
        </div>
      </div>
    );
}