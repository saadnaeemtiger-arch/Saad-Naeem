import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onViewMenu: () => void;
  onOrderNow: () => void;
}

export default function Hero({ onViewMenu, onOrderNow }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-[100px] overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop"
          alt="TOO Bakery Fresh Pastries Background"
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-950/80 via-gold-900/65 to-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-gold-400/20 rounded-full pointer-events-none animate-pulse hidden md:block" />
      <div className="absolute bottom-1/4 right-20 w-40 h-40 border border-gold-400/10 rounded-full pointer-events-none hidden md:block" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-gold-50 flex flex-col items-center">
        {/* Floating Accent Tag */}
        <div className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10px] uppercase tracking-[0.25em] font-bold rounded-full mb-8 animate-[pulse_3s_infinite]">
          Premium Handcrafted Artisanal Pastries
        </div>

        {/* Big Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-normal leading-[0.95] text-white max-w-4xl mb-8 tracking-tight drop-shadow-sm">
          Freshly Baked <br />
          <span className="italic font-light block mt-2 text-gold-300">Every Day</span>
        </h1>

        {/* Subheading */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-gold-100/80 max-w-2xl font-normal leading-relaxed mb-12 tracking-wide">
          Experience the taste of handcrafted breads, delicious cakes, and pastries made with love and premium organic ingredients.
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOrderNow}
            className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-bold shadow-xl shadow-gold-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Order Now
            <ArrowUpRight size={14} />
          </button>
          
          <button
            onClick={onViewMenu}
            className="w-full sm:w-auto px-8 py-3.5 border border-gold-400 bg-white/10 hover:bg-gold-400 text-gold-200 hover:text-white text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            View Menu
          </button>
        </div>

        {/* Feature quick ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-gold-400/20 w-full max-w-3xl">
          <div className="text-center">
            <div className="font-serif text-4xl text-gold-300">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-gold-200/60 font-bold mt-1">Organic Flour</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl text-gold-300">12h+</div>
            <div className="text-[10px] uppercase tracking-widest text-gold-200/60 font-bold mt-1">Slow Ferment</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl text-gold-300">20+</div>
            <div className="text-[10px] uppercase tracking-widest text-gold-200/60 font-bold mt-1">Daily Pastries</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl text-gold-300">0%</div>
            <div className="text-[10px] uppercase tracking-widest text-gold-200/60 font-bold mt-1">Preservatives</div>
          </div>
        </div>

      </div>

      {/* Decorative Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />

      {/* Embedded CSS for custom zoom animation */}
      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.02); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
