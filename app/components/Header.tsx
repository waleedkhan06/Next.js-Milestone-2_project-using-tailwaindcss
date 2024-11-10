"use client";

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>, 
    target: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="bg-gray-900 text-cyan-400 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link href="#home">
            <Image src="/logo.png" alt="Logo" width={80} height={44} />
          </Link>
          <span className="text-xl font-bold">My Portfolio</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 justify-center flex-grow">
          {['Home', 'About', 'Projects', 'Services', 'Contact', 'Skills'].map((item, index) => (
            <Link 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
              className="hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Menu Button for Mobile */}
        <div className="flex items-center space-x-4 text-cyan-400">
          <button className="md:hidden" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-center py-4">
          <div className="flex flex-col space-y-2">
            {['Home', 'About', 'Projects', 'Services', 'Contact', 'Skills'].map((item, index) => (
              <Link 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
                className="hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
