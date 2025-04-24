import Link from 'next/link'
import { FaLinkedinIn } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='footer-text upper-footer w-full overflow-x-hidden'>
      <div className='flex flex-col justify-between gap-20 py-32 px-8 md:flex-row max-w-screen-xl w-full mx-auto'>
        <div className='w-11/12 max-w-xl mx-auto'>
          <h1 className='footerHeading text-white font-bold text-2xl mb-6'>Company Overview</h1>
          <p className='text-sm sm:text-base leading-[24px] md:leading-[26px]'>
          We’re passionate about helping businesses grow and thrive in the digital world. Our team of creative thinkers, strategists, and digital experts work together to deliver innovative solutions that boost brand awareness, generate quality leads, and drive measurable results. From developing powerful content and engaging social media strategies to designing stunning websites and running high-converting ad campaigns – we bring visions to life.
          </p>
        </div>

        <div className='w-11/12 max-w-xl mx-auto'>
          <h1 className='footerHeading text-white font-bold text-2xl mb-6'>Our Services</h1>

          <div className='flex flex-col gap-2 text-base footer-text'>
            <Link href={"/ourservices"} className='hover:text-white'>Social Media Marketing</Link>
            <Link href={"/ourservices"} className='hover:text-white'>Content Marketing</Link>
            <Link href={"/ourservices"} className='hover:text-white'>Branding & Creative Services</Link>
            <Link href={"/ourservices"} className='hover:text-white'>Pay-Per-Click (PPC) Advertising</Link>
            <Link href={"/ourservices"} className='hover:text-white'>Social Media Management</Link>
            <Link href={"/ourservices"} className='hover:text-white'>Web Design & Development</Link>
          </div>

        </div>
        <div className='w-11/12 max-w-xl mx-auto'>
          <h1 className='footerHeading text-white font-bold text-2xl mb-6'>Get In Touch</h1>
          <p className='mb-3'><b className='text-white text-base'>Location: </b>Ethiopia, Addis Ababa, Haya Hulet</p>
          <p className='mb-3'><b className='text-white text-base'>Phone: </b>+25191234567</p>
          <p><b className='text-white text-base'>Mail Us: </b>viralvision@gmail.com
          </p>
        </div>
      </div>
      <div className='lower-footer h-20 text-white flex justify-between items-center px-5 gap-5'>
        <span className='text-base'>© 2025 Viral Vision. All Rights Reserved.</span>
        <div className="flex justify-center items-center rounded-full gap-2">
          <Link href="#" target="_blank" className='w-8 h-8 flex justify-center items-center btn-primary-bg rounded-full p-2'>
          <FaLinkedinIn  className="text-xl text-white" />
          </Link>
          <Link href="https://wa.me/" target="_blank" className='w-8 h-8 flex justify-center items-center btn-primary-bg rounded-full p-2'>
          <PiWhatsappLogoBold className="text-xl text-white " />
          </Link>
        </div>
</div>
    </div>
  )
}

export default Footer