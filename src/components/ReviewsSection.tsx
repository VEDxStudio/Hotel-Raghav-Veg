import React from 'react';
import { Star, ExternalLink, MessageCircle, MapPin, CheckCircle, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#FBFBF9] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2C5F2D]">
            <span className="w-8 h-px bg-[#2C5F2D]/30"></span>
            <span>Verified Customer Reviews</span>
            <span className="w-8 h-px bg-[#2C5F2D]/30"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Rated 4.8 / 5 Stars on Google
          </h2>
          <p className="text-base text-[#4A4A4A]">
            Loved by over 1,000+ local families, travelers, and pilgrims visiting Ambajogai and Parli Vaijnath.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Block */}
            <div className="md:col-span-4 text-center md:border-r border-gray-200 md:pr-8 space-y-2">
              <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[#1A1A1A]">
                4.8
              </span>
              <div className="flex justify-center text-[#D4AF37] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Based on <strong className="text-[#1A1A1A] font-semibold">1,084+ Verified Google Reviews</strong>
              </p>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C5F2D] hover:underline"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Sub-rating Metrics */}
            <div className="md:col-span-8 space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-[#1A1A1A]">
                  <span>Food Quality & Pure Veg Taste</span>
                  <span>4.9 / 5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#2C5F2D] h-2 rounded-full w-[98%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-[#1A1A1A]">
                  <span>Hospitality & Staff Courtesy</span>
                  <span>4.8 / 5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#2C5F2D] h-2 rounded-full w-[96%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-[#1A1A1A]">
                  <span>Kitchen Hygiene & Ambience</span>
                  <span>4.8 / 5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#2C5F2D] h-2 rounded-full w-[96%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-[#1A1A1A]">
                  <span>Banquet Hall Arrangements (200 Pax)</span>
                  <span>4.9 / 5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#D4AF37] h-2 rounded-full w-[98%]" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-3">
                {/* Header line */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#4A4A4A] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A] flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <span title="Verified Google Reviewer" className="inline-flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2C5F2D]" />
                    </span>
                  </h4>
                  <div className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#2C5F2D] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    {rev.occasion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Google Review */}
        <div className="mt-10 text-center">
          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A4A4A] hover:text-[#2C5F2D] border border-gray-300 hover:border-[#2C5F2D] bg-white px-5 py-2.5 rounded-xl transition-all shadow-2xs"
          >
            <ThumbsUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Have you dined with us? Leave a Google Review</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
