import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  

  return (
    <div className="Navbar relative h-14 px-10 w-screen text-black items-center bg-slate-200 flex justify-between">
      <h1 className="text-xl w-4/6">Youssef Eddafali</h1>
      <div className={`hamburger cursor-pointer ${menuOpen ? 'close' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`overlay h-screen w-screen flex justify-between flex-col ${menuOpen ? 'open' : ''}`}>
        {/* <div className="closeBox w-screen cursor-pointer h-14 px-10 py-10" onClick={closeMenu}>
          <div className="line bg-white h-0.5 w-7 mb-1"></div>
          <div className="line bg-white h-0.5 w-7 mb-1"></div>
        </div> */}
        <div className="menuItems w-screen md:w-5/6 md:px-20 px-10 h-full flex flex-col justify-center items-start text-2xl md:text-5xl lg:text-6xl font-bold">
          <h1 className="cursor-pointer hover:text-black">Home</h1>
          <h1 className="cursor-pointer hover:text-black">Bio</h1>
          <h1 className="cursor-pointer hover:text-black">Work</h1>
          <h1 className="cursor-pointer hover:text-rose-600">Memoir: Through the Eyes of the Closest</h1>
          <h1 className="cursor-pointer hover:text-black">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;