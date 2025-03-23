"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectSection from "./ProjectSection"
import FilterBar from "./FilterBar"
import Link from "next/link"

function ProjectList({ projects }) {
	const [activeFilter, setActiveFilter] = useState("all")
	let ref = useRef(null)

	let featuredProjects = projects.filter(p => p.attributes.featured_work)
	let mainProjects = projects.filter(p => p.attributes.category == "main")
	let consultancyProjects = projects.filter(p => p.attributes.category == "consultancy")
	let studentProjects = projects.filter(p => p.attributes.category == "student research")

	if (activeFilter == "all") {
		featuredProjects = featuredProjects.slice(0, 3)
		mainProjects = mainProjects.slice(0, 3)
		consultancyProjects = consultancyProjects.slice(0, 3)
		studentProjects = studentProjects.slice(0, 3)
	}

	useEffect(() => {
		if (window.scrollY > ref.current.scrollTop)
			ref.current.scrollIntoView({ behavior: "smooth" })
	}, [activeFilter])

	const renderViewAllLink = filter => {
		if (activeFilter == "all") {
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
			/>

			<AnimatePresence>
				{(activeFilter === "all" || activeFilter === "featured") &&
					featuredProjects.length > 0 && 
                    (
						<ProjectSection
							key="featured"
							title="Featured Work"
							projects={featuredProjects}
							viewAllLink={renderViewAllLink("featured")}
						/>
					)
                }

				{(activeFilter === "all" || activeFilter === "main") &&
					mainProjects.length > 0 && 
                    (
						<ProjectSection
							key="main"
							title="Main Projects"
							gradientClass="bg-gradient-to-br from-cyan-500/50 to-blue-600/50"
							projects={mainProjects}
							viewAllLink={renderViewAllLink("main")}
						/>
					)
                }

				{(activeFilter === "all" || activeFilter === "consultancy") &&
					consultancyProjects.length > 0 && 
                    (
						<ProjectSection
							key="consultancy"
							title="Consultancy Projects"
							projects={consultancyProjects}
							viewAllLink={renderViewAllLink("consultancy")}
						/>
					)
                }

				{(activeFilter === "all" || activeFilter === "student") &&
					studentProjects.length > 0 && 
                    (
						<ProjectSection
							key="student"
							title="Student Work"
							projects={studentProjects}
							viewAllLink={renderViewAllLink("student")}
						/>
					)
                }
			</AnimatePresence>
		</motion.div>
	)
}

export default ProjectList
