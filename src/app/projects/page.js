import HightlightProject from "./HighlightProject"
import Projects from "./Projects"

export default async function ProjectsPage () {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          },
          cache: "no-cache",
        }
    )
    let projects = await res.json()

    return (
        <main className="min-h-screen mt-24 px-5">
            <div className="flex flex-col gap-5 md:flex-row h-[700px] md:h-96 max-w-[1200px] mx-auto">
                <HightlightProject 
                    title="Virtual Labs"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta."
                    bgImage="/assets/images/vlabs.png"
                    link="/vlabs"
                />
                <HightlightProject 
                    title="SEARCH"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta."
                    bgImage="/assets/images/search.png"
                    link="/vlabs"
                />
                <HightlightProject 
                    title="E-Mobility"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis quos placeat blanditiis nisi dicta."
                    bgImage="/assets/images/"
                    link="/vlabs"
                />
            </div>

            <Projects projects={projects.data} />
        </main>
    )
}