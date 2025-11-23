import AboutUsParagraph from '@/components/AboutUsParagraph';
import ContactUs from '@/components/ContactUs';
import Hero from '@/components/Hero';
import Inspiration from '@/components/Inspiration';
// import OurPackages from '@/components/OurPackages';
import Partners from '@/components/Partners';
import WhyUs from '@/components/WhyUs';
import OurWorks from '@/components/OurWorks';
import { OurWorksData } from '@/utils/localstorage';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsParagraph />
      <div className="section-two-bg">
        <OurWorks ourWorks={OurWorksData().slice(0, 4)} />
      </div>
      <div className="section-bg">
        <WhyUs />
      </div>
      {/* <OurPackages packages={PackagesData().slice(0, 3)} /> */}
      <Partners />
      <Inspiration />
      <ContactUs />
    </>
  );
}
