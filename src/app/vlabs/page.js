"use client"

import Link from 'next/link'
import { ArrowRight, Book, Cpu, Microscope, Users, Globe, School } from 'lucide-react'
import { motion  } from 'framer-motion'
import { FaWater, FaRoad, FaLeaf, FaRecycle, FaCogs, FaShip, FaMountain, FaPlug, FaWrench, FaTools, FaFlask, FaBalanceScale, FaCog, FaBolt } from 'react-icons/fa'
import HoverBottomNav from '@/components/hoverBottomNav'
import { useRef } from 'react'

export default function VirtualLabs() {
    let labsRef = useRef(null)

    const helper = [
        { href: "features", label: "Features" },
        { href: "labs", label: "Labs" },
        { href: "contribution", label: "Contribution" },
        { href: "outreach", label: "Outreach" },
    ];
    
    function scrollToLabs () {
        const elementPosition = labsRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 75;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }

    return (
        <div className="min-h-screen bg-white text-sky-800 overflow-x-hidden">
            <HoverBottomNav helper = {helper} />

            <div className="flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950 to-sky-900 pt-20">
                <div className="h-[50vh] mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold mb-6 text-shadow-lg"
                    >
                        Virtual Labs @ NITK
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl mb-8 text-shadow-md"
                    >
                        Explore Virtual Labs and Join Our Outreach Programs and Workshops
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div onClick={scrollToLabs} className="bg-white text-sky-800 shadow-md px-8 py-3 rounded-full font-semibold hover:bg-sky-50 duration-300 transition-colors inline-flex items-center cursor-pointer">
                            Discover More <ArrowRight className="ml-2" />
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <section id="about" className="py-20 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center md:justify-center gap-8">
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="md:w-1/2"
                        >
                            <p className="text-lg mb-6 text-black">
                                The Virtual Lab at NITK, hosted by the Centre for System Design (CSD), is redefining education and research by providing remote access to experiments typically conducted in physical labs. Our virtual labs replicate real-world lab environments, providing a comprehensive learning experience without geographical limitations.
                            </p>
                            <p className="text-lg mb-6 text-black">
                                CSD's initiatives go beyond virtual labs, engaging in outreach activities and workshops designed to foster innovation, collaboration, and practical learning experiences.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section id="features" className="py-10 bg-sky-100">
                <div className="container mx-auto px-4 max-w-[1100px]">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold mb-12"
                    >
                        Key Features
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-3 px-2">
                        {[
                        { icon: <Globe className="w-12 h-12 text-sky flex-shrink-0" />, title: "Remote Access", description: "Perform experiments from anywhere in the world." },
                        { icon: <Cpu className="w-12 h-12 text-sky flex-shrink-0" />, title: "Real-Time Data", description: "Obtain real-time results just as you would in a physical lab." },
                        { icon: <Users className="w-12 h-12 text-sky flex-shrink-0" />, title: "User-Friendly Interface", description: "Designed for a seamless and intuitive user experience." },
                        { icon: <Microscope className="w-12 h-12 text-sky flex-shrink-0" />, title: "Interactive Simulations", description: "Engage with high-quality simulations that closely mimic actual lab conditions." },
                        { icon: <Book className="w-12 h-12 text-sky flex-shrink-0" />, title: "Comprehensive Resources", description: "Access detailed manuals, tutorials, and support." },
                        { icon: <School className="w-12 h-12 text-sky flex-shrink-0" />, title: "Educational Impact", description: "Enhance learning outcomes through practical, hands-on virtual experiences." }
                        ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                        >
                            <h3 className="text-xl font-semibold mb-6">{feature.title}</h3>
                            <div className="flex items-center gap-4">
                                {feature.icon}
                                <p className="text-black">{feature.description}</p>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section id="labs" ref={labsRef} className="py-10 text-white">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold mb-12 text-center text-sky-800"
                    >
                        Labs Developed at NITK
                    </motion.h2>
                    <div className="flex flex-wrap mx-auto gap-4 max-w-[1100px]">
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
                        ].map(({ name, icon: Icon, link }, index) => (
                        <Link href={link} key={index} className="flex-grow">
                            <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-sky-200/60 text-sky-800 p-4 rounded-lg shadow-md flex items-center justify-center"
                            >
                                <Icon size={40} className="mr-4" />
                                <span>{name}</span>
                            </motion.div>
                        </Link>
                        ))}
                    </div>
                </div>
            </section>

            
            <section id="contribution" className="py-10 bg-sky-100">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold mb-12 text-center"
                    >
                        Contribution of CSD to VLab Development
                    </motion.h2>
                    <div className="grid grid-cols-5 items-stretch px-16 justify-center gap-3">
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
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center"
                        >
                            <h3 className="text-4xl font-bold mb-2 text-sky-800">{stat.number}</h3>
                            <p className="text-lg text-slate-600">{stat.label}</p>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section id="outreach" className="py-10 px-8">
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
                            <h3 className="text-2xl font-semibold mb-4 text-black">Our Nodal Centers</h3>
                            <p className="text-lg mb-6 text-slate-600">
                                NITK Surathkal mentors over 440 institutions that have partnered as our Nodal Centers. These include state technological universities, centrally funded technical institutes, private universities, and more.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <h4 className="font-semibold">Karnataka</h4>
                                    <p className="text-black">178 VLNCs</p>
                                </div>
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <h4 className="font-semibold">Kerala</h4>
                                    <p className="text-black">127 VLNCs</p>
                                </div>
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <h4 className="font-semibold">Tamil Nadu</h4>
                                    <p className="text-black">61 VLNCs</p>
                                </div>
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <h4 className="font-semibold">Other States</h4>
                                    <p className="text-black">74 VLNCs</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-black">Workshops and Training Programs</h3>
                            <p className="text-lg mb-6 text-slate-600">
                                The Virtual Labs team at NITK Surathkal has facilitated over 1,000 physical workshops and virtual training sessions, training more than 120,000 users nationwide.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <h4 className="font-semibold">Karnataka</h4>
                                    <p className="text-black">448 Workshops/Webinars</p>
                                </div>
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <h4 className="font-semibold">Kerala</h4>
                                    <p className="text-black">194 Workshops/Webinars</p>
                                </div>
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <h4 className="font-semibold">Tamil Nadu</h4>
                                    <p className="text-black">104 Workshops/Webinars</p>
                                </div>
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <h4 className="font-semibold">Other States</h4>
                                    <p className="text-black">119 Workshops/Webinars</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-sky-100">
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
                        className="text-xl mb-8 text-black"
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
        </div>
    )
}