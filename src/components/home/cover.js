"use client"

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"


export default function CoverSection () {
    return (
        <section>
            <ParallaxBanner className="h-screen w-full bg-black">
                <ParallaxBannerLayer speed={-40}>
                    <video autoPlay loop muted src="/about.mp4" className="h-screen translate-y-[400px] w-full object-cover object-center brightness-[.25]"></video>
                </ParallaxBannerLayer>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
                    <img src="/logo_small.png" className="sm:h-24 h-16 mb-2" alt="" />
                    <h2 className="sm:text-3xl xs:text-2xl text-xl mb-2 lg:mb-0 font-bold text-white text-center xs:max-w-none max-w-[310px]">A Centre of Excellence at NITK Surathkal</h2>
                    <h2 className="lg:text-3xl sm:text-2xl xs:text-xl text-lg leading-tight sm:font-semibold font-medium text-white text-center lg:max-w-none sm:max-w-[500px] max-w-[400px]">Driving research and development to solve real-world challenges</h2>
                </div>
            </ParallaxBanner>
        </section>
    )
}