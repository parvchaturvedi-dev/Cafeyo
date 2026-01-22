// src/components/ContactSection.jsx - Full contact page
import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-black to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="w-fit mx-auto mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/8 to-yellow-400/8 backdrop-blur-sm rounded-2xl blur-sm -z-10 animate-pulse"></div>
            <div className="inline-flex px-6 py-3 bg-black/70 backdrop-blur-xl rounded-2xl border border-yellow-500/40 shadow-2xl group-hover:shadow-yellow-500/30 group-hover:scale-[1.05] group-hover:-translate-y-1 transition-all duration-500">
              <span className="text-white font-extrabold text-base tracking-[0.2em] uppercase">Contact</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light bg-gradient-to-r from-gray-200 via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
            Visit Us
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 lg:mb-28">
          
          {/* Left - Quick Links & Contact */}
          <div className="space-y-8 lg:space-y-12">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="space-y-4">
                <a href="#home" className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></span>
                  Home
                </a>
                <a href="#menu" className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></span>
                  Menu
                </a>
                <a href="#specials" className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></span>
                  Specials
                </a>
                <a href="#gallery" className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></span>
                  Gallery
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:text-yellow-400 transition-colors">
                  <div className="w-12 h-12 bg-yellow-500/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 group-hover:text-yellow-300">Phone</p>
                    <a href="tel:+911234567890" className="text-lg font-bold text-white hover:text-yellow-400 transition-colors">+91 12345 67890</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group hover:text-yellow-400 transition-colors">
                  <div className="w-12 h-12 bg-yellow-500/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 group-hover:text-yellow-300">Email</p>
                    <a href="mailto:hello@cafegram.com" className="text-lg font-bold text-white hover:text-yellow-400 transition-colors">hello@cafegram.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group hover:text-yellow-400 transition-colors">
                  <div className="w-12 h-12 bg-yellow-500/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 group-hover:text-yellow-300">Hours</p>
                    <div className="text-lg font-bold text-white space-y-1">
                      <div>Mon-Fri: 8AM - 11PM</div>
                      <div>Sat-Sun: 9AM - 12AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-black/50 backdrop-blur-xl rounded-2xl border border-yellow-500/40 hover:bg-yellow-500/20 hover:border-yellow-400 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl">
                  📘
                </a>
                <a href="#" className="w-12 h-12 bg-black/50 backdrop-blur-xl rounded-2xl border border-yellow-500/40 hover:bg-yellow-500/20 hover:border-yellow-400 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl">
                  📷
                </a>
                <a href="#" className="w-12 h-12 bg-black/50 backdrop-blur-xl rounded-2xl border border-yellow-500/40 hover:bg-yellow-500/20 hover:border-yellow-400 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl">
                  🐦
                </a>
              </div>
            </div>
          </div>

          {/* Right - Map + Address */}
          <div className="space-y-8 lg:space-y-12">
            
            {/* Address */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Visit Us
              </h3>
              <div className="bg-black/70 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-yellow-500/40 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400">Address</p>
                      <p className="text-lg font-bold text-white leading-relaxed">
                        123 MG Road, C-Scheme<br/>
                        Jaipur, Rajasthan 302001
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-yellow-500/30">
                    <p className="text-gray-400 text-sm italic">
                      Parking available • Wheelchair accessible
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Location
              </h3>
              <div className="bg-black/70 backdrop-blur-xl rounded-3xl p-1 border border-yellow-500/40 shadow-2xl overflow-hidden">
                <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-gray-800 via-zinc-900 to-black rounded-2xl relative flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur">
                      <span className="text-3xl">🗺️</span>
                    </div>
                    <p className="text-yellow-400 font-bold text-xl mb-2">MAP LOADING...</p>
                    <p className="text-gray-500 text-sm">Google Maps will appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-yellow-500/20 pt-12 mt-24 text-center">
          <p className="text-gray-400 text-lg lg:text-xl">
            © 2026 Cafegram. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
