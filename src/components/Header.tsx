import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-gradient-to-r from-pink-300 to-coral-400 p-2 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-pink-400 transition-colors duration-300 font-poppins">
              Comrade
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 font-nunito ${
                  currentPage === item.id
                    ? 'text-pink-400 border-b-2 border-pink-300'
                    : 'text-gray-600 hover:text-pink-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button 
            onClick={onAuthClick}
            className="hidden md:block bg-gradient-to-r from-pink-400 to-coral-400 text-white px-6 py-2 rounded-full font-medium hover:scale-105 hover:shadow-pink transition-all duration-300 font-montserrat"
          >
            Login/SignUp
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-pink-50 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100 py-4 animate-slide-down shadow-soft-lg rounded-b-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 font-medium transition-colors duration-300 font-nunito ${
                  currentPage === item.id
                    ? 'text-pink-400 bg-pink-50'
                    : 'text-gray-600 hover:text-pink-400 hover:bg-pink-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onAuthClick();
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 mx-4 bg-gradient-to-r from-pink-400 to-coral-400 text-white py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300 font-montserrat"
            >
              Login/SignUp
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;