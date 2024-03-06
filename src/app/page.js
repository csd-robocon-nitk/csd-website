import AboutSection from "@/components/home/about"
import CoverSection from "@/components/home/cover"
import UpdatesSection from "@/components/home/updates"

export default async function HomePage () {
	return (
		<>
			<CoverSection />
			<AboutSection />
			<UpdatesSection />
		</>
	)
}
