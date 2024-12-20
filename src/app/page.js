import AboutSection from "@/components/home/about"
import CoverSection from "@/components/home/cover"
import FocusAreasSection from "@/components/home/focus_areas"
import HighlightProjects from "@/components/home/HighlightProjects"
import LenisInit from "@/components/home/LenisInit"
import Sponsors from "@/components/home/sponsors/page"
import Testimonials from "@/components/home/testimonials/Testimonials"

export default async function HomePage () {

	return (
		<>
			<LenisInit />
			<CoverSection />
			<AboutSection />
			<FocusAreasSection />
			<HighlightProjects />
			<Testimonials />
			<Sponsors />
		</>
	)
}
