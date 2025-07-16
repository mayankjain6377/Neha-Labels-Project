import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    id: 1,
    name: "Rajat Panwar",
    role: "Manager, D-Mart",
    avatar: "https://i.pravatar.cc/150?img=56",
    rating: 5,
    message: "Absolutely loved the label quality! Perfect adhesion, vibrant colors, and quick delivery. Will definitely reorder.",
  },
  {
    id: 5,
    name: "Ankit Joshi",
    role: "Branding Specialist, MAX",
    avatar: "https://i.pravatar.cc/150?img=61",
    rating: 4,
    message: "Loved the stickers for branding. High durability and waterproof quality.",
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Small Business Owner",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 4,
    message: "The custom car stickers are exactly what I imagined. Amazing customer support too!",
  },
  {
    id: 3,
    name: "Meera Singh",
    role: "Event Organizer",
    avatar: "https://i.pravatar.cc/150?img=32",

    rating: 5,
    message: "These floor stickers made my event feel so professional. Super durable and easy to apply.",
  },
  {
    id: 4,
    name: "Simran Kaur",
    role: "Boutique Owner",
    avatar: "https://i.pravatar.cc/150?img=35",
    rating: 5,
    message: "Great customization options and smooth ordering process. Highly recommended!",
  }
];

export default function CustomerTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    renderMode: "performance",
    drag: true,
    initial: 0,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 mt-2">Real feedback from happy clients using our sticker & label products</p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => instanceRef.current?.prev()}
          disabled={currentSlide === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 ${
            currentSlide === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:shadow-xl hover:bg-gray-50 group'
          }`}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className={`${currentSlide === 0 ? 'text-gray-400' : 'text-gray-600 group-hover:text-blue-600'}`} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => instanceRef.current?.next()}
          disabled={loaded && instanceRef.current && currentSlide === instanceRef.current.track.details.slides.length - Math.ceil(instanceRef.current.options.slides.perView)}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 ${
            loaded && instanceRef.current && currentSlide === instanceRef.current.track.details.slides.length - Math.ceil(instanceRef.current.options.slides.perView)
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:shadow-xl hover:bg-gray-50 group'
          }`}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className={`${loaded && instanceRef.current && currentSlide === instanceRef.current.track.details.slides.length - Math.ceil(instanceRef.current.options.slides.perView) ? 'text-gray-400' : 'text-gray-600 group-hover:text-blue-600'}`} />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className=" keen-slider">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" keen-slider__slide bg-green-100 border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition duration-300"
            >
              <div className=" flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-sm"
                />
                <div className="ml-4 text-left">
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gray-300" />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}