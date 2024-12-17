"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import TestimonialCard from "./TestimonialCard"
import useMeasure from "react-use-measure"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useState } from "react"

export default function TetsimonialsContent({ testimonials }) {
    let [ref, { width }] = useMeasure()
	let [ cardWidth, setCardWidth ] = useState(0)

	const xTranslation = useMotionValue(0)

	function move (direction) {
		if (!width) return

		let currentValue = xTranslation.get() % width
		if (direction == -1) currentValue -= width

		animate(xTranslation, [currentValue, currentValue + -direction*(cardWidth+16)], {
		  ease: "easeInOut",
		  duration: 0.7,
		  repeat: 0,
		});
	}

	return (
		<div className="relative">
			<div 
				className="absolute left-2 top-1/2 -translate-y-1/2 border-4 border-sky-800 text-sky-800 p-0.5 rounded-full z-50 flex cursor-pointer"
				onClick={() => move(-1)}
			>
				<FaAngleLeft size={25} className="-translate-x-px" />
			</div>
			<div className="flex flex-shrink-0 mx-12 overflow-hidden py-5">
				{
					[0, 1, 2].map(i => (
						<motion.div 
							key={i} 
							ref={i == 0 ? ref : null} 
							className="flex gap-4 px-2 flex-shrink-0"
							style={{ x: xTranslation }}
						>
							{testimonials.map((t, i2) => (
								<TestimonialCard 
									key={i2} 
									testimonial={t} 
									setCardWidth={i==0 && i2==0 ? setCardWidth : null} 
								/>
							))}
						</motion.div>
					))
				}
			</div>
			<div 
				className="absolute right-2 top-1/2 -translate-y-1/2 border-4 border-sky-800 text-sky-800 p-0.5 rounded-full z-50 flex cursor-pointer"
				onClick={() => move(1)}
			>
				<FaAngleRight size={25} className="translate-x-px" />
			</div>
		</div>
	)
}
