"use client"

import { useEffect, useRef, useState } from "react"

export default function HightlightProject ({ title, description, link, bgImage }) {
    let textElement = useRef(null)
    let [ textHeight, setTextHeight ] = useState("0px")
    
    useEffect(() => {
        function updateHeight () {
            setTimeout(
                () => setTextHeight(textElement.current.clientHeight + "px"),
                300
            )
        }

        updateHeight()
        window.addEventListener("resize", updateHeight)

        return () => window.removeEventListener("resize", updateHeight)
    }, [])

    return (
        <div className="relative flex-1 h-full rounded overflow-hidden cursor-pointer bg-center bg-cover text-white group" style={{backgroundImage: `url(${bgImage})`}}>
            <div 
                className="absolute bottom-0 w-full flex flex-col px-5 bg-black/60 hover:bg-black/85 backdrop-blur-sm duration-500 transition-[background] justify-center items-center"
                style={{ clipPath: "polygon(0 0, 60% 0, 70% 40px, 100% 40px, 100% 100%, 0% 100%)"}}
            >
                <h1 className="text-3xl font-bold mb-2 w-full pt-3 pb-5">{title}</h1>
                <div
                    className="text-center md:text-justify group-hover:animate-fadeInUp animate-fadeOut max-w-md"
                    style={{"--height": textHeight}}
                >
                    <p ref={textElement} className="pb-8">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}