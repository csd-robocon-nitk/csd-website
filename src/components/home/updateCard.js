export default function UpdateCard ({ update }) {
    return (
        <div className="w-[30%] bg-white shadow-md rounded-lg hover:-translate-y-2 duration-200 cursor-pointer">
            <img className="w-full rounded-t-lg" src={process.env.STRAPI_API_URL + update.attributes.media.data.attributes.formats.thumbnail.url} alt="" />
            <h1 className="text-lg font-semibold p-5">{update.attributes.title}</h1>
        </div>
    )
}