"use client"

import { motion } from "framer-motion"

export default function OutreachSection ({ outreach }) {
    return (
        <section id="outreach" className="py-10 px-8">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Outreach Activities
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-black">Our Nodal Centers</h3>
                        <p className="text-lg mb-6 text-slate-600">
                            NITK Surathkal mentors over 440 institutions that have partnered as our Nodal Centers. These include state technological universities, centrally funded technical institutes, private universities, and more.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-sky-100 p-4 rounded-lg">
                                <h4 className="font-semibold">Karnataka</h4>
                                <p className="text-black">{outreach.nodal_karnataka}</p>
                            </div>
                            <div className="bg-sky-100 p-4 rounded-lg">
                                <h4 className="font-semibold">Kerala</h4>
                                <p className="text-black">{outreach.nodal_kerala}</p>
                            </div>
                            <div className="bg-sky-100 p-4 rounded-lg">
                                <h4 className="font-semibold">Tamil Nadu</h4>
                                <p className="text-black">{outreach.nodal_tamil_nadu}</p>
                            </div>
                            <div className="bg-sky-100 p-4 rounded-lg">
                                <h4 className="font-semibold">Other States</h4>
                                <p className="text-black">{outreach.nodal_other}</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-black">Workshops and Training Programs</h3>
                        <p className="text-lg mb-6 text-slate-600">
                            The Virtual Labs team at NITK Surathkal has facilitated over 1,000 physical workshops and virtual training sessions, training more than 120,000 users nationwide.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-sky-100 p-4 rounded-lg">
                                <h4 className="font-semibold">Karnataka</h4>
                                <p className="text-black">{outreach.workshops_karnataka}</p>
                            </div>
                            <div className="bg-sky-100 p-4 rounded-lg">
                                <h4 className="font-semibold">Kerala</h4>
                                <p className="text-black">{outreach.workshops_kerala}</p>
                            </div>
                            <div className="bg-sky-100 p-4 rounded-lg">
                                <h4 className="font-semibold">Tamil Nadu</h4>
                                <p className="text-black">{outreach.workshops_tamil_nadu}</p>
                            </div>
                            <div className="bg-sky-100 p-4 rounded-lg">
                                <h4 className="font-semibold">Other States</h4>
                                <p className="text-black">{outreach.workshops_other}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}