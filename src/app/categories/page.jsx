"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Categorical data with custom colors for dummy images
const allCategories = [
  { id: 1, name: "Electronics", count: "1.2k+ Products", color: "0EA5A4" },
  { id: 2, name: "Fashion", count: "2.5k+ Products", color: "8B5CF6" },
  { id: 3, name: "Grocery", count: "800+ Products", color: "10B981" },
  { id: 4, name: "Home & Living", count: "1.5k+ Products", color: "F59E0B" },
  { id: 5, name: "Beauty Care", count: "900+ Products", color: "EC4899" },
  { id: 6, name: "Mobile", count: "500+ Products", color: "06B6D4" },
  { id: 7, name: "Kitchen", count: "1.1k+ Products", color: "6366F1" },
  { id: 8, name: "Sports", count: "400+ Products", color: "EF4444" },
  { id: 9, name: "Baby Care", count: "600+ Products", color: "FACC15" },
  { id: 10, name: "Automotive", count: "300+ Products", color: "64748B" },
  { id: 11, name: "Pet Supplies", count: "450+ Products", color: "D97706" },
  { id: 12, name: "Office", count: "700+ Products", color: "0D9488" },
  { id: 13, name: "Watches", count: "250+ Products", color: "E11D48" },
  { id: 14, name: "Cameras", count: "180+ Products", color: "4B5563" },
  { id: 15, name: "Audio", count: "320+ Products", color: "7C3AED" },
  { id: 16, name: "Books", count: "2k+ Products", color: "2563EB" },
];

export default function AllCategories() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-12 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Navigation Section: Left-aligned highlight button */}
        <div className="w-full flex justify-start mb-10 md:mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--secondary)] font-bold text-sm shadow-sm hover:shadow-md hover:border-[var(--secondary)]/50 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Section: Centered title and CTA */}
        <div className="flex flex-col items-center gap-6 text-center mb-16 md:mb-24">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-black text-[var(--primary)] tracking-tight leading-tight">
              All <span className="text-[var(--secondary)]">Categories</span>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl text-base md:text-lg mx-auto">
              Explore our complete collection. From electronics to daily
              essentials, find everything categorized for your convenience.
            </p>
          </div>
          
          <Link
            href="/products"
            className="btn btn-primary !rounded-full !flex items-center justify-center gap-2 px-8 md:px-10 group shadow-lg shadow-[var(--secondary)]/20"
          >
            <span>Browse All Products</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform shrink-0"
            />
          </Link>
        </div>

        {/* Responsive Grid: Adjusts columns based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {allCategories.map((cat) => (
            <Link
              href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
              key={cat.id}
              className="group relative min-h-[300px] md:h-80 bg-[var(--surface)] border border-[var(--border)] rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center overflow-hidden hover:border-[var(--secondary)]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(14,165,164,0.15)]"
            >
              {/* Decorative Background Glow on Hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Responsive Image Container: Circular design with shadow */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center group-hover:border-[var(--secondary)] transition-all duration-500 z-10 shadow-inner overflow-hidden p-2">
                <img
                  src={`https://placehold.co/400x400/${cat.color}/white?text=${cat.name[0]}`}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Section: Name and Product count */}
              <div className="z-10 mt-4">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-1 group-hover:translate-y-[-5px] transition-transform duration-300">
                  {cat.name}
                </h3>
                <p className="text-sm font-medium text-[var(--text-secondary)] mb-4 md:mb-6">
                  {cat.count}
                </p>

                {/* Hover Reveal Action: Always visible on mobile, hidden on desktop until hover */}
                <div className="lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[var(--secondary)] font-bold text-xs uppercase tracking-widest flex items-center gap-1 justify-center">
                    View Collection <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}