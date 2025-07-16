import React from "react";
import vaibhav from "../assets/vaibhav.webp";
import arawali from "../assets/arawali-logo.jpg";
import kk from "../assets/kk.webp";
import single from "../assets/single.avif";
const logos = [
  {
    name: "D-mart",
    url: "https://content.jdmagicbox.com/comp/pune/m6/020pxx20.xx20.160226101544.a8m6/catalogue/d-mart-pune-2ev5enp.jpg?clr=#293d29",
  },
  {
    name: "MAX",
    url: "https://tse4.mm.bing.net/th/id/OIP.T1jh0S1aerswSlbXeTDN5wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Vaibhav global limited",
    url: vaibhav,
  },
  {
    name: "Arawali export",
    url: arawali,
  },
  {
    name: "KK Enterprises",
    url: kk,
  },
  {
    name: "SINGLE EXPORT",
    url: single,
  }
];

const PartnersBanner = () => {
  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-center text-gray-800 text-4xl font-bold mb-6">Our Clients</h2>

      <div className=" max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
        {logos.map((logo, idx) => (
          <div key={idx} className="w-full aspect-[4/3] flex items-center justify-center">
            <img
              src={logo.url}
              alt={logo.name}
              className="max-h-24 object-contain transition duration-300  hover:grayscale-0 mix-blend-darken"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersBanner;
