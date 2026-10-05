import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Plus, Minus, Check, Flame, AlertCircle } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItems: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItems,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jainOnly, setJainOnly] = useState<boolean>(false);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Jain filter
      if (jainOnly && !item.isJainAvailable) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesMarathi = item.marathiName?.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        return matchesName || matchesMarathi || matchesDesc || matchesTags;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, jainOnly]);

  return (
    <section id="menu" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2C5F2D]">
            <span className="w-8 h-px bg-[#2C5F2D]/30"></span>
            <span>Mobile-First Digital Menu</span>
            <span className="w-8 h-px bg-[#2C5F2D]/30"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Signature Dishes & Pure Veg Delights
          </h2>
          <p className="text-base text-[#4A4A4A]">
            Fast-loading, fresh text menu with authentic regional specialties. 
            Tap any dish to add to your takeaway bag for instant WhatsApp ordering!
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes (e.g. Shev Bhaji, Malai Kofta, Naan, Paneer)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FBFBF9] border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Jain Filter Toggle */}
            <label className="flex items-center gap-2 cursor-pointer bg-[#FBFBF9] px-4 py-2.5 rounded-xl border border-gray-300 hover:border-[#2C5F2D] transition-colors select-none text-xs font-semibold text-[#1A1A1A]">
              <input
                type="checkbox"
                checked={jainOnly}
                onChange={(e) => setJainOnly(e.target.checked)}
                className="w-4 h-4 text-[#2C5F2D] rounded border-gray-300 focus:ring-[#2C5F2D]"
              />
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2C5F2D]"></span>
                Show Jain Options (No Onion/Garlic)
              </span>
            </label>
          </div>

          {/* Category Tabs (Segmented functional buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none pt-1">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive
                      ? 'bg-[#2C5F2D] text-white shadow-sm'
                      : 'bg-[#FBFBF9] text-[#4A4A4A] hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FBFBF9] rounded-2xl border border-dashed border-gray-300 p-8 max-w-lg mx-auto">
            <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">No dishes found</h3>
            <p className="text-xs text-gray-500 mt-1">
              Try clearing your search term "{searchQuery}" or unchecking the Jain filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setJainOnly(false);
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#2C5F2D] text-white text-xs font-semibold rounded-lg hover:bg-[#234c24]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inCartQty = cartItems[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className={`group relative bg-[#FBFBF9] rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    item.isChefsSpecial
                      ? 'border-[#D4AF37] shadow-md hover:shadow-lg'
                      : 'border-gray-200 hover:border-[#2C5F2D]/50 hover:shadow-md'
                  }`}
                >
                  {/* Top Image Preview & Badges */}
                  <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Pure Veg Green Dot symbol */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-1 rounded border border-gray-200 shadow-sm" title="100% Pure Veg">
                      <div className="w-3.5 h-3.5 border border-[#2C5F2D] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#2C5F2D]" />
                      </div>
                    </div>

                    {/* Chef Special Gold Ribbon Badge */}
                    {item.isChefsSpecial && (
                      <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#1A1A1A] font-bold text-[11px] px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#1A1A1A]" />
                        <span>Chef's Special</span>
                      </div>
                    )}

                    {/* Bestseller Badge */}
                    {item.isBestseller && !item.isChefsSpecial && (
                      <div className="absolute top-3 right-3 bg-[#E85D04] text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                        Signature Dish
                      </div>
                    )}

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-2.5 right-3 bg-black/75 backdrop-blur-md text-[#D4AF37] font-bold px-2.5 py-1 rounded-md text-sm border border-[#D4AF37]/30">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Quiet metadata line (Zero-pill discipline) */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        {item.marathiName && (
                          <span className="font-medium text-[#2C5F2D]">{item.marathiName}</span>
                        )}
                        {item.marathiName && <span aria-hidden="true">·</span>}
                        {item.isJainAvailable && (
                          <span className="text-emerald-700">Jain Available</span>
                        )}
                        {item.spiceLevel === 'spicy' && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#E85D04] flex items-center gap-0.5 font-medium">
                              <Flame className="w-3 h-3" /> Spicy
                            </span>
                          </>
                        )}
                      </div>

                      {/* Dish Title */}
                      <h3 className="font-serif text-lg font-bold text-[#1A1A1A] group-hover:text-[#2C5F2D] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#4A4A4A] leading-relaxed mt-1.5 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-xs text-gray-500 font-medium">
                        Portion: 1 Plate
                      </div>

                      {/* Add to Takeaway Bag Button */}
                      {inCartQty > 0 ? (
                        <div className="flex items-center gap-2 bg-[#2C5F2D] text-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                          <button
                            onClick={() => onAddToCart({ ...item, price: -item.price } as any)}
                            className="p-1 hover:bg-white/20 rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-1.5">{inCartQty} in Bag</span>
                          <button
                            onClick={() => onAddToCart(item)}
                            className="p-1 hover:bg-white/20 rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onAddToCart(item)}
                          className="inline-flex items-center gap-1.5 bg-white hover:bg-[#2C5F2D] text-[#2C5F2D] hover:text-white border border-[#2C5F2D] px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 shadow-2xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Takeaway</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Menu Guarantee Notice */}
        <div className="mt-12 bg-[#FBFBF9] border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A4A4A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2C5F2D]/10 text-[#2C5F2D] flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-[#2C5F2D]" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-[#1A1A1A]">Purity & Quality Promise</p>
              <p>Every dish prepared strictly without eggs, meat, or animal derivatives. 100% pure vegetarian kitchen.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 whitespace-nowrap">
            <a
              href={`https://wa.me/918421311888?text=${encodeURIComponent(
                "Namaste Hotel Raghav Veg! I would like to inquire about full menu takeaway parcel."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E85D04] font-semibold hover:underline"
            >
              Ask on WhatsApp →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
