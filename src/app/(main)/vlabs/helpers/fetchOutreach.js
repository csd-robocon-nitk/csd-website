export default async function fetchOutreach () {
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/vlabs-outreach`, {
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
        next: {
            revalidate: 0
        }
    })

    let data = await res.json()
    let outreach = data.data.attributes

    return outreach
}