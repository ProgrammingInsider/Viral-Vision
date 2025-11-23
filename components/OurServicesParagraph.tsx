import Image from 'next/image';
import React from 'react';

const OurServicesParagraph = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center justify-center h-full py-24 w-11/12 mx-auto max-w-6xl">
      <Image
        src="/images/services.jpg"
        alt="About Us"
        width={300}
        height={500}
        className="w-full h-auto object-cover object-center border-radius max-w-2xl col-span-1 order-1 md:order-0"
      />
      <div className="flex text-center flex-col md:text-left col-span-1 order-0 md:order-1">
        <h1 className="sectionName text-center md:text-left ">Our Services</h1>
        <h1 className="sectionHeader text-center md:text-left px-3">
          We Build Digital & Technology Winners
        </h1>
        <p className="text-base text-center md:text-left">
          At Bespoke Solution Provider, we offer a full suite of digital and
          technology solutions designed to empower your business and drive
          measurable results. From crafting high-impact social media campaigns,
          content marketing, and branding strategies to executing targeted PPC
          campaigns, developing high-performance websites, mobile apps, and
          enterprise AI solutions. our offerings are tailored to meet your
          unique goals. Whether you aim to increase brand awareness, drive
          engagement, streamline operations, or boost conversions, our expert
          team combines creativity, strategy, and innovation to turn your vision
          into reality.
        </p>
      </div>
    </div>
  );
};

export default OurServicesParagraph;
