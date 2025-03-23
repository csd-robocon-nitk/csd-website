"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Slides ({ slides }) {
    let [ currentSlide, setCurrentSlide ] = useState(0)

    return (
        <div className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
                <Image
                    src={
                        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${slides[currentSlide].image?.data.attributes.url}` ||
                        "/placeholder.svg"
                    }
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h2 className="text-white text-2xl font-bold">
                        {slides[currentSlide].title}
                    </h2>
                    <p className="text-white/90">
                        {slides[currentSlide].description}
                    </p>
                </div>
            </div>

            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full shadow-md"
                onClick={() =>
                    setCurrentSlide(
                        prev =>
                            (prev - 1 + slides.length) %
                            slides.length
                    )
                }
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full shadow-md"
                onClick={() =>
                    setCurrentSlide(
                        prev => (prev + 1) % slides.length
                    )
                }
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </div>
    )
}