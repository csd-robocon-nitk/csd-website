"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectSection from "./ProjectSection"
import FilterBar from "./FilterBar"
import Link from "next/link"

function ProjectList({ projects }) {
	const [activeFilter, setActiveFilter] = useState(0)
	let ref = useRef(null)

	let categories = [
		{
			name: "All"
		},
		{
			name: "Featured Work",
			filter: p => p.attributes.featured_work
		},
		{
			name: "Main Projects",
			filter: p => p.attributes.category == "main"
		},
		{
			name: "Consultancy Work",
			filter: p => p.attributes.category == "consultancy"
		},
		{
			name: "Student Research & Innovation",
			filter: p => p.attributes.category == "student research"
		},
		{
			name: "Internal Research Projects",
			filter: p => p.attributes.category == "internal research"
		},
		{
			name: "Product Development & Prototyping",
			filter: p => p.attributes.category == "product development"
		},
		{
			name: "Collaborative Academia Projects",
			filter: p => p.attributes.category == "collaborative"
		},
	]

	let getSelectedProjects = category => {
		if (activeFilter == 0) return projects.filter(category.filter).slice(0,3)
		else return projects.filter(category.filter)
	}

	useEffect(() => {
		if (window.scrollY > ref.current.scrollTop)
			ref.current.scrollIntoView({ behavior: "smooth" })
	}, [activeFilter])

	const renderViewAllLink = filter => {
		if (activeFilter == 0) {
			return (
				<Link
					href="#"
					onClick={e => {
						e.preventDefault()
						setActiveFilter(filter)
					}}
					className="text-sky-800 hover:bg-sky-50 font-semibold transition-colors duration-300 px-5 py-1 border border-sky-800 rounded"
				>
					View All
				</Link>
			)
		}
		return null
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="pt-10 scroll-mt-20"
			ref={ref}
		>
			<FilterBar
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
				categories={categories}
				getSelectedProjects={getSelectedProjects}
			/>

			<AnimatePresence>
				{
					categories.map((category, i) => 
						i != 0 && getSelectedProjects(category).length > 0 && (activeFilter == 0 || activeFilter == i) &&
							<ProjectSection
								key={i}
								title={category.name}
								projects={getSelectedProjects(category)}
								viewAllLink={renderViewAllLink(i)}
							/>
						)
                }
			</AnimatePresence>
		</motion.div>
	)
}

export default ProjectList
