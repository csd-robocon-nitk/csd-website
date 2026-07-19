"use client"

import { motion } from "framer-motion"

export default function AboutSection () {
    return (
        <section id="about" className="py-20 bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:justify-center gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/2"
                    >
                        <p className="text-lg mb-6 text-black text-justify">
                            The Virtual Lab at NITK, hosted by the Centre for System Design (CSD), is redefining education and research by providing remote access to experiments typically conducted in physical labs. Our virtual labs replicate real-world lab environments, providing a comprehensive learning experience without geographical limitations.
                        </p>
                        <p className="text-lg mb-6 text-black text-justify">
                            CSD's initiatives go beyond virtual labs, engaging in outreach activities and workshops designed to foster innovation, collaboration, and practical learning experiences.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}