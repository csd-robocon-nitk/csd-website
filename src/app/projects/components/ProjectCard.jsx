"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { getProjectRoute } from "./getProjectRoute"

function ProjectCard({ project }) {
	const { title, short_description, cover_image } = project.attributes

	const [expanded, setExpanded] = useState(false)

	return (
		<div className="bg-white text-primary rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] flex flex-col h-full">
			
			<div className="relative h-56 w-full flex-shrink-0">
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${cover_image.data.attributes.url}`}
					alt={title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
				/>
			</div>

			<div className="p-6 flex flex-col flex-grow">

				<h3
					className="
						text-2xl
						font-semibold
						text-gray-800
						mb-3
						font-sans
						line-clamp-2
						min-h-[64px]
					"
				>
					{title}
				</h3>

				<div className="flex flex-col flex-grow">

					<div
						className={`
							text-gray-600
							text-base
							leading-relaxed
							font-sans
							pr-2
							transition-all
							duration-300
							${expanded
								? "max-h-[180px] overflow-y-auto"
								: "line-clamp-3 overflow-hidden"}
						`}
					>
						{short_description}
					</div>

					{short_description.length > 180 && (
						<button
							onClick={() => setExpanded(!expanded)}
							className="text-sky-800 font-semibold mt-2 hover:text-sky-600 transition-colors text-left"
						>
							{expanded ? "Show Less" : "Read More"}
						</button>
					)}
				</div>

				<div className="mt-auto pt-6">
					<Link
						href={getProjectRoute(project.id)}
						className="text-sky-800 hover:text-sky-600 transition-colors duration-300 font-semibold"
					>
						View Project
						<span className="sr-only">: {title}</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard