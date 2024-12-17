import Image from "next/image"
import { useEffect, useRef } from "react"
import useMeasure from "react-use-measure"

export default function TestimonialCard({ testimonial, setCardWidth }) {
	let ref = useRef(null)
	let [ cardRef, { width }] = useMeasure()

	let { testimonial: text, photo, name, designation } = testimonial.attributes
	const imgsrc = photo.data ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${photo.data.attributes.url}` : "/empty.jpg"

	function resetScroll () {
		if (!ref) return

		setTimeout(() => ref.current.scrollTo(0,0), 300)
	}

	useEffect(() => {
		if (width && setCardWidth) setCardWidth(width)
	}, [ width ])

	return (
		<div 
			className="bg-sky-200 w-[calc((100vw-144px)/3)] min-w-[400px] h-[calc(0.55*(100vw-144px)/3)] min-h-[250px] flex flex-shrink-0 flex-grow-0 rounded-lg group relative shadow-md shadow-sky-100 overflow-hidden" 
			onMouseLeave={resetScroll}
			ref={cardRef}
		>
			<Image
				src={imgsrc}
				alt={name}
				width={400}
				height={400}
				className="w-2/5 h-full object-cover object-center flex-shrink-0 rounded-lg"
				style = {{clipPath: "circle(farthest-side at -10% 50%)"}}
			/>
			<div className="py-6 px-2 flex flex-col justify-between min-w-0">
				<div className="w-full">
					<h1 className="text-xl font-semibold text-sky-950 mb-1">{name}</h1>
					<p className="text-sm text-gray-600 whitespace-pre-wrap">{designation}</p>
				</div>
				<p className="text-justify overflow-hidden pr-4">"{text.split("\n")[0]}...</p>
			</div>
			<div data-lenis-prevent className="absolute w-full h-full top-0 left-0 duration-300 bg-sky-800/95 opacity-0 group-hover:opacity-100 text-neutral-100 py-5 cursor-pointer">
				<p 
					className="px-5 h-full overflow-y-scroll z-50 text-justify opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-500 group-hover:delay-300 whitespace-pre-wrap"
					ref={ref}
				>
					{text}
				</p>
			</div>
		</div>
	)
}
