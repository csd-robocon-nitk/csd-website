import Publications from "./Publications"
import Splash from "@/components/splash"
import ResearchAreasSection from "./ResearchAreasSection"

export default function ResearchPage () {
    return (
        <div className="min-h-screen pt-12 bg-white">
            <Splash
                title="Research"
                subtitle="CSD contributes vastly in the areas of reserach and publications."
            />
            <h1 className="text-4xl font-bold my-8 max-w-[1100px] mx-auto">Our Research Areas</h1>
            <ResearchAreasSection />
            <h1 className="text-4xl font-bold mt-10 mb-6 max-w-[1100px] mx-auto">Research Publications</h1>
            <Publications />
        </div>
    )
}