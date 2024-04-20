import React, { useState } from "react";
// import {Link} from "react";
import "../App.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  const nav = document.getElementById('nav')
  const line1 = document.getElementById('line1')
  const line2 = document.getElementById('line2')
  if(nav && line1 && line2){
  const changingNav = () => {
    
    if(window.scrollY>= 60){
        nav.classList.add('nav-active');
        line1.classList.add('hamburger-dark');
        line2.classList.add('hamburger-dark');
    }else {
        nav.classList.remove('nav-active');
        line1.classList.remove('hamburger-dark');
        line2.classList.remove('hamburger-dark');
    }
}
window.addEventListener('scroll', changingNav)
} 



  return (
    <div className="Navbar fixed h-16 px-10 w-screen text-white items-center bg-black flex justify-between" id="nav">
      <div className="text-2xl md:text-3xl w-4/6 h-full flex p-2 items-center font-soriasoria"><h1>Youssef Eddafali</h1></div>
      <ul className="nav-links gap-10 hidden md:flex">
                <li className="cursor-pointer hover:text-slate-500 capitalize text-md ">home</li>
                <li className="cursor-pointer hover:text-slate-500 capitalize text-md">bio</li>
                <li className="cursor-pointer hover:text-slate-500 capitalize text-md ">work</li>
                <li className="cursor-pointer hover:text-rose-500 capitalize text-md" >memoir</li>
                <li className="cursor-pointer hover:text-slate-500 capitalize text-md">Contact</li>
      </ul>
      <div className={`hamburger w-8 h-8 cursor-pointer flex flex-col items-center justify-center md:hidden ${menuOpen ? 'close' : ''} z-50`} onClick={toggleMenu}>
        <div className="line" id="line1"></div>
        <div className="line" id="line2"></div>
      </div>
      <div className={`overlay h-screen w-screen flex justify-between flex-col ${menuOpen ? 'open' : ''}`}>
        <div className="menuItems w-screen gap-4 px-10 h-full flex flex-col justify-center items-start text-5xl font-bold">
          <h1 className="cursor-pointer hover:text-black">Home</h1>
          <h1 className="cursor-pointer hover:text-black">Bio</h1>
          <h1 className="cursor-pointer hover:text-black">Work</h1>
          <h1 className="cursor-pointer text-rose-500 hover:text-black">Memoir: Through the Eyes of the Closest</h1>
          <h1 className="cursor-pointer hover:text-black">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;