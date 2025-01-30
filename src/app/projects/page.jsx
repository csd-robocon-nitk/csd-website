"use client"

import React from "react"
import Splash from "@/components/splash"
import ProjectList from "./components/ProjectList"

export default function Home() {
	return (
		<div className="min-h-screen pt-12">
			<Splash
				title="Our Projects"
				subtitle="CSD contributes vastly in the areas of reserach and publications."
			/>
			<ProjectList />
		</div>
	)
}
