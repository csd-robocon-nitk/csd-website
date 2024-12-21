"use client";

import { motion } from "framer-motion";
import HoverBottomNav from "../../components/hoverBottomNav";
import MouseScrollLogo from "@/components/MouseScrollLogo"

const AboutUs = () => {

  const helper = [
      { href: "mission", label: "Mission" },
      { href: "objectives", label: "Objectives" },
      { href: "impact", label: "Impact" },
      { href: "whatwedo", label: "What We Do" },
    ];


  return (
    <div className="flex flex-col overflow-x-hidden pt-20">
      <HoverBottomNav helper={helper}/>
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950 to-sky-900">
        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 text-shadow-lg"
          >
            About CSD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8 text-shadow-md"
          >
            Where Innovation Meets Collaboration, and Cutting-Edge Research
            Drives Impactful Solutions.
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

      {/* Mission & Vision Section */}
      <section id="mission" className="flex justify-between items-start text-center scroll-effect px-24 py-12">
        <motion.div className="div w-full flex items-start justify-center">
          <motion.div className="div w-1/2 flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-4">Mission</h2>
            <p className="text-xl px-6 text-justify">
              To foster a transdisciplinary ecosystem that bridges the gap
              between academia and industry, driving forward research and
              development across multiple domains. We are committed to creating
              an environment where innovative ideas are nurtured and transformed
              into tangible solutions that address real-world challenges.
            </p>
          </motion.div>
          <motion.div className="div w-1/2 items-center flex flex-col">
            <h2 className="text-5xl font-bold mb-4">Vision</h2>
            <p className="text-xl px-6 text-justify">
              Driving transformative innovation through transdisciplinary
              research and collaborative expertise, addressing real-world
              challenges to create a sustainable and technologically advanced
              future.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Us Section */}
      {/* <section className="flex justify-between items-start min-h-screen text-center scroll-effect px-24">
        <div className="w-1/5 sticky top-40">
          <h2 className="text-5xl font-bold mb-4">About CSD</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-3/5 flex flex-col justify-center gap-8 items-center mt-8 min-h-screen "
        >
          <p className="max-w-4xl mx-auto text-xl">
            A detailed introduction about CSD, highlighting its focus on system
            modeling, simulation, system dynamics, control, and optimization.
            This section emphasizes the center's commitment to innovation,
            collaboration, and impactful research.
          </p>
          <img
            src="/assets/images/452915252_883818157124781_4143011533915238862_n.jpg"
            alt="About Us Image"
            className="rounded-lg shadow-xl w-1/2"
          />
        </motion.div>
      </section> */}

      {/* Objectives Section */}
      <section id="objectives" className="flex flex-col gap-8 justify-between items-start text-center bg-white scroll-effect px-24 py-12">
        <h2 className="text-5xl font-bold w-full">Our Objectives</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {[
            "Fostering Transdisciplinary Collaboration",
            "Industry-Academia Partnerships",
            "Experiential Learning",
            "Advanced Technical Support",
            "Innovative Research & Development",
            "Promoting Multidisciplinary Research",
            "Environmental and Conservation Projects",
            "Product Innovation",
          ].map((objective, index) => (
            <li
              key={index}
              className="bg-sky-200 p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl"
              >
                {objective}
              </motion.p>
            </li>
          ))}
        </ul>
      </section>

      {/* Impact Section */}
      <section id="impact" className="flex flex-col gap-8 justify-between items-center text-center scroll-effect px-20 py-5">
        <h2 className="text-5xl font-bold">Our Impact by the Numbers</h2>
        <div className="flex flex-col items-center">
          <div className="flex items-stretch flex-wrap justify-center">
            {[
              { number: "50+", label: "Industry Collaborations" },
              { number: "10+", label: "Research Publications" },
              { number: "₹60+ Crore", label: "in Research Funding" },
              { number: "10000+", label: "Students Trained" },
              { number: "300+", label: "Internships" },
            ].map((impact, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={index}
                className="bg-sky-800 text-white p-12 m-4 rounded-lg shadow-xl"
              >
                <h3 className="text-4xl font-extrabold">{impact.number}</h3>
                <p className="text-lg">{impact.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8 w-1/2">
            <img
              src="/assets/images/453164207_884558033717460_5676383110198238741_n.jpg"
              alt="Impact Image"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="whatwedo" className="flex flex-col justify-between items-center text-center bg-white scroll-effect px-24">
        <h2 className="text-5xl font-bold mb-4 sticky top-40">What We Do</h2>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
            {[
              {
                title: "Transdisciplinary Research",
                description:
                  "Covering various fields like smart agriculture, forestry, conservation, and environmental monitoring.",
                bgColor: "bg-sky-200",
              },
              {
                title: "Industry-Academia Collaboration",
                description:
                  "Details on partnerships with industries for multidisciplinary research and development.",
                bgColor: "bg-sky-200",
              },
              {
                title: "Experiential Learning",
                description:
                  "Emphasis on hands-on learning with system design, simulation, and physical experimentation.",
                bgColor: "bg-sky-200",
              },
              {
                title: "Advanced Technological Support",
                description:
                  "Description of cutting-edge techniques and tools available at CSD.",
                bgColor: "bg-sky-200",
              },
              {
                title: "Environmental and Conservation Efforts",
                description:
                  "Projects on shoreline analysis, river studies, forestry conservation, etc.",
                bgColor: "bg-sky-200",
              },
              {
                title: "Emergency Communication and Product Design",
                description:
                  "Innovation in emergency communication, energy harvesting, and biomedical applications.",
                bgColor: "bg-sky-200",
              },
              {
                title: "Internships and Student Motivation",
                description:
                  "Internship programs and student engagement in real-world projects.",
                bgColor: "bg-sky-200",
              },
              {
                title: "Educational Programs",
                description:
                  "Workshops, seminars, and training sessions for skill development.",
                bgColor: "bg-sky-200",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className={`flex flex-col justify-center items-center p-12 m-4 rounded-lg shadow-xl flex-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${activity.bgColor}`}
              >
                <motion.h3
                  variants={{
                    rest: { height: "auto", opacity: 1, scale: 1},
                    hover: { height: 0, opacity: 0, scale: 0},
                  }}
                  className="text-2xl font-semibold"
                >
                  {activity.title}
                </motion.h3>
                <motion.p
                  variants={{
                    rest: { height: 0, opacity: 0, scale: 0},
                    hover: { height: "auto", opacity: 1, scale: 1},
                  }}
                  className="text-xl"
                >
                  {activity.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      {/* <section className="flex min-h-screen justify-between items-start pb-8 p-12 text-center scroll-effect px-24">
        <h2 className="w-1/5 text-5xl font-bold mb-4 sticky top-40">
          Our Expertise
        </h2>
        <div className="w-3/5 flex flex-col min-h-screen justify-center">
          <p className="max-w-4xl mx-auto text-xl mb-12">
            Overview of the team's expertise in various domains like civil,
            mechanical, electrical, electronics, computer systems, and more.
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src="/assets/images/276269048_5235704333158998_8475031788882237846_n.jpg"
              alt="Team Photo"
              width={500}
              height={300}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
