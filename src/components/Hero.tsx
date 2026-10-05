import React from 'react';
import { Star, MapPin, Sparkles, MessageCircle, ChevronRight, Phone, ShieldCheck, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative overflow-hidden bg-[#1F4522] text-white">
      {/* Background with luxury dark overlay & subtle patterned kitchen spices aesthetic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
          alt="Hotel Raghav Veg Restaurant Dining Ambience"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142B15] via-[#1F4522]/90 to-[#142B15]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#142B15]/40 to-[#142B15]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Social proof header tag */}
            <div className="inline-flex items-center gap-2 bg-black/40 border border-[#D4AF37]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-emerald-100">
              <span className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </span>
              <span className="font-semibold text-white">4.8 / 5</span>
              <span className="text-emerald-300">· Over 1,000+ Google Reviews</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Authentic Taste, <br className="hidden sm:block" />
                <span className="text-[#D4AF37] italic font-normal">Pure Veg Hospitality</span> <br />
                in Ambajogai.
              </h1>
              <p className="text-base sm:text-lg text-emerald-100 max-w-xl font-normal leading-relaxed">
                Welcome to <strong className="text-white font-semibold">Hotel Raghav Veg</strong>. 
                Savor our legendary Marathwada Shev Bhaji, royal Malai Kofta, and fresh Punjabi delicacies. 
                Featuring family-style dining and a premier <span className="text-[#D4AF37] font-semibold underline decoration-[#D4AF37]/50 underline-offset-4">200-guest celebration banquet hall</span>.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA (WhatsApp Table Reservation) */}
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2.5 bg-[#E85D04] hover:bg-[#d05303] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#E85D04]/25 hover:shadow-xl hover:shadow-[#E85D04]/35 transition-all text-sm active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book a Table (WhatsApp)</span>
              </button>

              {/* Secondary CTA (Explore Menu) */}
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-[#2C5F2D] hover:bg-[#377839] border border-[#D4AF37]/40 text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-all"
              >
                <span>Explore Digital Menu</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </a>

              {/* Direct Call on Mobile */}
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 text-white font-medium px-5 py-3.5 rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Pure Veg</span>
                </div>
                <p className="text-emerald-200">Strict vegetarian kitchen & Jain prep</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                  <Users className="w-4 h-4" />
                  <span>200 Pax Banquet</span>
                </div>
                <p className="text-emerald-200">Weddings, Munj, Birthdays & Events</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>Opp. ST Depot</span>
                </div>
                <p className="text-emerald-200">Parli Road, prime Ambajogai hub</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Fresh Daily</span>
                </div>
                <p className="text-emerald-200">Desi cow ghee & stone-ground spices</p>
              </div>
            </div>
          </div>

          {/* Right Hero Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative golden ambient frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] to-[#2C5F2D] rounded-2xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative rounded-2xl bg-[#142B15] border border-[#D4AF37]/30 p-5 shadow-2xl space-y-4">
                {/* Visual Top signature dish spotlight */}
                <div className="relative h-56 rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                    alt="Raghav Special Shev Bhaji and Hot Naan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Floating Gold Chef Special Badge */}
                  <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#1A1A1A] text-[11px] font-bold px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#1A1A1A]" />
                    <span>Ambajogai's Signature</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="text-xs text-[#D4AF37] font-medium tracking-wide">Must-Try Classic</p>
                      <h4 className="font-serif font-bold text-lg leading-tight">Raghav Special Shev Bhaji</h4>
                      <p className="text-[11px] text-gray-300">Authentic Marathwada Spiced Tarri</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-xl text-[#D4AF37]">₹160</span>
                    </div>
                  </div>
                </div>

                {/* Second Mini Spotlight: Malai Kofta */}
                <div className="flex items-center gap-3.5 bg-black/40 border border-white/10 p-3 rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=200&q=80"
                    alt="Royal Malai Kofta"
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-[#D4AF37]/40"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider">Chef's Special</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-[10px] text-emerald-300">Rich Cashew Gravy</span>
                    </div>
                    <h5 className="font-serif font-bold text-sm text-white truncate">Royal Malai Kofta</h5>
                    <p className="text-xs text-gray-300">Melt-in-mouth cottage cheese dumplings</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm text-[#D4AF37]">₹230</span>
                  </div>
                </div>

                {/* Banquet Hall Quick Highlight Callout */}
                <div className="bg-[#2C5F2D]/50 border border-[#D4AF37]/20 p-3 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block">Planning a Celebration?</span>
                      <span className="text-emerald-200 text-[11px]">200-Guest Air-Conditioned Banquet</span>
                    </div>
                  </div>
                  <a
                    href="#banquets"
                    className="text-[#D4AF37] hover:text-white font-semibold underline text-[11px] whitespace-nowrap"
                  >
                    View Packages →
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
