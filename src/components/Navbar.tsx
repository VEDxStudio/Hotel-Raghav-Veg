import React, { useState } from 'react';
import { Phone, Clock, MapPin, MessageSquare, UtensilsCrossed, Calendar, Menu, X, ShoppingBag, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenCart,
  cartCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#2C5F2D]/10">
      {/* Top micro-bar for quick local info */}
      <div className="bg-[#2C5F2D] text-white text-xs px-4 py-1.5 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-emerald-100">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              100% Shuddha Shakahari (Pure Veg)
            </span>
            <span className="hidden sm:inline text-emerald-300">|</span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Opp. ST Bus Depot, Parli Road, Ambajogai
            </span>
          </div>

          <div className="flex items-center gap-4 text-emerald-100">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              11:00 AM – 11:00 PM (Daily)
            </span>
            <span className="text-emerald-300">|</span>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-1 font-semibold text-[#D4AF37] hover:underline"
            >
              <Phone className="w-3 h-3" />
              {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-[#2C5F2D] border border-[#D4AF37]/50 flex items-center justify-center shadow-sm text-white">
            {/* Traditional Indian veg crest leaf */}
            <div className="relative flex flex-col items-center justify-center">
              <span className="font-serif font-bold text-xl text-[#D4AF37] tracking-wider leading-none">R</span>
              <span className="text-[8px] uppercase tracking-widest text-emerald-100 leading-none">Veg</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2D] transition-colors">
                Hotel Raghav
              </span>
              <span className="inline-flex items-center justify-center w-4 h-4 border border-[#2C5F2D] p-0.5 rounded-sm bg-white" title="Pure Veg">
                <span className="w-2 h-2 rounded-full bg-[#2C5F2D]"></span>
              </span>
            </div>
            <p className="text-xs text-[#4A4A4A] flex items-center gap-1.5 font-medium">
              <span>Pure Veg Restaurant & Banquets</span>
              <span className="text-[#D4AF37] font-semibold flex items-center">
                ★ 4.8
              </span>
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A4A4A]">
          <a
            href="#menu"
            className="hover:text-[#2C5F2D] transition-colors py-1 relative hover:border-b-2 hover:border-[#2C5F2D]"
          >
            Digital Menu
          </a>
          <a
            href="#banquets"
            className="hover:text-[#2C5F2D] transition-colors py-1 relative hover:border-b-2 hover:border-[#2C5F2D] flex items-center gap-1.5"
          >
            <span>Banquet Hall</span>
            <span className="text-[10px] font-semibold text-[#2C5F2D] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              200 Pax
            </span>
          </a>
          <a
            href="#tradition"
            className="hover:text-[#2C5F2D] transition-colors py-1 relative hover:border-b-2 hover:border-[#2C5F2D]"
          >
            Our Tradition
          </a>
          <a
            href="#reviews"
            className="hover:text-[#2C5F2D] transition-colors py-1 relative hover:border-b-2 hover:border-[#2C5F2D]"
          >
            Reviews (4.8★)
          </a>
          <a
            href="#location"
            className="hover:text-[#2C5F2D] transition-colors py-1 relative hover:border-b-2 hover:border-[#2C5F2D]"
          >
            Directions
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Takeaway bag counter */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#2C5F2D] hover:bg-emerald-50 rounded-lg transition-colors border border-[#2C5F2D]/20 flex items-center gap-1.5 text-xs font-semibold"
            aria-label="View takeaway bag"
          >
            <ShoppingBag className="w-4 h-4 text-[#2C5F2D]" />
            <span className="hidden sm:inline">Takeaway Bag</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#E85D04] text-white text-[11px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp / Book Table CTA */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-2 bg-[#E85D04] hover:bg-[#d05303] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all hover:shadow active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book a Table (WhatsApp)
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:bg-gray-100 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-[#FBFBF9] px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#1A1A1A]">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-emerald-50 flex items-center justify-between text-[#2C5F2D]"
            >
              <span className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4" />
                Digital Menu (Top Picks)
              </span>
              <span className="text-xs text-gray-500">Fast & Pure Veg</span>
            </a>
            <a
              href="#banquets"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-emerald-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                Banquet Hall & Celebrations
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                200 Cap.
              </span>
            </a>
            <a
              href="#tradition"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100"
            >
              Our Tradition & Kitchen Motto
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100 flex items-center justify-between"
            >
              <span>Guest Reviews & Rating</span>
              <span className="text-xs font-bold text-[#D4AF37]">4.8 ★ (1084+)</span>
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-gray-100 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#2C5F2D]" />
              Address & Bus Stand Landmark
            </a>
          </nav>

          <div className="pt-2 border-t border-gray-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 bg-[#E85D04] text-white font-semibold rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book a Table via WhatsApp
            </button>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Namaste Hotel Raghav Veg, I would like to inquire about table booking / food delivery."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#2C5F2D] text-white font-semibold rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              Direct WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
