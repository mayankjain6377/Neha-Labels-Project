import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export default function Stickers() {
  const [favorites, setFavorites] = useState(new Set());

 const products = [
  {
    id: 1,
    name: "Custom Shape Stickers",
    image: "https://sc04.alicdn.com/kf/H8a54cde4575b4089a5130c8433b4ec94C.jpg",
    category: "Custom",
    features: ["Eco-friendly", "Made Locally"],
    description: "Premium custom-shaped stickers for any design",
  },
  {
    id: 2,
    name: "Sandra Darren Stickers",
    image: "https://content.jdmagicbox.com/quickquotes/images_main/mtc0nzgxndi2mq-1747814261-svc3t0yg.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
    category: "Business",
    features: ["Professional", "Durable"],
    description: "High-quality Clothing brand stickers",
  },
  {
    id: 3,
    name: "Woven Stickers",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/370595469/RB/YD/PA/205626449/printed-label-500x500.jpg",
    category: "Promotional",
    features: ["Fashion Sale", "Up to 60% Off"],
    description: "Eye-catching window display stickers",
  },
  {
    id: 4,
    name: "Custom Floor Stickers",
    quantity: 1,
    price: 210.0,
    image: "https://i.etsystatic.com/6084471/r/il/22d145/5414148426/il_fullxfull.5414148426_q3wd.jpg",
    category: "Custom",
    features: ["Please Wait Here", "Hot Grill"],
    description: "Durable floor stickers for any surface",
  },
  {
    id: 5,
    name: "Branding Stickers",
    image: "https://www.packnest.com/cdn/shop/files/garment_labels_packnest_533x.jpg?v=1745219779",
    category: "Sports",
    features: ["Royal United", "Est. 2020"],
    description: "Premium branding stickers",
  },
  {
    id: 6,
    name: "Custom Car Stickers",
    quantity: 5,
    price: 240.0,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/499614818/RJ/FL/QJ/12155239/apparel-labeling-solutions.jpg",
    category: "Automotive",
    features: ["Health Screenings", "Contact Info"],
    description: "Weather-resistant car stickers",
  },
  {
    id: 7,
    name: "Fashion unique Stickers",
  
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/9/342617918/KN/ZC/TC/195389030/product-jpeg-500x500.jpg",
    category: "Safety",
    features: ["Maintain 6 Feet", "Thank You"],
    description: "Social distancing floor markers",
  },
  {
    id: 8,
    name: "Clothing Brand Labels",
    image: "https://image.made-in-china.com/202f0j00wOeiRHGcSnqj/Design-Custom-Private-Clothing-Brand-Print-Logo-Fabric-Label-Low-MOQ-Woven-Labels.webp",
    category: "Automotive",
    features: ["sensitive", "For Sensitive Skin"],
    description: "Premium clothes brand labels",
  },
  {
    id: 9,
    name: "Custom Car Door Decals",
  
    image: "https://sc04.alicdn.com/kf/H75ce98d356604162aa5eec1940f9ab4ai.jpg",
    category: "Automotive",
    features: ["Green Tea", "For Sensitive Skin"],
    description: "Premium car door decals",
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Sticker Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of high-quality stickers for every need
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

