"use client"

import React from "react"

function FilterBar({ activeFilter, setActiveFilter, categories, getSelectedProjects }) {
	return (
		<div className="w-full justify-center flex mb-4 px-4 gap-2 md:flex-wrap">
			{categories.map((category,i) => (
				(i == 0 || !!getSelectedProjects(category).length) && 
				<button
					key={i}
					onClick={() => setActiveFilter(i)}
					className={`${
						activeFilter == i
							? "bg-sky-900 text-white"
							: "bg-slate-100"
					} px-4 py-2 rounded-md shadow-md font-semibold`}
				>
					{category.name}
				</button>
			))}
		</div>
	)
}

export default FilterBar
