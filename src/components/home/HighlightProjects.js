"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import useMeasure from "react-use-measure";
import { mergeRefs } from "react-merge-refs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function HighlightProjects() {
  const vlabRef = useRef(null);
  const searchRef = useRef(null);
  const eMobilityRef = useRef(null);
  const projRef = useRef(null);

  const [measureRef, { height }] = useMeasure();

  const { scrollYProgress: scrollYProgressProj } = useScroll({
    target: projRef,
    offset: ["start start", "end end"],
  });

  const scale2Vlab = useTransform(scrollYProgressProj, [0, 1], [1, 0.85]);
  const scale2Search = useTransform(scrollYProgressProj, [0.25, 1], [1, 0.9]);
  const scale2Emob = useTransform(scrollYProgressProj, [0.5, 1], [1, 0.95]);
  const scale2explore = useTransform(scrollYProgressProj, [0.75, 1], [1, 1]);

  const { scrollYProgress: scrollYProgressVlab } = useScroll({
    target: vlabRef,
    offset: ["start end", "start start"],
  });
  const scaleVLab = useTransform(scrollYProgressVlab, [0, 1], [3, 1]);

  const { scrollYProgress: scrollYProgressSearch } = useScroll({
    target: searchRef,
    offset: ["start end", "start start"],
  });
  const scaleSearch = useTransform(scrollYProgressSearch, [0, 1], [3, 1]);

  const { scrollYProgress: scrollYProgressEmob } = useScroll({
    target: eMobilityRef,
    offset: ["start end", "start start"],
  });
  const scaleEmob = useTransform(scrollYProgressEmob, [0, 1], [3, 1]);

  return (
    <div className="flex justify-center items-center pb-24 mx-24 mb-8 flex-col gap-2 relative">
      <h1 className="text-4xl font-bold sticky top-16 pt-12">Highlight Projects</h1>
      <div className="flex flex-col items-center gap-16 text-white">
        {/* Vlabs */}
        <motion.div
          ref={vlabRef}
          className="flex gap-4 w-4/5 max-w-[1200px] sticky top-40 rounded-lg overflow-hidden"
          style={{ scale: scale2Vlab }}
        >
          <motion.video
            style={{ scale: scaleVLab }}
            autoPlay
            loop
            muted
            src="/objectives.mp4"
            className="w-full rounded-lg object-cover object-center"
          ></motion.video>
          <div className="flex flex-col w-full gap-8 absolute justify-center items-start p-8 bg-black/60 h-full">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-extrabold"
            >
              Virtual labs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, ex,
              eaque voluptate aspernatur facilis perferendis reiciendis fuga
              saepe sit aperiam expedita exercitationem ipsum alias, beatae
              sint. At corrupti dolore in iure consequatur. Quibusdam, numquam
              deleniti molestiae delectus sit, aspernatur quod asperiores,
              laboriosam debitis pariatur earum dolorum porro laudantium
              necessitatibus non.
            </motion.p>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          style={{ scale: scale2Search }}
          ref={searchRef}
          className="flex gap-4 w-4/5 max-w-[1200px] sticky top-48 rounded-lg overflow-hidden"
        >
          <motion.video
            style={{ scale: scaleSearch }}
            autoPlay
            loop
            muted
            src="/about.mp4"
            className="w-full rounded-lg object-cover object-center"
          ></motion.video>
          <div className="flex flex-col gap-8 w-full absolute justify-center items-start p-8 bg-black/60 h-full">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-extrabold"
            >
              SEARCH
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              beatae, ratione reiciendis vitae at ad harum numquam, ab laborum,
              omnis voluptas? Sunt ut cupiditate soluta libero fuga, aspernatur,
              deleniti ea reiciendis sint nesciunt veritatis architecto
              dignissimos expedita minima odit nobis. Quos fuga eveniet nulla,
              soluta unde porro mollitia numquam quidem!
            </motion.p>
          </div>
        </motion.div>

        {/* E-Mobility */}
        <motion.div
          style={{ scale: scale2Emob }}
          ref={mergeRefs([eMobilityRef, measureRef])}
          className="flex gap-4 w-4/5 max-w-[1200px] sticky top-56 rounded-lg overflow-hidden"
        >
          <motion.video
            style={{ scale: scaleEmob }}
            autoPlay
            loop
            muted
            src="/objectives.mp4"
            className="w-full rounded-lg object-cover object-center"
          ></motion.video>
          <div className="flex flex-col w-full gap-8 absolute justify-center items-start p-8 bg-black/60 h-full">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-extrabold"
            >
              E-Mobility
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              beatae, ratione reiciendis vitae at ad harum numquam, ab laborum,
              omnis voluptas? Sunt ut cupiditate soluta libero fuga, aspernatur,
              deleniti ea reiciendis sint nesciunt veritatis architecto
              dignissimos expedita minima odit nobis. Quos fuga eveniet nulla,
              soluta unde porro mollitia numquam quidem!
            </motion.p>
          </div>
        </motion.div>

        {/* Exlore */}
        <motion.div
          style={{ scale: scale2explore, height: height + 32 }}
          className="flex gap-4 w-4/5 max-w-[1200px] sticky top-64 rounded-lg overflow-hidden"
        >
          <div className="flex gap-4 w-full justify-center items-center p-8 bg-sky-800">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white text-shark-900 px-8 py-4 rounded-full flex items-center justify-center gap-4 cursor-pointer"
            >
              <Link href={"/projects"} className="text-2xl font-extrabold">
                Explore More Projects
              </Link>
              <ArrowRight className="w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HighlightProjects;
