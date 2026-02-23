import React from 'react';
import { 
  Truck, ShieldCheck, Zap, Headphones, 
  RotateCcw, CreditCard, Award, BadgeCheck, Star, Shield 
} from 'lucide-react';

const WhyShopWithUs = () => {
  // 8 Professional Features - Data with custom styling
  const features = [
    { id: 1, title: "Free Delivery", desc: "Free shipping on orders over $50", icon: <Truck />, color: "bg-green-50 text-green-600" },
    { id: 2, title: "Secure Payment", desc: "100% secure payment processing", icon: <ShieldCheck />, color: "bg-blue-50 text-blue-600" },
    { id: 3, title: "Genuine Products", desc: "Directly from top brands", icon: <BadgeCheck />, color: "bg-amber-50 text-amber-600" },
    { id: 4, title: "24/7 Support", desc: "Always here to help you", icon: <Headphones />, color: "text-purple-600 bg-purple-50" },
    { id: 5, title: "Easy Returns", desc: "7-day easy return policy", icon: <RotateCcw />, color: "text-red-600 bg-red-50" },
    { id: 6, title: "Best Prices", desc: "Guaranteed lowest prices", icon: <Zap />, color: "text-yellow-600 bg-yellow-50" },
    { id: 7, title: "Verified Seller", desc: "Top rated trusted partners", icon: <Award />, color: "text-indigo-600 bg-indigo-50" },
    { id: 8, title: "Secure Checkout", desc: "Advanced fraud protection", icon: <Shield />, color: "text-cyan-600 bg-cyan-50" },
  ];

  // Stats Data based on your uploaded image
  const stats = [
    { label: "50K+", sub: "Happy Customers" },
    { label: "100K+", sub: "Products Sold" },
    { label: "99%", sub: "Satisfaction Rate" },
    { label: "24/7", sub: "Customer Support" },
  ];

  return (
    <section className="py-24 bg-[var(--background)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] tracking-tight">
            Why Shop <span className="text-[var(--secondary)]">With Us?</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto font-medium text-lg">
            Experience the best-in-class service with features designed for your peace of mind.
          </p>
        </div>

        {/* --- 8 Features Grid (Responsive) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {features.map((f) => (
            <div 
              key={f.id} 
              className="group relative p-10 rounded-[2.5rem] bg-[var(--surface)] border border-[var(--border)] 
                         flex flex-col items-center text-center transition-all duration-500 cursor-default
                         hover:-translate-y-4 hover:border-[var(--secondary)]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              {/* Centered Large Icon Container - Animated on Hover */}
              <div className={`w-24 h-24 rounded-[2rem] ${f.color} flex items-center justify-center mb-8 shadow-sm 
                               group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {React.cloneElement(f.icon, { size: 40, strokeWidth: 1.5 })}
              </div>
              
              <h3 className="font-bold text-[var(--primary)] text-2xl mb-3 group-hover:text-[var(--secondary)] transition-colors">
                {f.title}
              </h3>
              <p className="text-[var(--text-secondary)] font-medium leading-relaxed px-2">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Stats Section (Inspired by Image 1) --- */}
        <div className="space-y-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, idx) => (
              <div 
                key={idx} 
                className="bg-[var(--surface)] border border-[var(--border)] rounded-[2.5rem] p-10 text-center 
                           hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-5xl md:text-6xl font-black text-[var(--primary)] mb-3 tracking-tighter">
                  {s.label}
                </h4>
                <p className="text-sm md:text-base font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>

          {/* --- Trusted Badge Row --- */}
          <div className="flex justify-center pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 px-10 py-5 
                            bg-orange-50/50 dark:bg-orange-950/10 border border-orange-100/50 
                            dark:border-orange-900/20 rounded-full shadow-sm">
              <ShieldCheck className="text-orange-500" size={24} />
              <span className="text-[var(--primary)] font-bold text-sm md:text-lg">
                Trusted by thousands of satisfied customers worldwide
              </span>
              <div className="flex gap-1 items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyShopWithUs;