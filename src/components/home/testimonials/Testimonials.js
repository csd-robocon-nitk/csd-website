import TetsimonialsContent from "./TestimonialsContent"

export default async function Testimonials() {
	const token = process.env.NEXT_PUBLIC_TOKEN
	if (!token) {
		throw new Error("Token not found!")
	}

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/testimonials?populate=*`,
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

	const data = await res.json()
	const testimonials = await data.data

	return (
		<div className="pb-8 overflow-hidden relative bg-sky-50">
			<h1 className="text-4xl mb-8 font-bold text-center text-sky-950">Testimonials</h1>
			<TetsimonialsContent testimonials={testimonials} />
		</div>
	)
}
