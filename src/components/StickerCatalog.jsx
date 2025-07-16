// import React, { useState } from 'react';
// import { Heart, ShoppingCart, Star } from 'lucide-react';
// import img1 from '../assets/image1.jpg';
// import img2 from '../assets/arawali-logo.jpg';
// export default function StickerCatalog() {
//   const [favorites, setFavorites] = useState(new Set());

//   const products = [
//     {
//       id: 1,
//       name: "Custom Shape Stickers",
//       quantity: 10,
//       price: 190.0,
//       image: img2,
//       category: "Custom",
//       features: ["Free Wi-Fi", "Made Locally"],
//       description: "Premium custom-shaped stickers for any design",
//     },
//     {
//       id: 2,
//       name: "Visiting Card Stickers",
//       quantity: 10,
//       price: 150.0,
//       image: img1,
//       category: "Business",
//       features: ["Professional", "Durable"],
//       description: "High-quality visiting card stickers",
//     },
//     {
//       id: 3,
//       name: "Window Stickers",
//       quantity: 1,
//       price: 170.0,
//       image: img1,
//       category: "Promotional",
//       features: ["Fashion Sale", "Up to 60% Off"],
//       description: "Eye-catching window display stickers",
//     },
//     {
//       id: 4,
//       name: "Custom Floor Stickers",
//       quantity: 1,
//       price: 210.0,
//       image: "https://images.unsplash.com/photo-1542272606-fe889704e0f6?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       category: "Custom",
//       features: ["Please Wait Here", "Hot Grill"],
//       description: "Durable floor stickers for any surface",
//     },
//     {
//       id: 5,
//       name: "Cricket Bat Stickers",
//       quantity: 1,
//       price: 65.0,
//       image: "https://images.unsplash.com/photo-1542272606-fe889704e0f6?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       category: "Sports",
//       features: ["Royal United", "Est. 2020"],
//       description: "Premium cricket bat decoration stickers",
//     },
//     {
//       id: 6,
//       name: "Custom Car Stickers",
//       quantity: 5,
//       price: 240.0,
//       image: img2,
//       category: "Automotive",
//       features: ["Health Screenings", "Contact Info"],
//       description: "Weather-resistant car stickers",
//     },
//     {
//       id: 7,
//       name: "Floor Stickers - Social Distancing",
//       quantity: 1,
//       price: 200.0,
//       image: "https://images.unsplash.com/photo-1542272606-fe889704e0f6?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       category: "Safety",
//       features: ["Maintain 6 Feet", "Thank You"],
//       description: "Social distancing floor markers",
//     },
//     {
//       id: 8,
//       name: "Custom Car Door Decals",
//       quantity: 1,
//       price: 200.0,
//       image: "https://images.unsplash.com/photo-1542272606-fe889704e0f6?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       category: "Automotive",
//       features: ["Green Tea", "For Sensitive Skin"],
//       description: "Premium car door decals",
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
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Sticker Collection</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover our wide range of high-quality stickers for every need
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
//             >
//               {/* Image Container */}
//               <div className="relative overflow-hidden">
//                 <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
//                   <div className="text-6xl text-gray-400">🏷</div>
//                 </div>

//                 {/* Favorite Button */}
//                 <button
//                   onClick={() => toggleFavorite(product.id)}
//                   className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
//                     favorites.has(product.id)
//                       ? "bg-red-500 text-white"
//                       : "bg-white text-gray-400 hover:text-red-500"
//                   }`}
//                 >
//                   <Heart
//                     size={20}
//                     fill={favorites.has(product.id) ? "currentColor" : "none"}
//                   />
//                 </button>

//                 {/* Category Badge */}
//                 <div
//                   className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
//                     product.category
//                   )}`}
//                 >
//                   {product.category}
//                 </div>

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
//                     Quick View
//                   </button>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 <p className="text-sm text-gray-600 mb-3 line-clamp-2">
//                   {product.description}
//                 </p>

