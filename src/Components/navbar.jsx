import { useState ,useEffect } from 'react';
import React from 'react';

import { useNavigate } from 'react-router-dom';







export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
      };

      const handleHomeClick = () => {
        navigate('/'); // Navigate to the login page
      };

      const handleAboutClick = () => {
        navigate('/about'); // Navigate to the login page
      };

      const handleContactClick = () => {
        navigate('/contact'); // Navigate to the login page
      };

      

  return (
    <>
    <div className='h-auto bg-slate-950 '>
    <nav className='w-full bg-indigo-200 h-14 flex justify-between items-center px-10 md:px-[90px]'>
            <div className='text-2xl text-indigo-700 font-bold'>
                PW Skills
            </div>
            <div className='md:hidden'>
                <a className='text-4xl' href="#" onClick={toggleMenu}>&#8801;</a>
            </div>
            <ul className={`md:flex font-semibold absolute top-[60px] rounded-xl right-5 bg-indigo-200 md:relative md:top-auto md:right-auto p-1 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
  
       <li className='mx-[10px] cursor-pointer hover:bg-indigo-300 p-2 rounded-xl hover:shadow-md' onClick={handleHomeClick}>Home</li>
                <li className= 'mx-[10px] cursor-pointer hover:bg-indigo-300 p-2 rounded-xl hover:shadow-md' onClick={handleAboutClick}>About Us</li>
                <li className='mx-[10px] cursor-pointer hover:bg-indigo-300 p-2 rounded-xl hover:shadow-md pb-3' onClick={handleContactClick}>Contact Us</li>
                <li className='bg-indigo-700 p-2 rounded-lg text-white md:hidden cursor-pointer' onClick={handleLoginClick}>Login/Signup</li> 
               
</ul>

<div className='bg-indigo-700 p-2 rounded-lg text-white hidden md:block cursor-pointer hover:shadow-md ' onClick={handleLoginClick}>
        Login/Signup
      </div>
        </nav>
     
    </div>
    </>
  );
} 