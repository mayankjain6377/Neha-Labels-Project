import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export default function Labels() {
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Kinori Satin Labels",
    
      image: "https://5.imimg.com/data5/SELLER/Default/2024/1/377364315/BQ/FF/KT/152548444/barcode-label-500x500.jpg",
      category: "Custom",
      features: ["Sustainable", "Made Locally"],
      description: "Premium custom-shaped Labels for any design",
    },
    {
      id: 2,
      name: "Taffeta Size Labels",
      image: "https://images.meesho.com/images/products/429901137/rhrvx_512.webp",
      category: "Business",
      features: ["Professional", "Durable"],
      description: "High-quality visiting card Labels",
    },
    {
      id: 3,
      name: "Kinori Satin Labels",

      image: "https://5.imimg.com/data5/SELLER/Default/2022/11/XY/UB/TV/53826591/plain-taffeta-rolls-250x250.jpg",
      category: "Promotional",
      features: ["Fashion Sale", "Up to 60% Off"],
      description: "Eye-catching window display Labels",
    },
    {
      id: 4,
      name: "Taffeta Size Labels",
      image: "https://img2.exportersindia.com/product_images/bc-small/2019/1/5255764/satin-printed-labels-1546679311-4623448.jpg",
      category: "Custom",
      features: ["Perfect Sized", "Comfortable"],
      description: "Durable Taffeta Labels for any surface",
    },
    {
      id: 5,
      name: "Taffeta Labels",
  
      image: "https://5.imimg.com/data5/SELLER/Default/2024/1/377364315/BQ/FF/KT/152548444/barcode-label-500x500.jpg",
      category: "Sports",
      features: ["Royal United", "Est. 2020"],
      description: "Premium Fashion decoration Labels",
    },
    {
      id: 6,
      name: "Printed Labels",
      quantity: 5,
      price: 240.0,
      image: "https://ae01.alicdn.com/kf/Ha873ef4d64b1415f84485d3aff1dbb85E.jpg",
      category: "Automotive",
      features: ["Health Screenings", "Contact Info"],
      description: "Weather-resistant car Labels",
    },
    {
      id: 7,
      name: "Satin Labels",
      quantity: 1,
      price: 200.0,
      image: "https://image.made-in-china.com/365f3j00ZiehElKGnVbM/Custom-Demand-Woven-Care-Neck-Labels-Single-Sided-Polyester-Screen-Printing-Satin-Printed-Care-Label-for-Garment.webp",
      category: "Safety",
      features: ["Maintain 6 Feet", "Thank You"],
      description: "Social distancing floor markers",
    },
    {
      id: 8,
      name: "Kinori Satin Labels",
      quantity: 1,
      price: 200.0,
      image: "https://i.ebayimg.com/images/g/faoAAOSwf2dexTPT/s-l1200.jpg",
      category: "Automotive",
      features: [ "For Sensitive Skin"],
      description: "Premium safety Labels for sensitive skin",
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Custom: "bg-purple-100 text-purple-800",
      Business: "bg-blue-100 text-blue-800",
      Promotional: "bg-orange-100 text-orange-800",
      Sports: "bg-green-100 text-green-800",
      Automotive: "bg-red-100 text-red-800",
      Safety: "bg-yellow-100 text-yellow-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Label Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of high-quality Labels for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-6xl text-gray-400">🏷</div>
                </div>

                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                    favorites.has(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-400 hover:text-red-500"
                  }`}
                >
                  <Heart size={20} fill={favorites.has(product.id) ? "currentColor" : "none"} />
                </button>

                <div
                  className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}
                >
                  {product.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <Star className="inline w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1">
                      {((Math.random() * (5 - 4) + 4).toFixed(1))}
                    </span>
                  </div>
                </div>

                {/* View Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => alert(`Viewing details for: ${product.name}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            Need custom stickers?{" "}
            <button onClick={() => window.location.href = '/contact'} className="text-blue-600 font-medium cursor-pointer hover:underline">
              Contact us
            </button>{" "}
            for personalized solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
