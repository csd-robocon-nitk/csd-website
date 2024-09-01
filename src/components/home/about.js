import Image from 'next/image'
import Drone from '../../../public/assets/images/drone.jpg'

export default function AboutSection() {
	return (
		<div className="bg-[#fbfbfb] pt-0.5 relative pb-[400px] overflow-hidden">
			<div className="w-[500px] ml-40 mt-20">
				<h1 className="text-4xl font-bold text-gray-950 mb-6">
					About Us
				</h1>
				<p className="md:text-xl text-lg text-gray-600 text-justify">
					Centre for System Design (A Centre of Excellence at NITK
					Surathkal) envisages an interdisciplinary approach and
					means for realization of successful engineering systems.
					It aims at facilitating and providing required
					environment for all the key components of system design.
				</p>
			</div>
			<img className="w-[800px] opacity-80 rounded-l-lg absolute -right-20 top-20" src="/assets/images/aboutus1.png" alt="" />
			<img className="w-[730px] opacity-80 rounded-lg absolute left-16 top-[370px]" src="/assets/images/aboutus2.png" alt="" />
			<img className="w-[700px] opacity-80 rounded-lg absolute left-[820px] top-[450px]" src="/assets/images/aboutus3.png" alt="" />
		</div>
	)
}
