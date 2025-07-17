import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export default function CardTags() {
  const [favorites, setFavorites] = useState(new Set());

  const products = [
  {
    id: 1,
    name: "Garments Paper Tag",
    image: "https://i.pinimg.com/736x/73/f2/78/73f278bc79c058dd1b8d76a0f4368ccf.jpg",
    category: "Custom",
    features: ["100% Cotton", "Handmade Finish"],
    description: "Stylish clothing label for handcrafted urban wear collections.",
  },
  {
    id: 2,
    name: "Garments Paper Tag",
    quantity: 10,
    price: 150.0,
    image: "https://5.imimg.com/data5/NC/HD/MY-3105668/hang-tags-500x500.jpeg",
    category: "Business",
    features: ["Soft Taffeta", "Stitch-Ready"],
    description: "Premium taffeta clothing label ideal for formal and designer apparel.",
  },
  {
    id: 3,
    name: "Garments Paper Tag",
    quantity: 1,
    price: 170.0,
    image: "https://4.imimg.com/data4/DQ/TV/MY-19283290/garment-hanging-tag.jpg",
    category: "Promotional",
    features: ["Seasonal Offer", "Brand Logo Included"],
    description: "Elegant tag for window displays promoting seasonal fashion collections.",
  },
  {
    id: 4,
    name: "Garments Paper Tag",
    quantity: 1,
    price: 210.0,
    image: "https://img.freepik.com/premium-psd/three-fashion-label-tag-mockups_53876-565809.jpg?semt=ais_hybrid&w=740",
    category: "Custom",
    features: ["Vintage Look", "Raw Edge Finish"],
    description: "Authentic retro-style denim label perfect for rugged streetwear branding.",
  },
  {
    id: 5,
    name: "Garments Paper Tag",
    quantity: 1,
    price: 65.0,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/477526732/KU/GU/VP/76028347/waterproof-label-stickers-printing-services.jpg",
    category: "Sports",
    features: ["Sweatproof", "Bold Typography"],
    description: "Durable label designed for activewear, gym clothing, and sportswear brands.",
  },
  {
    id: 6,
    name: "Garments Paper Tag",
    quantity: 5,
    price: 240.0,
    image: "https://lsmedia.linker-cdn.net/956733/2024/12810272.jpeg",
    category: "Automotive",
    features: ["Reflective Print", "Weatherproof Material"],
    description: "Industrial-themed label for motor-inspired street fashion brands.",
  },
  {
    id: 7,
    name: "Garments Paper Tag",
    quantity: 1,
    price: 200.0,
    image: "https://tonaton.com/r/cGljdHVyZXMtZ2hhbmEuamlqaXN0YXRpYy5uZXQ/43015254_NjIwLTkzMi1hNDEzY2QzZTBi.webp",
    category: "Safety",
    features: ["Wash Instructions", "Made in India"],
    description: "Standard care label for garments, including safety certifications and origin.",
  },
  {
    id: 8,
    name: "Garments Paper Tag",
    quantity: 1,
    price: 200.0,
    image: "https://i.pinimg.com/736x/8b/78/c0/8b78c069ae57b5b64ed489dd204e293b.jpg",
    category: "Automotive",
    features: ["Monochrome", "Clean Typeface"],
    description: "Sleek and minimal tag design suited for contemporary fashion collections.",
  },
  {
    id: 9,
    name: "Garments Paper Tag",
    quantity: 1,
    price: 200.0,
    image: "https://static.vecteezy.com/system/resources/previews/039/381/118/non_2x/hang-tag-label-and-price-tag-apparel-care-label-design-innovation-garments-accessories-sustainability-packaging-design-and-vintage-fashion-product-vector.jpg",
    category: "Automotive",
    features: ["Recycled Paper", "Plant-Based Ink"],
    description: "Eco-friendly neck tag perfect for sustainable clothing brands.",
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Card Tags Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of high-quality Card Tags for every need
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
