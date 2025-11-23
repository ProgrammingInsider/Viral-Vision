'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Button from './Button';

const heroContent = [
  {
    image: '/images/hero.jpg',
    heading: 'Transforming Ideas Into Tailored Digital Solutions',
    para: 'We solve your toughest business challenges with bespoke web, mobile, and enterprise technologies.',
    href: 'contactus',
    linkText: 'Get Started ',
  },
  {
    image: '/images/hero1.jpg',
    heading: 'Custom-Made Digital Solutions That Work',
    para: 'From web apps to enterprise software, we design and build technology that delivers results.',
    href: 'contactus',
    linkText: 'Let’s Build Together',
  },
  {
    image: '/images/hero2.jpg',
    heading: 'Solve Your Business Challenges With Technology',
    para: 'We create smart, flexible, and scalable solutions for companies and governments.',
    href: 'ourworks',
    linkText: 'See How',
  },
  {
    image: '/images/hero3.jpg',
    heading: 'Your Partner For Custom Technology Solutions',
    para: 'Collaborate with our experts to design, build, and grow your digital infrastructure.',
    href: 'contactus',
    linkText: 'Book a Consultation',
  },
  {
    image: '/images/hero4.jpg',
    heading: 'Empowering Your Digital Transformation',
    para: 'We combine innovation and local expertise to drive growth and efficiency for your business.',
    href: 'aboutus',
    linkText: 'Let’s Get Started',
  },
];

const Hero = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop
        className="hero-slider"
      >
        {heroContent.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-[50vh] lg:h-[calc(100vh-96px)] flex flex-col items-center justify-center">
              <Image
                src={content.image}
                alt={`Hero Slide ${index + 1}`}
                fill
                className="w-full h-full object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
              {/* Content */}
              <div className="absolute lg:translate-y-16 inset-0 flex flex-col items-center sm:items-start justify-center text-white text-center z-20  w-full sm:w-4/5 max-w-5xl lg:max-w-7xl mx-auto mb-3 md:mb-7">
                <div className="w-4/5 lg:w-3/5 flex flex-col justify-center">
                  <h1 className="headline leading-10 md:leading-16 lg:leading-20">
                    {content.heading}
                  </h1>
                  <p className="text-base sub-headline">{content.para}</p>
                  {/* <Link href={content.href} className="btn btn-primary mt-3">
                    {content.linkText}
                  </Link> */}
                  <div className="mt-4 flex justify-start items-center">
                    <Button link={content.href} value={content.linkText} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows OUTSIDE the Swiper */}
      <div className="custom-swiper-button-prev swiper-nav-button">‹</div>
      <div className="custom-swiper-button-next swiper-nav-button">›</div>
    </div>
  );
};

export default Hero;
