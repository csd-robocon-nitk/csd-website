import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getProjectRoute } from "./getProjectRoute"

function ProjectCard({ project }) {
    let { title, short_description, cover_image } = project.attributes
	return (
		<div className="bg-white text-primary rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col">
			<div className="relative h-48">
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${cover_image.data.attributes.formats.medium.url}`}
					alt={title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="rounded-t-xl object-cover"
				/>
			</div>
			<div className="p-6 flex flex-col flex-grow">
				<h3 className="text-2xl font-semibold text-gray-800 mb-2 font-sans">
					{title}
				</h3>
				<p className="text-gray-600 text-base leading-relaxed font-sans mb-4">
					{short_description}
				</p>
				<div className="flex-grow flex items-end">
					<Link
						href={getProjectRoute(project.id)}
						className="text-sky-800 hover:text-sky-600 transition-colors duration-300 font-semibold"
					>
						View Project
						<span className="sr-only">: {project.title}</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
