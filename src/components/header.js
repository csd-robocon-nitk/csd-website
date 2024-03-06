import Link from "next/link"

export default function Header () {
    return (
        <div className="z-50 fixed w-full h-20 top-0 bg-gradient-to-r from-neutral-600 to-neutral-800 flex items-center justify-between gap-6 px-7 shadow shadow-black/30">
            <img src="/logo.png" className="h-16" alt="" />
            {/* <ul className="flex gap-16 text-md font-bold text-white uppercase">
                <li><Link href = "/" >Home</Link></li>
                <li><Link href = "/people" >People</Link></li>
                <li><Link href = "/blog" >Blog</Link></li>
                <li><Link href = "/resources" >Resources</Link></li>
                <li><Link href = "/events" >Events</Link></li>
                <li><Link href = "/contact" >Contact</Link></li>
            </ul> */}
            <img src="/ham.svg" className="invert h-12 cursor-pointer" alt="" />
        </div>
    )
}