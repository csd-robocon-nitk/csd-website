"use client";
import Waves from "./waves";
import { motion } from "framer-motion";
import MouseScrollLogo from "./MouseScrollLogo";

function Splash({ title, subtitle }) {
  return (
    <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950 to-sky-900 overflow-x-hidden">
      <Waves
        lineColor="#708090"
        backgroundColor="#075985"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-6xl sm:text-3xl text-2xl font-bold mb-6 text-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:text-2xl text-xl mb-8 text-shadow-md max-w-[800px]"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MouseScrollLogo className="hidden xl:block" />
        </motion.div>
      </div>
    </div>
  );
}

export default Splash;
