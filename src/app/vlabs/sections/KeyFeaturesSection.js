"use client"

import { Book, Cpu, Globe, Microscope, School, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function KeyFeaturesSection () {
    let data = [
        { icon: <Globe className="w-12 h-12 text-sky flex-shrink-0" />, title: "Remote Access", description: "Perform experiments from anywhere in the world." },
        { icon: <Cpu className="w-12 h-12 text-sky flex-shrink-0" />, title: "Real-Time Data", description: "Obtain real-time results just as you would in a physical lab." },
        { icon: <Users className="w-12 h-12 text-sky flex-shrink-0" />, title: "User-Friendly Interface", description: "Designed for a seamless and intuitive user experience." },
        { icon: <Microscope className="w-12 h-12 text-sky flex-shrink-0" />, title: "Interactive Simulations", description: "Engage with high-quality simulations that closely mimic actual lab conditions." },
        { icon: <Book className="w-12 h-12 text-sky flex-shrink-0" />, title: "Comprehensive Resources", description: "Access detailed manuals, tutorials, and support." },
        { icon: <School className="w-12 h-12 text-sky flex-shrink-0" />, title: "Educational Impact", description: "Enhance learning outcomes through practical, hands-on virtual experiences." }
    ]

    return (
        <section id="features" className="py-10 bg-sky-100">
            <div className="container mx-auto px-4 max-w-[1100px]">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-12"
                >
                    Key Features
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-3 px-2">
                    {
                        data.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                            >
                                <h3 className="text-xl font-semibold mb-6">{feature.title}</h3>
                                <div className="flex items-center gap-4">
                                    {feature.icon}
                                    <p className="text-black">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}