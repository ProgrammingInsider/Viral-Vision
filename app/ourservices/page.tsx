import Banner from '@/components/Banner';
import ContactUs from '@/components/ContactUs';
import Inspiration from '@/components/Inspiration';
import OurPackages from '@/components/OurPackages';
import OurServicesParagraph from '@/components/OurServicesParagraph';
import Services from '@/components/Services';
import { PackagesData } from '@/utils/localstorage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - BESPOKE SOLUTION PROVIDER',
};

const OurServices = () => {
  return (
    <>
      <Banner pageName="Our Services" page="Services" url="/ourservices" />
      <OurServicesParagraph />
      <div className="section-bg">
        <Services />
      </div>
      {/* <OurPackages button={false} packages={PackagesData()} /> */}
      <Inspiration />
      <ContactUs />
    </>
  );
};

export default OurServices;
