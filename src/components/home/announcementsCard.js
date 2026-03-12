export default async function getAnnouncements(){
    
    const token = process.env.NEXT_PUBLIC_TOKEN
	if (!token) {
		throw new Error("Token not found!")
	}

    const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-page-announcements?sort=date:desc`,
		{
			headers: {
				Authorization: `Bearer ${token}`
			},
			cache: "no-cache"
		}

	)

    if (!res.ok) {
		throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`)
	}
    const { data } = await res.json()
    
    const announcements = data.map(({ id, attributes }) => ({
    id,
    ...attributes,
  }));

  return (announcements);

}