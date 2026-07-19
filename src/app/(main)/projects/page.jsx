import React from "react"
import Splash from "@/components/splash"
import ProjectList from "./components/ProjectList"

export default async function Home() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?populate=cover_image`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
			},
			cache: "no-cache"
		}
	)
	let resData = await res.json()
	let data = resData.data

	return (
		<div className="min-h-screen pt-12 bg-gray-50">
			<Splash
				title="Our Projects"
				subtitle="CSD contributes vastly in the areas of reserach and publications."
			/>
			<ProjectList projects={data} />
		</div>
	)
}
