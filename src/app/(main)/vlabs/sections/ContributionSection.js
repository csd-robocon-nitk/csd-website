"use client"

import BarChart from "./BarChart"
import { motion } from "framer-motion"
import LineChart from "./LineChart"

export default function ContributionSection ({ contribution }) {
    return (
        <section id="contribution" className="py-10 px-4 bg-sky-100">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="sm:text-4xl text-3xl font-bold mb-8 text-center"
            >
                Contribution of CSD to VLab Development
            </motion.h2>
            <div className="flex justify-center gap-5 max-w-[1100px] mx-auto md:flex-row flex-col">
                <BarChart
                    title={"Labs"}
                    developed={contribution.labs_developed}
                    upcoming={contribution.upcoming_labs}
                    proposed={contribution.proposed_labs}
                />
                <LineChart />
            </div>
        </section>
    )
}