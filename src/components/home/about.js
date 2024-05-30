import Image from "next/image";
import Drone from "../../../public/assets/images/drone.jpg";

export default function AboutSection() {
  return (
    <div className="bg-white relative flex flex-col justify-center items-center py-10 gap-2">
      <div className="flex flex-wrap justify-center items-center w-4/5 gap-8 bg-shark-100/50 rounded-t-lg rounded-b-sm px-5 py-5">
        <div className="flex flex-col text-xl text-wrap text-justify lg:w-1/2 w-full rounded-md gap-4">
          <h1 className="text-4xl md:text-start text-center font-extrabold">
            About Us
          </h1>
          <p className="md:text-2xl text-md text-wrap text-justify">
            Centre for System Design (A Centre of Excellence at NITK Surathkal)
            envisages an interdisciplinary approach and means for realization of
            successful engineering systems. Key components for this are system
            modeling & simulation, understanding system dynamics, system
            optimization, virtual and physical experimentation. The Centre aims
            at facilitating and providing required environment for all the key
            components of system design. Modern engineering problems are
            comprised of elements from all the traditional disciplines and these
            elements must be integrated to meet the overall design objectives.
            The Centre focuses on how to address and solve problems that
            transcend traditional boundaries.
          </p>
        </div>
        <div className="lg:w-2/5 md:overflow-hidden md:rounded-xl md:block hidden aspect-auto">
          <Image src={Drone} className="w-full rounded-xl" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center w-4/5 bg-shark-100/50 gap-8 rounded-b-lg rounded-t-sm px-5 py-5">
        <div className="lg:w-2/5 md:overflow-hidden md:rounded-md md:my-10 md:block hidden">
          <Image src={Drone} className="w-full rounded-xl" />
        </div>
        <div className="py-0 my-0 flex flex-col gap-2 lg:w-1/2 w-full">
          <h1 className="text-4xl font-extrabold md:text-start text-center">
            Objectives
          </h1>
          <ul className="md:text-2xl text-md text-wrap text-justify list-inside list-disc flex flex-col gap-4">
            <li>
              To provide facilities for experimental learning through system
              design, simulation and actual experimentation on physical systems
              to enhance the understanding of basic concepts in science,
              engineering and technology
            </li>
            <li>
              To provide cutting edge techniques for data acquisition, digital
              signal processing, real time control systems and graphical
              simulation
            </li>
            <li>
              To provide a platform for industry-academia collaboration on
              multidisciplinary research
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
