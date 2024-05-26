"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header () {

    const pathname = usePathname()

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



    return (
        <div className={navTransparency ? "bg-transparent z-50 fixed w-full h-20 top-0  flex items-center justify-between gap-6 px-60" : "bg-gradient-to-r from-[#353e43] to-[#161616]   z-50 fixed w-full h-20 top-0  flex items-center justify-between gap-6 px-60"}>
            <img src="/logo.png" className="h-16" alt="" />
            <ul className="flex gap-16 text-md font-bold text-white uppercase">
                <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black"><Link href = "/">Home</Link></li>
                <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black"><Link href = "/people" >People</Link></li>
                <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black"><Link href = "/blog" >Blog</Link></li>
                <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black"><Link href = "/resources" >Resources</Link></li>
                <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black"><Link href = "/events" >Events</Link></li>
                <li className="hover:bg-[#e5e5e5] p-2 rounded-xl hover:text-black"><Link href = "/contact" >Contact</Link></li>
            </ul>
            {/* <img src="/ham.svg" className="invert h-12 cursor-pointer" alt="" /> */}
        </div>
    )
}