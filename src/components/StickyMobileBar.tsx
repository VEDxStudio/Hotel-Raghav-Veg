import React from 'react';
import { Phone, UtensilsCrossed, MessageSquare, MapPin, Award, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface StickyMobileBarProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenReservation,
  onOpenCart,
  cartCount,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#142B15] text-white border-t border-[#D4AF37]/30 shadow-2xl px-2 py-2 safe-area-bottom">
      <div className="flex items-center justify-around text-center">
        
        {/* Call Now */}
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-emerald-100 hover:text-[#D4AF37] px-2 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-[#2C5F2D] flex items-center justify-center text-[#D4AF37] shadow-xs">
            <Phone className="w-4 h-4" />
          </div>
          <span>Call</span>
        </a>

        {/* Digital Menu */}
        <a
          href="#menu"
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-emerald-100 hover:text-[#D4AF37] px-2 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-[#2C5F2D] flex items-center justify-center text-[#D4AF37] shadow-xs">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <span>Menu</span>
        </a>

        {/* WhatsApp Reservation Button (Prominent Saffron Center CTA) */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center -mt-5 group"
        >
          <div className="w-12 h-12 rounded-full bg-[#E85D04] text-white flex items-center justify-center shadow-lg shadow-[#E85D04]/40 border-2 border-white group-active:scale-95 transition-transform">
            <MessageSquare className="w-5 h-5 fill-white" />
          </div>
          <span className="text-[10px] font-bold text-[#D4AF37] mt-1 whitespace-nowrap">
            Book Table
          </span>
        </button>

        {/* Banquet Hall */}
        <a
          href="#banquets"
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-emerald-100 hover:text-[#D4AF37] px-2 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-[#2C5F2D] flex items-center justify-center text-[#D4AF37] shadow-xs">
            <Award className="w-4 h-4" />
          </div>
          <span>Banquet</span>
        </a>

        {/* Map / Directions */}
        <a
          href={RESTAURANT_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-emerald-100 hover:text-[#D4AF37] px-2 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-[#2C5F2D] flex items-center justify-center text-[#D4AF37] shadow-xs">
            <MapPin className="w-4 h-4" />
          </div>
          <span>Map</span>
        </a>

      </div>
    </div>
  );
};
