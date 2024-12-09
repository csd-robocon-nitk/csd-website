import Link from "next/link"
import { useContext } from "react"
import { TransparencyContext } from "./header"
import { usePathname } from "next/navigation"

export default function DekstopDropdownNavElement ({ text, sublinks }) {
    let navTransparency = useContext(TransparencyContext)
    
    let path = usePathname()
    let active = sublinks.some(({ href }) => href == path)

    return (
        <li className="p-2 relative group">
            <span className={`relative block cursor-pointer after:block after:content-[''] after:rounded-full after:absolute after:h-[4px] ${navTransparency ? "after:bg-sky-500" : "after:bg-sky-800"} after:w-full ${active ? "" : "after:scale-x-0"} after:group-hover:scale-x-100 after:duration-300 after:origin-left`}>{text}</span>
            <ul className="absolute opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 duration-300 bg-sky-200 overflow-hidden rounded-lg shadow-lg mt-2">
                {
                    sublinks.map(({ text, href }) => (
                        <li key={href}>
                            <Link className="block py-2 px-4 text-sky-900 hover:bg-sky-300 text-base text-nowrap" href={href}>{text}</Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    )
}