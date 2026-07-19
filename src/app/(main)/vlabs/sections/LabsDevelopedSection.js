"use client"

import { motion } from "framer-motion"
import { University } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import LabsDevelopedNITKSection from "./LabsDevelopedNITKSection"

export default function LabsDevelopedSection ({ labs }) {
    let [ nitklabsOpen, setNitklabsOpen ] = useState(false)

    useEffect(() => {
        function handleClickOutside () { setNitklabsOpen(false) }
        window.addEventListener("click", handleClickOutside)
        return () => window.removeEventListener("click", handleClickOutside)
    }, [])

    return (
        <section id="labs" className="py-10 text-white">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="sm:text-4xl text-3xl font-bold mb-8 text-center text-sky-800"
                >
                    Labs Developed at NITK
                </motion.h2>
                <div className="max-w-[1100px] mx-auto space-y-5">
                    <div className="flex flex-wrap items-stretch gap-3">
                        {
                            labs.map(({ name, icon, link }, index) => (
                                <Link href={link} key={index} target="_blank" className="flex-grow">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-sky-200/60 text-sky-800 p-4 py-5 rounded-lg shadow-md flex gap-4 items-center justify-center h-full"
                                    >
                                        <span className="scale-[1.6]" dangerouslySetInnerHTML={{ __html: icon }} />
                                        <p className="text-lg">{name}</p>
                                    </motion.div>
                                </Link>
                            ))
                        }
                    </div>
                    <div 
                        className={`bg-sky-50/60 text-sky-800 rounded-lg ${nitklabsOpen ? "max-h-[2000px]" : "max-h-20 sm:max-h-16"} duration-1000 overflow-hidden border-sky-800 border-2 shadow-md cursor-pointer`} 
                        onClick={e => { setNitklabsOpen(s => !s); e.stopPropagation(); }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex gap-4 items-center justify-center h-20 sm:h-16 p-4"
                        >
                            <University size={32} />
                            <p className="font-semibold text-xl">Labs in Collaboration with NITK and Nodal Centres</p>
                        </motion.div>
                        <LabsDevelopedNITKSection />
                    </div>
                </div>
            </div>
        </section>
    )
}