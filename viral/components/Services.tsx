import Service from '@/components/Service';
import { serviceType } from "@/utils/types";
import Button from './Button';
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";
import { GiClick } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const services: serviceType[] = [
  {
      id: 1,
      name: "Social Media Marketing",
      banner: "/images/services/smm.jpg",
      slogan: "Turn Clicks into Customers",
      icon: <GrAnnounce className='btn-primary-text text-4xl' />,
      description: "We craft compelling social media campaigns that drive engagement, build brand awareness, and generate leads. From strategy development to targeted ad placements on platforms like Facebook, Instagram, LinkedIn, and more. We ensure your brand gets noticed by the right audience."
  },
  {
        id: 2,
      name: "Content Marketing",
      banner: "/images/services/contentmarketing.jpg",
      slogan: "Content That Converts",
      icon: <MdOutlineContentPasteSearch className='btn-primary-text text-4xl' />,
      description: "We create valuable, relevant, and consistent content that attracts and retains your target audience. From blog posts and infographics to videos and email newsletters, we help you build authority and trust, turning readers into loyal customers."
  },
  {
        id: 3,
      name: "Branding & Creative Services",
      banner: "/images/services/branding.jpg",
      slogan: "Designs That Speak Your Brand’s Language",
      icon: <IoPricetag className='btn-primary-text text-4xl' />,
      description: "Your brand identity is the foundation of your business. We help you craft a powerful brand image through logo design, brand guidelines, visual storytelling, and creative assets that reflect your values and captivate your audience."
  },
  {
        id: 4,
      name: "Pay-Per-Click Advertising",
      banner: "/images/services/ppc.jpg",
      slogan: "Get Instant Visibility and ROI",
      icon: <GiClick className='btn-primary-text text-4xl' />,
      description: "With expertly managed Google Ads and social media ad campaigns, we help you appear right where your customers are searching. Our PPC strategies are built for performance, ensuring you get maximum return for your ad spend."
  },
  {
        id: 5,
      name: "Social Media Management",
      banner: "/images/services/socialmediamanagement.jpg",
      slogan: "Build and Nurture Your Online Community",
      icon: <MdManageAccounts className='btn-primary-text text-4xl' />,
      description: "From planning content calendars to posting, monitoring, and engaging with your followers—we handle all aspects of your social media accounts. Our goal is to keep your audience engaged, informed, and connected with your brand."
  },
  {
        id: 6,
      name: "Web Design & Development",
      banner: "/images/services/webdesignanddevelopment.jpg",
      slogan: "Modern Websites That Work for You",
      icon: <CgWebsite className='btn-primary-text text-4xl' />,
      description: "We design and develop stunning, responsive websites that not only look professional but also offer a seamless user experience. Whether you're starting from scratch or need a redesign, we ensure your site reflects your brand and helps achieve yourbusiness goals."
  }    
]


const Services = () => {
  return <>
    <div className="flex flex-col items-center justify-center w-full h-full py-24">
      <h1 className="sectionName">Our Core Services</h1>
      <h1 className="sectionHeader">Comprehensive Digital Marketing Solutions</h1>
      <p className="text-base text-center">From strategy to execution—we offer everything you need to succeed online.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 flex-wrap items-center justify-center max-w-6xl w-full gap-4 mx-auto p-4 mt-12">
            {services.map((service, index) => (
                <Service key={index} service={service} />
            ))}
        </div>
        <div className='mt-18'>
            <Button link='ourworks' value='See Our Work'/>
        </div>

    </div>
  </>
}

export default Services