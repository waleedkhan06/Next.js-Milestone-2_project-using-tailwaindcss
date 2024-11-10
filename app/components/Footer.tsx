"use client";
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-6 bg-gray-900 text-cyan-400 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-gray-300">&copy; {currentYear} Waleed Khan. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/waleedkhan-/" target="_blank" 
          rel="noopener noreferrer">
            <Image 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg" 
              alt="LinkedIn" 
              width={32} 
              height={32} 
              className="hover:opacity-80 transition duration-200" 
            />
          </a>
          <a href="https://github.com/waleedkhan06" target="_blank" rel="noopener noreferrer">
            <Image 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" 
              alt="GitHub" 
              width={32} 
              height={32} 
              className="hover:opacity-80 transition duration-200" 
            />
          </a>
        </div>
      </div>

      {isVisible && (
        <button 
        onClick={scrollToTop} 
        className="fixed bottom-6 right-6 bg-black text-cyan-400 p-3 rounded-full shadow-lg 
          hover:bg-yellow-300 transition duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
      )}
    </footer>
  );
}
