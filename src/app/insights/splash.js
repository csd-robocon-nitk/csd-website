"use client"
import React from "react";
import { motion } from "framer-motion";

const MouseScrollLogo = () => {
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
  );
};

function Splash() {
  return (
    <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950 to-sky-900">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 text-shadow-lg"
        >
          Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl mb-8 text-shadow-md"
        >
          A look into our News and Events
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MouseScrollLogo />
        </motion.div>
      </div>
    </section>
  );
}

export default Splash;
