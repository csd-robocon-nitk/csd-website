"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function LabsDevelopedSection ({ labs }) {
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
                <div className="flex flex-wrap items-stretch mx-auto gap-3 max-w-[1100px]">
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
            </div>
        </section>
    )
}