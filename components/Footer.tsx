
import React from 'react';
import { View } from '../types';

interface FooterProps {
  onNavigate: (view: View) => void;
  onNavigateCategory: (cat: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateCategory }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <div>
            <span className="text-3xl font-black text-gray-900 block mb-6">MSH</span>
            <p className="text-gray-600 font-bold italic mb-6">The best look anytime, anywhere.</p>
          </div>

          {/* For Her */}
          <div>
            <h4 className="text-lg font-bold mb-6">For Her</h4>
            <ul className="space-y-3">
              {['Women Jeans', 'Tops and Shirts', 'Women Jackets', 'Heels and Flats', 'Women Accessories'].map(item => (
                <li 
                  key={item} 
                  onClick={() => onNavigateCategory(item)}
                  className="text-gray-500 hover:text-[#0084d1] cursor-pointer transition-colors text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Him */}
          <div>
            <h4 className="text-lg font-bold mb-6">For Him</h4>
            <ul className="space-y-3">
              {['Men Jeans', 'Men Shirts', 'Men Shoes', 'Men Accessories', 'Men Jackets'].map(item => (
                <li 
                  key={item} 
                  onClick={() => onNavigateCategory(item)}
                  className="text-gray-500 hover:text-[#0084d1] cursor-pointer transition-colors text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-bold mb-6">Subscribe</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address..." 
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#0084d1]"
              />
              <button className="bg-[#0084d1] text-white font-bold px-8 py-3 w-full hover:bg-[#0073b6] transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">Copyright © 2025 MSH Store. Powered by MSH.</p>
          <div className="flex gap-4">
            {['facebook', 'youtube', 'twitter', 'instagram', 'google', 'linkedin'].map(social => (
              <a key={social} href="#" className="text-gray-400 hover:text-gray-900">
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
