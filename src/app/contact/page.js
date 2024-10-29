'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="min-h-screen flex flex-wrap p-10 mt-20 gap-4 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-1/2 bg-[#1a0033] p-8 text-white">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold mb-2"
            >
              Contact Us
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl font-semibold mb-6 text-gray-300"
            >
            Prof. K V Gangadharan<br/>
            Centre for System Design NITK
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6" />
                <span>+91-0824-2473915</span>
              </div>
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6" />
                <span>solve@nitk.ac.in</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6" />
                <span>Centre for System Design NITK, Surathkal,  P. O. Srinivasnagar ,  Mangalore - 575 025
              <br />
              Karnataka, India</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8"
            >
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3873161701317!2d74.79241407591725!3d13.010989614011752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211a8f87b71%3A0x98c62e6ee41ce923!2sCentre%20for%20System%20Design!5e0!3m2!1sen!2sin!4v1716810078192!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="csd"
              ></iframe>
            </motion.div>
          </div>
          <div className="md:w-1/2 p-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-semibold mb-6"
            >
              Send us a message
            </motion.h3>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}