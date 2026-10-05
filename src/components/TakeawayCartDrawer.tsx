import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, ArrowRight, Clock, User, Phone, Check } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO, MenuItem } from '../data/restaurantData';

interface TakeawayCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Record<string, number>;
  onUpdateQty: (item: MenuItem, change: number) => void;
  onClearCart: () => void;
}

export const TakeawayCartDrawer: React.FC<TakeawayCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('Within 30 minutes');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isOpen) return null;

  // Build items list
  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);
  const itemsWithDetails = cartEntries.map(([id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return {
      item,
      qty,
      subtotal: (item?.price || 0) * qty,
    };
  }).filter((entry): entry is { item: MenuItem; qty: number; subtotal: number } => entry.item !== undefined);

  const grandTotal = itemsWithDetails.reduce((sum, current) => sum + current.subtotal, 0);
  const totalItemCount = itemsWithDetails.reduce((sum, current) => sum + current.qty, 0);

  const handleSendWhatsApp = () => {
    let message = `*Namaste Hotel Raghav Veg!*\nI would like to place a *Takeaway Order* for pickup:\n\n`;
    
    if (customerName) message += `👤 *Customer Name:* ${customerName}\n`;
    if (customerPhone) message += `📞 *Phone:* ${customerPhone}\n`;
    message += `⏰ *Pickup Time:* ${pickupTime}\n`;
    if (specialInstructions) message += `📝 *Notes/Dietary:* ${specialInstructions}\n`;
    
    message += `\n*Order Details:*\n`;
    itemsWithDetails.forEach(({ item, qty, subtotal }) => {
      message += `• ${qty}x ${item.name} (₹${subtotal})\n`;
    });

    message += `\n*Total Amount:* ₹${grandTotal}\n`;
    message += `📍 *Pickup Counter:* Opp. ST Bus Stand, Parli Road, Ambajogai\n`;
    message += `Please confirm preparation and packing!`;

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#FBFBF9] h-full flex flex-col shadow-2xl border-l border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#2C5F2D] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-serif font-bold text-base">Your Takeaway Bag</h3>
              <p className="text-xs text-emerald-100">{totalItemCount} items selected</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-lg text-white transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {itemsWithDetails.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">Your bag is empty</h4>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Explore our digital menu and tap "Add to Takeaway" on signature dishes like Shev Bhaji, Malai Kofta, or Butter Naan.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-[#2C5F2D] text-white text-xs font-semibold rounded-lg hover:bg-[#234c24]"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Itemized List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold uppercase tracking-wider">Dishes</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-600 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Clear All
                  </button>
                </div>

                <div className="space-y-2">
                  {itemsWithDetails.map(({ item, qty, subtotal }) => (
                    <div
                      key={item.id}
                      className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 border border-[#2C5F2D] p-0.5 rounded-xs flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2D]"></span>
                          </span>
                          <h5 className="font-serif font-bold text-xs text-[#1A1A1A] truncate">
                            {item.name}
                          </h5>
                        </div>
                        <p className="text-xs font-semibold text-[#2C5F2D] mt-0.5">
                          ₹{item.price} each · <span className="text-[#1A1A1A]">₹{subtotal}</span>
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 bg-[#FBFBF9] border border-gray-200 rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQty(item, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#1A1A1A]">{qty}</span>
                        <button
                          onClick={() => onUpdateQty(item, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pickup & Customer Details Form */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-3 text-xs">
                <h4 className="font-serif font-bold text-sm text-[#1A1A1A] flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#2C5F2D]" />
                  <span>Pickup Information</span>
                </h4>

                <div className="space-y-1">
                  <label className="text-gray-600 font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Patil"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBFBF9] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C5F2D]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-gray-600 font-medium">Contact Phone (for confirmation)</label>
                  <input
                    type="tel"
                    placeholder="e.g. 09876543210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBFBF9] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C5F2D]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-gray-600 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2C5F2D]" />
                    <span>Expected Pickup Time</span>
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBFBF9] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C5F2D]"
                  >
                    <option value="In 20 minutes (Quick Pickup)">In 20 minutes (Quick Pickup)</option>
                    <option value="In 35 minutes">In 35 minutes</option>
                    <option value="In 50 minutes">In 50 minutes</option>
                    <option value="Today Evening (7:30 PM)">Today Evening (7:30 PM)</option>
                    <option value="Today Dinner (8:30 PM)">Today Dinner (8:30 PM)</option>
                    <option value="Today Dinner (9:30 PM)">Today Dinner (9:30 PM)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-gray-600 font-medium">Special Request / Jain Preparation</label>
                  <input
                    type="text"
                    placeholder="e.g. Jain preparation / Extra spicy tarri / No onion"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBFBF9] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C5F2D]"
                  />
                </div>
              </div>

              {/* Bill Summary */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Items Total ({totalItemCount} items)</span>
                  <span>₹{grandTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Packaging & Container</span>
                  <span className="text-[#2C5F2D] font-medium">FREE</span>
                </div>
                <div className="pt-2 border-t border-gray-200 flex justify-between font-bold text-sm text-[#1A1A1A]">
                  <span>Total Amount</span>
                  <span className="text-[#2C5F2D] font-serif text-base">₹{grandTotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Action */}
        {itemsWithDetails.length > 0 && (
          <div className="p-4 bg-white border-t border-gray-200 space-y-2">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Send Takeaway Order on WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-gray-500">
              Orders sent directly to Hotel Raghav kitchen (+91 84213 11888)
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
