"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalTimeline = ({ events }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-95%"]);

  return (
    <section ref={targetRef} className="relative lg:hidden block h-[200vh] bg-sky-50">
      <div className="sticky top-0 gap-12 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {events.map((event, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-4 p-2 rounded bg-sky-50 w-[500px]">
                <div className="text-5xl text-start font-bold w-full">{event.title}</div>
                <div>{event.content}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
