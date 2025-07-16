import React from "react";
import '../App.css'; // Make sure your Tailwind styles are loaded

const About = () => {
  return (
    <section className="min-h-screen bg-white text-[#1e293b] px-6 md:px-20 py-16 font-sans flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Welcome to <span className="text-blue-600">NEHA LABELS</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <span className="font-bold text-blue-500">Neha Labels</span> is one of India’s emerging label manufacturers and branding partners, offering premium textile labeling solutions for modern businesses. We specialize in creating a unique visual identity for your product through our custom, eco-friendly label designs.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Our services include <span className="font-semibold text-gray-900">branding design, product identity enhancement, quality labeling,</span> and <span className="font-semibold text-gray-900">anti-counterfeit packaging</span>. Our offerings include Woven Labels, Swing Tickets, Hangtags, Heat Transfer Labels, Barcode Tags, Packaging Materials, and more.
        </p>
        <p className="hidden sm:block text-lg leading-relaxed text-gray-700 mb-6">
          With a strong commitment to sustainability and style, we support your brand with impactful label solutions that make your product stand out.
        </p>

        <button href="#contact" onClick={() => window.location.href = '/contact'} className="bg-blue-500 text-white text-lg px-6 py-3 shadow-lg rounded-sm hover:bg-blue-900 transition duration-200">
          Enquiry for Custom Labels
        </button>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        {/* Replace src with your image path later */}
        <div className="hidden sm:block relative w-[300px] h-[420px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl border">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.kDKlTU_huL4GBrpNlo8NJAHaFj?r=0&w=800&h=600&rs=1&pid=ImgDetMain&o=7&rm=3" // Update this to your actual image
            alt="Neha Labels Product Preview"
            className="object-cover w-full h-full"
          />
          {/* Optional play icon or overlay can go here */}
        </div>
      </div>
    </section>
  );
};

export default About;
