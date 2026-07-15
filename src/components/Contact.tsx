import { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    // Simulate elegant API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const closeSuccess = () => {
    setIsSuccess(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100/50 scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 font-serif text-xs font-bold uppercase tracking-[0.25em] block">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-cream-950">
            Get In Touch
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
          <p className="text-cream-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Whether you want to pre-order warm sourdough, request custom wedding designs, or ask about catering, we are delighted to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Location, Hours, Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl border border-gold-400/20 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-lg font-normal text-cream-950">TOO Bakery Headquarters</h3>
              
              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* 1. Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gold-400/10 rounded-xl text-gold-500 mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-950">Our Storefront</h4>
                    <p className="text-cream-700 mt-1 text-xs leading-relaxed">
                      742 Sweet-Crumbs Lane, Pastry District,<br />
                      Suite 100, San Francisco, CA 94110
                    </p>
                  </div>
                </div>

                {/* 2. Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gold-400/10 rounded-xl text-gold-500 mt-0.5">
                    <Phone size={15} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-950">Phone & WhatsApp</h4>
                    <p className="text-cream-700 mt-1 text-xs">
                      <a href="tel:+15550199238" className="hover:text-gold-500 font-semibold">+1 (555) TOO-BAKE</a> (Store)
                    </p>
                    <p className="text-cream-700 text-xs">
                      <a href="https://wa.me/15550199238" target="_blank" referrerPolicy="no-referrer" className="text-gold-500 hover:text-gold-600 font-bold flex items-center gap-1 mt-1">
                        <MessageSquare size={12} /> WhatsApp Custom Cake Order
                      </a>
                    </p>
                  </div>
                </div>

                {/* 3. Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gold-400/10 rounded-xl text-gold-500 mt-0.5">
                    <Mail size={15} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-950">Email Address</h4>
                    <p className="text-cream-700 mt-1 text-xs">
                      <a href="mailto:orders@toobakery.com" className="hover:text-gold-500 font-semibold">orders@toobakery.com</a>
                    </p>
                    <p className="text-[10px] text-cream-500 mt-0.5">Inquiries response within 3 hours.</p>
                  </div>
                </div>

                {/* 4. Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gold-400/10 rounded-xl text-gold-500 mt-0.5">
                    <Clock size={15} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-cream-950">Store Hours</h4>
                    <p className="text-cream-700 mt-1 text-xs leading-relaxed">
                      Mon - Fri: 7:00 AM - 8:00 PM<br />
                      Sat - Sun: 7:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="rounded-3xl overflow-hidden border border-gold-400/20 shadow-md h-64 relative bg-cream-200">
              <iframe
                title="TOO Bakery Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509457!2d-122.4194155!3d37.7749293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807bed86b977%3A0xcd90e447df1774b7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Input Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gold-400/20 p-8 shadow-sm">
              <h3 className="font-serif text-lg font-normal text-cream-950 mb-1">Send a Message</h3>
              <p className="text-[11px] text-cream-600 mb-6">Required fields are marked with a golden dot.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-cream-800 flex items-center gap-1">
                      Full Name <span className="text-gold-500">•</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-cream-50/50 border border-gold-400/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-cream-950 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all placeholder:text-cream-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-cream-800">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full bg-cream-50/50 border border-gold-400/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-cream-950 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all placeholder:text-cream-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-cream-800 flex items-center gap-1">
                    Email Address <span className="text-gold-500">•</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane.doe@example.com"
                    className="w-full bg-cream-50/50 border border-gold-400/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-cream-950 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all placeholder:text-cream-400"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-cream-800 flex items-center gap-1">
                    Your Message <span className="text-gold-500">•</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event, the cake details, or any allergy requirements..."
                    className="w-full bg-cream-50/50 border border-gold-400/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-cream-950 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all resize-none placeholder:text-cream-400"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest shadow shadow-gold-500/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-lg hover:scale-[1.02] active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Submission Success Dialog Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 border border-gold-400/30 shadow-2xl max-w-md w-full text-center space-y-5 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-green-50 border border-green-300 flex items-center justify-center text-green-600 mx-auto animate-bounce">
              <CheckCircle size={32} />
            </div>
            
            <div className="space-y-2">
              <h4 className="font-serif text-xl font-normal text-cream-950">Thank You, {formData.name}!</h4>
              <p className="text-xs sm:text-sm text-cream-700 leading-relaxed">
                Your message has been received with high priority. Our administrative assistant will get back to your email (<span className="text-gold-500 font-semibold">{formData.email}</span>) within 2-4 hours. 
              </p>
              <p className="text-[11px] font-serif italic text-gold-500">Have a delicious and sweet day!</p>
            </div>

            <button
              onClick={closeSuccess}
              className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow cursor-pointer transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}

      {/* Embedded animation styling */}
      <style>{`
        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
          animation: scale-up 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
