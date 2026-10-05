/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { BanquetSection } from './components/BanquetSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationFooter } from './components/LocationFooter';
import { StickyMobileBar } from './components/StickyMobileBar';
import { TakeawayCartDrawer } from './components/TakeawayCartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Add item or increment
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const currentQty = prev[item.id] || 0;
      // If price is negative, it's a request to decrease
      if ((item as any).price < 0) {
        if (currentQty <= 1) {
          const updated = { ...prev };
          delete updated[item.id];
          return updated;
        }
        return { ...prev, [item.id]: currentQty - 1 };
      }
      return { ...prev, [item.id]: currentQty + 1 };
    });
  };

  // Update item quantity
  const handleUpdateQty = (item: MenuItem, change: number) => {
    setCart((prev) => {
      const currentQty = prev[item.id] || 0;
      const nextQty = currentQty + change;
      if (nextQty <= 0) {
        const updated = { ...prev };
        delete updated[item.id];
        return updated;
      }
      return { ...prev, [item.id]: nextQty };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const totalCartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1A1A1A] font-sans antialiased selection:bg-[#2C5F2D] selection:text-white flex flex-col">
      {/* Top Navbar */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section with WhatsApp booking CTA & 4.8★ proof */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* About Section - Our Tradition: Care, Freshness, and Hospitality */}
        <AboutSection />

        {/* Digital Menu - Fast text-based CSS grid with Chef's Special gold badge on Malai Kofta */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItems={cart}
        />

        {/* Banquet Upselling - 200-guest celebration hall, packages & budget calculator */}
        <BanquetSection />

        {/* Verified Google Reviews - 4.8★ rating with 1,000+ reviews */}
        <ReviewsSection />

        {/* Frequently Asked Questions (Jain food, parking, bus stand landmark, hours) */}
        <FaqSection />
      </main>

      {/* Full Location & Contact Footer with Google Maps embed */}
      <LocationFooter />

      {/* Sticky Mobile Quick-Tap Navigation Bar (Call, Menu, Book Table, Banquet, Map) */}
      <StickyMobileBar
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Takeaway Order Bag Drawer */}
      <TakeawayCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onClearCart={handleClearCart}
      />

      {/* WhatsApp Table Booking Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
