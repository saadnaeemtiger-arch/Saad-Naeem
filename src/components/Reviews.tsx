import { Star, Quote, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 font-serif text-xs font-bold uppercase tracking-[0.25em] block">
            Patron Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-cream-950">
            Loving Customer Reviews
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
          <p className="text-cream-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Do not just take our word for it. Read the delightful stories and comments shared by our neighborhood regulars and event clients.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl border border-gold-400/20 p-8 shadow-sm hover:shadow-lg hover:border-gold-400/50 hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between gap-6"
              id={`review-card-${review.id}`}
            >
              {/* Star Rating & Quote Block */}
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-gold-500 fill-gold-500"
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote size={20} className="absolute -top-3 -left-3 text-gold-200/50 pointer-events-none" />
                  <p className="text-cream-950 text-xs sm:text-sm italic leading-relaxed tracking-wide font-normal relative z-10 pl-3">
                    "{review.text}"
                  </p>
                </div>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gold-400/10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold-400/30 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-xs font-bold text-gold-500 truncate">
                    {review.name}
                  </h4>
                  <p className="text-[9px] text-cream-600 font-bold truncate uppercase tracking-widest mt-0.5">
                    {review.role}
                  </p>
                </div>
                <div className="text-[9px] text-cream-400 font-bold whitespace-nowrap">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand metrics banner */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-3xl border border-gold-400/20 shadow-sm text-center max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gold-400/15">
            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-gold-500">4.9 ★</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-cream-600">Google Maps Rating</div>
            </div>
            <div className="space-y-1 sm:pl-8">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-gold-500">12,000+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-cream-600">Happy Regular Customers</div>
            </div>
            <div className="space-y-1 sm:pl-8">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-gold-500">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-cream-600">Taste Guarantee</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
