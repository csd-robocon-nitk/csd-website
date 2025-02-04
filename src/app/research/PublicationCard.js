import { ExternalLink } from "lucide-react"
import PublicationTypeBadge from "./PublicationTypeBadge"

export default function PublicationCard ({ publication }) {
    let { title, author_name, domain, type, journal, year, doi } = publication.attributes
    return (
        <div className="sm:border-b border-b-2 border-indigo-300">
            <a className="relative py-5 px-5 pr-8 hover:shadow hover:bg-slate-50 rounded-lg duration-200 sm:cursor-pointer cursor-default block" target="_blank" href={doi}>
                <h2 className="sm:text-xl text-lg font-medium">{title}</h2>
                <p className="sm:text-base text-sm mb-2">by {author_name} | {domain}</p>
                <div className="flex gap-2 sm:flex-row flex-col sm:items-center items-start">
                    <PublicationTypeBadge type={type} />
                    <p className="sm:text-base text-sm">{journal}, {year}</p>
                </div>
                <ExternalLink size={30} className="absolute right-2 top-2 p-2 bg-indigo-100 rounded-full"/>
            </a>
        </div>
    )
}