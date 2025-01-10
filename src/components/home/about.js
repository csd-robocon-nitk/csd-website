"use client"

import { Parallax } from "react-scroll-parallax"

export default function AboutSection() {
	return (
		<section id="about" className="flex justify-end overflow-hidden">
			<div className="flex md:items-stretch items-center md:justify-center md:flex-row flex-col md:gap-0 gap-4 md:w-[calc(100vw+75px)] w-full px-4 pb-16 pt-32 shrink-0">
				<div className="flex flex-col items-center gap-24 shrink-0 md:translate-x-[75px]">
					<div className="flex xl:gap-6 gap-3 -mt-10 md:px-0 px-3">
						<Parallax speed={-5}>
							<img className="xl:w-[200px] w-[150px] rounded-lg" src="/assets/images/aboutus1.png" alt="" />
						</Parallax>
						<Parallax speed={2}>
							<img className="xl:w-[200px] w-[150px] rounded-lg" src="/assets/images/aboutus2.png" alt="" />
						</Parallax>
						<Parallax speed={-5}>
							<img className="xl:w-[200px] w-[150px] rounded-lg" src="/assets/images/aboutus3.jpg" alt="" />
						</Parallax>
					</div>
					<a href="/about" className="bg-[#0369a1] px-6 py-3 rounded-full text-white lg:text-xl text-lg font-bold md:block hidden">Learn More</a>
				</div>
				<div className="bg-sky-800 max-w-[550px] overflow-visible rounded-2xl md:pl-20 lg:pr-20 md:pr-12 xs:px-8 px-4 lg:py-12 xs:py-8 py-4">
					<img src="/assets/images/aboutheading.png" className="md:w-[138%] w-full max-w-sm md:-translate-x-[calc(27.5%+5px)] z-20 relative" alt="" />
					<p className="text-white lg:text-xl text-base xl:leading-normal leading-snug md:text-right text-justify">Center of System Design (A Center of Excellence at NITK Surathkal) envisages an Interdisciplinary approach and means for realization of successful engineering systems. It aims at facilitating and providing required environment for all key components of system design.</p>
				</div>
				<a href="/about" className="bg-[#0369a1] px-6 py-3 rounded-full text-white lg:text-xl text-lg font-bold md:hidden visible">Learn More</a>
			</div>
		</section>
	)
}
