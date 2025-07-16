// import React, { useState } from 'react';
// import { Heart, Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function StickerCatalog() {
//   const navigate = useNavigate();
//   const [favorites, setFavorites] = useState(new Set());

//   const products = [
//     {
//       id: 1,
//       name: "Stickers",
//       quantity: 10,
//       price: 190.0,
//       image: "https://sc04.alicdn.com/kf/H8a54cde4575b4089a5130c8433b4ec94C.jpg",
//       category: "Custom",
//       features: ["Free Wi-Fi", "Made Locally"],
//       description: "Premium custom-shaped stickers for any design",
//     },
//     {
//       id: 2,
//       name: "Labels",
//       quantity: 10,
//       price: 150.0,
//       image: "https://images.meesho.com/images/products/429901137/rhrvx_512.webp",
//       category: "Business",
//       features: ["Professional", "Durable"],
//       description: "High-quality visiting card stickers",
//     },
//     {
//       id: 3,
//       name: "Card Tags",
//       quantity: 1,
//       price: 170.0,
//       image: "https://5.imimg.com/data5/SELLER/Default/2023/12/370595469/RB/YD/PA/205626449/printed-label-500x500.jpg",
//       category: "Promotional",
//       features: ["Fashion Sale", "Up to 60% Off"],
//       description: "Eye-catching window display stickers",
//     },
//   ];

//   const toggleFavorite = (id) => {
//     setFavorites((prev) => {
//       const newFavorites = new Set(prev);
//       if (newFavorites.has(id)) {
//         newFavorites.delete(id);
//       } else {
//         newFavorites.add(id);
//       }
//       return newFavorites;
//     });
//   };

//   const getCategoryColor = (category) => {
//     const colors = {
//       Custom: "bg-purple-100 text-purple-800",
//       Business: "bg-blue-100 text-blue-800",
//       Promotional: "bg-orange-100 text-orange-800",
//       Sports: "bg-green-100 text-green-800",
//       Automotive: "bg-red-100 text-red-800",
//       Safety: "bg-yellow-100 text-yellow-800",
//     };
//     return colors[category] || "bg-gray-100 text-gray-800";
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Sticker Collection</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover our wide range of high-quality stickers for every need
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               onClick={() => navigate(`/view/${product.name.toLowerCase().replace(/\s+/g, '-')}`)}
//               className="bg-white cursor-pointer rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   onError={(e) => {
//                     e.target.style.display = 'none';
//                     e.target.nextSibling.style.display = 'flex';
//                   }}
//                 />
//                 <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
//                   <div className="text-6xl text-gray-400">🏷</div>
//                 </div>

//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // prevent navigation when clicking heart
//                     toggleFavorite(product.id);
//                   }}
//                   className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
//                     favorites.has(product.id)
//                       ? "bg-red-500 text-white"
//                       : "bg-white text-gray-400 hover:text-red-500"
//                   }`}
//                 >
//                   <Heart size={20} fill={favorites.has(product.id) ? "currentColor" : "none"} />
//                 </button>

//                 <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
//                   {product.category}
//                 </div>
//               </div>

//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 <p className="text-sm text-gray-600 mb-3 line-clamp-2">
//                   {product.description}
//                 </p>

//                 <div className="flex flex-wrap gap-1 mb-3">
//                   {product.features.map((feature, index) => (
//                     <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
//                       {feature}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="text-sm text-gray-500">
//                     <Star className="inline w-4 h-4 text-yellow-400 fill-current" />
//                     <span className="ml-1">{((Math.random() * (5 - 4) + 4).toFixed(1))}</span>
//                   </div>
//                   <div className="text-blue-600 text-sm font-medium">Click to view</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12 py-8 border-t border-gray-200">
//           <p className="text-gray-600">
//             Need custom stickers?{" "}
//             <button onClick={() => navigate('/contact')} className="text-blue-600 font-medium cursor-pointer hover:underline">
//               Contact us
//             </button>{" "}
//             for personalized solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StickerCatalog() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Stickers",
      quantity: 10,
      price: 190.0,
      image: "https://sc04.alicdn.com/kf/H8a54cde4575b4089a5130c8433b4ec94C.jpg",
      category: "Custom",
      features: ["Free Wi-Fi", "Made Locally"],
      description: "Premium custom-shaped stickers for any design",
    },
    {
      id: 2,
      name: "Labels",
      quantity: 10,
      price: 150.0,
      image: "https://images.meesho.com/images/products/429901137/rhrvx_512.webp",
      category: "Business",
      features: ["Professional", "Durable"],
      description: "High-quality visiting card stickers",
    },
    {
      id: 3,
      name: "Card Tags",
      quantity: 1,
      price: 170.0,
      image: "https://api.designprintnyc.com/public/uploads/images/Pearl%20Hang%20Tags%202.jpg",
      category: "Promotional",
      features: ["Fashion Sale", "Up to 60% Off"],
      description: "Eye-catching window display stickers",
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      newFavorites.has(id) ? newFavorites.delete(id) : newFavorites.add(id);
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Product Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of high-quality Products for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/view/${product.name.toLowerCase().replace(/\s+/g, '-')}`)}
              className="bg-white cursor-pointer rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
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
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation when clicking heart
                    toggleFavorite(product.id);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                    favorites.has(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-400 hover:text-red-500"
                  }`}
                >
                  <Heart size={20} fill={favorites.has(product.id) ? "currentColor" : "none"} />
                </button>

                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
                  {product.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <Star className="inline w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1">{((Math.random() * (5 - 4) + 4).toFixed(1))}</span>
                  </div>
                  <div className="text-blue-600 text-sm font-medium">Click to view</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            Need custom stickers?{" "}
            <button onClick={() => navigate('/contact')} className="text-blue-600 font-medium cursor-pointer hover:underline">
              Contact us
            </button>{" "}
            for personalized solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
