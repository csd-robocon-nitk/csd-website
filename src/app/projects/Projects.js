"use client"

import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import ProjectCard from "./ProjectCard"

export default function Projects ({ projects }) {
    let [ selected, setSelected ] = useState(0)
    let [ dropdownOpen, setDropdownOpen ] = useState(false)
    // 0 - ongoing
    // 1 - completed

    useEffect(() => {
        function handleClose () {
            setDropdownOpen(false)
        }

        document.addEventListener("click", handleClose)

        return () => document.removeEventListener("click", handleClose)
    })

    let statuses = [ "Ongoing", "Completed" ]
    let projectsShown = projects.filter(project => project.attributes.status == statuses[selected].toLowerCase())

    return (
        <div className="max-w-[1200px] mx-auto my-10">
            <div className="relative">
                <h1 className="text-4xl font-bold">Our Projects</h1>
                <div className="cursor-pointer absolute right-0 top-0 bg-slate-100 shadow-md rounded">
                    <div className="flex gap-3 items-center px-5 py-3" onClick={(e) => {setDropdownOpen(true); e.stopPropagation()}}>
                        <p className="text-xl font-semibold leading-none">{statuses[selected]}</p>
                        <FaFilter size={18} />
                    </div>
                    {
                        dropdownOpen ?
                        <div className="flex flex-col gap-2 px-2 py-2">
                            {   
                                statuses.map((status, i) => 
                                    <div
                                        className="text-center text-lg p-1 bg-shark-200/50 hover:bg-shark-200/80 duration-200 rounded-md"
                                        key={status}
                                        onClick={() => { setSelected(i); setDropdownOpen(false) }}
                                    >
                                        {status}
                                    </div>
                                ) 
                            }
                        </div>
                        : null
                    }
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-10">
                {
                    projectsShown.map(project => <ProjectCard project={project} key={project.id} />)
                }
            </div>
        </div>
    )
}