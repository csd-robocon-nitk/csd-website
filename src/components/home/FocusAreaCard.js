"use client"
import { useRef } from "react"
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion"

export default function FocusAreaCard ({ image, heading, description, larger = false }) {
    return (
		<div className="w-1/3 flex flex-col items-center">
			<div className={`max-w-44 bg-white rounded-full ${larger ? "p-5" : "p-10"} -mt-24 translate-y-1/2 z-10`}>
				<img src={image} alt="" />
			</div>
			<div className="overflow-hidden relative p-[3px] flex items-stretch rounded-lg h-full">
				<div className="absolute inset-0">
					<MovingBorder rx="10%" ry="10%">
						<div
							className="h-40 w-40 opacity-[0.8] bg-[radial-gradient(#F48C15_40%,transparent_60%)]"
						/>
					</MovingBorder>
				</div>
				<div className="bg-sky-800 text-white border flex flex-col w-full h-full p-10 pt-28 rounded-lg relative">
					<h2 className="text-2xl font-semibold text-center mb-5">{heading}</h2>
					{description}
				</div>
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