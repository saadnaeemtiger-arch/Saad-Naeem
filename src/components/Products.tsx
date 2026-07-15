import { useState, useMemo } from 'react';
import { Search, ShoppingCart, Star, Filter } from 'lucide-react';
import { Product, CartItem } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';

interface ProductsProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  cart: CartItem[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Products({
  onAddToCart,
  cart,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: ProductsProps) {
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filter products by category AND search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Helper to find count of product in cart
  const getProductCountInCart = (productId: string) => {
    const found = cart.find((item) => item.product.id === productId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="our-menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold-500 font-serif text-xs font-bold uppercase tracking-[0.25em] block">
            Signature Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-cream-950">
            Explore Our Products
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
          <p className="text-cream-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Experience the taste of handcrafted breads, delicious cakes, and pastries made with love and premium organic ingredients.
          </p>
        </div>

        {/* Search and Filters Hub */}
        <div className="flex flex-col gap-6 mb-12">
          
          {/* Search Bar Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between bg-white p-4 rounded-3xl border border-gold-400/20">
            <div className="relative w-full sm:max-w-md flex items-center">
              <input
                type="text"
                placeholder="What are you craving today? Sourdough, donuts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-cream-100/50 text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-gold-400/10 focus:outline-none focus:border-gold-400/50 placeholder:text-cream-600/70 text-cream-950"
              />
              <Search size={14} className="absolute left-3.5 text-cream-600" />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className="sm:hidden flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-500 text-white font-bold text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-gold-500/10 w-full justify-center"
            >
              <Filter size={14} />
              {showFiltersMobile ? 'Hide Categories' : 'Show Categories'}
            </button>

            <div className="text-xs font-bold uppercase tracking-wider text-cream-700 hidden sm:block">
              Showing <span className="text-gold-500 font-serif text-sm font-bold">{filteredProducts.length}</span> creations
            </div>
          </div>

          {/* Category Filters (Scrollable Row for desktop, list/grid for mobile if toggled) */}
          <div className={`sm:block ${showFiltersMobile ? 'block' : 'hidden'}`}>
            <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto pb-2 gap-3 scrollbar-none snap-x">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                    }}
                    className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer snap-start whitespace-nowrap border ${
                      isActive
                        ? 'bg-gold-500 text-white border-gold-500 shadow-md scale-105'
                        : 'bg-white text-cream-700 border-gold-400/20 hover:bg-cream-100 hover:text-gold-500'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-xs text-cream-600 font-semibold sm:hidden text-center">
            Showing <span className="text-gold-700 font-bold">{filteredProducts.length}</span> delicious creations
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const countInCart = getProductCountInCart(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-gold-400/20 shadow-sm hover:shadow-lg hover:border-gold-400/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group relative"
                  id={`product-card-${product.id}`}
                >
                  {/* Image & Badges */}
                  <div className="relative h-56 overflow-hidden bg-cream-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient shadow bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Category Label badge top left */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gold-500 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-gold-400/15 shadow-sm">
                      {product.category}
                    </span>

                    {/* Popular badge top right */}
                    {product.isPopular && (
                      <span className="absolute top-3 right-3 bg-gold-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md animate-pulse flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> POPULAR
                      </span>
                    )}

                    {/* In cart count indicators overlay */}
                    {countInCart > 0 && (
                      <div className="absolute inset-0 bg-gold-950/20 backdrop-blur-[0.5px] flex items-center justify-center pointer-events-none animate-fade-in">
                        <span className="bg-white text-gold-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-gold-400/30">
                          In Cart: {countInCart}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-normal text-cream-950 group-hover:text-gold-500 transition-colors leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-cream-700 text-xs line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Pricing & Order CTA row */}
                    <div className="flex items-center justify-between pt-4 border-t border-gold-400/10 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold tracking-widest text-cream-600 uppercase leading-none">Starting Price</span>
                        <span className="text-lg font-serif text-gold-500 font-semibold mt-1.5">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => onAddToCart(product, 1)}
                        className="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow shadow-gold-500/10 flex items-center gap-1.5 cursor-pointer rounded-lg hover:scale-[1.03] active:scale-95"
                      >
                        <ShoppingCart size={11} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-cream-100 rounded-3xl border border-cream-200 p-8 max-w-md mx-auto space-y-4">
            <span className="text-4xl block">🥐</span>
            <h3 className="font-serif text-lg font-bold text-gold-950">No pastries found</h3>
            <p className="text-cream-700 text-xs sm:text-sm">
              We couldn't find any products matching "{searchQuery}" under "{selectedCategory}". Try adjusting your filters or search query!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2.5 rounded-full bg-gold-500 text-gold-950 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
