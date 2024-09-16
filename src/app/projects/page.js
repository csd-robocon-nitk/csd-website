"use client"

import HightlightProject from "./HighlightProject"

export default function ProjectsPage () {
    return (
        <main className="min-h-screen mt-24 px-5">
            <div className="flex flex-col md:flex-row h-[700px] md:h-96 max-w-[1200px] mx-auto rounded overflow-hidden">
                <HightlightProject 
                    title="Virtual Labs"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta."
                    bgImage="/assets/images/vlabs.png"
                    link="/vlabs"
                />
                <HightlightProject 
                    title="SEARCH"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta."
                    bgImage="/assets/images/search.png"
                    link="/vlabs"
                />
                <HightlightProject 
                    title="E-Mobility"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta."
                    bgImage="/assets/images/"
                    link="/vlabs"
                />
            </div>
        </main>
    )
}