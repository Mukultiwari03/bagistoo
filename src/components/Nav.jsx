import React, { useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";

const Nav = () => {
  // State for toggling mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Navbar container with white background and black text
    <nav className="bg-white p-4 text-black  w-full">
        <div>
      {/* Container for logo and menu items */}
      <div className=" w-full px-4 flex justify-between items-center">

        <div className='flex  items-center justify-around lg:mx-0 sm:me-auto'>
        {/* Logo */}
        <div>
        <img src="https://demo.bagisto.com/bagisto-common/themes/shop/default/build/assets/logo-942157c2.svg" alt="logo"/>
        </div>
   {/* Desktop menu items */}
        <div className="hidden md:flex items-center space-x-4 ms-6">
          <a href="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md ">Home</a>
          <a href="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md ">About</a>
          <a href="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md ">Services</a>
          <a href="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md ">Contact</a>
        </div>
        </div>
        {/* Hamburger menu button for mobile view */}
        <div className="md:hidden lg:mx-0 sm:ms-auto">
          <button className="text-black focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
     
       
        {/* Search bar */}
        <div className='lg:flex items-center hidden justify-evenly w-[30%]'>

     
        <div className="hidden md:flex items-center  bg-gray-100 hover:border-[#000]  rounded-md">
          <input type="text" placeholder="Search..." className="text-gray-600 rounded-md placeholder-gray-400 border-none outline-none bg-gray-100 py-2 px-4 "/>
          <button className="pe-3">
            <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="10.5" cy="10.5" r="7.5"/>
              <line x1="21" y1="21" x2="15.8" y2="15.8"/>
            </svg>
          </button>
        </div>
        <MdCompareArrows className='hidden md:flex' />

        <BsBag className='hidden md:flex' />
        <IoPersonOutline className='hidden md:flex'/>
        </div>
      </div>
      {/* Mobile menu items */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="/" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>

      </div>
    </nav>
  );
};

export default Nav;