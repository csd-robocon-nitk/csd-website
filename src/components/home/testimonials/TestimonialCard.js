import Image from "next/image"
import { useEffect, useState } from "react"
import useMeasure from "react-use-measure"
import { createPortal } from "react-dom"

export default function TestimonialCard({ testimonial, setCardWidth }) {
	let [ cardRef, { width }] = useMeasure()
	const [open, setOpen] = useState(false)

	let { testimonial: text, photo, name, designation } = testimonial.attributes
	const imgsrc = photo.data ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${photo.data.attributes.url}` : "/empty.jpg"

	useEffect(() => {
		if (width && setCardWidth) setCardWidth(width)
	}, [ width ])

	return (
		<div 
			className="bg-sky-200 flex w-[calc((100vw-144px)/3)] min-w-[400px] h-[calc(0.55*(100vw-144px)/3)] min-h-[250px]" 
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
			<div className="py-6 px-2 flex flex-col gap-2 min-w-0">
				<div className="w-full">
					<h1 className="text-xl font-semibold text-sky-950 mb-1">{name}</h1>
					<p className="text-sm text-gray-600 whitespace-pre-wrap">{designation}</p>
				</div>
				<p className="text-justify pr-4 overflow-hidden">"{text.split("\n")[0]}..."</p>
				<button
          			onClick={() => setOpen(true)}
          			className="text-sm font-medium text-sky-800 hover:underline self-start"
        		>
          			Read more
        		</button>
			</div>
			{open &&
			createPortal(
				<div className="fixed inset-0 z-[9999] flex items-center justify-center">
				<div
					className="absolute inset-0 bg-black/40"
					onClick={() => setOpen(false)}
				/>

				<div className="relative bg-sky-200 w-[90%] md:w-[60%] max-h-[80vh] rounded-lg shadow-xl overflow-y-auto p-6 z-10">
					<button
					onClick={() => setOpen(false)}
					className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
					aria-label="Close"
					>
					×
					</button>

					<div className="flex gap-4 mb-4">
					<Image
						src={imgsrc}
						alt={name}
						width={80}
						height={80}
						className="rounded-full object-cover"
					/>
					<div>
						<h2 className="text-xl font-semibold text-sky-950">{name}</h2>
						<p className="text-sm text-gray-600">{designation}</p>
					</div>
					</div>

					<p className="text-justify whitespace-pre-wrap">
					{text}
					</p>
				</div>
				</div>,
				document.body
			)
			}
		</div>
	)
}
