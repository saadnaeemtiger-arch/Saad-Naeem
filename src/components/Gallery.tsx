import { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Gallery categories list
  const galleryCategories = ['All', 'Cakes', 'Bread', 'Donuts', 'Pastries', 'Interior', 'Coffee', 'Desserts', 'Customers'];

  // Filter gallery items
  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCat === 'All' || item.category === selectedCat
  );

  // Close Lightbox
  const closeLightbox = () => setLightboxIndex(null);

  // Navigate lightbox
  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-gold-500 font-serif text-xs font-bold uppercase tracking-[0.25em] block">
            Visual Sensations & Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-cream-950">
            Our Gallery & Space
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
          <p className="text-cream-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Take a visual tour of our freshly baked artisan breads, customized party cakes, and cozy Parisian-inspired bakery interior.
          </p>
        </div>

        {/* Gallery Filtering Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4.5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                selectedCat === cat
                  ? 'bg-gold-500 text-white border-gold-500 shadow shadow-gold-500/25'
                  : 'bg-white text-cream-800 border-gold-400/15 hover:bg-gold-500/5 hover:text-gold-500 hover:border-gold-400/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-sm hover:shadow-lg border border-gold-400/20 aspect-square bg-cream-100 transition-all duration-300"
              id={`gallery-item-${item.id}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-950/95 via-gold-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                  <span className="text-[9px] font-bold text-gold-400 uppercase tracking-widest bg-gold-400/10 border border-gold-400/20 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-sm font-normal text-white">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-gold-300 uppercase tracking-widest pt-1">
                    <Maximize2 size={11} className="text-gold-400" />
                    <span>View Image</span>
                  </div>
                </div>
              </div>

              {/* Elegant Gold Corner Border Details on Hover */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-400/0 group-hover:border-gold-400/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-cream-950/80 text-gold-100 hover:bg-cream-900 hover:text-gold-300 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 p-3 rounded-full bg-cream-950/60 text-gold-100 hover:bg-cream-900 hover:text-gold-300 transition-all cursor-pointer hover:scale-105"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 p-3 rounded-full bg-cream-950/60 text-gold-100 hover:bg-cream-900 hover:text-gold-300 transition-all cursor-pointer hover:scale-105"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="max-w-4xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 max-h-[75vh] bg-cream-950">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Metadata */}
              <div className="text-center text-gold-100 space-y-1 max-w-lg">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 bg-gold-400/10 px-2.5 py-1 rounded">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="font-serif text-lg font-bold">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-[11px] text-cream-400">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
