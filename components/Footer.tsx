import Link from 'next/link'
import { FaLinkedinIn, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import SocialMedia from './SocialMedia';


export const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook className="text-xl" />,
    link: "https://www.facebook.com/viralvisiondigitalmarketing"
  },
  {
    name: "Tiktok",
    icon: <FaTiktok className="text-xl" />,
    link: "https://tiktok.com/@viralvisiondigitalmarket"
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-xl" />,
    link: "https://www.instagram.com/viral_vision_digital_marketing"
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane className="text-xl" />,
    link: "https://t.me/Viral_Vision"
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn className="text-xl" />,
    link: "https://www.linkedin.com/company/viralvisiondigitalmarketing/"
  },
]


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
          <p className='mb-3'><b className='text-white text-base'>Location: </b>Ethiopia, Addis Ababa, Mickey Leland st.</p>
          <p className='mb-3'><b className='text-white text-base'>Phone: </b>+251924434904/ +251996555298/ +251947598917</p>
          <p><b className='text-white text-base'>Mail Us: </b>viralvision2017@gmail.com
          </p>
        </div>
      </div>
      <div className='lower-footer h-20 text-white flex justify-between items-center px-5 gap-5'>
        <span className='text-base'>© 2025 Viral Vision. All Rights Reserved.</span>
        <div className="flex justify-center items-center rounded-full gap-2">
          {
            socialLinks.map((social, index) => (
              <SocialMedia key={index} name={social.name} icon={social.icon} link={social.link} />
            ))
          }
        </div>
</div>
    </div>
  )
}

export default Footer