import { useState } from 'react';
import hamburgerIcon from '../assets/hamburger.png';
import logoTextIcon from '../assets/logo-text.png';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-md focus:outline-none hover:bg-slate-100 transition"
            >
              <img 
                src={hamburgerIcon} 
                alt="Menu" 
                className="w-6 h-6 object-contain" 
              />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <img 
              src={logoTextIcon} 
              alt="DevStack Logo" 
              className="h-8 object-contain" 
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-700">
            <a href="#home" className="hover:text-pink-600 transition">Home</a>
            <a href="#technologies" className="hover:text-pink-600 transition">Technologies</a>
            <a href="#projects" className="hover:text-pink-600 transition">Projects</a>
            <a href="#about" className="hover:text-pink-600 transition">About</a>
            <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#signin" className="text-base font-normal text-slate-700 hover:text-pink-600 transition">
              Sign In
            </a>
            <a 
              href="#signup" 
              className="bg-gradient-to-r from-[#ec4899] to-[#d946ef] text-white text-base font-medium px-5 py-2 rounded-full shadow-sm hover:opacity-90 transition"
            >
              Sign Up
            </a>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <a href="#home" className="block py-2 text-slate-700 font-medium hover:text-pink-500">Home</a>
          <a href="#technologies" className="block py-2 text-slate-700 font-medium hover:text-pink-500">Technologies</a>
          <a href="#projects" className="block py-2 text-slate-700 font-medium hover:text-pink-500">Projects</a>
          <a href="#about" className="block py-2 text-slate-700 font-medium hover:text-pink-500">About</a>
          <a href="#contact" className="block py-2 text-slate-700 font-medium hover:text-pink-500">Contact</a>
        </div>
      )}
    </nav>
  );
};