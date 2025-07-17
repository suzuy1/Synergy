import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SYNERGY_LOGO, MenuIcon, XIcon } from '../constants';

interface NavLink {
  name: string;
  path: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };
  
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const NavItem: React.FC<{ link: NavLink, className?: string }> = ({ link, className = '' }) => {
    const isActive = location.pathname === link.path || (link.path.includes('/#') && location.pathname === '/' && location.hash === link.path.split('/')[1]);
    
    return (
       <Link
          to={link.path}
          onClick={handleLinkClick}
          className={`${className} ${
            isActive
              ? 'text-white bg-slate-700'
              : 'text-gray-300 hover:bg-slate-700 hover:text-white'
          } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
        >
          {link.name}
        </Link>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || isSidebarOpen ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0" onClick={handleLinkClick}>
               <div className="flex items-center space-x-2 cursor-pointer">
                  {SYNERGY_LOGO}
                  <span className="text-2xl font-bold text-white">Synergy</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
                {navLinks.map((link) => (
                  <NavItem key={link.name} link={link} />
                ))}
            </div>
            <div className="hidden md:block">
               <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {MenuIcon}
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-50 transition-transform transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-modal="true"
        role="dialog"
      >
        {/* Overlay */}
        <div
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div className="fixed top-0 right-0 h-full w-full max-w-xs bg-slate-800 shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-white">Menu</span>
                <button 
                  onClick={() => setIsSidebarOpen(false)} 
                  className="p-2 -mr-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700"
                >
                    <span className="sr-only">Close menu</span>
                    {XIcon}
                </button>
            </div>
            <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavItem key={link.name} link={link} className="text-lg text-left w-full block py-1" />
                ))}
                <button className="bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-6 w-full">
                    Get Started
                </button>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;