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
            ? ("flex flex-wrap fixed items-center justify-center h-20 z-50 w-full top-0 " + (open ? " bg-shark-950/80 backdrop-blur-md" : ""))
            : "flex flex-wrap fixed items-center justify-center h-20 z-50 w-full top-0 bg-shark-950/80 backdrop-blur-sm"
        }
      >
        <div className="py-3 flex flex-wrap items-center lg:gap-4 justify-evenly w-full">
          <div className="flex flex-col items-center">
            <Link href="/"><img src="/logo.png" className={"w-auto md:h-14 h-10"} alt="" /></Link>
          </div>
          <ul className="hidden lg:flex lg:jusitfy-evenly lg:font-bold lg:text-lg text-white lg:uppercase">
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/">Home</Link>
            </li>
            <li className="p-2 rounded-xl relative group">
              <span className="relative w-fit block cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-center">About</span>
              <ul className="absolute hidden group-hover:block bg-shark-950/80 backdrop-blur-md mt-2 rounded-lg shadow-lg">
                <li className="p-2 rounded-xl">
                  <Link className="block px-4 py-2 text-white hover:bg-shark-950/80 text-nowrap" href="/about">About Us</Link>
                </li>
                <li className="p-2 rounded-xl">
                  <Link className="block px-4 py-2 text-white hover:bg-shark-950/80" href="/milestones">Milestones</Link>
                </li>
              </ul>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/team">team</Link>
            </li>
            <li className="p-2 rounded-xl relative group">
              <span className="relative w-fit block cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-center">Insights</span>
              <ul className="absolute hidden group-hover:block bg-shark-950/80 backdrop-blur-md mt-2 rounded-lg shadow-lg">
                <li className="p-2 rounded-xl">
                  <Link className="block px-4 py-2 text-white hover:bg-shark-950/80 text-nowrap" href="/events">News and Events</Link>
                </li>
                <li className="p-2 rounded-xl">
                  <Link className="block px-4 py-2 text-white hover:bg-shark-950/80" href="/blog">Blogs</Link>
                </li>
              </ul>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/research">Research</Link>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/projects">Projects</Link>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/contact">Contact</Link>
            </li>
            <li className="p-2 rounded-xl">
              <Link className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cobalt-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/vlabs">VLABS</Link>
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
                  <Link href="/about">About</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/team">team</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/blog">Blog</Link>
                </li>
                <li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl hover:text-cobalt-600">
                  <Link href="/milestones">Milestones</Link>
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