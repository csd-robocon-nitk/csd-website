import Image from "next/image"

export default function UpdateCard ({ update }) {
    return (
        <div className="w-[40%] bg-shark-100/30 backdrop-blur-2xl border-2 shadow-md rounded-lg hover:-translate-y-2 duration-200 cursor-pointer">
            <Image width={100} height={100} className="border-b-4 border-cobalt-700 w-full rounded-t-lg" src={process.env.NEXT_PUBLIC_STRAPI_API_URL + update.attributes.media.data.attributes.formats.thumbnail.url} alt="" />
            <h1 className="text-lg text-wrap font-semibold p-5">{update.attributes.title}</h1>
        </div>
    )
}