"use client"

import { motion } from "framer-motion"

export default function ContributionSection ({ contribution }) {
    return (
        <section id="contribution" className="py-10 bg-sky-100">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Contribution of CSD to VLab Development
                </motion.h2>
                <div className="grid grid-cols-5 items-stretch px-16 justify-center gap-3">
                    {
                        contribution.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2}}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center"
                            >
                                <h3 className="text-4xl font-bold mb-2 text-sky-800">{stat.number}</h3>
                                <p className="text-lg text-slate-600">{stat.label}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}