import Link from "next/link"

export default function Header () {
    return (
        <div className="z-50 fixed w-full h-20 top-0 bg-sky-600 flex items-center justify-between px-7">
            <img src="/logo.webp" alt="" />
            <ul className="flex gap-16 text-md font-bold text-indigo-950 uppercase">
                <li><Link href = "/" >Home</Link></li>
                <li><Link href = "/people" >People</Link></li>
                <li><Link href = "/blog" >Blog</Link></li>
                <li><Link href = "/resources" >Resources</Link></li>
                <li><Link href = "/events" >Events</Link></li>
                <li><Link href = "/contact" >Contact</Link></li>
            </ul>
        </div>
    )
}