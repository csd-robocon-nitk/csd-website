"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TeamSection ({ team }) {
    console.log(team)
    let team_data = team.map(member => {
        let data = { position: member.attributes.position }
        if (member.attributes.person.data) {
            data.name = member.attributes.person.data.attributes.name
            data.image = member.attributes.person.data.attributes.pfp.data
        }
        else {
            data.name = member.attributes.name
            data.image = member.attributes.image.data
        }

        if (data.image) {
            data.image_url = process.env.NEXT_PUBLIC_STRAPI_API_URL + data.image.attributes.url
        }
        else {
            data.image_url = "/empty.jpg"
        }
        return data
    })

    return (
        <section id="team" className="py-10 text-white">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="sm:text-4xl text-3xl font-bold mb-8 text-center text-sky-800"
                >
                    Our Team
                </motion.h2>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-stretch mx-auto gap-3 max-w-[1100px]">
                    {
                        team_data.map(({ position, name, image_url }, index) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-sky-200/60 p-4 py-5 rounded-lg shadow-md flex gap-4 items-center h-full"
                                key={index}
                            >
                                <Image src={image_url} width={100} height={100} alt={name} className="rounded-full" />
                                <div>
                                    <p className="text-xl font-bold text-black">{name}</p>
                                    <p className="font-bold text-sky-700">{position}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}