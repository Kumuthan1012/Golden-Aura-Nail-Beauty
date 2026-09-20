import React, { useState, useEffect } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'nails', label: 'Nails' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'lashes', label: 'Lashes' },
    { id: 'brows', label: 'Brows' },
    { id: 'salon', label: 'Salon' },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FFFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6D3B]">
            Portfolio & Atmosphere
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5B1425]">
            SALON GALLERY
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            A glimpse into our treatments, artistry, and relaxing studio environment in Batu Maung.
          </p>

          {/* Category Tabs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#5B1425] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-stone-600 hover:bg-[#F3D3DC]/40 border border-[#E8DCC4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-[#E8DCC4] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer h-72 sm:h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with text & zoom button */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#24181B]/85 via-[#24181B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[10px] uppercase tracking-widest font-semibold text-[#F3D3DC]">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-stone-300 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for Owner Demo */}
        <div className="mt-12 max-w-xl mx-auto p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DCC4] text-center flex items-center justify-center gap-2 text-xs text-stone-600">
          <Info className="w-4 h-4 text-[#8A6D3B] shrink-0" />
          <span>
            Curated presentation photos. Golden Aura Nail & Beauty can freely replace or upload your direct client portfolio images at any time.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : 0
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/20"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white space-y-1">
              <h4 className="font-serif text-xl font-semibold text-[#FAF8F5]">
                {filteredItems[lightboxIndex].title}
              </h4>
              {filteredItems[lightboxIndex].description && (
                <p className="text-xs text-stone-300 max-w-md">
                  {filteredItems[lightboxIndex].description}
                </p>
              )}
              <span className="text-[11px] text-[#D4AF37] tracking-widest uppercase font-mono">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
