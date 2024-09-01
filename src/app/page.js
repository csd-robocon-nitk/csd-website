import AboutSection from "@/components/home/about"
import CoverSection from "@/components/home/cover"
import FocusAreasSection from "@/components/home/focus_areas"

export default async function HomePage () {
	return (
		<>
			<CoverSection />
			<AboutSection />
			<FocusAreasSection />
		</>
	)
}
