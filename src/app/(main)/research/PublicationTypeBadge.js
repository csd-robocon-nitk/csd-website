export default function PublicationTypeBadge ({ type }) {
    let bg, color
    if (type == "Journal") {
        bg = "#ffe5a0"
        color = "#9e7300"
    } else if (type == "International Conference") {
        bg = "#d4edbc"
        color = "#3c7802"
    } else if (type == "National Conference") {
        bg = "#bfe1f6"
        color = "#0253bd"
    } else if (type == "Books Chapters") {
        bg = "#acfcdb"
        color = "#036e42"
    } else if (type == "Patents") {
        bg = "#ffabf1"
        color = "#990092"
    } else {
        bg = "#dddddd"
    }

    return (
        <div className="sm:px-2 px-10 min-w-32 py-1 rounded-full text-sm text-center flex items-center justify-center" style={{ backgroundColor: bg, color: color}}>
            <p className="leading-none pb-1">{type}</p>
        </div>
    )
}