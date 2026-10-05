import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/restaurantData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10 space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2C5F2D]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Diner FAQs</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4A4A]">
            Everything you need to know about dining, Jain food options, and banquet hall bookings at Hotel Raghav Veg.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-[#FBFBF9]"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#1A1A1A] hover:text-[#2C5F2D]"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#2C5F2D]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed border-t border-gray-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
