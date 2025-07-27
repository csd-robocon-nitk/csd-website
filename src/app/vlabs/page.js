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
import fetchTeam from './helpers/fetchTeam'
import TeamSection from './sections/TeamSection'

export default async function VirtualLabs() {
    let labs = await fetchLabs()
    let contribution = await fetchContribution()
    let outreach = await fetchOutreach()
    let team = await fetchTeam()

    const helper = [
        { href: "features", label: "Features" },
        { href: "labs", label: "Labs" },
        { href: "contribution", label: "Contribution" },
        { href: "outreach", label: "Outreach" },
        { href: "team", label: "Team"}
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
            <TeamSection team={team} />
            <BottomSection />
        </div>
    )
}