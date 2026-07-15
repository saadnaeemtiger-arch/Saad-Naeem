import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50 relative overflow-hidden scroll-mt-10">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-200/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 font-serif text-xs font-bold uppercase tracking-[0.25em] block">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-cream-950">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
          <p className="text-cream-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Have questions about custom wedding designs, daily deliveries, or wholesale services? Find our instant quick answers here.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-gold-400/20 shadow-sm overflow-hidden transition-all duration-300"
                id={item.id}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer hover:bg-gold-500/5 transition-colors"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle size={16} className="text-gold-500 flex-shrink-0" />
                    <span className="font-serif text-sm sm:text-base font-normal text-cream-950">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`p-1.5 rounded-full bg-cream-50 text-gold-500 border border-gold-400/10 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-500 text-white border-gold-500' : ''
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Accordion Content Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-gold-400/10' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-6 sm:p-7 text-xs sm:text-sm text-cream-700 leading-relaxed bg-cream-50/10">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions block */}
        <div className="mt-12 bg-white border border-gold-400/20 p-6 rounded-3xl text-center max-w-xl mx-auto space-y-4 shadow-sm">
          <p className="text-xs sm:text-sm text-cream-800 font-normal">
            ✨ Still have specific questions about bespoke cakes or event catering?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow shadow-gold-500/15 transition-all duration-300 rounded-lg"
          >
            Ask Us Anything
          </button>
        </div>

      </div>
    </section>
  );
}
