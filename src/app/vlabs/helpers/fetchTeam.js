export default async function fetchTeam () {
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/vlabs-teams?populate[image]=*&populate[person][populate]=*`, {
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
        next: {
            revalidate: 0
        }
    })

    let data = await res.json()
    
    return data.data
}