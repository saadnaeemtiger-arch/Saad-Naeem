import { Sparkles, Wheat, Cake, Truck, Tag, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 'why-1',
      icon: <Sparkles className="text-gold-500 w-6 h-6" />,
      title: 'Freshly Baked Daily',
      description: 'Our ovens roar to life at 3:00 AM every single morning to guarantee you enjoy warm, crispy, aromatic breads and pastries daily.'
    },
    {
      id: 'why-2',
      icon: <Wheat className="text-gold-500 w-6 h-6" />,
      title: 'Premium Ingredients',
      description: 'We source pure Normandy butter, Belgian chocolate, organic unbleached stoneground flour, and fresh local seasonal berries.'
    },
    {
      id: 'why-3',
      icon: <Cake className="text-gold-500 w-6 h-6" />,
      title: 'Custom Cake Orders',
      description: 'Bespoke artistic design services. Work with our master decorators to create spectacular, personal birthday & wedding tiers.'
    },
    {
      id: 'why-4',
      icon: <Truck className="text-gold-500 w-6 h-6" />,
      title: 'Fast Local Delivery',
      description: 'Enjoy fast, temperature-controlled delivery. Your customized cakes and warm bread crates arrive in perfect, pristine condition.'
    },
    {
      id: 'why-5',
      icon: <Tag className="text-gold-500 w-6 h-6" />,
      title: 'Affordable Luxury',
      description: 'We believe premium quality should be accessible. Enjoy exquisite French artisan recipes at transparent, reasonable price levels.'
    },
    {
      id: 'why-6',
      icon: <Smile className="text-gold-500 w-6 h-6" />,
      title: 'Friendly Family Service',
      description: 'Experience warm, genuine hospitality. Whether online or in our brick-and-mortar storefront, we welcome you as family.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100/50 border-t border-b border-cream-200 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 font-serif text-xs font-bold uppercase tracking-[0.25em] block">
            The Artisanal Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-cream-950">
            Why Choose TOO Bakery
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
          <p className="text-cream-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            We hold ourselves to an uncompromising level of quality, combining historical European master-baking traditions with friendly community care.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-3xl border border-gold-400/20 shadow-sm hover:shadow-lg hover:border-gold-400/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-5"
              id={item.id}
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 text-gold-500 flex items-center justify-center border border-gold-400/5 group-hover:bg-gold-500 group-hover:text-white group-hover:scale-105 transition-all duration-500">
                <span className="text-gold-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-serif text-base font-normal text-cream-950 group-hover:text-gold-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-cream-700 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Quality Stamp Badge */}
        <div className="mt-16 bg-gold-950 text-gold-100 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl border border-gold-800">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-lg font-normal text-gold-300 flex items-center justify-center md:justify-start gap-2">
              <span>🌾</span> Organic Certified Ingredients
            </h4>
            <p className="text-[11px] text-gold-200/70 max-w-xl leading-relaxed">
              We pledge to never use chemical preservatives, additives, or artificial flavor enhancers. Our products are made solely with slow yeast cultures and direct wholesome earth ingredients.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-gold-500/10 hover:scale-[1.03] transition-all cursor-pointer whitespace-nowrap rounded-lg"
          >
            Learn Our Process
          </button>
        </div>

      </div>
    </section>
  );
}
