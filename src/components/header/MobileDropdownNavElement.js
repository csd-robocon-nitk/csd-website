import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MobileDropdownNavElement ({ text, sublinks, opened }) {
    let [ open, setOpen ] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [ opened ])
    return (
        <li className="pb-2 pt-8 pl-2 border-dotted border-b border-white">
            <div className="flex gap-px pb-1 items-center" onClick={() => setOpen(!open)}>
                <p>{text}</p>
                <ChevronDown className="mt-0.5" />
            </div>
            <ul className={`${open ? "max-h-32" : "max-h-0"} duration-300 overflow-hidden`}>
                {
                    sublinks.map(({ text, href }) => (
                        <li key={href}>
                            <Link className="block py-2 pl-6 text-base" href={href}>{text}</Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    )
}