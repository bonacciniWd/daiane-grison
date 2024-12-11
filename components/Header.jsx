import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed lg:px-16 p-2 w-screen bg-black bg-opacity-45 flex flex-wrap items-center shadow-tantra-light/40 border-tantra shadow-sm z-50">
      <div className="flex-1 flex justify-between items-center mix-blend-screen">
        <Image 
          src="/icons/logo.svg"
          width={160}
          height={50}
          alt="logo"
          className="flex mx-auto lg:mx-10 md:mx-0"
        />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="cursor-pointer md:hidden block p-4"
        aria-label="Toggle menu"
      >
        <svg
          className="fill-current text-slate-100"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      {/* Navigation Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:flex md:items-center md:w-auto w-full`}
        id="menu"
      >
        <nav>
          <ul className="grid grid-cols-2 gap-4 text-center text-base text-slate-100 pt-4 md:pt-0">
            <li>
              <a className="p-4 block hover:text-sky-400" href="#">Home</a>
            </li>
            <li>
              <a className="p-4 block hover:text-sky-400" href="#">Services</a>
            </li>
            <li>
              <a className="p-4 block hover:text-sky-400" href="#">About Us</a>
            </li>
            <li>
              <a className="p-4 block hover:text-sky-400" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
