export default function AboutSection() {
	return (
		<div className="bg-gradient-to-r from-cobalt-200 to-shark-200 z-999 relative text-black flex flex-col justify-center lg:px-60 px-10 items-center py-10 gap-2">
			<div className="flex justify-evenly items-center w-full gap-4 border-white/30 bg-shark-100/30 backdrop-blur-2xl border-2 rounded-t-lg rounded-b-sm shadow-sm px-10 py-5">
					<div className="flex flex-col text-xl text-wrap text-justify md:w-3/4 w-full rounded-md gap-4">
						<h1 className="text-4xl md:text-start text-center font-extrabold">About Us</h1>
						<p className="md:text-2xl text-md text-wrap text-justify">
						Centre for System Design (A Centre of Excellence at NITK Surathkal) envisages an interdisciplinary approach and means for realization of successful engineering systems. Key components for this are system modeling & simulation, understanding system dynamics, system optimization, virtual and physical experimentation. The Centre aims at facilitating and providing required environment for all the key components of system design. Modern engineering problems are comprised of elements from all the traditional disciplines and these elements must be integrated to meet the overall design objectives. The Centre focuses on how to address and solve problems that transcend traditional boundaries.
						</p>
					</div>
					<div className="md:w-1/4 md:overflow-hidden md:rounded-xl md:block hidden">
						<video muted autoPlay loop className="scale-125">
							<source src="/about.mp4"/>
						</video>
					</div>
			</div>
			<div className="flex flex-col justify-evenly items-center w-full gap-4 px-10 py-5 border-white/30 bg-shark-100/30 backdrop-blur-2xl border-2 rounded-b-lg rounded-t-sm shadow-sm">
				<div className="flex items-center justify-between gap-8">
					<div className="md:w-1/4 md:overflow-hidden md:rounded-md md:my-10 md:block hidden">
						<video muted autoPlay loop>
							<source src="/objectives.mp4"/>
						</video>
					</div>
					<div className="py-0 my-0 flex flex-col gap-2 md:w-3/4 w-full">
						<h1 className="text-4xl font-extrabold md:text-start text-center">Objectives</h1>
						<ul className="md:text-2xl text-md text-wrap text-justify list-inside list-disc flex flex-col gap-4">
							<li>To provide facilities for experimental learning through system design, simulation and actual experimentation on physical systems to enhance the understanding of basic concepts in science, engineering and technology</li>
							<li>To provide cutting edge techniques for data acquisition, digital signal processing, real time control systems and graphical simulation</li>
							<li>To provide a platform for industry-academia collaboration on multidisciplinary research</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	)
}
