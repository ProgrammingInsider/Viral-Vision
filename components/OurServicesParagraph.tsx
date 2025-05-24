import Image from 'next/image'
import React from 'react'

const OurServicesParagraph = () => {
  return (
    <div className='grid md:grid-cols-2 gap-12 items-center justify-center h-full py-24 w-11/12 mx-auto max-w-6xl'>
        <Image
            src='/images/services.jpg'
            alt="About Us"
            width={300}
            height={500}
            className="w-full h-auto object-cover object-center border-radius max-w-2xl col-span-1 order-1 md:order-0"
        />
      <div className='flex text-center flex-col md:text-left col-span-1 order-0 md:order-1'>
        <h1 className="sectionName text-center md:text-left ">Our Services</h1>
        <h1 className="sectionHeader text-center md:text-left px-3">We Build Digital Winners</h1>
        <p className="text-base text-center md:text-left">At Viral Vision Digital Marketing, we offer a comprehensive suite of digital marketing services designed to elevate your brand and deliver measurable results. From creating captivating content and managing social media platforms to executing targeted PPC campaigns and developing highperforming websites, our solutions are tailored to meet your unique business goals. Whether you are looking to build brand awareness, drivetraffic, or boost conversions, our expert team is here to turn your visioninto reality with creativity, strategy, and innovation.</p>
        
      </div>
    </div>
  )
}

export default OurServicesParagraph