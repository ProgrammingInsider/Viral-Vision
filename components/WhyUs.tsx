import React from 'react';

import {
  Target,
  Layers,
  Shield,
  Users,
  Compass,
  Palette,
  TrendingUp,
  Award,
} from 'lucide-react';

const WhyChooseUs = [
  {
    icon: <Target size={40} />,
    title: 'Problem-first',
    description: 'We analyse your pain points before jumping into solutions.',
  },
  {
    icon: <Layers size={40} />,
    title: 'Tailored Solutions',
    description:
      'Every solution is built to fit your unique organisation and goals.',
  },
  {
    icon: <Shield size={40} />,
    title: 'Reliable',
    description: 'We deliver on time and on budget.',
  },
  {
    icon: <Users size={40} />,
    title: 'Collaborative',
    description: 'We partner closely with you, your success is our success.',
  },
  {
    icon: <Compass size={40} />,
    title: 'Strategic Approach',
    description:
      'No guesswork: our work is backed by research, planning, and analytics.',
  },
  {
    icon: <Palette size={40} />,
    title: 'Creative Excellence',
    description:
      'Designs and content that look great and are built to engage and convert.',
  },
  {
    icon: <TrendingUp size={40} />,
    title: 'Result-Oriented',
    description:
      'We focus on measurable ROI using proven digital marketing and product practices.',
  },
  {
    icon: <Award size={40} />,
    title: 'Experienced Team',
    description:
      'Cross-disciplinary expertise across web, mobile, AI, branding and marketing.',
  },
];

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-24">
      <h1 className="sectionName">Why Choose Us</h1>
      <h1 className="sectionHeader px-3">Your Digital Growth Partner</h1>
      <p className="text-base text-center px-3">
        We’re proud to collaborate with brands that inspire growth, innovation,
        and excellence.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 flex-wrap items-center justify-center max-w-6xl w-full gap-4 mx-auto p-4 mt-12">
        {WhyChooseUs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-center w-full h-full p-6 max-w-96 rounded-lg card-bg border-radius border col-span-1 box-shadow hover:btn-primary-bg"
          >
            <div className="text-center text-5xl primary-text">{item.icon}</div>
            <h1 className="text-lg heading-color font-black">{item.title}</h1>
            <p className="text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
