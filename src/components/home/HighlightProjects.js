"use client";

import React from "react";

function HighlightProjects() {
  return (
    <section
      className="flex justify-center items-center flex-col pt-8 py-22 px-6"
      id="projects"
    >
      <h1 className="relative top-[2px] text-4xl font-bold pb-12 text-center">
        Highlight Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[1080px]">

        {/* Card 1 */}
        <div className="bg-sky-200 rounded-2xl shadow-xl overflow-hidden flex flex-col">

          <img
            src="assets/images/virtualLabs.jpg"
            alt="Virtual Labs"
            className="w-full h-[165px] object-cover"
          />

          <div className="p-4 flex flex-col flex-1">
            <h1 className="text-xl font-semibold mb-1 text-sky-950 text-left">
              Virtual Labs
            </h1>

            <p className="text-sm leading-6 text-gray-700 text-justify">
              The Virtual Lab at NITK, hosted by the Centre for
              System Design (CSD), is redefining education and
              research by providing remote access to experiments
              typically conducted in physical labs. CSD also
              conducts workshops and outreach programs to foster
              innovation and practical learning experiences.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-sky-200 rounded-2xl shadow-xl overflow-hidden flex flex-col">

          <img
            src="assets/images/srm.jpg"
            alt="Switched Reluctance Motor"
            className="w-full h-[165px] object-cover"
          />

          <div className="p-4 flex flex-col flex-1">
            <h1 className="text-xl font-semibold mb-1 text-sky-950 text-left">
              Switched Reluctance Motor
            </h1>

            <p className="text-sm leading-6 text-gray-700 text-justify">
              The Centre for System Design (CSD), NITK Surathkal,
              has developed cost-effective, magnet-free Switched
              Reluctance Motors (SRMs) for electric vehicles,
              including E-rickshaws and E-cycles. The initiative
              supports indigenous motor and controller solutions
              under the Atmanirbhar Bharat mission.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-sky-200 rounded-2xl shadow-xl overflow-hidden flex flex-col">

          <img
            src="assets/images/emobility.jpg"
            alt="E-Mobility"
            className="w-full h-[165px] object-cover"
          />

          <div className="p-4 flex flex-col flex-1">
            <h1 className="text-xl font-semibold mb-1 text-sky-950 text-left">
              E-Mobility
            </h1>

            <p className="text-sm leading-6 text-gray-700 text-justify">
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