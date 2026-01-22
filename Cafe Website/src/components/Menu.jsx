// src/components/Menu.jsx - Accordion style tabs (exact screenshot match)
import React, { useState } from 'react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const menuTabs = [
    {
      id: 0,
      title: 'Burger/Sandwich/Wrap',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&fit=crop&crop=face',
      items: [
        { name: 'Zinger Chicken Wrap', desc: 'Tomatoes, Pickled, Mint, Onion', price: '₹249' },
        { name: 'French Toast', price: '₹249' },
        { name: 'Cheese Omelette', price: '₹229' }
      ]
    },
    {
      id: 1,
      title: 'Pizza/Pasta',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d174?w=300&fit=crop&crop=face',
      items: [
        { name: 'Pizza Pasta', desc: 'Fresh Italian', price: '₹349' },
        { name: 'Margherita Pizza', price: '₹299' }
      ]
    },
    {
      id: 2,
      title: 'Soups/Salads',
      image: 'https://images.unsplash.com/photo-1541599468178-a92a8b2a0958?w=300&fit=crop&crop=face',
      items: [
        { name: 'Fresh Bowl', price: '₹199' },
        { name: 'Caesar Salad', desc: 'Crisp romaine, dressing', price: '₹229' }
      ]
    },
    {
      id: 3,
      title: 'Chinese',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&fit=crop&crop=face',
      items: [
        { name: 'Quesadilla', desc: 'Chicken, Cheese, Black Pepper, Greens, Corns, Tomato', price: '₹299' },
        { name: 'Chicken Fried Rice', price: '₹279' },
        { name: 'Manchurian', price: '₹259' }
      ]
    },
    {
      id: 4,
      title: 'All Day Breakfast',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&fit=crop&crop=face',
      items: [
        { name: 'In House Bakery Fresh', price: '₹249' },
        { name: 'Masala Omelette', price: '₹229' }
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 lg:py-32 bg-linear-to-br from-slate-900 via-black to-zinc-950 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.3em] mb-8 bg-linear-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Check Our Tasty Menu
          </h2>
        </div>

        {/* Horizontal Scroll Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-6 lg:pb-8 -mx-6 lg:-mx-8 px-6 lg:px-8 snap-x snap-mandatory">
          {menuTabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 w-64 lg:w-72 h-48 lg:h-52 rounded-2xl overflow-hidden border-4 transition-all duration-500 hover:scale-105 snap-center ${
                activeTab === tab.id
                  ? 'border-orange-400 bg-orange-500/20 shadow-2xl shadow-orange-500/30 scale-105'
                  : 'border-white/20 hover:border-orange-400/50'
              }`}
            >
              <div className="w-full h-3/4 overflow-hidden">
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-4 h-1/4 flex items-center">
                <h3 className={`text-sm lg:text-base font-semibold truncate ${
                  activeTab === tab.id ? 'text-orange-400' : 'text-white/80'
                }`}>
                  {tab.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Active Tab Content - Expandable list */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className={`overflow-hidden transition-all duration-700 ease-out ${
            activeTab !== null ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-6 p-6 lg:p-8 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10">
              {menuTabs[activeTab]?.items.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between py-4 first:pt-0 last:pb-0 border-b border-white/10 last:border-b-0">
                  <div className="flex-1 pr-4">
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-1 line-clamp-1">
                      {item.name}
                    </h4>
                    {item.desc && (
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <span className="text-2xl lg:text-3xl font-bold text-orange-400 min-w-20 text-right">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .text-4xl { font-size: 2.25rem !important; }
          .text-5xl { font-size: 2.75rem !important; }
          .text-6xl { font-size: 3.25rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Menu;
