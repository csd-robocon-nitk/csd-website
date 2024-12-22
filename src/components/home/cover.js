"use client"

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"


export default function CoverSection () {
    return (
        <ParallaxBanner className="h-screen w-full bg-black">
            <ParallaxBannerLayer speed={-40}>
                <video autoPlay loop muted src="/about.mp4" className="h-[200vh] object-cover object-center brightness-[.25]"></video>
            </ParallaxBannerLayer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* <h1 className="text-8xl text-white font-bold">CSD</h1> */}
                <img src="/logo_small.png" className="h-24" alt="" />
                <h2 className="text-3xl font-bold text-white">A Centre of Excellence at NITK Surathkal</h2>
                <h2 className="text-3xl font-bold text-white">Driving research and development to solve real-world challenges</h2>
            </div>
        </ParallaxBanner>
    )
}