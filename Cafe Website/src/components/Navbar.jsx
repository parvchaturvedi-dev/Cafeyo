import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Fixed scroll logic - Home pe always visible
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if in Home section (top 100px of home = always visible)
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeRect = homeSection.getBoundingClientRect();
        if (homeRect.top >= -100) {
          setIsVisible(true);
          setLastScrollY(currentScrollY);
          return;
        }
      }
      
      // Other sections: scroll up = show, scroll down >50px = hide
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } 
      else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinkClass =
    "relative inline-block hover:text-gray-400 transition-colors duration-300 cursor-pointer " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 " +
    "after:w-full after:bg-white after:scale-x-0 after:origin-left " +
    "after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-full z-50 bg-black border-b border-white transition-all duration-300 ease-in-out shadow-lg ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-row justify-between items-center h-16 px-4">
          <div className="flex justify-center space-x-8 w-fit">
            <h1 className="text-yellow-600 font-bold text-3xl cursor-pointer hover:scale-105 transition-transform duration-200">
              CAFEGRAM
            </h1>
          </div>

          <div className="justify-center hidden md:flex lg:flex space-x-8">
            <nav className="absolute left-1/2 -translate-x-1/2 self-center hidden md:flex space-x-6 text-white font-semibold text-sm lg:text-lg">
              <button onClick={(e) => handleNavClick(e, 'home')} className={navLinkClass}>Home</button>
              <button onClick={(e) => handleNavClick(e, 'menu')} className={navLinkClass}>Menu</button>
              <button onClick={(e) => handleNavClick(e, 'about')} className={navLinkClass}>About</button>
              <button onClick={(e) => handleNavClick(e, 'gallery')} className={navLinkClass}>Gallery</button>
              <button onClick={(e) => handleNavClick(e, 'services')} className={navLinkClass}>Services</button>
              <button onClick={(e) => handleNavClick(e, 'contact')} className={navLinkClass}>Contact</button>
            </nav>
          </div>

          <div className="flex md:hidden lg:hidden">
            <button onClick={toggleMenu} className="bg-white text-black border-white rounded-md px-3 py-1 flex items-center gap-2 font-semibold">
              <span>Menu</span>
              <span className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>☰</span>
            </button>
          </div>

          <div className="hidden md:block lg:block">
            <button className="bg-white border-white rounded-md px-3 py-1 font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
              Login/Register
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col bg-black border-t border-zinc-800 px-4 py-3 space-y-3 text-white font-medium">
            <button onClick={(e) => handleNavClick(e, 'home')} className="text-left hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2">Home</button>
            <button onClick={(e) => handleNavClick(e, 'menu')} className="text-left hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2">Menu</button>
            <button onClick={(e) => handleNavClick(e, 'about')} className="text-left hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2">About</button>
            <button onClick={(e) => handleNavClick(e, 'gallery')} className="text-left hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2">Gallery</button>
            <button onClick={(e) => handleNavClick(e, 'services')} className="text-left hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2">Services</button>
            <button onClick={(e) => handleNavClick(e, 'contact')} className="text-left hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2">Contact</button>
            <div className="pt-2 border-t border-zinc-800">
              <button className="w-full bg-white text-black rounded-md px-3 py-2 font-semibold hover:bg-gray-100 transition-colors cursor-pointer">Login/Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
