import PublicationListClient from "./PublicationListClient"

export default async function Publications () {
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/research-publications`, {
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
        next: {
            revalidate: 0
        }
    })

    let data = await res.json()
    let publications = data.data

    return (
        <div className="px-5 pb-20">
            <PublicationListClient publications={publications} />
        </div>
    )
}