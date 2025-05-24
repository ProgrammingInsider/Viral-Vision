import React from 'react'
import { LuBrain } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa6";
import { PiTreeStructureFill } from "react-icons/pi";
import { FaCropSimple } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";

// Why Choose Us Section
const WhyChooseUs = [
    {
        icon: <PiTreeStructureFill />,
        title: "Strategic Approach",
        description: "We don’t do guesswork. Everything is backed by research, planning, and analytics.",
    },
    {
        icon: <LuBrain />,
        title: "Creative Excellence",
        description: "Our designs and content aren’t just good looking,they’re built to engage and convert.",
    },
    {
        icon: <FaClipboardList />,
        title: "Result-Oriented",
        description: "We focus on delivering ROI through proven digital marketing techniques.",
    },
    {
        icon: <FaCropSimple />,
        title: "Tailored Solutions",
        description: "No two brands are the same. We customize our services to match your business goals.",
    },
    {
        icon: <MdGroups />,
        title: "Experienced Team",
        description: "With expertise across every facet of digitalmarketing, we’re your one-stop solution.",
    },
]

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-24">
        <h1 className="sectionName">Why Choose Us</h1>
        <h1 className="sectionHeader px-3">Your Digital Growth Partner</h1>
        <p className="text-base text-center px-3">We’re proud to collaborate with brands that inspire growth, innovation, and excellence.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 flex-wrap items-center justify-center max-w-6xl w-full gap-4 mx-auto p-4 mt-12">
            {
                WhyChooseUs.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 justify-center w-full h-full p-6 max-w-96 rounded-lg card-bg border-radius border col-span-1 box-shadow hover:btn-primary-bg">
                        <div className="text-center text-5xl primary-text">
                            {item.icon}
                        </div>
                        <h1 className="text-lg heading-color font-black">{item.title}</h1>
                        <p className="text-base">{item.description}</p>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default WhyUs