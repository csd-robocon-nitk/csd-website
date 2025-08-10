"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TabsContent } from "@radix-ui/react-tabs"

export default function Team ({ team, external_team }) {
    let team_data = []

    console.log(team)
    team.map(member => {
        team_data.push({
            name: member.attributes.name,
            image_url: member.attributes.pfp.data ? process.env.NEXT_PUBLIC_STRAPI_API_URL + member.attributes.pfp.data.attributes.url : "/empty.jpg",
            designation: member.attributes.Designation
        })
    })

    external_team.map(member => {
        team_data.push({
            name: member.name,
            image_url: member.image.data ? process.env.NEXT_PUBLIC_STRAPI_API_URL + member.image.data.attributes.url : "/empty.jpg",
            designation: member.designation
        })
    })

    return (
        <TabsContent
            value="team"
            className="space-y-6 mt-6"
        >
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-stretch mx-auto gap-3 max-w-[1100px]">
                {
                    team_data.map(({ designation, name, image_url }, index) => (
                        <div
                            className="bg-sky-200/60 p-4 py-5 rounded-lg shadow-md flex gap-4 items-center h-full"
                            key={index}
                        >
                            <Image src={image_url} width={100} height={100} alt={name} className="rounded-full" />
                            <div>
                                <p className="text-xl font-bold text-black">{name}</p>
                                <p className="font-bold text-sky-700">{designation}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </TabsContent>
    )
}