//                 {/* Features */}
//                 <div className="flex flex-wrap gap-1 mb-3">
//                   {product.features.slice(0, 2).map((feature, index) => (
//                     <span
//                       key={index}
//                       className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
//                     >
//                       {feature}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Quantity and Rating */}
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-sm text-gray-600">
//                     Qty: <span className="font-medium">{product.quantity}</span>
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     <Star className="inline w-4 h-4 text-yellow-400 fill-current" />
//                     <span className="ml-1">4.5</span>
//                   </div>
//                 </div>

//                 {/* Price and Button */}
//                 <div className="flex items-center justify-between">
//                   <div className="text-xl font-bold text-gray-900">
//                     ₹{product.price.toFixed(2)}
//                   </div>
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//                     <ShoppingCart size={16} />
//                     <span>Add to Cart</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-12 py-8 border-t border-gray-200">
//           <p className="text-gray-600">
//             Need custom stickers?{" "}
//             <button href="#contact" onClick={() => window.location.href = '/contact'} className="text-blue-600 font-medium cursor-pointer hover:underline">
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
import { Heart, ShoppingCart, Star } from 'lucide-react';

export default function StickerCatalog() {
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Custom Shape Stickers",
      quantity: 10,
      price: 190.0,
      image: "https://sc04.alicdn.com/kf/H8a54cde4575b4089a5130c8433b4ec94C.jpg",
      category: "Custom",
      features: ["Free Wi-Fi", "Made Locally"],
      description: "Premium custom-shaped stickers for any design",
    },
    {
      id: 2,
      name: "Taffeta Lables",
      quantity: 10,
      price: 150.0,
      image: "https://images.meesho.com/images/products/429901137/rhrvx_512.webp",
      category: "Business",
      features: ["Professional", "Durable"],
      description: "High-quality visiting card stickers",
    },
    {
      id: 3,
      name: "Window Stickers",
      quantity: 1,
      price: 170.0,
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
      name: "Cricket Bat Stickers",
      quantity: 1,
      price: 65.0,
      image: "https://5.imimg.com/data5/SELLER/Default/2024/1/377364315/BQ/FF/KT/152548444/barcode-label-500x500.jpg",
      category: "Sports",
      features: ["Royal United", "Est. 2020"],
      description: "Premium cricket bat decoration stickers",
    },
    {
      id: 6,
      name: "Custom Car Stickers",
      quantity: 5,
      price: 240.0,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/9/ID/CT/RY/138140228/cotton-wash-care-garment-labels-500x500.png",
      category: "Automotive",
      features: ["Health Screenings", "Contact Info"],
      description: "Weather-resistant car stickers",
    },
    {
      id: 7,
      name: "Floor Stickers - Social Distancing",
      quantity: 1,
      price: 200.0,
      image: "https://futurevision.asia/img/Filedata/5.png",
      category: "Safety",
      features: ["Maintain 6 Feet", "Thank You"],
      description: "Social distancing floor markers",
    },
    {
      id: 8,
      name: "Custom Car Door Decals",
      quantity: 1,
      price: 200.0,
      image: "https://i.ebayimg.com/images/g/faoAAOSwf2dexTPT/s-l1200.jpg",
      category: "Automotive",
      features: ["Green Tea", "For Sensitive Skin"],
      description: "Premium car door decals",
    },
    {
      id: 8,
      name: "Custom Car Door Decals",
      quantity: 1,
      price: 200.0,
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/EH/WC/YB/6004399/printed-garment-labels-500x500.jpg",
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Sticker Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of high-quality stickers for every need
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Image Container */}
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
                
                {/* Fallback placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-6xl text-gray-400">🏷</div>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                    favorites.has(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-400 hover:text-red-500"
                  }`}
                >
                  <Heart
                    size={20}
                    fill={favorites.has(product.id) ? "currentColor" : "none"}
                  />
                </button>

                {/* Category Badge */}
                <div
                  className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    product.category
                  )}`}
                >
                  {product.category}
                </div>

                {/* Hover Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Quick View
                  </button>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
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

                {/* Quantity and Rating */}
                <div className="flex items-center justify-between mb-4">
                  
                  <div className="text-sm text-gray-500">
                    <Star className="inline w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1">
                      {((Math.random() * (5 - 4) + 4).toFixed(1))}
                    </span>
                  </div>
                </div>

                {/* Price and Button */}
               
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
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