import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, ChevronUp } from 'lucide-react';
import logo from '../assets/logo2.png'; // Adjust the path as necessary
export default function AtamFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center mr-3">
                
                <img className='' src={logo} alt="" />
              </div>
              <h2 className="text-xl font-bold">NEHA LABEL</h2>
            </div>
            
            <div className="mb-6">
              <h3 onClick={() => window.location.href = '/about'} className="text-lg font-semibold mb-3">ABOUT US</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                "NEHA LABEL" is India's leading label manufacturer and supplier for last 3 decades.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Follow us :-</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-teal-500 hover:text-teal-500 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-teal-500 hover:text-teal-500 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-teal-500 hover:text-teal-500 transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Main Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">MAIN LINKS</h3>
            <ul className="space-y-3 ">
              <li>
                <a href="#" className="hover:text-teal-500 text-gray-300  transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => window.location.href = '/about'} className="text-gray-300 hover:text-teal-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Bespoke
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <MapPin size={20} className="mr-2 text-teal-500" />
              <h3 className="text-lg font-semibold">Contact Us</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-2">NEHA LABEL</h4>
                <p className="text-gray-300 text-sm">Neha Lable Offset & Screen Printing</p>
              </div>
              
              <div className="text-gray-300 text-sm">
                <p>50/95, Sector-5, Pratap Nagar, Sanganer</p>
                <p>Jaipur, Rajasthan</p>
                <p>302033(India)</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-teal-500 flex-shrink-0" />
                <span className="text-gray-300">+91-9351430542</span>
              </div>
              
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-teal-500 flex-shrink-0" />
                <span className="text-gray-300">+91-7412966287</span>
              </div>
              
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-teal-500 flex-shrink-0" />
                <a href="mailto:sales@atampost.com" className="text-gray-300 hover:text-teal-500 transition-colors">
                 adinathraphics@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors text-sm">
                Terms of Use
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors text-sm">
                FAQ
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © Copyright 2025 NEHA LABEL. All Rights Reserved.
                <br />
                <span className="text-white font-semibold mr-4">Developed by <a href="https://bento.me/mayank-jain" className='text-green-400'>Mayank jain</a> & <a href="https://www.linkedin.com/in/sumit-jain-1274bb256/" className='text-green-400'>Sumit jain</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
}