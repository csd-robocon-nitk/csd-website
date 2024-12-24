import { motion } from "framer-motion"

export default function MouseScrollLogo() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.4 }}
			className="flex justify-center items-center"
		>
			<motion.div
				className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start"
				animate={{ y: [0, 5, 0] }}
				transition={{ duration: 1, repeat: Infinity }}
			>
				<motion.div
					className="w-1 h-2 bg-white rounded-full mt-2"
					animate={{ y: [10, 0, 10] }}
					transition={{ duration: 1, repeat: Infinity }}
				/>
			</motion.div>
		</motion.div>
	)
}
