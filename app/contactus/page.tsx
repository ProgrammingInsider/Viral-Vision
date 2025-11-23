import Banner from '@/components/Banner';
import Contact from '@/components/ContactUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - BESPOKE SOLUTION PROVIDER',
};

const ContactUs = () => {
  return (
    <>
      <Banner pageName="ContactUs" page="Contact" url="/contactus" />
      <Contact />
    </>
  );
};

export default ContactUs;
