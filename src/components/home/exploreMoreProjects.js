"use client"
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function ExploreMoreProjects() {
  return (
    <div className="py-10 bg-sky-100 w-full">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/projects"
            target="_blank"
            className="bg-sky-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
          >
            Explore All Projects <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ExploreMoreProjects;
