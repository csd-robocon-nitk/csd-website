import FocusAreaCard from "./FocusAreaCard"

export default function FocusAreasSection () {
    return (
        <div 
			className="bg-about-section -translate-y-12 pt-20 px-4 pb-10 flex justify-center" 
			style={{ clipPath: "polygon(0 0, 15% 0, 18% 40px, 82% 40px, 85% 0, 100% 0, 100% 100%, 0% 100%)" }}
		>
			<div className="max-w-[1200px]">
				<h1 className="text-4xl font-bold mb-10">Key Focus Areas</h1>
				<div className="my-5 flex gap-5">
					<FocusAreaCard
						heading = "Interdisciplinary Approach"
						image = "/assets/images/focusarea1.png"
						larger={true}
						description={
							<ul className="list-disc">
								<li>System Modeling & Simulation</li>
								<li>System Dynamics, Control & Optimization</li>
								<li>Virtual and Physical Experimentation</li>
							</ul>
						}
					/>
					<FocusAreaCard
						heading = "Cutting-Edge Research"
						image = "/assets/images/focusarea2.png"
						description={
							<ul className="list-disc">
								<li>Data Acquisition</li>
								<li>Digital Signal Processing</li>
								<li>Real-Time Control Systems</li>
								{/* <li>Graphical Simulation</li>
								<li>Product development</li> */}
							</ul>
						}
					/>
					<FocusAreaCard
						heading = "Industry Collaboration"
						image = "/assets/images/focusarea3.png"
						description={
							<ul className="list-disc max-w-80">
								<li>Partnerships with Industries</li>
								<li>Collaboration with R&D Labs</li>
								<li>Engagement with Organizations to Address Multifaceted Challenges</li>
							</ul>
						}
					/>
							</div>
			</div>
        </div>
    )
}