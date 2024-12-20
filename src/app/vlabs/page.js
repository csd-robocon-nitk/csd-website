"use client"

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Book, Cpu, Microscope, Users, Globe, School, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion'
import { FaWater, FaRoad, FaLeaf, FaRecycle, FaCogs, FaShip, FaMountain, FaPlug, FaWrench, FaTools, FaFlask, FaBalanceScale, FaCog, FaBolt } from 'react-icons/fa'

export default function VirtualLabs() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const [isMounted, setIsMounted] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialRef = useRef(null)
  const isInView = useInView(testimonialRef, { once: false })
  const mainControls = useAnimation()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  if (!isMounted) {
    return null
  }

  const testimonials = [
    {
      name: "Tejas Pethker",
      title: "MTech in Mechatronics (2018-2020)",
      position: "Powertrain Control Unit (PTCU) System Engineer at Mercedes-Benz Research and Development India, Bengaluru",
      image: "/placeholder.svg?height=100&width=100",
      quote: "The Centre for System Design (CSD) at NITK Surathkal is a state-of-the-art technology lab where I had the freedom to explore projects of my own choosing. With Prof. KV Gangadharan's unwavering support, I delved into areas I was passionate about, gaining hands-on experience with industrial technologies. The strong foundation I built at CSD, particularly in sensors and actuator technologies, has made understanding Mercedes engine systems a much smoother process."
    },
    {
      name: "Abhinava Karaba",
      title: "MTech in Mechatronics (2021-2023)",
      position: "ADAS / Automation Engineer at Mercedes-Benz Research and Development India",
      image: "/placeholder.svg?height=100&width=100",
      quote: "The facilities at CSD provided a rich environment for hands-on learning. I had the opportunity to work with high-end equipment, such as National Instruments PXIs and Ethernet DAQs, as well as industry-grade sensors. The experience I gained in instrumentation, data acquisition, and testing was instrumental in preparing me for the industry. Working at CSD wasn't just about technical skills; it taught me adaptability and professionalism—key traits in a corporate setting."
    },
    {
      name: "Aishwarya Pillai",
      title: "MTech in Mechatronics (2019-2021)",
      position: "Engineer at Mercedes-Benz Research and Development India, Bengaluru",
      image: "/placeholder.svg?height=100&width=100",
      quote: "My two years at CSD, first as part of my MTech curriculum and then as a project researcher, were invaluable. The hands-on experience I gained in motor control algorithms and sensor technologies, particularly while working on a switched reluctance motor project, provided me with the skills needed to excel in modeling and simulation. The guidance I received during my MTech project laid the foundation for my current role at Mercedes-Benz."
    },
    {
      name: "Dr. Praveen Shenoy",
      title: "PhD in Control Systems",
      position: "Associate Professor, Department of Aeronautical Engineering, Srinivas Institute of Technology, Mangalore",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Stepping into CSD in 2014 felt like entering a tech wonderland, filled with cutting-edge gadgets and endless possibilities. I got to play with sophisticated equipment, like the National Instruments Data Acquisition system, which we used to experiment with innovative materials like Magneto-Rheological Elastomers. Today, as an Associate Professor, I share those hands-on experiences with my students, equipping them with the same curiosity and problem-solving skills I honed at CSD."
    },
    {
      name: "Dr. Sai Aditya Raman Kuchibhatla",
      title: "BTech in Mechanical Engineering (2011-2012), JRF (2015-2016)",
      position: "Graduate Teaching Assistant at George W. Woodruff School of Mechanical Engineering, Georgia Tech, Atlanta, USA",
      image: "/placeholder.svg?height=100&width=100",
      quote: "My journey with CSD started back in 2011 when I worked on my Bachelor's thesis, which involved developing some of the early virtual labs at NITK. The hands-on experience I gained with cutting-edge hardware and instrumentation at CSD laid a strong foundation for my future career. Working in the fields of vibration instrumentation and measurement not only sharpened my technical skills but also gave me the confidence to tackle challenging research in automotive NVH and acoustics."
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white text-sky-800 overflow-x-hidden">
    
      <section className="relative h-[50vh] pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky to-sky-800 bg-sky-800">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 text-shadow-lg"
          >
            Virtual Labs @ NITK
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8 text-shadow-md"
          >
            Explore Virtual Labs and Join Our Outreach Programs and Workshops
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#labs" className="bg-sky-800 text-sky px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center">
              Discover More <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div> */}
      </section>

    
      <section id="about" className="py-20 bg-white text-sky-800">
        <div className="container mx-auto px-4">
          {/* <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Welcome to the Virtual Lab at NITK
          </motion.h2> */}
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-8">
            {/* <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 50 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <Image src="/assets/images/453164207_884558033717460_5676383110198238741_n.jpg" alt="Virtual Lab Setup" width={600} height={400} className="rounded-lg shadow-lg" />
            </motion.div> */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <p className="text-lg mb-6 text-sky-600">
                The Virtual Lab at NITK, hosted by the Centre for System Design (CSD), is redefining education and research by providing remote access to experiments typically conducted in physical labs. Our virtual labs replicate real-world lab environments, providing a comprehensive learning experience without geographical limitations.
              </p>
              <p className="text-lg mb-6 text-sky-600">
                CSD's initiatives go beyond virtual labs, engaging in outreach activities and workshops designed to foster innovation, collaboration, and practical learning experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-sky-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-12 h-12 mb-4 text-sky" />, title: "Remote Access", description: "Perform experiments from anywhere in the world." },
              { icon: <Cpu className="w-12 h-12 mb-4 text-sky" />, title: "Real-Time Data", description: "Obtain real-time results just as you would in a physical lab." },
              { icon: <Users className="w-12 h-12 mb-4 text-sky" />, title: "User-Friendly Interface", description: "Designed for a seamless and intuitive user experience." },
              { icon: <Microscope className="w-12 h-12 mb-4 text-sky" />, title: "Interactive Simulations", description: "Engage with high-quality simulations that closely mimic actual lab conditions." },
              { icon: <Book className="w-12 h-12 mb-4 text-sky" />, title: "Comprehensive Resources", description: "Access detailed manuals, tutorials, and support." },
              { icon: <School className="w-12 h-12 mb-4 text-sky" />, title: "Educational Impact", description: "Enhance learning outcomes through practical, hands-on virtual experiences." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="labs" className="py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center text-sky-800"
          >
            Labs Developed at NITK
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Strength of Materials Lab', icon: FaBalanceScale, link: "https://sm-nitk.vlabs.ac.in/" },
              { name: 'Fluid Mechanics Lab', icon: FaWater, link: "https://fm-nitk.vlabs.ac.in/" },
              { name: 'Fluid Machinery Lab', icon: FaCogs, link: "https://fmc-nitk.vlabs.ac.in/" },
              { name: 'Transportation Engineering Lab', icon: FaRoad, link: "https://ts-nitk.vlabs.ac.in/" },
              { name: 'Environmental Engineering 1', icon: FaLeaf, link: "https://ee1-nitk.vlabs.ac.in/" },
              { name: 'Environmental Engineering 2', icon: FaRecycle, link: "https://ee2-nitk.vlabs.ac.in/" },
              { name: 'Marine Structure Lab', icon: FaShip, link: "https://ms-nitk.vlabs.ac.in/" },
              { name: 'Mining Geology Lab', icon: FaMountain, link: "https://mg-nitk.vlabs.ac.in/" },
              { name: 'Industrial Electric Drives Lab', icon: FaPlug, link: "https://ied-nitk.vlabs.ac.in/" },
              { name: 'Mechanics of Machine I', icon: FaWrench, link: "https://mm-nitk.vlabs.ac.in/" },
              { name: 'Machine Dynamics and Mechanical Vibrations Lab', icon: FaTools, link: "https://mdmv-nitk.vlabs.ac.in/" },
              { name: 'Process Control, Reaction Engineering and Unit Operations Lab', icon: FaFlask, link: "https://uorepc-nitk.vlabs.ac.in/" },
              { name: 'Dynamics of Machine', icon: FaCog, link: "https://dom-nitk.vlabs.ac.in/" },
              { name: 'Substation Automation Lab', icon: FaBolt, link: "https://sa-nitk.vlabs.ac.in/" },
              { name: 'Mechanics of Machine II', icon: FaTools, link: "https://mm2-nitk.vlabs.ac.in/" }
            ].map((lab, index) => (
              <Link href={lab.link} key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05}}
                  className="bg-sky-800 p-4 rounded-lg shadow-md flex items-center"
                >
                  {React.createElement(lab.icon, { size: 40, className: "mr-4" })}
                  <span>{lab.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contribution" className="py-20 bg-sky-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Contribution of CSD to VLab Development
          </motion.h2>
          <div className="flex flex-wrap px-16 justify-center items-center gap-8">
            {[
              { number: '15', label: 'Labs Developed' },
              { number: '135', label: 'Experiments Developed' },
              { number: '8', label: 'Upcoming Labs' },
              { number: '83', label: 'Upcoming Experiments' },
              { number: '22', label: 'Proposed Labs' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2}}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-5xl font-bold mb-2 text-sky-800">{stat.number}</h3>
                <p className="text-xl text-sky-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="outreach" className="py-20 px-8">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Outreach Activities
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Nodal Centers</h3>
              <p className="text-lg mb-6 text-sky-600">
                NITK Surathkal mentors over 440 institutions that have partnered as our Nodal Centers. These include state technological universities, centrally funded technical institutes, private universities, and more.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sky-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Karnataka</h4>
                  <p>178 VLNCs</p>
                </div>
                <div className="bg-sky-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Kerala</h4>
                  <p>127 VLNCs</p>
                </div>
                <div className="bg-sky-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Tamil Nadu</h4>
                  <p>61 VLNCs</p>
                </div>
                <div className="bg-sky-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Other States</h4>
                  <p>74 VLNCs</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Workshops and Training Programs</h3>
              <p className="text-lg mb-6 text-sky-600">
                The Virtual Labs team at NITK Surathkal has facilitated over 1,000 physical workshops and virtual training sessions, training more than 120,000 users nationwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sky-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Karnataka</h4>
                  <p>448 Workshops/Webinars</p>
                </div>
                <div className="bg-sky-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Kerala</h4>
                  <p>194 Workshops/Webinars</p>
                </div>
                <div className="bg-sky-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Tamil Nadu</h4>
                  <p>104 Workshops/Webinars</p>
                </div>
                <div className="bg-sky-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Other States</h4>
                  <p>119 Workshops/Webinars</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    
{/* <section id="testimonials" className="py-20 bg-sky-100 text-white" ref={testimonialRef}>
  <div className="container mx-auto px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-12 text-center text-sky-800"
    >
      Alumni Testimonials
    </motion.h2>
    <div className="relative overflow-hidden">
      <motion.div 
        className="flex transition-all duration-500 ease-in-out"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-sky-800 p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-200">{testimonial.title}</p>
                  <p className="text-sm text-gray-200">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-100 italic flex-grow">{`"${testimonial.quote}"`}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-sky-800 p-2 rounded-full shadow-md"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-sky-800 p-2 rounded-full shadow-md"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
    <div className="flex justify-center mt-4">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentTestimonial(index)}
          className={`w-3 h-3 rounded-full mx-1 ${
            currentTestimonial === index ? 'bg-sky' : 'bg-sky-300'
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section> */}

      <section className="py-20 bg-sky-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8"
          >
            Ready to Explore Virtual Labs?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-sky-600"
          >
            Join us in revolutionizing education through virtual experimentation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="https://vlab.co.in/" target='_blank' className="bg-sky-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center">
              Get Started with Virtual Labs <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  )
}