import PublicationTypeBadge from "./PublicationTypeBadge"

export default function PublicationCard ({ publication }) {
    let { title, author_name, domain, type, journal, year, doi } = publication.attributes
    return (
        <div className="border-b border-gray-300">
            <a className="py-5 px-5 hover:shadow hover:bg-slate-50 rounded-lg duration-200 cursor-pointer block" target="_blank" href={doi}>
                <h2 className="text-xl font-medium">{title}</h2>
                <p className="font-normal mb-2">by {author_name} | {domain}</p>
                <div className="flex gap-2 items-start">
                    <PublicationTypeBadge type={type} />
                    <p>{journal}, {year}</p>
                </div>
            </a>
        </div>
    )
}