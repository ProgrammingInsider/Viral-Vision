import Image from 'next/image';
import React from 'react';
import Button from './Button';

const AboutUsParagraph = ({ button = true }: { button?: boolean }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center justify-center h-full py-24 w-11/12 mx-auto max-w-6xl">
      <Image
        src="/images/aboutus.jpg"
        alt="About Us"
        width={300}
        height={500}
        className="w-full h-auto object-cover object-center border-radius max-w-2xl col-span-1 order-1 md:order-0"
      />
      <div className="flex text-center flex-col md:text-left col-span-1 order-0 md:order-1">
        <h1 className="sectionName text-center md:text-left ">About Us</h1>
        <h1 className="sectionHeader text-center md:text-left">
          Bespoke Solution Provider (BSP)
        </h1>
        <p className="text-base text-center md:text-left">
          At Bespoke Solution Provider, we believe every challenge deserves a
          unique solution. In today’s rapidly evolving digital world,
          off-the-shelf products often fail to meet the needs of governments,
          industries, and businesses. That’s why we focus on delivering
          tailored, efficient, and scalable digital solutions that solve
          real-world problems.
        </p>
        <br />
        <p className="text-base text-center md:text-left">
          With expertise spanning web development, mobile applications,
          enterprise software, AI-powered tools, branding, and digital
          marketing, we combine innovation with local knowledge to help you
          achieve sustainable growth.
        </p>
        {button && (
          <div className="mt-8 flex md:justify-start justify-center items-center">
            <Button link="aboutus" value="About Us" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUsParagraph;
