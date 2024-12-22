import AboutSection from "@/components/home/about"
import CoverSection from "@/components/home/cover"
import FocusAreasSection from "@/components/home/focus_areas"
import HighlightProjects from "@/components/home/HighlightProjects"
import LenisInit from "@/components/home/LenisInit"
import Sponsors from "@/components/home/sponsors/page"
import Testimonials from "@/components/home/testimonials/Testimonials"
import HoverBottomNav from "@/components/hoverBottomNav"

export default async function HomePage () {
    const helper = [
        { href: "about", label: "About Us" },
        { href: "focusareas", label: "Focus Areas" },
        { href: "projects", label: "Projects" },
        { href: "testimonials", label: "Testimonials" },
        { href: "sponsors", label: "Sponsors" },
    ];

	return (
		<>
			<LenisInit />
			<HoverBottomNav helper={helper} />
			<CoverSection />
			<AboutSection />
			<FocusAreasSection />
			<HighlightProjects />
			<Testimonials />
			<Sponsors />
		</>
	)
}
