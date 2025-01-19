"use client";

import CountUp from "@/components/CountUp";
import { motion } from "framer-motion";
import HoverBottomNav from "../../components/hoverBottomNav";
import WhatwedoSection from "./WhatwedoSection";
import Splash from "@/components/splash";
import ObjectivesSection from "./ObjectivesSection";
import ImpactChart from "./AreaChart"

const AboutUs = () => {
  const helper = [
    { href: "mission", label: "Mission" },
    { href: "objectives", label: "Objectives" },
    { href: "impact", label: "Impact" },
    { href: "whatwedo", label: "What We Do" },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden pt-16 bg-white">
      <HoverBottomNav helper={helper} />
      <Splash
        title="About CSD"
        subtitle="Where Innovation Meets Collaboration, and Cutting-Edge Research Drives Impactful Solutions."
      />
      {/* Mission & Vision Section */}
      <section
        id="mission"
        className="flex justify-between items-start text-center scroll-effect px-24 py-12 bg-white"
      >
        <motion.div className="div w-full flex flex-col lg:flex-row gap-2 lg:items-stretch items-center justify-center">
          <motion.div className="div lg:w-1/2 w-full flex flex-col">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4">Mission</h2>
            <p className="sm:text-xl text-sm sm:px-6 text-justify">
              To foster a transdisciplinary ecosystem that bridges the gap
              between academia and industry, driving forward research and
              development across multiple domains. We are committed to creating
              an environment where innovative ideas are nurtured and transformed
              into tangible solutions that address real-world challenges.
            </p>
          </motion.div>
          <motion.div className="div lg:w-1/2 w-full items-center flex flex-col rounded sm:p-2">
            <h2 className="sm:text-5xl text-2xl font-bold mb-4">Vision</h2>
            <p className="sm:text-xl text-sm sm:px-6 text-justify">
              Driving transformative innovation through transdisciplinary
              research and collaborative expertise, addressing real-world
              challenges to create a sustainable and technologically advanced
              future.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Objectives Section */}
      <ObjectivesSection />

      {/* Impact Section */}
      <section
        id="impact"
        className="flex flex-col gap-8 justify-between items-center text-center scroll-effect px-5 pb-5 pt-10"
      >
        <h2 className="text-5xl font-bold">Our Impact by the Numbers</h2>
        <div className="flex items-end gap-5 max-w-[1100px]">
          <div className="flex flex-col items-center">
            <div className="flex items-stretch flex-wrap justify-center gap-4 mx-auto">
              {[
                { number: "50+", label: "Industry Collaborations" },
                { number: "40+", label: "Research Publications" },
                { number: "60", label: "Crore Rupees in Research Funding" },
                { number: "10000+", label: "Students Trained" },
                { number: "300+", label: "Internships" },
              ].map((impact, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={index}
                  className="shadow-sm shadow-sky-200/70 bg-sky-50/50 text-sky-800 p-5 rounded-lg flex-grow"
                >
                  <h3 className="text-3xl font-extrabold">
                    <CountUp
                      from={0}
                      to={impact.number}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />+
                  </h3>
                  <p className="">{impact.label}</p>
                </motion.div>
              ))}
            </div>
            </div>
            <ImpactChart />
          </div>
          <div className="justify-center mt-8 gap-5 grid grid-cols-3 max-w-[1100px]">
            <img
              src="/assets/images/453164207_884558033717460_5676383110198238741_n.jpg"
              alt="Impact Image"
              className="rounded-lg"
            />
            <img
              src="/assets/images/452915252_883818157124781_4143011533915238862_n.jpg"
              alt="Impact Image"
              className="rounded-lg"
            />
            <img
              src="/assets/images/454631101_891828776323719_4302866775297206512_n.jpg"
              alt="Impact Image"
              className="rounded-lg"
            />
          </div>
      </section>

      {/* What We Do Section */}
      <WhatwedoSection />
    </div>
  );
};

export default AboutUs;
