export default function ProjectCard ({ project }) {
    let { name, description, cover_image } = project.attributes
    let imageURL = process.env.NEXT_PUBLIC_STRAPI_API_URL + cover_image.data.attributes.formats.medium.url
    return (
        <div className="bg-slate-50 rounded shadow overflow-hidden cursor-pointer">
            <img src={imageURL} alt="" className="w-full max-h-40 object-cover object-center" />
            <div className="p-3">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-justify text-gray-600">{description}</p>
            </div>
        </div>
    )
}