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
        <div className="flex overflow-hidden py-2 px-2 gap-5 max-w-[1100px] mx-auto group">
            <div
                className="flex gap-5 animate-infiniteScroll group-hover:[animation-play-state:paused]"
                style={{"--animation-duration": `${data.length*3}s`}}
            >
                {researchAreas}
            </div>
            <div
                className="flex gap-5 animate-infiniteScroll group-hover:[animation-play-state:paused]"
                style={{"--animation-duration": `${data.length*3}s`}}
            >
                {researchAreas}
            </div>
        </div>
    )
}