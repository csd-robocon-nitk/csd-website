"use client"

import React from "react"

function FilterBar({ activeFilter, setActiveFilter }) {
	const filters = [
		{ name: "All", value: "all" },
		{ name: "Main Projects", value: "main" },
		{ name: "Featured Work", value: "featured" },
		{ name: "Consultancy Work", value: "consultancy" },
		{ name: "Student Work", value: "student" }
	]

	return (
		<div className="w-full justify-center flex mb-4">
			{filters.map(filter => (
				<button
					key={filter.value}
					onClick={() => setActiveFilter(filter.value)}
					className={`${
						activeFilter == filter.value
							? "bg-sky-900 text-white"
							: "bg-slate-100"
					} px-4 py-2 rounded-md shadow-md font-semibold mr-2`}
				>
					{filter.name}
				</button>
			))}
		</div>
	)
}

export default FilterBar
