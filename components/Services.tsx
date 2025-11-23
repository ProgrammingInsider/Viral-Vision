import {
  Megaphone,
  FileSearch,
  MousePointerClick,
  UserCog,
  MonitorSmartphone,
  Smartphone,
  Cpu,
  Tag,
  Lightbulb,
} from 'lucide-react';

import { serviceCategoryType } from '@/utils/types';

export const services: serviceCategoryType[] = [
  {
    category: 'Digital Solutions',
    services: [
      {
        id: 1,
        name: 'Web Design & Development',
        banner: '/images/services/webdesignanddevelopment.jpg',
        slogan: 'Modern, Fast, and Conversion-Focused Websites',
        icon: <MonitorSmartphone size={30} />,
        description:
          'We design and build high-performance websites that look stunning, load fast, and are optimized to convert visitors into customers.',
      },
      {
        id: 2,
        name: 'Mobile App Development',
        banner: '/images/services/mobileapp.jpg',
        slogan: 'Your Ideas, Delivered in the Palm of Your Hand',
        icon: <Smartphone size={30} />,
        description:
          'We develop robust, scalable, cross-platform mobile apps with intuitive UX and seamless performance for Android and iOS.',
      },
      {
        id: 3,
        name: 'Enterprise Software & AI Solutions',
        banner: '/images/services/enterprise.jpg',
        slogan: 'Automate, Optimize, and Scale with AI',
        icon: <Cpu size={30} />,
        description:
          'From ERP systems to intelligent analytics and AI-powered automation tools, we build enterprise-grade solutions tailored to your unique business operations.',
      },
    ],
  },

  {
    category: 'Professional Services',
    services: [
      {
        id: 4,
        name: 'Research & Consultation',
        banner: '/images/services/consultation.jpg',
        slogan: 'Expert Guidance for Your Digital Transformation',
        icon: <Lightbulb size={30} />,
        description:
          'We provide strategic consulting on technology choices, system architecture, cybersecurity, compliance, and digital transformation roadmaps.',
      },
    ],
  },
  {
    category: 'Digital Marketing',
    services: [
      {
        id: 5,
        name: 'Social Media Marketing',
        banner: '/images/services/smm.jpg',
        slogan: 'Turn Clicks into Customers',
        icon: <Megaphone size={30} />,
        description:
          'We craft targeted, high-impact social media campaigns that drive engagement, build awareness, and convert audiences across Facebook, Instagram, LinkedIn, TikTok, and more.',
      },
      {
        id: 6,
        name: 'Social Media Management',
        banner: '/images/services/socialmediamanagement.jpg',
        slogan: 'Grow, Engage, and Nurture Your Community',
        icon: <UserCog size={30} />,
        description:
          'We manage posting, content calendars, engagement, and audience interaction so your brand stays active, consistent, and relevant across all social platforms.',
      },
      {
        id: 7,
        name: 'Content Marketing',
        banner: '/images/services/contentmarketing.jpg',
        slogan: 'Content That Builds Trust and Converts',
        icon: <FileSearch size={30} />,
        description:
          'We produce blogs, videos, graphics, and email content designed to attract, educate, and convert your audience while strengthening brand authority.',
      },
      {
        id: 8,
        name: 'Pay-Per-Click Advertising (PPC)',
        banner: '/images/services/ppc.jpg',
        slogan: 'Instant Visibility. Measurable ROI.',
        icon: <MousePointerClick size={30} />,
        description:
          'Our Google Ads and social media PPC campaigns ensure your business appears where your customers are searching — maximizing conversions and minimizing wasted spend.',
      },
      {
        id: 9,
        name: 'Branding & Digital Marketing',
        banner: '/images/services/branding.jpg',
        slogan: 'Build a Brand That Customers Remember',
        icon: <Tag size={30} />,
        description:
          'We create compelling brand identities supported by strategic digital marketing that boosts credibility, awareness, and growth.',
      },
    ],
  },
];

import Service from '@/components/Service';
import Button from './Button';

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-24">
      <h1 className="sectionName">Our Core Services</h1>
      <h1 className="sectionHeader px-3">Comprehensive Digital Solutions</h1>
      <p className="text-base text-center px-3">
        From digital marketing to enterprise solutions—we power your growth.
      </p>

      {services.map((section, index) => (
        <div key={index} className="w-full max-w-6xl mt-16 px-4">
          <h2 className="text-2xl font-bold heading-color mb-6 text-center">
            {section.category}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.services.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </div>
      ))}

      <div className="mt-20">
        <Button link="ourworks" value="See Our Work" />
      </div>
    </div>
  );
};

export default Services;
