import React, { useState } from 'react';
import { Users, Sparkles, CheckCircle2, Calendar, Phone, MessageSquare, ArrowRight, ShieldCheck, Music, Utensils, Award } from 'lucide-react';
import { BANQUET_PACKAGES, RESTAURANT_INFO } from '../data/restaurantData';

export const BanquetSection: React.FC = () => {
  const [guestCount, setGuestCount] = useState<number>(120);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('royal-punjabi');
  const [eventType, setEventType] = useState<string>('Wedding Reception / Engagement');
  const [eventDate, setEventDate] = useState<string>('');

  const currentPackage = BANQUET_PACKAGES.find((pkg) => pkg.id === selectedPackageId) || BANQUET_PACKAGES[1];
  const estimatedCost = guestCount * currentPackage.pricePerPlate;

  const handleBanquetInquiry = () => {
    let msg = `*Namaste Hotel Raghav Veg!*\nI would like to inquire about reserving your *Banquet Hall (200 Capacity)*:\n\n`;
    msg += `🎉 *Event Type:* ${eventType}\n`;
    msg += `👥 *Estimated Guests:* ${guestCount} people\n`;
    if (eventDate) msg += `📅 *Preferred Date:* ${eventDate}\n`;
    msg += `🍽️ *Selected Menu Package:* ${currentPackage.name} (approx ₹${currentPackage.pricePerPlate}/plate)\n`;
    msg += `💰 *Estimated Food Budget:* ~₹${estimatedCost.toLocaleString('en-IN')}\n\n`;
    msg += `Could you please share date availability and schedule a visit to the hall? Thank you!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="banquets" className="py-20 bg-[#142B15] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Air-Conditioned Banquet Hall</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Grand Celebrations Up to 200 Guests
          </h2>
          <p className="text-base text-emerald-100 max-w-2xl mx-auto">
            From auspicious wedding receptions and Sakharpuda engagements to milestone birthdays and business seminars, 
            Hotel Raghav Veg offers Ambajogai's most distinguished pure-veg celebration venue.
          </p>
        </div>

        {/* Feature Grid & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Images Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 shadow-xl border border-[#D4AF37]/30 group">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                alt="Hotel Raghav AC Banquet Hall Elegant Seating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">Grand Capacity</span>
                <h4 className="font-serif font-bold text-lg">Central AC & Stage Lighting</h4>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-38 sm:h-38 shadow-lg border border-[#D4AF37]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
                  alt="Pure Veg Buffet Live Catering Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="font-serif font-bold text-sm">Pure Veg Live Buffet Catering</span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-38 sm:h-38 shadow-lg border border-[#D4AF37]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80"
                  alt="Celebration Table Decor and Flower Arrangements"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="font-serif font-bold text-sm">Decor, Audio & Hospitality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Advantages Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-white">
                Everything Handled Under One Roof
              </h3>
              <p className="text-sm text-emerald-100 leading-relaxed">
                Hosting an event at Raghav Veg means your family can actually enjoy the festivities. 
                Our dedicated event managers handle seating, welcome drinks, piping hot tandoor breads, 
                and royal dessert counters.
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-emerald-100">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-semibold block text-sm">200-Guest Seating & Dining</strong>
                  <span>Spacious column-free air-conditioned banquet hall with flexible table layouts.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-semibold block text-sm">Live Hot Tandoor & Chaat Counters</strong>
                  <span>Fresh naans, sizzling starters, and authentic Maharashtrian dishes served straight from the flame.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-semibold block text-sm">Stage, Crystal Lights & Hi-Fi Audio</strong>
                  <span>Equipped with wireless mics, celebration sound system, and customizable stage backdrops.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-semibold block text-sm">Convenient for Outstation Guests</strong>
                  <span>Located right in front of ST Bus Stand, making it easy for guests traveling from Pune, Latur, Beed, or Nanded.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:underline font-semibold text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Speak Directly with Banquet Manager: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Interactive Banquet Calculator Card */}
        <div className="bg-[#1C3A1E] rounded-3xl border border-[#D4AF37]/40 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="text-center space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Instant Planning Tool
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Estimate Your Event Menu & Hall Budget
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200">
                Choose your occasion and guest count to see transparent package estimates with pure veg live catering.
              </p>
            </div>

            {/* Step 1: Occasion & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-emerald-100">Select Occasion Type</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-[#142B15] border border-emerald-700/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <option value="Wedding Reception / Sakharpuda">Wedding Reception / Engagement (Sakharpuda)</option>
                  <option value="Birthday Party / Milestone Anniversary">Birthday Celebration / Anniversary</option>
                  <option value="Munj / Sacred Thread Ceremony">Munj / Thread Ceremony</option>
                  <option value="Family Get-Together / Puja Feast">Family Get-Together / Puja Feast</option>
                  <option value="Corporate Seminar / Business Meeting">Corporate Seminar / Tour Group Dining</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-emerald-100">Tentative Event Date (Optional)</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#142B15] border border-emerald-700/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div className="space-y-3 bg-[#142B15]/60 p-5 rounded-2xl border border-emerald-800">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>Expected Number of Guests:</span>
                </label>
                <span className="font-serif text-2xl font-bold text-[#D4AF37]">
                  {guestCount} <span className="text-xs font-normal text-emerald-200">Guests</span>
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="200"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-emerald-300">
                <span>50 Guests (Intimate Gathering)</span>
                <span>120 Guests (Popular Size)</span>
                <span>200 Guests (Full Hall Capacity)</span>
              </div>
            </div>

            {/* Step 3: Package Selector */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-emerald-100 block">
                Select Catering & Feast Package
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BANQUET_PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#142B15] border-[#D4AF37] ring-2 ring-[#D4AF37]/50 shadow-xl'
                          : 'bg-[#142B15]/60 border-emerald-800/80 hover:border-emerald-700 hover:bg-[#142B15]'
                      }`}
                    >
                      {pkg.isPopular && (
                        <div className="absolute -top-3 right-4 bg-[#D4AF37] text-[#1A1A1A] font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow">
                          Most Popular
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif font-bold text-base text-white">{pkg.name}</h4>
                        </div>
                        <p className="text-xs text-emerald-300 leading-snug">{pkg.recommendedFor}</p>

                        <div className="pt-2">
                          <span className="font-serif text-2xl font-bold text-[#D4AF37]">
                            ₹{pkg.pricePerPlate}
                          </span>
                          <span className="text-xs text-gray-300"> / plate</span>
                        </div>

                        <ul className="pt-2 space-y-1.5 text-[11px] text-gray-200">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 pt-3 border-t border-emerald-800/80 text-center">
                        <span className={`text-xs font-semibold ${isSelected ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
                          {isSelected ? '✓ Selected Package' : 'Click to Select'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Estimation Output Bar */}
            <div className="bg-[#142B15] p-5 sm:p-6 rounded-2xl border border-[#D4AF37]/50 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs text-emerald-200">Estimated Total for {guestCount} Guests:</span>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37]">
                    ₹{estimatedCost.toLocaleString('en-IN')}*
                  </span>
                  <span className="text-xs text-emerald-300">
                    ({guestCount} × ₹{currentPackage.pricePerPlate})
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">
                  *Includes AC banquet hall usage, full service captains, cutlery, and pure-veg buffet catering.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleBanquetInquiry}
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Check Dates via WhatsApp</span>
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
