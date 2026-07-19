import { motion } from "framer-motion"

export default function ObjectivesCard ({ Logo, title, description, logo_size = 55, logo_color, index }) {
    return (
        <motion.div 
            className="w-full h-full p-5 shadow-gray-300 bg-white shadow-md rounded-md flex flex-col justify-center"
            initial={{ x: "10px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index*0.2, duration: 0.5 }}
        >
            <h2 className="text-lg mb-3 font-medium text-center text-sky-800">{title}</h2>
            <div className="flex flex-col items-center gap-5">
                <Logo className="flex-shrink-0 text-sky-800" size={logo_size} color={logo_color} />
                <div>
                    <p className="text-sm text-black">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}