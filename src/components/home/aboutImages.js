import AboutSection from "./about";

export default async function getAboutImages(){
    const token = process.env.NEXT_PUBLIC_TOKEN
	if (!token) {
		throw new Error("Token not found!")
	}

    const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-page-about-us?populate=*`,
		{
			headers: {
				Authorization: `Bearer ${token}`
			},
			cache: "no-cache"
		}
	)
    console.log(res)

    if (!res.ok) {
		throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`)
	}

    const data = await res.json()
	const about_images = data.data.attributes
    
    
    return (about_images)
}