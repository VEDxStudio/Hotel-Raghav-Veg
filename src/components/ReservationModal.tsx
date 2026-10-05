import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageSquare, Phone, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('1:00 PM (Lunch)');
  const [guests, setGuests] = useState('4 Guests');
  const [diningSection, setDiningSection] = useState('AC Family Section');
  const [specialRequest, setSpecialRequest] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `*Namaste Hotel Raghav Veg!*\nI would like to reserve a table:\n\n`;
    msg += `👤 *Name:* ${name || 'Valued Guest'}\n`;
    if (phone) msg += `📞 *Phone:* ${phone}\n`;
    msg += `📅 *Date:* ${date}\n`;
    msg += `⏰ *Time:* ${timeSlot}\n`;
    msg += `👥 *Number of Guests:* ${guests}\n`;
    msg += `🪑 *Seating Preference:* ${diningSection}\n`;
    if (specialRequest) msg += `✨ *Special Request / Dietary:* ${specialRequest}\n`;
    msg += `\nPlease let me know if a table is confirmed. Thank you!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FBFBF9] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200">
        
        {/* Modal Header */}
        <div className="bg-[#2C5F2D] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">Table Reservation</h3>
              <p className="text-xs text-emerald-100">Hotel Raghav Veg · Ambajogai</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-lg text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Kulkarni"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 098765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#2C5F2D]" />
                <span>Date</span>
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#2C5F2D]" />
                <span>Preferred Time</span>
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
              >
                <optgroup label="Lunch (11:00 AM - 3:30 PM)">
                  <option value="11:30 AM (Lunch)">11:30 AM</option>
                  <option value="12:30 PM (Lunch)">12:30 PM</option>
                  <option value="1:00 PM (Lunch)">1:00 PM (Peak)</option>
                  <option value="1:45 PM (Lunch)">1:45 PM</option>
                  <option value="2:30 PM (Lunch)">2:30 PM</option>
                </optgroup>
                <optgroup label="Dinner (7:00 PM - 11:00 PM)">
                  <option value="7:30 PM (Dinner)">7:30 PM</option>
                  <option value="8:15 PM (Dinner)">8:15 PM</option>
                  <option value="9:00 PM (Dinner)">9:00 PM (Peak)</option>
                  <option value="9:45 PM (Dinner)">9:45 PM</option>
                  <option value="10:15 PM (Dinner)">10:15 PM</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#2C5F2D]" />
                <span>Guests Count</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests (Couple)">2 Guests</option>
                <option value="4 Guests (Family)">4 Guests (Family)</option>
                <option value="6 Guests">6 Guests</option>
                <option value="8 Guests">8 Guests</option>
                <option value="10-15 Guests (Large Table)">10-15 Guests (Large Family Table)</option>
                <option value="15-25 Guests (Celebration)">15-25 Guests (Celebration)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Seating Area</label>
              <select
                value={diningSection}
                onChange={(e) => setDiningSection(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
              >
                <option value="AC Family Section">AC Family Dining Section</option>
                <option value="Main Dining Hall">Main Dining Hall</option>
                <option value="Birthday / Anniversary Corner">Birthday Celebration Corner</option>
                <option value="Quick Dine (Near Bus Stand)">Quick Dine (Express)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">Special Request / Jain Preparation</label>
            <input
              type="text"
              placeholder="e.g. Jain food required, birthday celebration, high chair needed"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
            />
          </div>

          {/* Quick Notice */}
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-start gap-2 text-[11px] text-emerald-800">
            <CheckCircle className="w-4 h-4 text-[#2C5F2D] flex-shrink-0 mt-0.5" />
            <span>
              Your table request will be sent instantly to our front desk WhatsApp ({RESTAURANT_INFO.phone}). 
              No advance payment needed for regular tables!
            </span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#E85D04] hover:bg-[#d05303] text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Confirm Booking via WhatsApp</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
