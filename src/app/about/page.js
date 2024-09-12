"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-effect");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          element.classList.add("active");
        }
      });

      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed");
        const yPos = -((window.scrollY * speed) / 100);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* <section className="bg-shark-950 text-white relative text-center pt-32 py-24 mb-4 scroll-effect w-full px-24">
        <div
          className="parallax absolute inset-0 z-0 opacity-70"
          data-speed="30"
        >
          <Image
            src="/assets/images/454631101_891828776323719_4302866775297206512_n.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold tracking-wide">
            Welcome to CSD
          </h1>
          <h2 className="text-3xl mt-4 text-w-900">
            Innovation Meets Collaboration at NITK Surathkal
          </h2>
        </div>
      </section> */}

      <section className="relative mt-32">
        <Image
          src="/assets/images/454631101_891828776323719_4302866775297206512_n.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded"
        />
      </section>

      {/* Mission & Vision Section */}
      <section className="flex justify-between items-start text-center scroll-effect px-24">
        <h2 className="text-5xl w-1/5 font-bold mb-4 sticky top-40">
          Our Mission & Vision
        </h2>
        <div className="w-3/5 flex flex-wrap items-center h-full justify-center">
          <div className="flex flex-col p-10 bg-gray-200 m-4 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-6">Mission Statement</h3>
            <p className="text-lg">
              To foster a transdisciplinary ecosystem that bridges the gap
              between academia and industry, driving forward research and
              development across multiple domains.
            </p>
          </div>
          <div className="flex flex-col p-10 bg-gray-200 m-4 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-6">Vision Statement</h3>
            <p className="text-lg">
              Driving transformative innovation through transdisciplinary
              research and collaborative expertise, addressing real-world
              challenges to create a sustainable and technologically advanced
              future.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex justify-between items-start min-h-screen text-center scroll-effect px-24">
        <div className="w-1/5 sticky top-40">
          <h2 className="text-5xl font-bold mb-4">About CSD</h2>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-8 items-center mt-8 min-h-screen ">
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
        </div>
      </section>

      {/* Objectives Section */}
      <section className="h-screen flex justify-between items-start text-center bg-white scroll-effect px-24">
        <h2 className="w-1/5 text-5xl font-bold mb-4 sticky top-40">
          Our Objectives
        </h2>
        <ul className="w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className="bg-gray-200 p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <p className="text-xl">{objective}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Impact Section */}
      <section className="flex h-screen justify-between items-start text-center scroll-effect px-20 py-5">
        <h2 className="w-1/5 text-5xl font-bold mb-4 sticky top-40">
          Our Impact by the Numbers
        </h2>
        <div className="w-3/5 flex flex-col items-center">
          <div className="flex items-stretch flex-wrap justify-center">
            {[
              { number: "50+", label: "Industry Collaborations" },
              { number: "10+", label: "Research Publications" },
              { number: "₹60+ Crore", label: "in Research Funding" },
              { number: "10000+", label: "Students Trained" },
              { number: "300+", label: "Internships" },
            ].map((impact, index) => (
              <div
                key={index}
                className="bg-gray-200 p-12 m-4 rounded-lg shadow-xl"
              >
                <h3 className="text-4xl font-extrabold">{impact.number}</h3>
                <p className="text-lg">{impact.label}</p>
              </div>
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
      <section className="flex min-h-screen justify-between items-start text-center bg-white scroll-effect px-24">
        <h2 className="w-1/5 text-5xl font-bold mb-4 sticky top-40">
          What We Do
        </h2>
        <div className="w-3/5">
          <div className="flex flex-wrap justify-center">
            {[
              {
                title: "Transdisciplinary Research",
                description:
                  "Covering various fields like smart agriculture, forestry, conservation, and environmental monitoring.",
                bgColor: "bg-gray-200",
              },
              {
                title: "Industry-Academia Collaboration",
                description:
                  "Details on partnerships with industries for multidisciplinary research and development.",
                bgColor: "bg-gray-200",
              },
              {
                title: "Experiential Learning",
                description:
                  "Emphasis on hands-on learning with system design, simulation, and physical experimentation.",
                bgColor: "bg-gray-200",
              },
              {
                title: "Advanced Technological Support",
                description:
                  "Description of cutting-edge techniques and tools available at CSD.",
                bgColor: "bg-gray-200",
              },
              {
                title: "Environmental and Conservation Efforts",
                description:
                  "Projects on shoreline analysis, river studies, forestry conservation, etc.",
                bgColor: "bg-gray-200",
              },
              {
                title: "Emergency Communication and Product Design",
                description:
                  "Innovation in emergency communication, energy harvesting, and biomedical applications.",
                bgColor: "bg-gray-200",
              },
              {
                title: "Internships and Student Motivation",
                description:
                  "Internship programs and student engagement in real-world projects.",
                bgColor: "bg-gray-200",
              },
              {
                title: "Educational Programs",
                description:
                  "Workshops, seminars, and training sessions for skill development.",
                bgColor: "bg-gray-200",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className={`p-12 m-4 rounded-lg shadow-xl flex-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${activity.bgColor}`}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {activity.title}
                </h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center mt-8">
          <Image
            src="/assets/images/453878205_888204150019515_171988846503097887_n.jpg"
            alt="What We Do Image"
            width={500}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div> */}
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="flex min-h-screen justify-between items-start pb-8 p-12 text-center scroll-effect px-24">
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
      </section>
    </div>
  );
};

export default AboutUs;
