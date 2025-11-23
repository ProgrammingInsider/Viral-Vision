'use client';

import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineClose } from 'react-icons/md';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
// import Image from 'next/image';

const Header = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/aboutus', name: 'About Us' },
    { path: '/ourservices', name: 'Our Services' },
    { path: '/ourworks', name: 'Our Works' },
    { path: '/contactus', name: 'Contact Us' },
  ];

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = hideMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [hideMenu]);

  return (
    <div>
      {/* Header Wrapper */}
      <div
        className={`lg:flex justify-between items-center background w-screen h-24 header-bg border-color box-shadow transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'
        }`}
      >
        {/* Logo + Hamburger */}
        <div className="lg:flex h-full w-full max-w-7xl mx-auto">
          <div className="lg:rounded-s-full flex h-full justify-between items-center w-11/12 mx-auto lg:max-w-7xl">
            <Link href="/" className="font-bold primary-text text-2xl">
              {/* <Image
                src={'/images/Logo.png'}
                alt={`Viral Vision Logo`}
                width={300}
                height={100}
                className="w-44 h-full object-cover"
                priority
              /> */}
              <h1 className="font-extrabold text-5xl">BSP</h1>
              <p className="italic text-xs">
                &quot;ustom solutions. Real impact.&quot;
              </p>
              {/* ViralVision */}
            </Link>
            <RxHamburgerMenu
              className="text-3xl cursor-pointer lg:hidden"
              onClick={() => setHideMenu(true)}
            />
          </div>
        </div>

        {/* Dark overlay when menu is open */}
        {hideMenu && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setHideMenu(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        <nav
          className={`fixed background top-0 left-0 bottom-0 w-full sm:w-80 flex flex-col justify-center lg:items-center text-xl heading font-medium p-8 transform transition-transform duration-500 z-50 header-bg lg:z-0 ${
            hideMenu ? 'translate-x-0' : '-translate-x-full'
          } lg:relative lg:flex-row lg:justify-end lg:gap-7 lg:translate-x-0 lg:w-auto`}
        >
          <MdOutlineClose
            className="absolute text-5xl para top-2 right-2 cursor-pointer border rounded-full p-2 para lg:hidden"
            onClick={() => setHideMenu(false)}
          />
          {navLinks.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className={`py-5 border-b border-gray-200 lg:border-0 lg:py-0 text-nowrap text-base ${
                pathname === path ? 'primary-text font-bold' : 'header-text'
              }`}
              onClick={() => setHideMenu(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
