"use client"

import Lenis from "lenis"
import { useEffect } from "react"

export default function LenisInit () {
    useEffect(() => {
        let lenis = new Lenis()
        function raf (time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    })
    
    return <></>
}