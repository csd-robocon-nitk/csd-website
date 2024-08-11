import React from "react";

function Intro() {
  return (
    <div className="bg-white relative flex flex-col justify-center items-center pt-10 py-5 px-40 gap-2">
      <div className="font-bold text-2xl w-full">
        A Legacy of Innovation in Motion with a Commitment to Social Impact
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl">
          The Centre for System Design (CSD) at NITK Surathkal is a powerhouse
          of innovation where cutting-edge technology converges with real-world
          challenges. Since our inception in 2001, we've been at the forefront
          of transdisciplinary research, fostering a unique ecosystem where
          academia and industry collaborate to shape the future
        </div>
        <div className="text-xl">
          At the Centre for System Design (CSD) of NITK Surathkal, we bridge the
          gap between research and real-world application. Our interdisciplinary
          approach fosters innovation, enabling us to address complex challenges
          across various domains through cutting-edge technology and
          collaborative expertise.
        </div>
        <div>
          <button className="btn btn-primary text-white lg:text-lg text-md bg-shark-800/95 hover:bg-shark-800 ease-in-out hover:scale-[1.01] duration-200">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
