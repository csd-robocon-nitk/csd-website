import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { TransparencyContext } from "./header"

export default function DesktopNavElement ({ text, href }) {
    let navTransparency = useContext(TransparencyContext)
    
    let path = usePathname()
    let active = href == path

    return (
        <li className="p-2">
            <Link 
                className={`relative block after:block after:content-[''] after:rounded-full after:absolute after:h-[4px] ${navTransparency ? "after:bg-sky-500" : "after:bg-sky-800"} after:w-full ${active ? "" : "after:scale-x-0"} after:hover:scale-x-100 after:duration-300 after:origin-left`}
                href={href}
            >
                {text}
            </Link>
        </li>
    )
}