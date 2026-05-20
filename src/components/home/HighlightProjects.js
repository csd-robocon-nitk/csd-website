"use client";

import React from "react";

function HighlightProjects() {
  return (
    <section
      className="flex justify-center items-center flex-col pt-8 py-22 px-6"
      id="projects"
    >
      <h1 className="relative top-[2px] text-4xl md:text-4xl font-bold pb-12 text-center">
        Highlight Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1400px] text-white">
        
        <div className="relative rounded-2xl overflow-hidden h-[500px] group shadow-xl">
          <img
            src="assets/images/virtualLabs.jpg"
            alt="Virtual Labs"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
            <h1 className="text-3xl font-extrabold mb-4">
              Virtual Labs
            </h1>

            <p className="text-lg leading-relaxed">
              The Virtual Lab at NITK, hosted by the Centre for
              System Design (CSD), is redefining education and
              research by providing remote access to experiments
              typically conducted in physical labs. CSD also
              conducts workshops and outreach programs to foster
              innovation and practical learning experiences.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-[500px] group shadow-xl">
          <img
            src="assets/images/srm.jpg"
            alt="Switched Reluctance Motor"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
            <h1 className="text-3xl font-extrabold mb-4">
              Switched Reluctance Motor
            </h1>

            <p className="text-lg leading-relaxed">
              The Centre for System Design (CSD), NITK Surathkal,
              has developed cost-effective, magnet-free Switched
              Reluctance Motors (SRMs) for electric vehicles,
              including E-rickshaws and E-cycles. The initiative
              supports indigenous motor and controller solutions
              under the Atmanirbhar Bharat mission.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-[500px] group shadow-xl">
          <img
            src="assets/images/emobility.jpg"
            alt="E-Mobility"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
            <h1 className="text-3xl font-extrabold mb-4">
              E-Mobility
            </h1>

            <p className="text-lg leading-relaxed">
              The Centre for System Design at NITK Surathkal has
              spearheaded an E-Mobility initiative, developing
              e-cycles, e-scooters, and e-bikes for campus
              transportation. AI-driven optimization improves
              deployment and routing efficiency, making the
              initiative both practical and sustainable.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HighlightProjects;