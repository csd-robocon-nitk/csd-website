"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BottomSection () {
    return (
        <section className="py-10 bg-sky-100">
            <div className="container mx-auto px-4 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-8"
                >
                    Ready to Explore Virtual Labs?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl mb-8 text-black"
                >
                    Join us in revolutionizing education through virtual experimentation.
                </motion.p>
                <div className="flex gap-3 justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link href="https://vlab.co.in/" target='_blank' className="bg-sky-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center">
                            Get Started with Virtual Labs <ExternalLink  className="ml-2"/>
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link href="https://rtlabs.nitk.ac.in/" target='_blank' className="bg-sky-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center">
                            RT Labs <ExternalLink  className="ml-2"/>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}