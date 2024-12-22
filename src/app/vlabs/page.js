import HoverBottomNav from '@/components/hoverBottomNav'
import CoverSection from './sections/CoverSection'
import AboutSection from './sections/AboutSection'
import KeyFeaturesSection from './sections/KeyFeaturesSection'
import LabsDevelopedSection from './sections/LabsDevelopedSection'
import fetchLabs from './helpers/fetchLabs'
import ContributionSection from './sections/ContributionSection'
import OutreachSection from './sections/OutreachSection'
import BottomSection from './sections/BottomSection'
import fetchContribution from './helpers/fetchContribution'
import fetchOutreach from './helpers/fetchOutreach'

export default async function VirtualLabs() {
    let labs = await fetchLabs()
    let contribution = await fetchContribution()
    let outreach = await fetchOutreach()

    const helper = [
        { href: "features", label: "Features" },
        { href: "labs", label: "Labs" },
        { href: "contribution", label: "Contribution" },
        { href: "outreach", label: "Outreach" },
    ];
    

    return (
        <div className="min-h-screen bg-white text-sky-800 overflow-x-hidden">
            <HoverBottomNav helper={helper} />
            <CoverSection />
            <AboutSection />
            <KeyFeaturesSection />
            <LabsDevelopedSection labs={labs} />
            <ContributionSection contribution={contribution} />
            <OutreachSection outreach={outreach} />
            <BottomSection />
        </div>
    )
}