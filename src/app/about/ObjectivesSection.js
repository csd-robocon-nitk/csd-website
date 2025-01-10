import { Layers } from "lucide-react"
import objectives from "./objectives_data"
import ObjectivesCard from "./ObjectivesCard"

export default function ObjectivesSection() {
	return (
		<section
			id="objectives"
			className="flex flex-col gap-8 justify-between items-start text-center bg-sky-100 scroll-effect pt-20 pb-12"
			style={{ clipPath: "polygon(0 0, 15% 0, 18% 40px, 82% 40px, 85% 0, 100% 0, 100% 100%, 0% 100%)" }}
		>
			<h2 className="text-5xl font-bold w-full text-sky-800">Our Objectives</h2>
			<ul className="flex flex-wrap justify-center items-stretch max-w-[1200px] mx-auto gap-5 w-full">
				{
                    objectives.map(({ title, description, Icon }, i) => (
                        <div className="xl:w-[calc((100%-60px)/4)] md:w-[calc((100%-60px)/3)] sm:w-[calc((100%-60px)/2)] w-[calc((100%-60px)/1)]" key={i}>
                            <ObjectivesCard
                                title={title}
                                description={description}
                                Logo={Icon}
								index={i}
                            />
                        </div>
                    ))
                }
			</ul>
		</section>
	)
}
