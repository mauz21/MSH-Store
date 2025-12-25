
import React, { useState } from 'react';
import { COLORS } from '../constants';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onNavigate: (view: string) => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, cartTotal, onNavigate, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'EVERYTHING', value: 'store' },
    { label: 'WOMEN', value: 'Women' },
    { label: 'MEN', value: 'Men' },
    { label: 'ACCESSORIES', value: 'Accessories' }
  ];

  const rightLinks = [
    { label: 'ABOUT', value: 'about' },
    { label: 'CONTACT US', value: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 h-20 flex items-center shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Left Side: Logo + Main Nav */}
        <div className="flex items-center gap-8">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
            <span className="text-3xl font-black text-gray-900 group-hover:text-[#0084d1] transition-colors">MSH</span>
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => onNavigate(link.value)}
                className="text-sm font-bold tracking-wider text-gray-600 hover:text-[#0084d1] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side: Account + Cart */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6 mr-4 border-r pr-8 border-gray-200">
            {rightLinks.map(link => (
              <button
                key={link.label}
                onClick={() => onNavigate(link.value)}
                className="text-sm font-bold tracking-wider text-gray-600 hover:text-[#0084d1] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={onCartClick} 
              className="flex items-center gap-2 group"
            >
              <span className="text-sm font-bold text-gray-900 group-hover:text-[#0084d1] transition-colors">
                ${cartTotal.toFixed(2)}
              </span>
              <div className="relative">
                <svg className="w-6 h-6 text-gray-900 group-hover:text-[#0084d1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-[#0084d1] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </div>
            </button>

            <button onClick={() => onNavigate('account')} className="text-gray-900 hover:text-[#0084d1] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-xl lg:hidden flex flex-col py-4 px-8 border-t border-gray-100">
          {[...navLinks, ...rightLinks].map(link => (
            <button
              key={link.label}
              onClick={() => {
                onNavigate(link.value);
                setIsMobileMenuOpen(false);
              }}
              className="py-3 text-left font-bold text-gray-700 border-b border-gray-50 last:border-none"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
