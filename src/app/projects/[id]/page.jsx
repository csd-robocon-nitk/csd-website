"use client"
import { useState, use } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { projects } from "../data/projects"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight, ArrowRight, Mail } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const ProjectDetail = ({ params }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const resolvedParams = use(params)
	const id = resolvedParams.id
	const project = projects.find(p => p.id === Number.parseInt(id))

	if (!project) {
		return notFound()
	}

	// Assuming you have a slides array defined somewhere
	// const slides = [
	//   {
	//     image: '/placeholder.svg?height=400&width=800',
	//     title: 'PRECISION SURVEYING',
	//     description: 'Aerial LiDAR'
	//   },
	//   {
	//     image: '/placeholder.svg?height=400&width=800',
	//     title: 'ADVANCED MAPPING',
	//     description: 'High-resolution terrain modeling'
	//   },
	//   {
	//     image: '/placeholder.svg?height=400&width=800',
	//     title: 'DATA ANALYSIS',
	//     description: 'Comprehensive geospatial insights'
	//   }
	// ]

	const slides = project.slides

	return (
		<div className="mx-auto p-6 pt-24 max-w-7xl">
			<div className="mb-8">
				<Link
					href="/projects"
					className="inline-flex items-center px-4 py-2 text-sky-800 bg-sky-500/10 rounded-full transition-colors duration-200 ease-in-out hover:bg-sky-500/20"
				>
					<ChevronLeft className="mr-2 h-4 w-4" />
					<span>Explore projects</span>
				</Link>
			</div>

			<div className="grid lg:grid-cols-[300px_1fr] gap-10">
				{/* Left Sidebar */}
				<div className="space-y-8">
					<Image
						src={project.image || "/placeholder.svg"}
						alt="Project thumbnail"
						width={300}
						height={300}
						className="w-full aspect-square rounded-lg object-cover"
					/>

					<div className="space-y-2 border border-sky-100 p-4 rounded-lg">
                        <h2 className="font-bold text-xl">Objectives:</h2>
                        <ul className="space-y-2">
                            {
                                project.objectives &&
                                project.objectives.map(
                                    (objective, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <ArrowRight className="h-5 w-5 mr-2 text-sky-800 flex-shrink-0 mt-1" />
                                            <span>{objective}</span>
                                        </li>
                                    )
                                )
                            }
							</ul>
                    </div>

					<div className="bg-sky-200/50 rounded-lg p-6">
						<h3 className="font-semibold text-lg mb-4">
							Need more information?
						</h3>
						<a
							href="mailto:support@ecohome.com"
							className="inline-flex items-center text-sky-800 font-bold hover:underline"
						>
							<Mail className="mr-2 h-5 w-5" />
							Contact Support
						</a>
					</div>
				</div>

				{/* Main Content */}
				<div className="space-y-8">
					<div className="flex items-center justify-between">
						<h1 className="text-4xl font-bold">{project.title}</h1>
					</div>

					<Tabs defaultValue="description" className="w-full">
						<TabsList className="w-full justify-start rounded-none bg-transparent p-0 border-b">
							{[
								"Description",
								"Key Features",
								"Impact",
								"participants",
								"Testimonials"
							].map(tab => (
								<TabsTrigger
									key={tab}
									value={tab.toLowerCase()}
									className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px data-[state=active]:border-sky-800 data-[state=active]:bg-transparent hover:text-sky-800 transition-colors"
								>
									{tab}
								</TabsTrigger>
							))}
						</TabsList>

						<TabsContent
							value="description"
							className="space-y-8 mt-6"
						>
							{/* Image Carousel */}
							<div className="relative">
								<div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
									<Image
										src={
											slides[currentSlide].image ||
											"/placeholder.svg"
										}
										alt={slides[currentSlide].title}
										fill
										className="object-cover"
									/>
									<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
										<h2 className="text-white text-2xl font-bold">
											{slides[currentSlide].title}
										</h2>
										<p className="text-white/90">
											{slides[currentSlide].description}
										</p>
									</div>
								</div>

								<Button
									variant="ghost"
									size="icon"
									className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full shadow-md"
									onClick={() =>
										setCurrentSlide(
											prev =>
												(prev - 1 + slides.length) %
												slides.length
										)
									}
								>
									<ChevronLeft className="h-6 w-6" />
								</Button>

								<Button
									variant="ghost"
									size="icon"
									className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full shadow-md"
									onClick={() =>
										setCurrentSlide(
											prev => (prev + 1) % slides.length
										)
									}
								>
									<ChevronRight className="h-6 w-6" />
								</Button>
							</div>

							<div className="prose max-w-none">
								<p className="text-lg leading-relaxed">
									{project.fullDescription}
								</p>
							</div>
						</TabsContent>

						<TabsContent
							value="key features"
							className="space-y-6 mt-6"
						>
							<div className="grid md:grid-cols-2 gap-6">
								{project.keyFeatures &&
									project.keyFeatures.map(
										(feature, index) => (
											<Card key={index}>
												<CardContent className="p-6">
													<h3 className="text-xl font-semibold mb-2">
														{feature.title}
													</h3>
													<p>{feature.description}</p>
												</CardContent>
											</Card>
										)
									)}
							</div>
						</TabsContent>

						<TabsContent value="impact" className="space-y-8 mt-6">
							<div className="prose max-w-none">
								<h2 className="text-3xl font-bold mb-4">
									{project.impactTitle}
								</h2>
								<p className="text-lg">{project.impact}</p>
							</div>

							<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
								{project.impactMetrics &&
									project.impactMetrics.map((item, index) => (
										<div
											key={index}
											className="bg-sky-100 shadow shadow-sky-300/50 flex flex-col justify-center items-center text-center rounded-lg p-5"
										>
                                            <p className="text-3xl font-bold text-sky-500 mb-2">
                                                {item.metric}
                                            </p>
                                            <p className="text-sm">
                                                {item.description}
                                            </p>
										</div>
									))}
							</div>
						</TabsContent>

						<TabsContent
							value="testimonials"
							className="space-y-6 mt-6"
						>
							{project.testimonials &&
								project.testimonials.map(
									(testimonial, index) => (
										<Card
											key={index}
											className="bg-secondary/10"
										>
											<CardContent className="p-6">
												<p className="italic mb-4">
													"{testimonial.comment}"
												</p>
												<p className="font-semibold">
													- {testimonial.name}
												</p>
											</CardContent>
										</Card>
									)
								)}
						</TabsContent>
						
					</Tabs>
				</div>
			</div>
		</div>
	)
}
export default ProjectDetail
