"use client"

import { createContext, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import DesktopNavElement from "./DesktopNavElement"
import DesktopDropdownNavElement from "./DesktopDropdownNavElement"
import MobileNavElement from "./MobileNavElement"
import MobileDropdownNavElement from "./MobileDropdownNavElement"

export let TransparencyContext = createContext(true)

export default function Header () {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const [navTransparency, setNavTransparency] = useState(pathname == "/")

    function changeNavColor () {
		if (window.scrollY <= 100 && !open && pathname == "/") setNavTransparency(true)
		else setNavTransparency(false)
    }

	function handleResize () {
		if (window.innerWidth >= 1024) {
			setOpen(false)
		}
	}

    useEffect(() => {
		changeNavColor()

		if (pathname == "/") {
        	window.addEventListener("scroll", changeNavColor)

			return () => window.removeEventListener("scroll", changeNavColor)
		}

    }, [ pathname, open ])

	useEffect(() => {
        window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	useEffect(() => {
		setOpen(false)
	}, [ pathname ])


    const handleClick = () => {
        setOpen(open => !open)
    }


    return (
		<TransparencyContext.Provider value={navTransparency}>
			<div className={`fixed top-0 h-20 flex items-center w-full z-[999] duration-500 ${!navTransparency ? "bg-white backdrop-blur-md drop-shadow-lg" : ""}`}>
				<div className="py-3 px-5 flex flex-wrap items-center lg:gap-4 lg:justify-evenly justify-between w-full shrink-0 z-[1000]">
					<Link href="/">
						<img src="/logo.png" className={`xl:h-14 lg:h-10 xs:h-14 h-12 ${!navTransparency ? "invert" : ""} duration-300 transition-colors`} alt="" />
					</Link>
					<ul className={`hidden lg:flex jusitfy-evenly font-semibold xl:text-lg ${!navTransparency ? "text-neutral-800" : "text-white"}`}>
						<DesktopNavElement 
							text = "HOME"
							href = "/"
						/>

						<DesktopDropdownNavElement
							text = "ABOUT"
							sublinks = {[
								{ text: "ABOUT US", href: "/about" },
								{ text: "MILESTONES", href: "/milestones" },
								{ text: "PARTNERS", href: "/partners"},
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
								{ text: "EVENTS & VISITS", href: "/events"},
								{ text: "GALLERY", href: "/gallery"}
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
							className={`${navTransparency ? "text-white" : "text-black"} duration-500 text-4xl`} 
							onClick={handleClick}
						>
							{
								open ? 
									<IoClose />
								:
									<IoMenu />
							}
						</button>
					</div>
				</div>
				<div className={`w-full ${open ? "h-screen" : "h-0"} duration-500 overflow-hidden absolute top-0 left-0 pt-20`}>
					<ul data-lenis-prevent className="flex flex-col px-5 bg-sky-800 h-[calc(100vh-80px)] text-lg items-stretch font-semibold text-white overflow-scroll">
						<MobileNavElement 
							text = "HOME"
							href = "/"
						/>

						<MobileDropdownNavElement
							opened={open}
							text = "ABOUT"
							sublinks = {[
								{ text: "ABOUT US", href: "/about" },
								{ text: "MILESTONES", href: "/milestones" },
								{ text: "PARTNERS", href: "/partners"}
							]}
						/>

						<MobileNavElement
							text = "TEAM"
							href = "/team"
						/>

						<MobileDropdownNavElement
							opened={open}
							text = "INSIGHTS"
							sublinks = {[
								{ text: "BLOGS & NEWS", href: "/blog" },
								{ text: "EVENTS & VISITS", href: "/events"}
							]}
						/>

						<MobileNavElement
							text = "RESEARCH"
							href = "/research"
						/>

						<MobileNavElement
							text = "PROJECTS"
							href = "/projects"
						/>

						<MobileNavElement
							text = "CONTACT"
							href = "/contact"
						/>

						<MobileNavElement
							text = "VLABS"
							href = "/vlabs"
						/>
					</ul>
				</div>
			</div>
		</TransparencyContext.Provider>
    )
}