import { useState, useEffect, FormEvent } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, Star } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Header({
  cart,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  setSelectedCategory,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchQuery);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    setSelectedCategory('All');
    const productsSection = document.getElementById('our-menu');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Upper Announcement & Information Bar */}
      <div className="bg-gold-950 text-gold-100 text-xs py-2 px-4 flex flex-col sm:flex-row justify-between items-center border-b border-gold-900/40 gap-2">
        <div className="flex items-center gap-4 text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
          <span className="flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
            Freshly Baked Daily
          </span>
          <span className="hidden md:inline text-gold-400/40">|</span>
          <span className="hidden md:inline text-gold-200/80 font-medium">Mon-Sun: 7:00 AM - 9:00 PM</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
          <a href="tel:+15550199238" className="flex items-center gap-1 hover:text-gold-300 transition-colors text-gold-200/90">
            <Phone size={12} className="text-gold-400" />
            +1 (555) TOO-BAKE
          </a>
          <span className="text-gold-400/40">•</span>
          <a
            href="https://wa.me/15550199238"
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-gold-400 hover:text-gold-300 transition-colors"
          >
            WhatsApp Order
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gold-400/20 py-2.5'
            : 'bg-white/40 backdrop-blur-sm border-b border-gold-400/10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-gold-500 text-white flex items-center justify-center font-serif text-base font-bold shadow-md border border-gold-400 group-hover:scale-105 transition-transform">
              T
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tighter text-gold-500 group-hover:text-gold-600 transition-colors">
                TOO BAKERY
              </span>
              <div className="text-[9px] uppercase tracking-[0.25em] text-cream-700 font-bold leading-none mt-0.5">
                Artisanal Excellence
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold uppercase tracking-widest text-cream-800">
            <button onClick={() => scrollToSection('hero')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50">About</button>
            <button onClick={() => scrollToSection('our-menu')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50">Menu</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50">Why Us</button>
            <button onClick={() => scrollToSection('special-offers')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50 text-nowrap">Offers</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50">Gallery</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50">Reviews</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gold-500 transition-colors cursor-pointer pb-0.5 border-b border-transparent hover:border-gold-400/50">Contact</button>
          </div>

          {/* Search, Cart and Menu Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Bar (Desktop) */}
            <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center relative">
              <input
                type="text"
                placeholder="Search pastries, cakes, breads..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="bg-white/60 text-xs font-semibold text-cream-950 pl-8 pr-4 py-2 rounded-lg border border-gold-400/20 focus:outline-none focus:border-gold-400 focus:bg-white w-44 lg:w-56 transition-all placeholder:text-cream-600/70"
              />
              <Search size={14} className="absolute left-3 text-cream-600" />
            </form>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-gold-500 text-white hover:bg-gold-600 hover:scale-105 transition-all shadow-md flex items-center justify-center cursor-pointer group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={18} className="group-hover:rotate-12 transition-transform" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-gold-950 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-gold-950 hover:bg-cream-200 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </nav>

      {/* 3. Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-cream-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-[110px] right-4 left-4 max-h-[80vh] overflow-y-auto bg-cream-50 rounded-2xl p-6 shadow-2xl border border-cream-200 flex flex-col gap-5 transition-all duration-300 transform origin-top ${
            isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="flex items-center relative w-full sm:hidden">
            <input
              type="text"
              placeholder="Search bakery items..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="bg-cream-100 text-sm pl-9 pr-4 py-2.5 rounded-full border border-cream-300 focus:outline-none focus:border-gold-500 w-full placeholder:text-cream-600"
            />
            <Search size={16} className="absolute left-3 text-cream-600" />
          </form>

          {/* Drawer Navigation Links */}
          <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-cream-950">
            <button onClick={() => scrollToSection('hero')} className="text-left py-1 hover:text-gold-500 transition-colors border-b border-cream-200 cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-1 hover:text-gold-500 transition-colors border-b border-cream-200 cursor-pointer">About TOO Bakery</button>
            <button onClick={() => scrollToSection('our-menu')} className="text-left py-1 hover:text-gold-500 transition-colors border-b border-cream-200 cursor-pointer">Our Menu</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-left py-1 hover:text-gold-500 transition-colors border-b border-cream-200 cursor-pointer">Why Choose Us</button>
            <button onClick={() => scrollToSection('special-offers')} className="text-left py-1 hover:text-gold-500 transition-colors border-b border-cream-200 cursor-pointer">Special Offers</button>
            <button onClick={() => scrollToSection('gallery')} className="text-left py-1 hover:text-gold-500 transition-colors border-b border-cream-200 cursor-pointer">Gallery</button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-1 hover:text-gold-500 transition-colors border-b border-cream-200 cursor-pointer">Reviews</button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-1 hover:text-gold-500 transition-colors border-b border-cream-200 cursor-pointer">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-1 hover:text-gold-500 transition-colors cursor-pointer">Contact Us</button>
          </div>

          <div className="mt-2 bg-gold-100/50 p-4 rounded-xl border border-gold-200/50 text-center">
            <div className="text-xs text-gold-800 font-semibold mb-1">👑 FRESHLY BAKED WITH LOVE</div>
            <p className="text-[11px] text-gold-700">Experience artisanal perfection daily with organic ingredients.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
