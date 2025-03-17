"use client"

import { useState, useEffect, useRef } from "react"
import { Wrench, Bike, CheckCircle, ChevronDown, Zap, Gauge, Activity, Cpu, Volume2 } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { ChevronDownIcon, Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Splash from "@/components/splash"

const images = [
  "/assets/images/gallery/VIDHYUG%204.0_6.jpg?height=400&width=600",
  "/assets/images/gallery/converter1.png?height=400&width=600",
  "/assets/images/gallery/converter2.png?height=400&width=600",
]

const teamMembers = [
  {
    name: "Sandesh Bhaktha",
    role: "Project Lead",
    bio: "Dr. John Doe has over 15 years of experience in electric motor design and leads our SRM project.",
    linkedin: "https://www.linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "john.doe@example.com",
  },
  {
    name: "Neil Jose",
    role: "Senior Engineer",
    bio: "Jane specializes in electromagnetic analysis and optimization of SRM designs.",
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  {
    name: "Sarath kannan",
    role: "Software Developer",
    bio: "Mike develops the control software for our SRM prototypes and simulations.",
    twitter: "https://twitter.com/mikejohnson",
    email: "mike.johnson@example.com",
  },
  {
    name: "Sumitra",
    role: "Research Associate",
    bio: "Emily focuses on improving the efficiency and performance of our SRM designs.",
    linkedin: "https://www.linkedin.com/in/emilybrown",
    email: "emily.brown@example.com",
  },
]
const facilities = [
  {
    title: "Eddy Current Dynamometer",
    purpose: "For motor loading",
    icon: Zap,
  },
  {
    title: "Torque Sensors and Encoders",
    purpose: "For accurate torque and speed measurements",
    icon: Gauge,
  },
  {
    title: "Oscilloscopes and Thermal Imagers",
    purpose: "For comprehensive performance analysis",
    icon: Activity,
  },
  {
    title: "FPGA-Based Rapid Prototyping Setup",
    purpose: "Integrated with an IGBT stack converter handling up to 1200V and 120A",
    icon: Cpu,
  },
  {
    title: "Noise and Vibration Analysis Tools",
    purpose: "Including industrial accelerometers, microphones, and data acquisition systems",
    icon: Volume2,
  },
]
const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  return (
    <div className="relative pt-16 w-full h-96 overflow-hidden rounded-lg ">
      {images.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronDownIcon className="w-6 h-6 transform rotate-90" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronDownIcon className="w-6 h-6 transform -rotate-90" />
      </button>
    </div>
  )
}

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false)

  const controlAlgorithms = [
    "Hysteresis Current Control",
    "Voltage PWM",
    "Soft and Hard Chopping Algorithms",
    "FPGA controllers for precision and versatility",
    "MCUs and DSPs from STM and Texas Instruments",
  ]
  const [showAll, setShowAll] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const cards = document.querySelectorAll(".facility-card")
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove)
      card.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove)
        card.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, []) // Removed showAll from dependencies

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
  }

  const [projectRef, projectInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen pt-12 bg-gray-100">
      <Splash
        title="Switched Reluctance Motor (SRM) Development at CSD"
        subtitle="Innovating sustainable and cost-effective alternatives for electric vehicles"
      />
      <main className="container mx-auto px-4 py-16">
        <section id="hero" className=" bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src="/assets/images/gallery/srm page.png?height=400&width=600"
              alt="Switched Reluctance Motor"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Switched Reluctance Motor (SRM) Development
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Centre for System Design (CSD) at NITK Surathkal is actively engaged in the research and development
              of Switched Reluctance Motors (SRMs) as a sustainable and cost-effective alternative to traditional BLDC
              motors for electric vehicles (EVs). This project aims to address the high costs associated with permanent
              magnet (PM)-based motors by developing innovative SRM solutions that are robust, fault-tolerant, and
              magnet-free.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
         
        </section>

        <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Images</h2>
          <Slideshow />
          <p className="mt-6 text-center text-gray-600">
            Explore our collection of stunning images showcasing our products and services.
          </p>
        </div>
      </section>

        <section
          id="design"
          className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105">
              SRM Design and Prototyping
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <div className="relative group">
                  <Image
                    src="/assets/images/gallery/converter1.png?height=300&width=400"
                    alt="Inner Rotor Standard SRM"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Wrench className="w-8 h-8 text-blue-500" />
                    <h3 className="text-2xl font-semibold ml-3 text-gray-800 dark:text-gray-100">
                      Inner Rotor Standard SRM (2 kW)
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Designed for E-Rickshaw applications, this motor leverages rugged and reliable SRM technology to
                    enhance the durability and performance of small commercial EVs.
                  </p>
                  {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button> */}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <div className="relative group">
                  <Image
                    src="/assets/images/gallery/converter1.png?height=300&width=400"
                    alt="Outer Rotor Hub Motor"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Bike className="w-8 h-8 text-green-500" />
                    <h3 className="text-2xl font-semibold ml-3 text-gray-800 dark:text-gray-100">
                      Outer Rotor Hub Motor (0.5 kW)
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Targeted for E-bicycles, this lightweight and compact hub motor offers efficient and cost-effective
                    mobility solutions.
                  </p>
                  {/* <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                Learn More
              </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="controller" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 sm:text-4xl">SRM Controller Design</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">
                CSD has developed controllers capable of driving motors up to 600V and 40A. These controllers are
                designed in-house to be modular and cost-effective, utilizing industrial IGBT modules and novel
                configurations to meet the needs of four-phase motors.
              </p>
              <ul className="space-y-3">
                {[
                  "Modular and cost-effective design",
                  "Industrial IGBT modules",
                  "Adaptable to different motor requirements",
                  "Expertise in MCUs, DSPs (STM, TI), and FPGA-based solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="algorithms" className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Control Algorithms and Sensor Integration
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 p-6 bg-gray-50">Control Algorithms</h3>
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${isExpanded ? "max-h-80" : "max-h-40"}`}
              >
                <ul className="space-y-2 px-6 pb-6">
                  {controlAlgorithms.map((algorithm, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-700 hover:text-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ChevronDown className="h-5 w-5 mr-2 text-blue-500" />
                      {algorithm}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out bg-gray-50"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 p-6 bg-gray-50">Sensor Integration</h3>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  The team has experimented with diverse rotor position sensors (hall effect, IR, magnetic rotary) and
                  integrated current sensors to refine motor control and enhance performance.
                </p>
              </div>
              <div className="p-6 bg-blue-50">
                <h4 className="text-lg font-semibold mb-2 text-blue-800">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Multiple sensor types supported</li>
                  <li>Enhanced motor control precision</li>
                  <li>Improved overall performance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={containerRef}
          id="testing"
          className="mb-16 px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden "
        >
          <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              SRM Testing Facilities
            </motion.h2>
            <motion.ul
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {facilities.slice(0, showAll ? facilities.length : 3).map((facility, index) => (
                <motion.li
                  key={index}
                  className="facility-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <div className="p-6 relative">
                    <div className="absolute top-4 right-4 text-purple-500">
                      <facility.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{facility.title}</h3>
                    <p className="text-gray-600">{facility.purpose}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </motion.li>
              ))}
            </motion.ul>
            {!showAll && (
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() => setShowAll(true)}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300 flex items-center mx-auto"
                >
                  Show More <ChevronDownIcon className="ml-2" />
                </button>
              </motion.div>
            )}
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <motion.section
            id="project"
            className="mb-24"
            ref={projectRef}
            initial={{ opacity: 0, y: 50 }}
            animate={projectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">SRM Project Details</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <Image
                    src="/assets/images/gallery/Assembled (1).jpg?height=300&width=400"
                    alt="SRM Motor Illustration"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">Project Overview</h3>
                  <p className="text-gray-600 mb-4">
                    Our SRM (Switched Reluctance Motor) project aims to develop an alternative to BLDC motors for
                    Electric Vehicles, supporting the 'Atmanirbhar Bharat' initiative. We're focusing on applications
                    for 2-Wheeler and 3-Wheeler EVs, utilizing advanced software and partnering with industry leaders.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Cpu className="mr-2" />
                    <span className="font-semibold">Cutting-edge Motor Technology</span>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <p className="mb-2">
                    <strong className="text-gray-700">Project Cost:</strong> ₹16.98 Crores
                  </p>
                  <p className="mb-2">
                    <strong className="text-gray-700">Funding Agency:</strong> Ministry of Heavy Industries
                  </p>
                  <p>
                    <strong className="text-gray-700">Industrial Partner:</strong> Aditya Auto Pvt Ltd., Bangalore
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <p className="mb-2">
                    <strong className="text-gray-700">Software Used:</strong> Electromagnetic Finite Element Analysis,
                    MATLAB, and CAD
                  </p>
                  <p className="mb-2">
                    <strong className="text-gray-700">Project Status:</strong>{" "}
                    <span className="text-green-600 font-semibold">Completed</span>
                  </p>
                  <p>
                    <strong className="text-gray-700">Outcome:</strong> Two prototype SRMs (for E-Rickshaw and E-Cycle)
                    fabricated and tested, with a controller developed
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Future Scope:</strong> Implementation of SRM technology at the vehicle level, paving the way
                  for more efficient and cost-effective electric vehicles in India.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="team"
            className="mb-16"
            ref={teamRef}
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-500"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-gray-700">
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

