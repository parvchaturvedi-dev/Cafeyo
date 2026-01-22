// src/components/GallerySection.jsx - Menu theme exact match
import React, { useEffect, useState } from 'react';

const GallerySection = () => {
  const [loaded, setLoaded] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [cursorBlink, setCursorBlink] = useState(true);
  
  const fullText = "Beautiful Moments Captured Here!";

  const images = [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1000&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1512436991641-978fd00ff9db?w=1000&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1000&fit=crop&auto=format'
  ];

  useEffect(() => {
    setLoaded(true);
    
    let index = 0;
    const timer = setInterval(() => {
      setTypingText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);

    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(blinkInterval);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-zinc-900 overflow-hidden"
    >
      {/* Floating elements - Exact Menu match */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-soft-light isolate">
        <div className="absolute top-1/4 left-8 w-24 h-36 bg-gradient-to-b from-yellow-500/40 to-yellow-600/20 rounded-3xl shadow-2xl animate-float1 blur-xl"></div>
        <div className="absolute top-1/2 right-12 w-20 h-32 bg-gradient-to-b from-amber-500/40 to-amber-600/20 rounded-2xl shadow-2xl animate-float2 blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-28 h-40 bg-gradient-to-b from-orange-500/40 to-orange-600/20 rounded-3xl shadow-2xl animate-float3 blur-xl" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto">
        
        {/* Left Text + Typing */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left mb-12 lg:mb-0 lg:pl-12">
          
          <div className={`transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
              Gallery
            </h2>
            <p className="text-xl lg:text-2xl text-yellow-300 font-medium drop-shadow-md">
              Captured Moments
            </p>
          </div>

          {/* Typing */}
          <div className={`transition-all duration-1000 mx-auto lg:mx-0 max-w-lg lg:max-w-md ${
            loaded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
          }`}>
            <p className="text-lg lg:text-xl text-gray-200 italic drop-shadow-lg">
              {typingText}
              <span className={`ml-1 inline-block w-4 h-7 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded ${cursorBlink ? 'opacity-100' : 'opacity-0'} shadow-lg animate-pulse`}>|</span>
            </p>
          </div>
        </div>

        {/* Right - Image Slider */}
        <div className="w-full lg:w-1/2 relative lg:pl-12">
          
          {/* Main Image */}
          <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500/20 backdrop-blur-sm mx-auto lg:mx-0 w-full h-72 sm:h-80 lg:h-96 xl:h-[28rem] transition-all duration-1000 ${
            loaded ? 'opacity-100 scale-100 delay-1500' : 'opacity-0 scale-95'
          }`}>
            <img 
              src={images[currentSlide]} 
              alt={`Gallery ${currentSlide + 1}`}
              className="w-full h-full object-cover brightness-85 hover:brightness-100 transition-all duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40" />
            <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-black/90" />
            
            {/* Counter */}
            <div className="absolute top-6 right-6 bg-black/90 backdrop-blur-xl px-4 py-2 rounded-2xl border border-yellow-500/40 text-yellow-400 text-sm font-medium shadow-lg">
              {currentSlide + 1} / {images.length}
            </div>
          </div>

          {/* Arrows */}
          <div className="flex justify-center lg:justify-end gap-4 mt-8 lg:mt-12">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-black/80 backdrop-blur-xl border-2 border-yellow-500/50 hover:border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-300 shadow-xl hover:shadow-yellow-500/30 rounded-2xl transition-all duration-400 flex items-center justify-center text-xl font-bold hover:scale-110"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-black/80 backdrop-blur-xl border-2 border-yellow-500/50 hover:border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-300 shadow-xl hover:shadow-yellow-500/30 rounded-2xl transition-all duration-400 flex items-center justify-center text-xl font-bold hover:scale-110"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(2deg) scale(1); }
          50% { transform: translateY(-8px) rotate(-1deg) scale(1.03); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-16px) scale(1.07); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 7s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default GallerySection;
