import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: 1, name: "Electronics", count: "1.2k+ Products" },
  { id: 2, name: "Fashion", count: "2.5k+ Products" },
  { id: 3, name: "Grocery", count: "800+ Products" },
  { id: 4, name: "Home & Living", count: "1.5k+ Products" },
  { id: 5, name: "Beauty", count: "900+ Products" },
  { id: 6, name: "Mobile", count: "500+ Products" },
  { id: 7, name: "Gadgets", count: "1.1k+ Products" },
  { id: 8, name: "Sports", count: "400+ Products" },
];

export default function PopularCategories() {
  return (
    <section className="py-24 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Completely Centered */}
        <div className="flex flex-col items-center text-center mb-16">
      
          <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-6 tracking-tight">
            Popular <span className="text-[var(--secondary)]">Categories</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-lg mb-8">
            Handpicked categories just for you. Explore the best deals across our most popular collections.
          </p>
        <Link 
  href="/categories" 
  className="btn btn-primary !rounded-full !flex items-center justify-center gap-2 px-10 group"
>
  <span>Browse All Categories</span>
  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
</Link>
        </div>

        {/* Advanced Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className="group relative h-80 bg-[var(--surface)] border border-[var(--border)] rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center overflow-hidden hover:border-[var(--secondary)]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(14,165,164,0.15)]"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Placeholder with Neon Ring */}
              <div className="relative w-32 h-32 rounded-full bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center group-hover:border-[var(--secondary)] transition-all duration-500 z-10 shadow-inner">
                <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-[var(--secondary)] transition-all">
                  Image
                </span>
                {/* <img src={cat.image} className="w-20 h-20 object-contain z-20" /> */}
              </div>

              {/* Text Content */}
              <div className="z-10 mt-4">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-1 group-hover:translate-y-[-5px] transition-transform duration-300">
                  {cat.name}
                </h3>
                <p className="text-sm font-medium text-[var(--text-secondary)] mb-6">
                  {cat.count}
                </p>
                
                {/* Floating "Explore" Text */}
               <div className="lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300">
     <span className="text-[var(--secondary)] font-bold text-xs uppercase tracking-widest flex items-center gap-2 justify-center bg-[var(--secondary)]/10 py-2 px-4 rounded-full lg:bg-transparent lg:p-0">
       Explore Now <ArrowRight size={14} />
     </span>
  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}