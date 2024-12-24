"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CoverSection () {
    function scrollToLabs () {
        const elementPosition = document.querySelector("#labs").getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 75;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
    
    return (
        <div className="flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950 to-sky-900 pt-20">
            <div className="h-[50vh] mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold mb-6 text-shadow-lg"
                >
                    Virtual Labs @ NITK
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl mb-8 text-shadow-md"
                >
                    Explore Virtual Labs and Join Our Outreach Programs and Workshops
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div onClick={scrollToLabs} className="bg-white text-sky-800 shadow-md px-8 py-3 rounded-full font-semibold hover:bg-sky-50 duration-300 transition-colors inline-flex items-center cursor-pointer">
                        Discover More <ArrowRight className="ml-2" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}