export default function AboutSection() {
	return (
		<div className="py-10">
			<div className="grid grid-cols-about-section max-w-screen-lg mx-auto gap-5">
				<div className="flex gap-3">
					<svg
						preserveAspectRatio="none"
						data-bbox="20 20 160 160"
						viewBox="20 20 160 160"
						height="30"
						width="30"
						xmlns="http://www.w3.org/2000/svg"
						data-type="shape"
						role="presentation"
						aria-hidden="true"
						aria-label=""
						className="mt-1"
					>
						<g>
							<path d="M100 20c-44.181 0-80 35.819-80 80s35.819 80 80 80 80-35.819 80-80-35.819-80-80-80zm0 120.48c-22.351 0-40.48-18.128-40.48-40.48 0-22.351 18.128-40.479 40.48-40.479 22.351 0 40.479 18.128 40.479 40.479S122.351 140.48 100 140.48z"></path>
						</g>
					</svg>
					<h1 className="text-4xl">About Us</h1>
				</div>
				<p className="text-justify leading-loose">
					Centre for System Design (A Centre of Excellence at NITK
					Surathkal) envisages an interdisciplinary approach and means
					for realization of successful engineering systems. Key
					components for this are system modeling & simulation,
					understanding system dynamics, system optimization, virtual
					and physical experimentation. The Centre aims at
					facilitating and providing required environment for all the
					key components of system design. Modern engineering problems
					are comprised of elements from all the traditional
					disciplines and these elements must be integrated to meet
					the overall design objectives. The Centre focuses on how to
					address and solve problems that transcend traditional
					boundaries.
				</p>
			</div>
			<br />
			<br />
			<div className="grid grid-cols-about-section max-w-screen-lg mx-auto gap-5">
				<div className="flex gap-3">
					<svg
						preserveAspectRatio="none"
						data-bbox="20 20 160 160"
						viewBox="20 20 160 160"
						height="30"
						width="30"
						xmlns="http://www.w3.org/2000/svg"
						data-type="shape"
						role="presentation"
						aria-hidden="true"
						aria-label=""
						className="mt-1"
					>
						<g>
							<path d="M100 20c-44.181 0-80 35.819-80 80s35.819 80 80 80 80-35.819 80-80-35.819-80-80-80zm0 120.48c-22.351 0-40.48-18.128-40.48-40.48 0-22.351 18.128-40.479 40.48-40.479 22.351 0 40.479 18.128 40.479 40.479S122.351 140.48 100 140.48z"></path>
						</g>
					</svg>
					<h1 className="text-4xl">Objectives</h1>
				</div>
				<ul className="text-justify leading-loose list-disc">
					<li>
						To provide facilities for experimental learning through
						system design, simulation and actual experimentation on
						physical systems to enhance the understanding of basic
						concepts in science, engineering and technology
					</li>
					<li>
						To provide cutting edge techniques for data acquisition,
						digital signal processing, real time control systems and
						graphical simulation
					</li>
					<li>
						To provide a platform for industry-academia
						collaboration on multidisciplinary research
					</li>
				</ul>
			</div>
		</div>
	)
}
