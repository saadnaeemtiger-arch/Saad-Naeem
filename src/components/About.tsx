import { Sparkles, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-200/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-12 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Handcrafted Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-400/10 border border-gold-400/20 text-gold-500 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
              Our Passion & Heritage
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-cream-950 leading-tight">
              Crafting Unforgettable Memories <br />
              <span className="text-gold-500 italic font-light">One Slice At A Time</span>
            </h2>
            
            <p className="text-cream-800 text-xs sm:text-sm leading-relaxed tracking-wide">
              TOO Bakery is dedicated to bringing customers freshly baked products every day. Every loaf of bread, cake, pastry, and dessert is prepared with high-quality ingredients to ensure unforgettable taste and freshness.
            </p>
            
            <p className="text-cream-700 text-xs leading-relaxed">
              Our master bakers blend centuries-old traditional European fermentation techniques with modern visual artistry. From sourcing stone-ground grain flour from boutique family farms to folding high-fat churned butter into our premium croissant layers, we make zero compromises. For us, baking is not a commercial workflow — it is a daily love letter to our community.
            </p>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gold-400/10">
                <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500 mt-0.5">
                  <Heart size={14} />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-950">Baked with Love</h4>
                  <p className="text-[11px] text-cream-700 mt-1 leading-relaxed">Our small-batch artisan methods ensure each bite is filled with true culinary passion.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gold-400/10">
                <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500 mt-0.5">
                  <Award size={14} />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-950">Award Winning Recipe</h4>
                  <p className="text-[11px] text-cream-700 mt-1 leading-relaxed">Voted as the premier boutique bakery for custom cakes and French viennoiseries in 2026.</p>
                </div>
              </div>
            </div>

            {/* Signature Block */}
            <div className="flex items-center gap-4 pt-6 border-t border-gold-400/10">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80"
                alt="Head Baker Theodore Oliver"
                className="w-14 h-14 rounded-full object-cover border border-gold-400/30 shadow-sm"
              />
              <div>
                <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-950">Theodore Oliver</h5>
                <p className="text-[10px] text-gold-500 font-bold uppercase tracking-wider">Founder & Head Master Baker, TOO Bakery</p>
                <div className="text-[11px] text-cream-600 italic mt-0.5 font-serif">"Authentic warmth from our oven to your soul."</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Bento Layout */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4">
            <div className="col-span-8 overflow-hidden rounded-2xl shadow-xl border border-cream-200 group h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=crop&q=80"
                alt="Handcrafted Croissants Process"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-4 overflow-hidden rounded-2xl shadow-xl border border-cream-200 group h-[320px] flex flex-col justify-between bg-gold-900 p-6 text-gold-100 text-center">
              <div className="font-serif text-3xl font-extrabold text-gold-400">36+</div>
              <div className="text-[10px] uppercase tracking-widest font-semibold text-gold-200 leading-normal">Hours of Sourdough Fermentation</div>
              <div className="w-8 h-px bg-gold-400 mx-auto" />
              <div className="text-xs italic font-serif">"Time is our secret ingredient."</div>
            </div>
            <div className="col-span-4 bg-gold-100 rounded-2xl p-6 shadow-xl border border-gold-200/50 text-center flex flex-col justify-center items-center h-[180px]">
              <span className="text-3xl">🌾</span>
              <div className="font-serif text-sm font-bold text-gold-950 mt-2">Organic Flour</div>
              <p className="text-[10px] text-cream-800 mt-1">100% stoneground natural crops</p>
            </div>
            <div className="col-span-8 overflow-hidden rounded-2xl shadow-xl border border-cream-200 group h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80"
                alt="Bakery Warm Flour bread"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
