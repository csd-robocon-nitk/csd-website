"use client"

import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { HiMiniArrowLongRight } from "react-icons/hi2"

export default function FacilityCard ({ title, description, imageSrc, open, toggleOpen, setContentHeight, children }) {
    let svgRef = useRef(null)
    let contentRef = useRef(null)
    let cardRef = useRef(null)

    let [ pathLength, setPathLength ] = useState(10000)

    useEffect(() => {
        setPathLength(svgRef.current.getTotalLength())
    }, [])

    useEffect(() => {
        // if (open && cardRef.current) cardRef.current.scrollIntoView({ behavior: "smooth" })
        if (!open && contentRef.current) setContentHeight(contentRef.current.getBoundingClientRect().height)
    }, [ open ])

    return (
        <>
            <motion.div 
                layout 
                transition={{ duration: 0.5 }} 
                className={`relative w-[calc(33.3%-5px)] h-64 p-[3px] overflow-hidden rounded-[calc(var(--radius)+3px)] hover-draw-parent ${open ? "active" : ""} scroll-mt-24`}
                
                ref={cardRef}
            >
                <svg className="absolute top-0 left-0" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path
                        className="hover-draw duration-1000 bg-indigo-800"
                        stroke="#3730a3"
                        strokeWidth={10}
                        fill="none"
                        d="M 0 0 L 0 100 L 100 100 L 100 0 L 0 0"
                        ref={svgRef}
                        style={{ "--path-length": pathLength + "px" }}
                    />
                </svg>
                <div className="w-full h-full bg-white rounded-lg relative shadow-md duration-200 cursor-pointer flex flex-col justify-between overflow-hidden group" onClick={toggleOpen} >
                    <img
                        src={imageSrc}
                        className="absolute w-full h-full flex-grow object-cover object-center group-hover:scale-110 origin-center duration-500"
                    />
                    <div className={`absolute ${open ? "h-full" : "h-0"} group-hover:h-full w-full bg-white rounded-lg bottom-0 duration-500`}/>
                    <div className="p-7 pt-4 z-50 flex flex-col justify-between h-full bg-gradient-to-b from-white via-white/60 via-25% to-transparent to-50%">
                        <div>
                            <motion.h1
                                className="text-xl font-semibold mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {title}
                            </motion.h1>
                            <p className={`text-justify ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"} group-hover:opacity-100 group-hover:translate-y-0 duration-500`}>
                                {description}
                            </p>
                        </div>
                        <div className={`flex gap-2 items-center text-indigo-600 hover:text-indigo-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} group-hover:opacity-100 group-hover:translate-y-0 duration-500`}>
                            <p className="text-lg font-semibold">Learn More</p>
                            <HiMiniArrowLongRight size={30} />
                        </div>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
                {
                    open &&
                    <div className="w-full" onClick={e => e.stopPropagation()}>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full border-indigo-800 border-[3px] rounded-xl bg-sky-100 text-sky-800 overflow-hidden"
                        >
                            <div ref={contentRef}>
                                {children}
                            </div>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>
        </>
    )
}