import { useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function useCounter (finalValue, inView = false, duration = 2) {
    const damping = 20 + 40 * (1 / duration)
    const stiffness = 100 * (1 / duration)

    let [ value, setValue ] = useState(0)
    let motionValue = useSpring(0, { damping, stiffness })
    
    motionValue.on("change", v => setValue(parseInt(v)))

    useEffect(() => {
        if (inView)
            motionValue.set(finalValue)
        else
            motionValue.jump(0)
    }, [ inView ])

    return value
}