import { useState, FormEvent } from 'react';
import { Mail, ArrowRight, Instagram, Facebook, Twitter, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gold-950 text-gold-100/90 pt-20 pb-10 border-t border-gold-900 relative">
      
      {/* Newsletter signup container - overlapping block design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 mb-16 relative z-10">
        <div className="bg-gradient-to-r from-gold-900 to-gold-950 border border-gold-800 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-lg">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-100">
              Join Our Sweet Club
            </h3>
            <p className="text-xs sm:text-sm text-gold-200/80">
              Subscribe to receive morning-baking notifications, exclusive secret coupon codes, and invitations to our monthly cake-tasting workshops!
            </p>
          </div>

          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2.5 justify-center bg-gold-400/10 border border-gold-400/30 p-4 rounded-xl text-gold-200">
                <CheckCircle size={18} className="text-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-wider">Welcome! Check your inbox for 15% off coupon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gold-950/80 text-gold-100 border border-gold-800 text-xs sm:text-sm px-5 py-3 rounded-full flex-1 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 placeholder:text-gold-100/40"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-gold-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow hover:shadow-gold-500/20"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
        
        {/* Brand Block */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center font-serif text-sm font-bold border border-gold-400">
              T
            </div>
            <span className="font-serif text-lg font-bold tracking-tighter text-gold-500">
              TOO BAKERY
            </span>
          </div>
          <p className="text-xs leading-relaxed text-gold-200/70 max-w-sm">
            Experience the taste of handcrafted breads, delicious cakes, pastries, cookies, and desserts made with love and premium ingredients. Hand-rolling heritage daily.
          </p>

          {/* Social Links Row */}
          <div className="flex items-center gap-3 pt-2">
            <a href="https://instagram.com" target="_blank" referrerPolicy="no-referrer" className="p-2 rounded-full bg-gold-900 border border-gold-800 text-gold-300 hover:text-gold-100 hover:border-gold-400 transition-all cursor-pointer">
              <Instagram size={14} />
            </a>
            <a href="https://facebook.com" target="_blank" referrerPolicy="no-referrer" className="p-2 rounded-full bg-gold-900 border border-gold-800 text-gold-300 hover:text-gold-100 hover:border-gold-400 transition-all cursor-pointer">
              <Facebook size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" referrerPolicy="no-referrer" className="p-2 rounded-full bg-gold-900 border border-gold-800 text-gold-300 hover:text-gold-100 hover:border-gold-400 transition-all cursor-pointer">
              <Twitter size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links Menu */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif text-sm font-bold tracking-wider text-gold-300 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-gold-100/70 font-medium">
            <li>
              <button onClick={() => scrollToSection('hero')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Home Base</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Our Legacy</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('our-menu')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Bakery Menu</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Pastry Gallery</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('faq')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Common FAQs</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Contact Us</button>
            </li>
          </ul>
        </div>

        {/* Categories Block */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-bold tracking-wider text-gold-300 uppercase">
            Our Specialties
          </h4>
          <ul className="space-y-2 text-xs text-gold-100/70 font-medium">
            <li>
              <button onClick={() => { scrollToSection('our-menu') }} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Fresh Breads & Baguettes</button>
            </li>
            <li>
              <button onClick={() => { scrollToSection('our-menu') }} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Bespoke Birthday & Wedding Cakes</button>
            </li>
            <li>
              <button onClick={() => { scrollToSection('our-menu') }} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Normandy Butter Croissants</button>
            </li>
            <li>
              <button onClick={() => { scrollToSection('our-menu') }} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Fleur de Sel Chocolate Cookies</button>
            </li>
            <li>
              <button onClick={() => { scrollToSection('our-menu') }} className="hover:text-gold-400 transition-colors cursor-pointer text-left">Custom Celebration Tiers</button>
            </li>
          </ul>
        </div>

        {/* Contact Block */}
        <div className="lg:col-span-3 space-y-4 text-xs text-gold-100/70">
          <h4 className="font-serif text-sm font-bold tracking-wider text-gold-300 uppercase">
            Store Contact
          </h4>
          <p className="font-semibold text-gold-100">TOO Bakery Storefront</p>
          <p className="leading-relaxed">
            742 Sweet-Crumbs Lane, Pastry District,<br />
            San Francisco, CA 94110
          </p>
          <p className="pt-1.5 font-semibold text-gold-100">
            Phone: <a href="tel:+15550199238" className="hover:text-gold-400 font-semibold">+1 (555) TOO-BAKE</a>
          </p>
          <p>
            Email: <a href="mailto:orders@toobakery.com" className="hover:text-gold-400">orders@toobakery.com</a>
          </p>
        </div>

      </div>

      {/* Under copyright bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gold-900 text-center text-[10px] sm:text-xs text-gold-100/40 font-medium flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © 2026 TOO Bakery. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <a href="#about" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#about" className="hover:text-gold-400 transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
