/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import ScrollToTop from './components/ScrollToTop';
import { Product, CartItem } from './types';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Custom Toast Notifier
  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // 1. Add item to order basket
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        triggerToast(`Added another "${product.name}" to your basket!`);
        return updated;
      }
      triggerToast(`Added "${product.name}" to your basket!`);
      return [...prev, { product, quantity, notes: '' }];
    });
  };

  // 2. Modify cart quantity
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty > 0 ? newQty : 1 };
          }
          return item;
        })
    );
  };

  // 3. Remove item
  const handleRemoveItem = (productId: string) => {
    const item = cart.find((i) => i.product.id === productId);
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
    if (item) {
      triggerToast(`Removed "${item.product.name}" from your basket.`);
    }
  };

  // 4. Update custom baking notes
  const handleUpdateNotes = (productId: string, notes: string) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          return { ...item, notes };
        }
        return item;
      })
    );
  };

  // 5. Clear cart
  const handleClearCart = () => {
    setCart([]);
  };

  // 6. Claim special promotional offer
  const handleClaimOffer = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search so products show up
    
    // Trigger sweet feedback toast
    triggerToast(`Applied coupon! Scroll down to explore ${category}.`);

    // Smooth scroll down to products grid
    const menuSection = document.getElementById('our-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrderNow = () => {
    const menuSection = document.getElementById('our-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewMenu = () => {
    const menuSection = document.getElementById('our-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-cream-50 overflow-x-hidden">
      
      {/* Premium Sticky Navigation Header */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Hero Section */}
      <Hero
        onOrderNow={handleOrderNow}
        onViewMenu={handleViewMenu}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* About Section */}
        <About />

        {/* Dynamic Products Grid Section */}
        <Products
          onAddToCart={handleAddToCart}
          cart={cart}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Special Weekly Offers Section */}
        <SpecialOffers onClaimOffer={handleClaimOffer} />

        {/* Photo Gallery with Lightbox Section */}
        <Gallery />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Frequently Asked Questions Section */}
        <FAQ />

        {/* Location Hours Map and Contact Section */}
        <Contact />
      </main>

      {/* Full Width Footer with newsletter signup */}
      <Footer />

      {/* Shopping Cart Drawer Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onUpdateNotes={handleUpdateNotes}
      />

      {/* Scroll to Top Trigger */}
      <ScrollToTop />

      {/* Premium Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-gold-950 text-gold-100 px-5 py-3 rounded-xl border border-gold-400 shadow-2xl flex items-center gap-2.5 animate-[toast-in_0.2s_ease-out]">
          <Sparkles size={14} className="text-gold-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Inline styles for toast animation */}
      <style>{`
        @keyframes toast-in {
          from { transform: translateY(20px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>

    </div>
  );
}
