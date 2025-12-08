"use client";

import { useState, useMemo } from 'react';
import ProductCard from '../ui/ProductCard';

export default function BestSellersSection() {
  const bestSellerProducts = useMemo(() => [
    {
      imageUrl: "/products/natural_jute_tote_bag.png",
      category: "Home & Kitchen", 
      title: "Jute Bag | Originally Sourced",
      description: "Sustainable jute bag for daily use",
      price: 89,
      originalPrice: 120,
      rating: 4.9,
      reviews: 524,
      variant: "default",
      size: "default"
    },
    {
      imageUrl: "/products/eco_bamboo_water_bottle.png",
      category: "Personal Care",
      title: "Eco Bamboo Water Bottle",
      description: "BPA-free bamboo water bottle",
      price: 65,
      originalPrice: 85,
      rating: 4.8,
      reviews: 342,
      variant: "default",
      size: "default"
    },
    {
      imageUrl: "/products/organic_cotton_t-shirt.png",
      category: "Fashion",
      title: "Organic Cotton T-Shirt",
      description: "100% organic cotton sustainable tee",
      price: 125,
      originalPrice: 160,
      rating: 4.7,
      reviews: 289,
      variant: "default",
      size: "default"
    },
    {
      imageUrl: "/products/recycled_paper_diary.png",
      category: "Stationery",
      title: "Recycled Paper Diary",
      description: "Eco-friendly recycled paper diary",
      price: 45,
      originalPrice: 65,
      rating: 4.9,
      reviews: 201,
      variant: "default",
      size: "default"
    },
    {
      imageUrl: "/products/hemp_fiber_backpack.png",
      category: "Accessories",
      title: "Hemp Fiber Backpack",
      description: "Durable hemp fiber travel backpack",
      price: 180,
      originalPrice: 240,
      rating: 4.8,
      reviews: 156,
      variant: "default",
      size: "default"
    }
  ], []);

  const customStyles = `
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes blob {
      0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    }
    @keyframes float3d {
      0% { transform: translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg); }
      25% { transform: translateY(-15px) translateZ(20px) rotateX(5deg) rotateY(5deg); }
      50% { transform: translateY(-5px) translateZ(10px) rotateX(0deg) rotateY(10deg); }
      75% { transform: translateY(-10px) translateZ(15px) rotateX(-5deg) rotateY(5deg); }
      100% { transform: translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg); }
    }
    @keyframes rotate3d {
      0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
      100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
    }
    @keyframes pulse3d {
      0%, 100% { transform: scale(1) translateZ(0); opacity: 0.6; }
      50% { transform: scale(1.1) translateZ(30px); opacity: 0.8; }
    }
    @keyframes orbit {
      0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
    }
    @keyframes wave {
      0%, 100% { transform: translateY(0) scaleY(1); }
      50% { transform: translateY(-20px) scaleY(1.1); }
    }
  `;

  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 overflow-hidden min-h-[600px] font-sans">
      <style>{customStyles}</style>
      
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
        {/* Floating 3D Orbs */}
        <div 
          className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-br from-amber-300/30 to-orange-400/20 rounded-full"
          style={{ animation: 'float3d 8s ease-in-out infinite', transformStyle: 'preserve-3d' }}
        ></div>
        <div 
          className="absolute top-40 right-[15%] w-24 h-24 bg-gradient-to-br from-emerald-300/25 to-teal-400/15 rounded-full"
          style={{ animation: 'float3d 10s ease-in-out infinite 2s', transformStyle: 'preserve-3d' }}
        ></div>
        <div 
          className="absolute bottom-32 left-[20%] w-20 h-20 bg-gradient-to-br from-orange-200/30 to-amber-300/20 rounded-full"
          style={{ animation: 'pulse3d 6s ease-in-out infinite', transformStyle: 'preserve-3d' }}
        ></div>
        <div 
          className="absolute bottom-20 right-[25%] w-28 h-28 bg-gradient-to-br from-yellow-200/25 to-amber-200/15 rounded-full"
          style={{ animation: 'float3d 12s ease-in-out infinite 1s', transformStyle: 'preserve-3d' }}
        ></div>
        
        {/* 3D Rotating Shapes */}
        <div 
          className="absolute top-1/4 left-[5%] w-16 h-16 border-2 border-amber-300/30"
          style={{ 
            animation: 'rotate3d 20s linear infinite', 
            transformStyle: 'preserve-3d',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-[8%] w-12 h-12 border-2 border-emerald-300/25"
          style={{ 
            animation: 'rotate3d 15s linear infinite reverse', 
            transformStyle: 'preserve-3d',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
        ></div>
        
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ perspective: '500px' }}>
          <div 
            className="w-4 h-4 bg-amber-400/40 rounded-full"
            style={{ animation: 'orbit 20s linear infinite' }}
          ></div>
        </div>
        
        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden opacity-20">
          <div className="flex gap-4">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="w-8 h-32 bg-gradient-to-t from-amber-400/50 to-transparent rounded-t-full"
                style={{ animation: `wave 3s ease-in-out infinite ${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Animated Blob */}
        <div 
          className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-br from-amber-200/15 to-orange-300/10"
          style={{ animation: 'blob 10s ease-in-out infinite' }}
        ></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 space-y-6">
          <div className="space-y-6">
            {/* Title */}
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight">
              Best <span className="text-amber-600">Sellers</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our most loved eco-friendly products, trusted by thousands of conscious shoppers worldwide.
            </p>
          </div>
          
          {/* Decorative Line */}
          <div className="flex items-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>

        {/* Products Grid with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestSellerProducts.map((product, index) => (
            <div 
              key={index}
              className="group opacity-0 transform transition-all duration-500"
              style={{ 
                animation: `slideInUp 0.6s ease-out forwards ${index * 0.15}s`
              }}
            >
              <div className="relative">
                {/* Best Seller Badge */}
                <div className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3">
                  #{index + 1} Best
                </div>
                <ProductCard 
                  productId={null}
                  {...product}
                />
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16 sm:mt-20">
          <button 
            onClick={() => console.log('Navigating to best sellers...')}
            className="group relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center gap-3">
              <span className="text-xl">🏆</span>
              <span>View All Best Sellers</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
