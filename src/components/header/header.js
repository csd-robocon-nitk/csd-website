"use client"

import { createContext, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Ham from "../../../public/assets/images/ham.svg"
import Close from "../../../public/assets/images/close.svg"
import DesktopNavElement from "./DesktopNavElement"
import DesktopDropdownNavElement from "./DesktopDropdownNavElement"

export let TransparencyContext = createContext(true)

export default function Header () {
    const [open, setOpen] = useState(false)

    const pathname = usePathname()

    const [navTransparency, setNavTransparency] = useState(pathname == "/")

    const changeNavColor = () => {
		if (window.scrollY <= 100) setNavTransparency(true)
		else setNavTransparency(false)
    }

    useEffect(() => {
        if (pathname == "/") {
			changeNavColor()
        	window.addEventListener("scroll", changeNavColor)

			return () => removeEventListener("scroll", changeNavColor)
		} else {
			setNavTransparency(false)
		}
    }, [ pathname ])

    {/* <img src="/ham.svg" className="invert h-12 cursor-pointer" alt="" /> */}

    const handleClick = () => {
        setOpen(!open)
    }


    return (
		<TransparencyContext.Provider value={navTransparency}>
			<div className={`fixed top-0 h-20 w-full z-[999] duration-300 ${!navTransparency || open ? "bg-white backdrop-blur-md drop-shadow-lg" : ""}`}>
				<div className="py-3 px-6 flex flex-wrap items-center lg:gap-4 lg:justify-evenly justify-between w-full">
					<Link href="/">
						<img src="/logo.png" className={`md:h-14 h-10 ${!navTransparency || open ? "invert" : ""} duration-300`} alt="" />
					</Link>
					<ul className={`hidden lg:flex jusitfy-evenly font-semibold text-lg ${!navTransparency || open ? "text-neutral-800" : "text-white"}`}>
						<DesktopNavElement 
							text = "HOME"
							href = "/"
						/>

						<DesktopDropdownNavElement
							text = "ABOUT"
							sublinks = {[
								{ text: "ABOUT US", href: "/about" },
								{ text: "MILESTONES", href: "/milestones" },
								{ text: "PARTNERS", href: "/partners"}
							]}
						/>

						<DesktopNavElement
							text = "TEAM"
							href = "/team"
						/>

						<DesktopDropdownNavElement
							text = "INSIGHTS"
							sublinks = {[
								{ text: "BLOGS & NEWS", href: "/blog" },
								{ text: "EVENTS & VISITS", href: "/events"}
							]}
						/>

						<DesktopNavElement
							text = "RESEARCH"
							href = "/research"
						/>

						<DesktopNavElement
							text = "PROJECTS"
							href = "/projects"
						/>

						<DesktopNavElement
							text = "CONTACT"
							href = "/contact"
						/>

						<DesktopNavElement
							text = "VLABS"
							href = "/vlabs"
						/>
					</ul>
					<div className="lg:hidden">
						<button 
							className={`${navTransparency ? "" : "invert"} duration-300`} 
							onClick={handleClick}
						>
							<img src={open ? Close.src : Ham.src} className="h-10 cursor-pointer" alt="" />
						</button>
					</div>
				</div>
				<div className="w-full">
					{
						open ? (
						<ul className="flex px-20 pb-5 flex-col justify-evenly bg-sky-800 h-screen text-2xl items-center gap-8 font-semibold text-white uppercase">
							<li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl">
							<Link href="/">Home</Link>
							</li>
							<li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl">
							<Link href="/about">About</Link>
							</li>
							<li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl">
							<Link href="/team">team</Link>
							</li>
							<li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl">
							<Link href="/blog">Blog</Link>
							</li>
							<li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl">
							<Link href="/milestones">Milestones</Link>
							</li>
							<li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl">
							<Link href="/events">Events</Link>
							</li>
							<li onClick={handleClick} className="hover:bg-page-[#e5e5e5] px-2 rounded-xl">
							<Link href="/contact">Contact</Link>
							</li>
						</ul>
						) : null
					}
				</div>
			</div>
		</TransparencyContext.Provider>
    )
}