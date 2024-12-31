"use client"

import { motion } from "framer-motion";
import MouseScrollLogo from "./MouseScrollLogo"


function Splash({title, subtitle}) {
  return (
    <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950 to-sky-900">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 text-shadow-lg"
        >{title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl mb-8 text-shadow-md max-w-[800px]"
        >
         {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MouseScrollLogo />
        </motion.div>
      </div>
    </div>
  );
}

export default Splash;
