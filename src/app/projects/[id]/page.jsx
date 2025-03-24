import { ChevronLeft, ArrowRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { SquareArrowOutUpRight } from "lucide-react"
import Description from "../components/Description"
import KeyFeatures from "../components/KeyFeatures"
import Impact from "../components/Impact"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"

export default async function ProjectDetail ({ params }) {
	const { id } = await params
	
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects/${id}?populate[cover_image]=*&populate[objectives]=*&populate[slides][populate]=*&populate[key_features]=*&populate[impact][populate]=*&populate[team][populate]=*&populate[external_team][populate]=*&populate[testimonials]=*`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
			},
			cache: "no-cache"
		}
	)
	let resData = await res.json()
	let project = resData.data.attributes
	const { slides, cover_image, full_description, objectives, external_link, title, key_features, impact, team, external_team, testimonials, sub_projects } = project

	const image_url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${cover_image?.data.attributes.url}`

	let tab_names = [{ name: "Description", value: "description" }]
	let tabs = [ <Description slides={slides} full_description={full_description} key="description" /> ]

	if (key_features.length) {
		tab_names.push({ name: "Key Features", value: "key_features" })
		tabs.push(<KeyFeatures key_features={key_features} key="key_features" />)
	}

	if (impact) {
		tab_names.push({ name: "Impact", value: "impact" })
		tabs.push(<Impact impact={impact} key="impact" />)
	}

	if (team.length || external_team.length) {
		tab_names.push({ name: "Team", value: "team" })
		tabs.push(<Team team={team.data} external_team={external_team} key="team" />)
	}

	if (testimonials.length) {
		tab_names.push({ name: "Testimonials", value: "testimonials" })
		tabs.push(<Testimonials testimonials={testimonials} key="testimonials" />)
	}

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
						src={image_url || "/placeholder.svg"}
						alt="Project thumbnail"
						width={300}
						height={300}
						className="w-full aspect-square rounded-lg object-cover"
					/>

					{ !!objectives.length &&
						<div className="space-y-2 border border-sky-100 p-4 rounded-lg">
							<h2 className="font-bold text-xl">Objectives:</h2>
							<ul className="space-y-2">
								{
									objectives.map(
										(objective, index) => (
											<li
												key={index}
												className="flex items-start"
											>
												<ArrowRight className="h-5 w-5 mr-2 text-sky-800 flex-shrink-0 mt-1" />
												<span>{objective.text}</span>
											</li>
										)
									)
								}
								</ul>
						</div>
					}

					{ external_link &&
						<a
							href={external_link}
							className="flex items-center text-sky-800 bg-sky-200/50 rounded-full font-bold px-6 py-3 text-lg hover:bg-sky-200/40 duration-200"
						>
							<SquareArrowOutUpRight className="mr-2 h-5 w-5" />
							Learn More
						</a>
					}
				</div>

				{/* Main Content */}
				<div className="space-y-8">
					<div className="flex items-center justify-between">
						<h1 className="text-4xl font-bold">{title}</h1>
					</div>

					<Tabs defaultValue="description" className="w-full">
						<TabsList className="w-full justify-start rounded-none bg-transparent p-0 border-b">
							{tab_names.map(tab => (
								<TabsTrigger
									key={tab.value}
									value={tab.value}
									className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px data-[state=active]:border-sky-800 data-[state=active]:bg-transparent hover:text-sky-800 transition-colors"
								>
									{tab.name}
								</TabsTrigger>
							))}
						</TabsList>

						{tabs}
						
					</Tabs>
				</div>
			</div>
		</div>
	)
}
