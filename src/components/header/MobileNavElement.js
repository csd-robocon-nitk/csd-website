import Link from "next/link"

export default function MobileNavElement ({ text, href }) {
    return (
        <li className="pb-2 pt-8 pl-2 border-dotted border-b border-white">
            <Link href={href}>{text}</Link>
        </li>
    )
}