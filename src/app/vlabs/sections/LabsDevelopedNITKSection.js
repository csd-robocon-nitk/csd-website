"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function LabsDevelopedNITKSection () {
    return (
        <section id="labs" className="py-10">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="sm:text-3xl text-2xl font-bold mb-8 text-center text-sky-800"
                >
                    Labs in Collaboration with NITK and Nodal Centres
                </motion.h2>
                <div className="flex flex-col items-center mx-auto gap-10 max-w-[1100px]">
                    <div className="max-w-sm flex flex-col gap-4 items-center">
                        <Link href="/vlabs/marine-mechatronics-system-design">
                            <img
                                src="/vlabs/ina.jpg"
                                className="w-56"
                            />
                        </Link>
                        <h3 className="sm:text-2xl text-black text-xl font-semibold text-center">
                            Indian Naval Academy - Ezhimala, Kannur
                        </h3>
                    </div>
                    <div class="flex gap-10 flex-wrap justify-center">
                        <div className="max-w-sm flex flex-col gap-4 items-center">
                            <img
                                src="/vlabs/dsu.png"
                                className="w-44"
                            />
                            <h3 className="sm:text-xl text-black text-lg font-semibold text-center">
                                Dhanalakshmi Srinivasan Institute of Research and Technology, Perambalur, Tamil Nadu
                            </h3>
                        </div>
                        <div className="max-w-sm flex flex-col gap-4 items-center">
                            <img
                                src="/vlabs/srm.jpg"
                                className="w-44"
                            />
                            <h3 className="sm:text-xl text-black text-lg font-semibold text-center">
                                SRM Institute of Science and Technology, Kattankulathur, Chennai
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}