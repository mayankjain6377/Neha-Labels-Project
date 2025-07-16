

import React, { useState } from "react";
import '../App.css';
import logo from '../assets/logo2.png';
import About from "./About";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import StickerCatalog from "./StickerCatalog.jsx";
import PartnersBanner from "./PartnersBanner.jsx";
import CustomerTestimonials from "./CustomerTestimonials.jsx";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden">
    
      {/* Custom font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&display=swap');
          .edu-nsw-act-cursive {
            font-family: "Edu NSW ACT Cursive", cursive;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
          }
        `}
      </style>

      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md relative z-50">
        {/* Logo */}
        <div className="edu-nsw-act-cursive text-xl font-bold tracking-wide flex items-center gap-2">
          <img src={logo} alt="Neha Labels Logo" className="h-12 w-auto" />
          Neha Labels
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <a onClick={() => navigate('/')} className="cursor-pointer hover:text-blue-400">Home</a>
          <a onClick={() => navigate('/services')} className="cursor-pointer hover:text-blue-400">Services</a>
          <a onClick={() => navigate('/about')} className="cursor-pointer hover:text-blue-400">About</a>
          <a onClick={() => navigate('/contact')} className="cursor-pointer hover:text-blue-400">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

       { /* Mobile Menu */}
          {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#0f172a]/70 backdrop-blur-md text-center py-6 space-y-4 md:hidden shadow-xl rounded-b-xl">
            <a onClick={() => navigate('/')} className="block text-lg font-medium hover:text-blue-400">Home</a>
            <a onClick={() => navigate('/services')} className="block text-lg font-medium hover:text-blue-400">Services</a>
            <a onClick={() => navigate('/about')} className="block text-lg font-medium hover:text-blue-400">About</a>
            <a onClick={() => navigate('/contact')} className="block text-lg font-medium hover:text-blue-400">Contact</a>
          </div>
        )}
              </header>

              {/* Hero Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 gap-12">
        {/* Left Image (optional, currently empty) */}
        <div className="w-full md:w-1/2" />

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            YOUR BRANDING PARTNER <br />
            <span className="edu-nsw-act-cursive text-blue-400 ml-2">Neha Labels 🏷️</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Empowering your brand with <span className="text-white font-semibold">eco-conscious, high-quality, and custom label solutions</span> that truly represent your product’s identity.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button onClick={() => navigate('/services')} className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white">
              Explore
            </button>
            <button onClick={() => navigate('/contact')} className="cursor-pointer border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md">
              Order Now
            </button>
          </div>
        </div>
      </main>

    
      {/* Footer (optional) */}
     
      <About  /> {/* Include About component here if needed */}
      <StickerCatalog /> 
      <PartnersBanner /> 
      <CustomerTestimonials /> {/* Include PartnersBanner component here if needed */}
      <ContactPage /> {/* Include ContactPage component here if needed */}
      <Footer />
    
    </div>
  );
};

export default Home;
