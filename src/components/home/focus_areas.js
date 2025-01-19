import FocusAreaCard from "./FocusAreaCard"

export default function FocusAreasSection () {
	let ul_className = "list-disc flex flex-col gap-2 text-sm"
    return (
        <section 
			className="bg-sky-200 pt-20 px-4 pb-10 flex justify-center" 
			style={{ clipPath: "polygon(0 0, 15% 0, 18% 40px, 82% 40px, 85% 0, 100% 0, 100% 100%, 0% 100%)" }}
			id="focusareas"
		>
			<div className="max-w-[1000px]">
				<h1 className="text-4xl font-bold mb-10">Key Focus Areas</h1>
				<div className="my-5 flex flex-wrap items-stretch justify-center gap-5">
					<FocusAreaCard
						heading = "Interdisciplinary Approach"
						image = "/assets/images/focusarea1.png"
						larger={true}
						description={
							<ul className={ul_className}>
								<li>System Modeling & Simulation</li>
								<li>System Dynamics, Control & Optimization</li>
								<li>Virtual and Physical Experimentation</li>
							</ul>
						}
					/>
					<FocusAreaCard
						heading = "Cutting-Edge Research"
						image = "/assets/images/focusarea2.png"
						larger={true}
						description={
							<ul className={ul_className}>
								<li>Data Acquisition</li>
								<li>Digital Signal Processing</li>
								<li>Real-Time Control Systems</li>
								<li>Graphical Simulation</li>
								<li>Product development</li>
							</ul>
						}
					/>
					<FocusAreaCard
						heading = "Industry Collaboration"
						image = "/assets/images/focusarea3.png"
						description={
							<ul className={ul_className}>
								<li>Partnerships with Industries</li>
								<li>Collaboration with R&D Labs</li>
								<li>Engagement with Organizations to Address Multifaceted Challenges</li>
							</ul>
						}
					/>
				</div>
			</div>
        </section>
    )
}