"use client"

import Splash from "@/components/splash"
import FacilityCard from "./FacilityCard"
import { LayoutGroup } from "framer-motion"
import { useState } from "react"
import { motion } from "framer-motion"
import { useMotionValue } from "framer-motion"
import { useAnimate } from "framer-motion"

// contents
import ThreeDPrinting from "./contents/ThreeDPrinting"
import Lidar from "./contents/Lidar"
import Uav from "./contents/Uav"

export default function FacilitiesPage() {
	let [ open, setOpen ] = useState(-1)

	let heightMotion = useMotionValue(0)
	let [ _, animate ] = useAnimate()

	async function setHeight (height) {
		await animate(heightMotion, height, { duration: 0 })
		await animate(heightMotion, 0, { duration: 0.5 })
	}

	function toggleOpen (e, i) {
		if (open == i) setOpen(-1)
		else setOpen(i)

		e.stopPropagation()
	}

	function handleClickOutside () {
		setOpen(-1)
	}

	return (
		<div className="pt-16" onClick={handleClickOutside}>
			<Splash
				title="Facilities at CSD"
				subtitle="Home to cutting-edge technologies and equipment to kickstart innovation."
			/>
			<div className="max-w-[1200px] mx-auto py-10 flex flex-wrap gap-2 overflow-hidden relative">
				<LayoutGroup>
					<FacilityCard
						setContentHeight={setHeight}
						open={open == 0}
						toggleOpen={e => toggleOpen(e, 0)}
						title="3D Printing and Prototyping"
						description="CSD is equipped with state-of-the-art 3D printing technologies that facilitate rapid prototyping and product development."
						imageSrc="/facilities/3d-printing-2.jpg"
					>
						<ThreeDPrinting />
					</FacilityCard>
					<FacilityCard
						setContentHeight={setHeight}
						open={open == 1}
						toggleOpen={e => toggleOpen(e, 1)}
						title="LIDAR and Photogrammetry"
						description="The centre boasts terrestrial and aerial LiDAR systems to facilitate high-resolution 3D mapping and environmental modeling."
						imageSrc="/facilities/photogammetry.png"
					>
						<Lidar />
					</FacilityCard>
					<FacilityCard
						setContentHeight={setHeight}
						open={open == 2}
						toggleOpen={e => toggleOpen(e, 2)}
						title="UAV and Drone Fleet"
						description="Our UAV fleet facilitates aerial surveying, environmental monitoring, and advanced photogrammetry projects."
						imageSrc="/facilities/drone.webp"
					>
						<Uav />
					</FacilityCard>
					<FacilityCard
						setContentHeight={setHeight}
						open={open == 3}
						toggleOpen={e => toggleOpen(e, 3)}
						title="Electric Mobility and Simulation"
						description="The centre supports electric mobility projects with advanced simulation and modeling platforms."
						imageSrc="/facilities/e-mobility.jpg"
					>

					</FacilityCard>
					<FacilityCard
						setContentHeight={setHeight}
						open={open == 4}
						toggleOpen={e => toggleOpen(e, 4)}
						title="Noise, Vibration, and Data Acquisition (DAQ)"
						description="CSD is equipped with advanced sensors and DAQ platforms for dynamic system analysis."
						imageSrc="/facilities/daq-2.jpeg"
					>

					</FacilityCard>
					<FacilityCard
						setContentHeight={setHeight}
						open={open == 5}
						toggleOpen={e => toggleOpen(e, 5)}
						title="NI ELVIS II - Embedded Systems and Instrumentation"
						description="A multifunctional engineering workstation that integrates data acquisition, prototyping, and instrumentation tools."
						imageSrc="/facilities/elvis-3.png"
					>

					</FacilityCard>
				</LayoutGroup>
				<motion.div 
					style={{ height: heightMotion }}
				/>
			</div>
		</div>
	)
}
