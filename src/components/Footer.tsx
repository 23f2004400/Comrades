import React from 'react';
import { Shield, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, Heart } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const products = [
    'SafeGuard Ring',
    'SafeGuard Pendant',
    'SafeGuard Bracelet',
    'Mobile App'
  ];

  const socialLinks = [
    { Icon: Instagram, url: '#', color: 'hover:text-pink-400' },
    { Icon: Linkedin, url: '#', color: 'hover:text-blue-400' },
    { Icon: Twitter, url: '#', color: 'hover:text-cyan-400' },
    { Icon: Youtube, url: '#', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-pink-50 to-lavender-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-300 to-coral-400 p-2 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">SafeGuard</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Empowering women with cutting-edge safety technology. Stay connected, stay safe, stay confident.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, url, color }, index) => (
                <a
                  key={index}
                  href={url}
                  className={`bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 ${color} hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-gray-600 hover:text-pink-400 hover:translate-x-1 transition-all duration-300 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-pink-400 hover:translate-x-1 transition-all duration-300 block"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Mail className="h-4 w-4 text-pink-500" />
                </div>
                <span className="text-gray-600"></span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-pink-500" />
                </div>
                <span className="text-gray-600"></span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <MapPin className="h-4 w-4 text-pink-500" />
                </div>
                <span className="text-gray-600"></span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-l-full focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm"
                />
                <button className="bg-gradient-to-r from-pink-400 to-coral-400 text-white px-6 py-2 rounded-r-full hover:scale-105 transition-transform duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-600 mb-4 md:mb-0">
              <span>&copy; 2024 SafeGuard. Made with</span>
              <Heart className="h-4 w-4 text-pink-400 fill-current" />
              <span>for women's safety</span>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-pink-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-300">Support</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 right-8 hidden lg:block">
        <div className="bg-gradient-to-r from-pink-300 to-coral-300 w-12 h-12 rounded-full opacity-20 animate-pulse"></div>
      </div>
      <div className="absolute bottom-32 left-12 hidden lg:block">
        <div className="bg-gradient-to-r from-lavender-200 to-pink-200 w-8 h-8 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>
    </footer>
  );
};

export default Footer;