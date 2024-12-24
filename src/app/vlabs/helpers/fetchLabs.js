export default async function fetchLabs () {
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/vlabs-labs-developed?populate=*`, {
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
        next: {
            revalidate: 0
        }
    })

    let data = await res.json()
    return data.data.map(l => l.attributes)
}