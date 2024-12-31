export default function ResearchArea ({ Logo, title, description, logo_size = 55, color = "#fafcff", logo_color }) {
    return (
        <div className="w-[calc((100vw-44px)/3)] max-w-[352px] p-5 shadow-gray-300 shadow-md rounded-md flex flex-col flex-shrink-0" style={{backgroundColor: color}}>
            <h2 className="text-lg mb-3 font-medium text-center">{title}</h2>
            <div className="flex items-center gap-5">
                <Logo className="flex-shrink-0" size={logo_size} color={logo_color} />
                <div>
                    <p className="text-gray-600 text-sm text-justify">{description}</p>
                </div>
            </div>
        </div>
    )
}