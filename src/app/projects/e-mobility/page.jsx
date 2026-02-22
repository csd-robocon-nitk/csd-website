"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Battery, Zap, Timer, Settings, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from '../components/ui/button';
import Splash from "@/components/splash"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import ReactMarkdown from "react-markdown"

/*
const initiatives = [
  {
    title: "VidhYug 1.0 - Student Commuting",
    description:
      "VidhYug 1.0 is specifically crafted for student commuting, designed with the daily transportation needs of students in mind. This electric vehicle offers an eco-friendly and efficient solution for navigating the NITK Surathkal campus.",
    features: [
      "Compact design for easy maneuverability",
      "Long-lasting battery for full day campus use",
      "Integrated smart features for tracking and scheduling",
    ],
    images: [
      "/assets/images/gallery/e-mobility/vidhyug 1.0.jpg",
    ],
  },
  {
    title: "VidhYug 2.0 - Administrative Usage",
    description:
      "VidhYug 2.0 is introduced for administrative purposes within NITK Surathkal. This model gained immense popularity around the campus, leading to requests for similar electric vehicles for various administrative sections.",
    features: [
      "Customizable configurations for different administrative needs",
      "Enhanced cargo capacity for document and equipment transport",
      "Quiet operation for minimal campus disturbance",
    ],
    variants: [
      "VidhYug 2.0 - RE office",
      "VidhYug 2.1 - Pump house",
      "VidhYug 2.2 - Power House",
      "VidhYug 2.2.1 - Hostel office",
      "VidhYug 2.2.2 - Library",
    ],
    images: [
      "/assets/images/gallery/e-mobility/vidhyug 2.0.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 2.1.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 2.2.1 hostel office.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 2.2.1.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 2 bldc motor.jpg",
    ],
    videoId: "Xnlz9MMqaGA",
  },
  {
    title: "VidhYug 3.0 - E-Cycle with IRIS Integration",
    description:
      "VidhYug 3.0 represents an electric cycle designed for campus usage. It's equipped with a Brushless DC Motor, lithium-ion battery, and a pedal-assist feature. The innovative Integrated Resource & Information Sharing (IRIS) system incorporates GPS functionality for real-time tracking within the campus.",
    features: [
      "Brushless DC Motor for efficient power delivery",
      "Lithium-ion battery for extended range",
      "Pedal-assist feature for user comfort",
      "IRIS system with GPS tracking",
    ],
    images: [
      "/assets/images/gallery/e-mobility/vidhyug 3.0.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 3.0 1.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 3.1.jpg",
    ],
    videoId: "wZr6k_tV6Ak",
  },
  {
    title: "VidhYug 4.0 - Forest E-Bike",
    description:
      "VidhYug 4.0 is developed in collaboration with the Kudremukha Wildlife Division. This electric bike is specifically designed to empower forest officials for patrolling and firefighting in challenging terrains.",
    features: [
      "Rugged construction for off-road use",
      "Solar-charging capability for extended missions",
      "Enhanced mobility for quick response in emergencies",
      "Ample storage for essential equipment",
      "Removable headlight/torch for versatile illumination",
    ],
    images: [
      "/assets/images/gallery/e-mobility/vidhyug 4.0_1.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 4.0_2.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 4.0_3.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 4.0_4.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 4.0_5.jpg",
    ],
    videoId: "IPepptEKgEk",
  },
  {
    title: "VidhYug 4.1 - E-Bike for Campus Security",
    description:
      "VidhYug 4.1 is an electric bike designed exclusively for security patrols on the NITK campus. Fully electric and carbon-neutral, this bike incorporates solar charging capabilities, ensuring a sustainable solution for the security team covering extensive distances on a daily basis.",
    features: [
      "Fully electric and carbon-neutral design",
      "Solar charging capabilities for extended patrols",
      "Enhanced visibility features for night patrols",
      "Quiet operation for discreet security rounds",
    ],
    images: [
      "/assets/images/gallery/e-mobility/vidhyug 4.1 launch.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 4.1.jpg",
      "/assets/images/gallery/e-mobility/vidhyug 4.1_2.jpg",
    ],
    videoId: "8ASWYSiiImE",
  },
  {
    title: "VidhYug 4.2 - Dirt Bike for Rescue Operations",
    description:
      "The VidhYug 4.2 model, described as a Dirt E-Bike, is designed for off-road capabilities to aid in rescue efforts. Financially supported by NITK alumni and SEG Automotive, this bike is envisioned to assist in avalanche zones, landslide areas, and other locations prone to natural disasters.",
    features: [
      "Robust off-road capabilities for challenging terrains",
      "Extended battery life for long rescue missions",
      "Integrated emergency equipment storage",
      "All-weather operation capabilities",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoId: "xg7jCbNggQE",
  },
  {
    title: "VidhYug 5.0 - Quad Bike for Accessibility",
    description:
      "VidhYug 5.0 stands out as a unique quad bike designed with accessibility in mind. It incorporates wheels with integrated PMDC motors for each wheel, offering independent control and smoother maneuverability on diverse terrains.",
    features: [
      "Wheels with integrated PMDC motors for independent control",
      "Tilt mechanism for uneven surfaces",
      "Seat belt and pressure sensors for enhanced safety",
      "Quick-release mechanism for easy maintenance and transportation",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "The Azadi ETrike (VidhYug 7.1)",
    description:
      "The Azadi ETrike (VidhYug 7.1) is an electric three-wheeler designed for biowaste collection within the campus. This green warrior contributes to NITK's 'Carbon Neutral' goal and joins a fleet of innovative E-mobility solutions developed by the institute.",
    features: [
      "60km range on a single charge",
      "800kg capacity for efficient waste collection",
      "Quick-release unloading mechanism",
      "Funded by alumni initiatives",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoId: "oTDkqzffLns",
  },
]
*/

