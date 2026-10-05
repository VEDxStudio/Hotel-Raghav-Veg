import React from 'react';
import { HeartHandshake, Leaf, Flame, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="tradition" className="py-20 bg-[#FBFBF9] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2C5F2D]">
            <span className="w-8 h-px bg-[#2C5F2D]/30"></span>
            <span>Our Tradition & Philosophy</span>
            <span className="w-8 h-px bg-[#2C5F2D]/30"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Care, Freshness & Warm Hospitality
          </h2>
          <p className="text-base text-[#4A4A4A] leading-relaxed">
            At Hotel Raghav Veg, our culinary motto is simple yet uncompromising: to serve honest, flavorful, 
            and pure vegetarian meals made with the same love, cleanliness, and respect you expect at a family feast.
          </p>
        </div>

        {/* Story & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
                alt="Chefs preparing fresh vegetarian dishes at Hotel Raghav"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Floating quote badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white bg-[#142B15]/90 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30">
                <p className="font-serif italic text-sm text-emerald-100">
                  "Food served with pure intent nourishes both the soul and the body."
                </p>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#D4AF37]">— The Raghav Kitchen Oath</span>
                  <span className="text-emerald-300">Ambajogai, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -top-4 -right-4 bg-[#2C5F2D] text-white p-3.5 rounded-xl shadow-lg border border-[#D4AF37]/50 hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-[#D4AF37]" />
              <div>
                <p className="font-serif font-bold text-base leading-tight">4.8 / 5 Rating</p>
                <p className="text-[11px] text-emerald-100">1,000+ Verified Diners</p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Commitments */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                A Gathering Spot for Pilgrims, Families, and Celebrations
              </h3>
              <p>
                Conveniently situated opposite the bustling Ambajogai ST Bus Depot on Parli Road, Hotel Raghav Veg 
                has emerged as a cherished landmark for locals as well as travelers passing through to visit the sacred 
                Yogeshwari Devi Temple and the Parli Vaijnath Jyotirlinga.
              </p>
              <p>
                Whether it is our signature <strong className="text-[#1A1A1A]">Shev Bhaji</strong> slow-simmered in 
                aromatic Marathwada tarri, or our rich <strong className="text-[#1A1A1A]">Royal Malai Kofta</strong> made 
                with fresh khoya and golden cashews, every dish is prepared to order without artificial colors, frozen compromises, or shortcuts.
              </p>
            </div>

            {/* 4 Feature Pillars (Zero-pill, clean typographic blocks) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#2C5F2D]/10 text-[#2C5F2D] flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-[#2C5F2D]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">100% Shuddha Shakahari</h4>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    Strict vegetarian protocols with dedicated utensils, fresh local dairy, and separate Jain preparations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#E85D04]/10 text-[#E85D04] flex items-center justify-center flex-shrink-0">
                  <Flame className="w-5 h-5 text-[#E85D04]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">Stone-Ground Spices</h4>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    Handcrafted masalas, pure cow ghee tempering, and fresh farm vegetables delivered daily at dawn.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-5 h-5 text-[#8f741c]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">Atithi Devo Bhava</h4>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    Attentive, humble hospitality where every diner is served with prompt care and family warmth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#2C5F2D]/10 text-[#2C5F2D] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#2C5F2D]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">Pristine Hygiene</h4>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    Spotless open kitchens, sterilized table settings, RO purified water, and clean restroom facilities.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick action strip */}
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#2C5F2D]">
              <a href="#menu" className="hover:underline flex items-center gap-1">
                Explore Signature Dishes →
              </a>
              <span className="text-gray-300">·</span>
              <a href="#banquets" className="hover:underline flex items-center gap-1">
                Explore 200-Pax Banquet Hall →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
