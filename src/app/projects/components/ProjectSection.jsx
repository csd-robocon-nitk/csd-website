"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function ProjectSection({ title, projects, viewAllLink }) {
  return (
    <section className="py-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
          {viewAllLink}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </motion.div>
      </motion.div>
    </div>
  </section>

   
  );
}

export default ProjectSection;