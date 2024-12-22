"use client"

import { Parallax } from "react-scroll-parallax"

export default function AboutSection() {
	return (
		<section id="about" className="flex items-end justify-center -translate-x-[37px] pb-16 pt-24">
			<div className="flex flex-col items-center gap-24 shrink-0 translate-x-[75px]">
				<div className="flex gap-6">
					<Parallax speed={-5}>
						<img className="w-[200px] h-[320px] rounded-lg" src="/assets/images/aboutus1.png" alt="" />
					</Parallax>

					<Parallax speed={2}>
						<img className="w-[200px] h-[320px] rounded-lg" src="/assets/images/aboutus2.png" alt="" />
					</Parallax>

					<Parallax speed={-5}>
						<img className="w-[200px] h-[320px] rounded-lg" src="/assets/images/aboutus3.jpg" alt="" />
					</Parallax>
				</div>
				<a href="/about" className="bg-[#0369a1] px-6 py-3 rounded-full text-white text-xl font-bold">Learn More</a>
			</div>
			<div className="bg-sky-800 max-w-[550px] overflow-visible rounded-2xl px-20 py-12">
				<img src="/assets/images/aboutheading.png" className="w-[138%] max-w-none -translate-x-[calc(27.5%+5px)] z-20 relative" alt="" />
				<p className="text-white text-xl text-right">Center of System Design (A Center of Excellence at NITK Surathkal) envisages an Interdisciplinary approach and means for realization of successful engineering systems. It aims at facilitating and providing required environment for all key components of system design.</p>
			</div>
		</section>
	)
}
