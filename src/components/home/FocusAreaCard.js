"use client"
import { useRef } from "react"
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion"

export default function FocusAreaCard ({ image, heading, description, larger = false }) {
    return (
		<div className="overflow-hidden relative p-[3px] w-1/3 flex items-stretch rounded-lg">
			<div className="absolute inset-0">
				<MovingBorder rx="10%" ry="10%">
				<div
					className="h-40 w-40 opacity-[0.8] bg-[radial-gradient(#9E46FE_40%,transparent_60%)]"
				/>
				</MovingBorder>
			</div>
			<div className="relative bg-[#e2eeff] border flex flex-col items-center w-full p-10 rounded-lg">
				<h2 className="text-2xl font-semibold text-center">{heading}</h2>
				<img className={`max-w-52 ${larger ? "p-8" : "p-10"}`} src={image} alt="" />
				{description}
			</div>
		</div>
    )
}


export const MovingBorder = ({
    children,
  }) => {
	const duration = 5000
    const pathRef = useRef();
    const progress = useMotionValue(0);
   
    useAnimationFrame((time) => {
      const length = pathRef.current?.getTotalLength();
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    });
   
    const x = useTransform(
      progress,
      (val) => pathRef.current?.getPointAtLength(val).x
    );
    const y = useTransform(
      progress,
      (val) => pathRef.current?.getPointAtLength(val).y
    );
   
    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
   
    return (
      <>
        <svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			className="absolute h-full w-full"
			width="100%"
			height="100%"
        >
			<rect
				fill="none"
				width="100%"
				height="100%"
				rx="10%"
				ry="10%"
				ref={pathRef}
			/>
        </svg>
        <motion.div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				display: "inline-block",
				transform,
			}}
        >
			{children}
        </motion.div>
      </>
    );
  };