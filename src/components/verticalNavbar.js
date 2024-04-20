import React, { useState, useEffect } from 'react';

const VerticalNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  // const [showHamburger, setShowHamburger] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = window.innerHeight/3;

      if (scrollTop <= scrollThreshold) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define classes based on showNavbar and window width
  const ulClasses = `${showNavbar ? 'sm:block' : 'hidden'}`;

  return (
    <div className="vertical-navbar text-xs sm:text-sm py-[20px] sm:px-[20px] px-[4px]">
      <ul className={ulClasses}>
        <li className='hover:underline decoration-black transition-tranform ease-in-out duration-300 z-0'><a href="#">home</a></li>
        <li className='hover:underline decoration-black transition-tranform ease-in-out duration-300 z-0'><a href="#publications">publications</a></li>
        <li className='hover:underline decoration-black transition-tranform ease-in-out duration-300 z-0'><a href="#features">features</a></li>
        <li className='hover:underline decoration-black transition-tranform ease-in-out duration-300 z-0'><a href="#contactMe">contact me</a></li>
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
};

export default VerticalNavbar;
