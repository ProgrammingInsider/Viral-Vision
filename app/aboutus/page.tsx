import AboutUsParagraph from '@/components/AboutUsParagraph';
import OurIdentity from '@/components/OurIdentity';
import Partners from '@/components/Partners';
import WhyUs from '@/components/WhyUs';
import Banner from '@/components/Banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - BESPOKE SOLUTION PROVIDER',
};

const AboutUs = () => {
  return (
    <>
      <Banner pageName="About Us" page="about" url="/aboutus" />
      <AboutUsParagraph button={false} />
      <div className="section-two-bg">
        <OurIdentity />
      </div>
      <div className="section-bg">
        <WhyUs />
      </div>
      <Partners />
    </>
  );
};

export default AboutUs;
