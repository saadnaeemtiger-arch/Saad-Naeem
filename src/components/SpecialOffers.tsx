import { useState } from 'react';
import { Tag, Check, Copy, Sparkles, ArrowRight } from 'lucide-react';
import { SpecialOffer } from '../types';
import { SPECIAL_OFFERS } from '../data';

interface SpecialOffersProps {
  onClaimOffer: (category: string) => void;
}

export default function SpecialOffers({ onClaimOffer }: SpecialOffersProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const mapOfferToCategory = (offerId: string) => {
    switch (offerId) {
      case 'offer-1': return 'Birthday Cakes'; // Cakes
      case 'offer-2': return 'Birthday Cakes';
      case 'offer-3': return 'Croissants';
      case 'offer-4': return 'Fresh Bread';
      default: return 'All';
    }
  };

  return (
    <section id="special-offers" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 font-serif text-xs font-bold uppercase tracking-[0.25em] block">
            Premium Offers & Gifts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-cream-950">
            Special Sweet Offers
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
          <p className="text-cream-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Claim these limited-time promotional deals. Perfect for family celebrations, daily breakfasts, or filling your bread box.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => {
            const isCopied = copiedId === offer.id;
            const targetCategory = mapOfferToCategory(offer.id);
            return (
              <div
                key={offer.id}
                className="bg-white rounded-3xl border border-gold-400/20 shadow-sm overflow-hidden flex flex-col sm:flex-row group hover:shadow-lg hover:border-gold-400/50 transition-all duration-300 min-h-[220px]"
                id={offer.id}
              >
                {/* Left Side: Thumbnail with visual tags */}
                <div className="relative sm:w-2/5 h-48 sm:h-auto bg-cream-100 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                  
                  {/* Floating Promotion Tag */}
                  <span className="absolute top-3 left-3 bg-gold-500 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    {offer.tag}
                  </span>
                </div>

                {/* Right Side: Copy & Content details */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-base sm:text-lg font-normal text-cream-950 flex items-center gap-1.5 leading-snug">
                      <Sparkles size={14} className="text-gold-500 flex-shrink-0" />
                      {offer.title}
                    </h3>
                    <p className="text-cream-700 text-xs leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  {/* Coupon Copier & Claim action row */}
                  <div className="space-y-3 pt-3 border-t border-gold-400/10">
                    {offer.discountCode && (
                      <div className="flex items-center justify-between bg-gold-50 border border-gold-200/50 rounded-lg p-2.5">
                        <div className="flex items-center gap-1.5">
                          <Tag size={12} className="text-gold-500" />
                          <span className="text-xs font-mono font-bold text-gold-500 tracking-wider">
                            {offer.discountCode}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => handleCopyCode(offer.id, offer.discountCode!)}
                          className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gold-500 hover:text-gold-600 cursor-pointer transition-colors"
                          title="Copy Promo Code"
                        >
                          {isCopied ? (
                            <>
                              <Check size={12} className="text-green-600 animate-scale-up" />
                              <span className="text-green-600 font-extrabold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => onClaimOffer(targetCategory)}
                      className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow shadow-gold-500/15 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    >
                      Claim Promotion
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
