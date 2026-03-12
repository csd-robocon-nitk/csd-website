"use client"

import { Parallax } from "react-scroll-parallax"
import Image from "next/image"

export default function AboutSection({ images }) {
	

return (
		<section id="about" className="flex justify-end overflow-hidden">
			<div className="flex md:items-stretch items-center md:justify-center md:flex-row flex-col md:gap-0 gap-4 md:w-[calc(100vw+75px)] w-full px-4 pb-16 pt-32 shrink-0">
				<div className="flex flex-col items-center gap-24 shrink-0 md:translate-x-[75px]">
					{/* {<div className="flex xl:gap-6 gap-3 -mt-10 md:px-0 px-3">
						<Parallax speed={-5}>
							<Image className="xl:w-[200px] w-[150px] rounded-lg" src={process.env.NEXT_PUBLIC_STRAPI_API_URL + images?.left.data.attributes.url} width={images?.left.data.attributes.width}
								height={images?.left.data.attributes.height} alt="" />
						</Parallax>
						<Parallax speed={2}>
							<Image className="xl:w-[200px] w-[150px] rounded-lg" src={process.env.NEXT_PUBLIC_STRAPI_API_URL + images?.centre.data.attributes.url} width={images.centre.data.attributes.width}
								height={images.centre.data.attributes.height}  alt="" />
						</Parallax>
						<Parallax speed={-5}>
							<Image className="xl:w-[200px] w-[150px] rounded-lg" src={process.env.NEXT_PUBLIC_STRAPI_API_URL + images.right.data.attributes.url} width={images.right.data.attributes.width}
								height={images.right.data.attributes.height} alt="" />
						</Parallax>
					</div> } */}
					<a href="/about" className="bg-[#0369a1] px-6 py-3 rounded-full text-white lg:text-xl text-lg font-bold md:block hidden">Learn More</a>
				</div>
				<div className="bg-sky-800 max-w-[550px] overflow-visible rounded-2xl md:pl-20 lg:pr-20 md:pr-12 xs:px-8 px-4 lg:py-12 xs:py-8 py-4">
					<img src="/assets/images/aboutheading.png" className="md:w-[138%] w-full max-w-none md:-translate-x-[calc(27.5%+5px)] z-20 relative" alt="" />
					<p className="text-white lg:text-xl text-base xl:leading-normal leading-snug md:text-right text-justify">{images.about_section_text}</p>
				</div>
				<a href="/about" className="bg-[#0369a1] px-6 py-3 rounded-full text-white lg:text-xl text-lg font-bold md:hidden visible">Learn More</a>
			</div>
		</section>
	)
}
