import { ExternalLink } from "lucide-react"
import PublicationTypeBadge from "./PublicationTypeBadge"

export default function PublicationCard ({ publication }) {
    let { title, author_name, domain, type, journal, year, doi } = publication.attributes
    return (
        <a 
            className="group relative flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 sm:cursor-pointer cursor-default h-full" 
            target="_blank" 
            href={doi}
        >
            <div className="flex justify-between items-start mb-4 gap-4">
                <PublicationTypeBadge type={type} />
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                    <ExternalLink size={20} />
                </div>
            </div>
            
            <h2 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {title}
            </h2>
            
            <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-1"><span className="font-medium text-gray-900">By:</span> {author_name}</p>
                {domain && <p className="text-sm text-gray-600 mb-3"><span className="font-medium text-gray-900">Domain:</span> {domain}</p>}
                
                <div className="flex items-start justify-between mt-3 text-xs font-medium text-gray-700 bg-gray-50 p-3 rounded-lg gap-3">
                    <span className="italic leading-relaxed">{journal}</span>
                    <span className="whitespace-nowrap px-2 py-1 bg-white rounded border border-gray-200 text-indigo-700 shrink-0">{year}</span>
                </div>
            </div>
        </a>
    )
}