'use client';
import Image from 'next/image';
import React from 'react';
import localFont from "next/font/local";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter

// Load local font with proper weight range
const geistdancingScript = localFont({
  src: "../fonts/DancingScript-Medium.ttf",
  variable: "--font-dancing-script",
  weight: "400 900",
});

const Topbar = React.memo(() => {
  const pathname = usePathname(); // Get the current pathname

  // Links array
  const links = [
    { name: 'Home', path: '/edupy/home' },
    { name: 'Our product', path: '/edupy/our-product' },
    { name: 'About', path: '/edupy/about' },
    { name: 'Our Team', path: '/edupy/our-team' },
    { name: 'Contact', path: '/edupy/contact' }
  ];

  return (
    <div className='bg-teal-500  text-white font-bold text-2xl px-4 py-2 sticky z-50 top-0 left-0 right-0 flex items-center space-x-2 justify-between'>
      <div className='flex justify-center items-center space-x-2'>
        <Image 
          src={"/images/logo.png"} 
          alt="edupy logo" 
          width={60} 
          height={60} 
          priority // Ensures this image loads quickly
        />
        <p className={`${geistdancingScript.variable} font-bold text-4xl`} style={{ fontFamily: 'var(--font-dancing-script)' }}>
          Edupy
        </p>
      </div>
      <div className='flex justify-evenly space-x-4'>
        {/* Render links dynamically */}
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            prefetch // Ensures the link is prefetched
            className={`relative text-lg font-normal hover:text-blue-500 transition-all duration-300
              ${pathname === link.path ? 'text-blue-500 active-link' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
});

export default Topbar;