function Initiative({ initiative }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  //const totalSlides = initiative.images.length + (initiative.videoId ? 1 : 0) // +1 for the video slide
  const images = initiative.initiativeMedia?.data || []
  const totalSlides = images.length

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  return (
    <Card className="mb-8">
    <CardContent className="p-6">
      <h3 className="text-2xl font-bold mb-4">{initiative.initiativeName}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700 mb-4">{initiative.initiativeDesc}</p>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          {/*}
          <ul className="list-disc pl-5 mb-4">
            {initiative.features.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
          */}
          <div className="text-gray-600 mb-4">
            <ReactMarkdown components={{ ul : ({ node, ...props }) => (<ul className="list-disc pl-6 space-y-2" {...props} />),}}>
              {initiative.initiativeKeyFeatures}
            </ReactMarkdown>
          </div>
          {initiative.initiativeVariants && (
            <>
              <h4 className="font-semibold mb-2">Variants:</h4>
              {/*
              <ul className="list-disc pl-5">
                {initiative.variants.map((variant, index) => (
                  <li key={index} className="text-gray-600">
                    {variant}
                  </li>
                ))}
              </ul>
              */}
              <div className="text-gray-600">
                <ReactMarkdown components={{ ul: ({ node, ...props }) => (<ul className="list-disc pl-6 space-y-2" {...props} />),}}> 
                  {initiative.initiativeVariants} 
                </ReactMarkdown>
              </div>
            </>
          )}
        </div>
        <div className="space-y-4">
          <div className="relative h-[300px] w-full">
            {images.length > 0 && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${images[currentSlideIndex]?.attributes?.url}`}
                alt={`${initiative.initiativeName} - Image ${currentSlideIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            )}
              {/*
              initiative.videoId && <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${initiative.videoId}?autoplay=1`}
                  title={`${initiative.title} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            )}
            */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white pointer-events-auto"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white pointer-events-auto"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlideIndex ? "bg-blue-500" : "bg-gray-300"}`}
                onClick={() => setCurrentSlideIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card> 
  )
}

export default function EMobilityPage() {

  const [emob_page, setEmobPage] = useState(null)
  const [loading, setLoaading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const token = process.env.NEXT_PUBLIC_TOKEN
        if (!token) {
          throw new Error("Token not found!")
        }

        const res = await fetch(
		      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/e-mobility-platform?populate[Overview][populate]=*&populate[Features]=*&populate[Technical][populate]=*&populate[InitiativesPanel][populate][initiativeMedia]=*`,
		    {
			    headers: {
				    Authorization: `Bearer ${token}`
			    },
			    cache: "no-cache"
		      }
        )
        console.log(res)
        if (!res.ok) {
		      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`)
	      }
  
  
        const data = await res.json()
        setEmobPage(data.data.attributes)
      } catch (err) {
        console.error(err)
      } finally {
        setLoaading(false)
      }
    }
    fetchData()
  },[])
  if (loading) return <div className="pt-20 text-center">Loading...</div>
  if (!emob_page) return <div className="pt-20 text-center">No data found</div>

  return (
    <div className="min-h-screen pt-12 bg-white">
      <Splash
        title="E-mobility Platform"
        subtitle="Revolutionizing electric vehicle charging and management systems with cutting-edge technology."
      />

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Battery, title: "Smart Charging", description: "Optimized charging schedules" },
            { icon: Zap, title: "Real-time Monitoring", description: "Live status updates" },
            { icon: Timer, title: "Predictive Analytics", description: "AI-powered insights" },
            { icon: Settings, title: "Fleet Management", description: "Comprehensive control" },
          ].map((item, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <item.icon className="h-12 w-12 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px] text-lg">
            <TabsTrigger
              value="overview"
              className="transition-all duration-300 hover:bg-sky-100 hover:text-sky-700 data-[state=active]:shadow-lg"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="transition-all duration-300 hover:bg-sky-100 hover:text-sky-700 data-[state=active]:shadow-lg"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              className="transition-all duration-300 hover:bg-sky-100 hover:text-sky-700 data-[state=active]:shadow-lg"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger
              value="initiatives"
              className="transition-all duration-300 hover:bg-sky-100 hover:text-sky-700 data-[state=active]:shadow-lg"
            >
              Initiatives
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                {emob_page?.Overview?.overviewDescription ? (
                  <p className="text-lg text-gray-600 whitespace-pre-line">
                    {emob_page.Overview.overviewDescription}
                  </p>
                ) : (
                  <p className="text-lg text-gray-400">
                    No overview available.
                  </p>
                )}
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  //src="/assets/images/gallery/e-mobility/cover.jpeg"
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${emob_page.Overview.overviewImage.data.attributes.url}`}
                  alt="Platform Overview"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="features" className="mt-8">
            <div className="grid gap-8">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-8">

                {emob_page?.Features?.length > 0 ? (
                  emob_page.Features.map((feature, index) => (
                    <Card
                      key={index}
                      className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-semibold mb-4">
                            {feature.featureName}
                          </h3>
                          <p className="text-lg text-gray-600 mb-4">
                            {feature.featureShortDescription}
                          </p>

                          <p className="text-gray-600 mb-6">
                            {feature.featureLongDescription}
                          </p>
                        </CardContent>
                    </Card>
                  ))
                ) : ( 
                  <p className="text-gray-400">No features available.</p>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="technical" className="mt-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
                <ul className="space-y-6 text-lg">
                  <li className="flex items-start">
                    <span className="font-semibold min-w-[200px]">Focus Areas:</span>
                    <span className="text-gray-600">
                      {emob_page?.Technical?.techSpecs?.focusArea}
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="font-semibold min-w-[200px]">Key Equipment:</span>
                    <span className="text-gray-600">
                      {emob_page?.Technical?.techSpecs?.keyEquipment}
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="font-semibold min-w-[200px]">Development Workflow:</span>
                    <span className="text-gray-600">
                      {emob_page?.Technical?.techSpecs?.devWorkFlow}
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="font-semibold min-w-[200px]">Funding Sources:</span>
                    <span className="text-gray-600">
                      {emob_page?.Technical?.techSpecs?.fundingSources}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                {/* Development Workflow Panel */}
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">Development Workflow</h3>
                    <div className="text-gray-600">
                      <ReactMarkdown components={{ul: ({node, ...props}) => (<ul className="list-disc pl-6 space-y-2" {...props} />)}}>
                        {emob_page?.Technical?.devWorkflowPanel.devWorkflowDesc}
                      </ReactMarkdown>
                    </div>
                  </CardContent>
                </Card>

                {/* Long Term Goals Panel */}
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">Long-Term Goals</h3>
                    <div className="text-gray-600">
                      <ReactMarkdown components={{ul: ({node, ...props}) => (<ul className="list-disc pl-6 space-y-2" {...props} />)}}>
                      {emob_page?.Technical?.longTermGoalsPanel.longTermGoalsDesc}
                      </ReactMarkdown>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="initiatives" className="mt-8">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6">E-Mobility Initiatives at NITK Surathkal</h2>
              <p className="text-lg text-gray-600 mb-8">
                NITK Surathkal is pioneering sustainable solutions and integrating AI for optimal electric vehicle usage
                on campus. Led by Dr. Pruthviraj U and Prof. K V Gangadharan, the project aims to transform campus
                transportation.
              </p>
              {/*
              {initiatives.map((initiative, index) => (
                <Initiative key={index} initiative={initiative} />
              ))}
              */}

              {emob_page?.InitiativesPanel?.length > 0 ? (
                emob_page.InitiativesPanel.map((initiative, index) => (
                  <Initiative key={index} initiative={initiative} />
                ))
              ) : (
                <p className="text-gray-400">No initiatives availible.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
