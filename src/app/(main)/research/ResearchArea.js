export default function ResearchArea ({ Logo, title, description, logo_size = 55, color = "#fafcff", logo_color }) {
    return (
        <div className="sm:w-[340px] w-[250px] sm:px-5 px-2 py-5 shadow-gray-300 shadow-md rounded-md grid sm:grid-cols-[1fr_3fr] grid-cols-1 items-center justify-items-center gap-y-2 flex-shrink-0" style={{backgroundColor: color}}>
            <h2 className="text-lg font-medium text-center col-span-2">{title}</h2>
            <Logo className="sm:row-start-auto row-start-1" size={logo_size} color={logo_color} />
            <p className="text-gray-600 text-sm sm:text-justify text-center">{description}</p>
        </div>
    )
}