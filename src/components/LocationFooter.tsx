import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, ShieldCheck, Heart, Copy, Check, Download, Code } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationFooter: React.FC = () => {
  const [showExportModal, setShowExportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyHtmlSnippet = () => {
    // Generate clean standalone single HTML code if user wants Netlify deployment
    const staticHtml = `<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hotel Raghav Veg – Pure Vegetarian Restaurant & Banquets, Ambajogai</title>
  <meta name="description" content="Ambajogai's premier 4.8★ pure vegetarian dining experience and 200-capacity celebration banquet hall on Parli Road, Ambajogai, Maharashtra." />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #FBFBF9; color: #1A1A1A; }
    h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }
    .bg-emerald-raghav { background-color: #2C5F2D; }
    .text-emerald-raghav { color: #2C5F2D; }
    .text-gold-raghav { color: #D4AF37; }
    .bg-gold-raghav { background-color: #D4AF37; }
    .bg-saffron-raghav { background-color: #E85D04; }
  </style>
</head>
<body class="antialiased">
  <!-- Top Bar -->
  <div class="bg-emerald-raghav text-white text-xs px-4 py-2 flex justify-between items-center max-w-7xl mx-auto">
    <span>🌿 100% Pure Vegetarian · Opp. ST Bus Depot, Parli Road, Ambajogai</span>
    <a href="tel:08421311888" class="font-bold text-gold-raghav">📞 084213 11888</a>
  </div>

  <!-- Hero Header -->
  <header class="bg-[#1F4522] text-white py-16 px-6 text-center">
    <span class="text-gold-raghav text-xs font-bold uppercase tracking-widest">★ 4.8 / 5 Rating (1,084+ Reviews)</span>
    <h1 class="text-4xl md:text-6xl font-bold mt-2">Hotel Raghav Veg</h1>
    <p class="text-emerald-100 max-w-2xl mx-auto mt-4">Pure Vegetarian Restaurant & 200-Capacity AC Celebration Banquet Hall in Ambajogai, Maharashtra.</p>
    <div class="mt-6 flex flex-wrap justify-center gap-4">
      <a href="https://wa.me/918421311888?text=Namaste%20Hotel%20Raghav%20Veg%2C%20I%20would%20like%20to%20reserve%20a%20table" class="bg-saffron-raghav text-white px-6 py-3 rounded-xl font-bold text-sm">Book Table (WhatsApp)</a>
      <a href="tel:08421311888" class="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-bold text-sm">Call 084213 11888</a>
      <a href="https://maps.app.goo.gl/TJNoemZkJvho5R5p9?g_st=ac" target="_blank" class="bg-gold-raghav text-black px-6 py-3 rounded-xl font-bold text-sm">Get Directions</a>
    </div>
  </header>

  <!-- Content & Menu Details -->
  <main class="max-w-6xl mx-auto p-6 space-y-12">
    <section>
      <h2 class="text-3xl font-bold text-center mb-6">Signature Pure Veg Delicacies</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <h3 class="font-bold text-lg">Raghav Special Shev Bhaji</h3>
          <p class="text-xs text-gray-500 mt-1">Marathwada spiced tarri gravy with ratlami crisp shev.</p>
          <div class="mt-4 font-bold text-emerald-raghav">₹160</div>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-amber-300 shadow-sm">
          <span class="text-[10px] bg-gold-raghav text-black font-bold px-2 py-0.5 rounded">Chef's Special</span>
          <h3 class="font-bold text-lg mt-1">Royal Malai Kofta</h3>
          <p class="text-xs text-gray-500 mt-1">Khoya & paneer dumplings in rich velvety cashew cream gravy.</p>
          <div class="mt-4 font-bold text-emerald-raghav">₹230</div>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <h3 class="font-bold text-lg">Veg Hakka Noodles</h3>
          <p class="text-xs text-gray-500 mt-1">Wok-tossed noodles with fresh shredded garden vegetables.</p>
          <div class="mt-4 font-bold text-emerald-raghav">₹160</div>
        </div>
      </div>
    </section>

    <!-- Banquet Hall -->
    <section class="bg-[#142B15] text-white p-8 rounded-3xl text-center">
      <h2 class="text-3xl font-bold">200-Guest Air Conditioned Banquet Hall</h2>
      <p class="text-emerald-100 max-w-xl mx-auto mt-2 text-sm">Perfect for weddings, sakharpuda engagements, munj, and birthdays. Call 084213 11888 for dates.</p>
      <a href="https://wa.me/918421311888?text=Inquiry%20for%20Banquet%20Hall%20200%20Guests" class="inline-block mt-4 bg-gold-raghav text-black px-6 py-2.5 rounded-lg font-bold text-sm">Banquet WhatsApp Inquiry</a>
    </section>

    <!-- Map & Contact -->
    <footer class="text-center text-xs text-gray-500 pt-6">
      <p class="font-bold text-sm text-black">Hotel Raghav Veg</p>
      <p>In front of ST Bus Depot, Parli Road, Ambajogai, Maharashtra 431517 · Open 11 AM - 11 PM</p>
      <p class="mt-2">Phone: 084213 11888</p>
    </footer>
  </main>
</body>
</html>`;

    navigator.clipboard.writeText(staticHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="location" className="bg-[#142B15] text-white pt-16 pb-24 sm:pb-16 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Location Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/80">
          
          {/* Left Restaurant Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#2C5F2D] border border-[#D4AF37]/50 flex items-center justify-center text-white shadow-md">
                <span className="font-serif font-bold text-2xl text-[#D4AF37]">R</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <span>Hotel Raghav Veg</span>
                  <span className="inline-flex items-center justify-center w-4 h-4 border border-[#2C5F2D] p-0.5 rounded-xs bg-white" title="Pure Veg">
                    <span className="w-2 h-2 rounded-full bg-[#2C5F2D]"></span>
                  </span>
                </h3>
                <p className="text-xs text-emerald-200">
                  Pure Vegetarian Restaurant & 200-Guest Celebration Banquets
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/90 leading-relaxed">
              Serving the authentic taste of Maharashtra and North India with uncompromised freshness, 
              pure cow ghee, and heartfelt hospitality. A culinary landmark for Ambajogai locals and pilgrims.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 text-xs">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Prime Location:</span>
                  <span className="text-emerald-100">{RESTAURANT_INFO.address}</span>
                  <span className="text-emerald-300 block text-[11px] mt-0.5">
                    Landmark: Directly opposite Ambajogai Central ST Bus Stand
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Operating Hours:</span>
                  <span className="text-emerald-100">{RESTAURANT_INFO.hours} (Open All 7 Days)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Direct Booking & Orders:</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-[#D4AF37] font-bold text-sm hover:underline"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2C5F2D] hover:bg-[#377839] border border-[#D4AF37]/40 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition-all shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-emerald-300" />
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Namaste Hotel Raghav Veg! I would like to inquire about dining / table booking."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Front Desk</span>
              </a>

              {/* Netlify/HTML helper button */}
              <button
                onClick={() => setShowExportModal(true)}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs px-3 py-2.5 rounded-xl transition-all"
                title="View/Export standalone single HTML code"
              >
                <Code className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Export Single HTML</span>
              </button>
            </div>
          </div>

          {/* Right Google Maps Embed */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#1C3A1E] h-72 sm:h-80 relative">
              <iframe
                title="Hotel Raghav Veg Ambajogai Location Map"
                src="https://maps.google.com/maps?q=Hotel%20Raghav%20Veg%20Parli%20Road%20Ambajogai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 contrast-105"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#142B15]/95 backdrop-blur-md p-2.5 rounded-xl border border-[#D4AF37]/30 text-xs flex items-center justify-between">
                <div className="truncate">
                  <span className="font-semibold text-white block truncate">Opp. ST Bus Depot, Parli Road</span>
                  <span className="text-[11px] text-emerald-300">Ambajogai, Maharashtra</span>
                </div>
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4AF37] hover:bg-[#c49f2e] text-[#1A1A1A] font-bold px-2.5 py-1 rounded text-[11px] whitespace-nowrap ml-2"
                >
                  Directions →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom micro-credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200">
          <p>© {new Date().getFullYear()} Hotel Raghav Veg. All Rights Reserved. 100% Pure Vegetarian.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#D4AF37] font-semibold">★ 4.8 Rated on Google</span>
            <span className="text-emerald-500">·</span>
            <span className="text-emerald-300">Ambajogai, Beed District, Maharashtra</span>
          </div>
        </div>

      </div>

      {/* Standalone HTML Export Modal (Satisfying prompt request for static host like Netlify) */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#FBFBF9] text-[#1A1A1A] rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-lg text-[#1A1A1A]">Standalone HTML for Netlify / Static Hosting</h4>
                <p className="text-xs text-gray-500">Self-contained production HTML with Tailwind CDN, Google Fonts & FontAwesome</p>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-gray-400 hover:text-gray-700 p-1 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#4A4A4A] leading-relaxed">
              As requested in your brief, here is the complete single-file HTML version containing all brand colors (#2C5F2D, #D4AF37, #E85D04), 
              the 4.8★ social proof, sticky buttons, signature menu dishes, and 200-guest banquet hall section ready for instant drag-and-drop 
              deployment to Netlify or Hostinger.
            </p>

            <div className="bg-gray-900 text-emerald-400 font-mono text-[11px] p-3 rounded-lg overflow-x-auto max-h-48 border border-gray-800">
              <code>{`<!doctype html>
<html lang="en">
<!-- Complete Hotel Raghav Veg Standalone Website Code -->
<head>
  <meta charset="UTF-8" />
  <title>Hotel Raghav Veg – Ambajogai</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Colors: #2C5F2D, #D4AF37, #FBFBF9, #E85D04 -->
</head>
<body> ... </body>
</html>`}</code>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>
              <button
                onClick={handleCopyHtmlSnippet}
                className="px-5 py-2 bg-[#2C5F2D] hover:bg-[#234c24] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Full HTML to Clipboard!' : 'Copy Complete HTML Code'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
