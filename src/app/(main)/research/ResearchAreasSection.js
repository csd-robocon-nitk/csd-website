"use client"

import ResearchArea from "./ResearchArea"
import data from "./research_data"

export default function ResearchAreasSection () {
    let researchAreas = data.map(({ Logo, logo_color, title, description }, i) => (
        <ResearchArea 
            Logo = {Logo}
            logo_color = {logo_color}
            title = {title}
            description = {description}
            key = {i}
        />
    ))

    return (
        <div className="flex overflow-hidden py-2 max-w-[1100px] mx-auto">
            <div className="flex gap-5 px-2.5 animate-infiniteScroll hover:[animation-play-state:paused]" style={{animationDuration: `${data.length*3}s`}}>
                <div className="flex gap-5">
                    {researchAreas}
                </div>
                <div className="flex gap-5">
                    {researchAreas}
                </div>
            </div>
        </div>
    )
}