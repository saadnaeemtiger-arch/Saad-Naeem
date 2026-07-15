import { useState } from 'react';
import { X, Plus, Minus, Trash2, MessageSquare, ShoppingBag, Check, Bookmark } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onUpdateNotes: (productId: string, notes: string) => void;
}

export default function CartModal({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onUpdateNotes,
}: CartModalProps) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [pickupCode, setPickupCode] = useState('');
  const [isNotesOpen, setIsNotesOpen] = useState<{ [key: string]: boolean }>({});

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% local tax
  const total = subtotal + tax;

  const generatePickupCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'TOO-';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleStoreCheckout = () => {
    setPickupCode(generatePickupCode());
    setCheckoutSuccess(true);
  };

  const handleWhatsAppCheckout = () => {
    // Generate beautiful text representation of the cart
    let text = `✨ *TOO Bakery - Custom Order Request* ✨\n\n`;
    text += `Hello! I would like to place an artisan order for pickup:\n\n`;
    
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}* (Qty: ${item.quantity}) - $${(item.product.price * item.quantity).toFixed(2)}\n`;
      if (item.notes) {
        text += `   _Notes: ${item.notes}_\n`;
      }
      text += `\n`;
    });

    text += `----------------------------------\n`;
    text += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
    text += `*Est. Tax (8%):* $${tax.toFixed(2)}\n`;
    text += `*Total Amount:* $${total.toFixed(2)}\n\n`;
    text += `Please verify this order and let me know the estimated pickup window. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/15550199238?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noreferrer');
  };

  const handleCloseSuccess = () => {
    setCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  const toggleNotes = (id: string) => {
    setIsNotesOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
      
      {/* Drawer Overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Drawer Shell */}
      <div className="relative bg-white w-full max-w-lg h-full flex flex-col shadow-2xl border-l border-gold-400/20 animate-slide-in">
        
        {/* Header Drawer */}
        <div className="p-6 border-b border-gold-400/10 flex items-center justify-between bg-cream-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold-500" />
            <h2 className="font-serif text-base sm:text-lg font-normal text-cream-950">
              Your Order Basket ({cart.reduce((acc, item) => acc + item.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-cream-50 hover:bg-gold-400/10 text-cream-950 transition-colors cursor-pointer border border-gold-400/10"
            aria-label="Close Cart"
          >
            <X size={16} />
          </button>
        </div>

        {/* Cart Contents list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl border border-gold-400/20 p-4 space-y-3.5 shadow-sm hover:border-gold-400/45 transition-colors"
                id={`cart-item-${item.product.id}`}
              >
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-cream-100 border border-gold-400/10 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  {/* Info details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-xs sm:text-sm font-normal text-cream-950 truncate leading-tight">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-cream-400 hover:text-red-500 transition-colors cursor-pointer p-0.5"
                        title="Remove Item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                    <span className="text-[9px] uppercase font-bold text-gold-500 mt-1 block tracking-wider">
                      {item.product.category}
                    </span>

                    <div className="flex items-center justify-between mt-3">
                      {/* Price sub-calc */}
                      <span className="text-xs sm:text-sm font-semibold text-gold-500 font-serif">
                        ${(item.product.price * item.quantity).toFixed(2)}
                        {item.quantity > 1 && (
                          <span className="text-[10px] text-cream-500 font-sans font-medium ml-1">
                            (${item.product.price.toFixed(2)} ea)
                          </span>
                        )}
                      </span>

                      {/* Quantity Toggles */}
                      <div className="flex items-center gap-2 bg-cream-50 rounded-lg p-1 border border-gold-400/10">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 rounded bg-white hover:bg-gold-500/10 text-cream-950 hover:text-gold-500 transition-colors cursor-pointer border border-gold-400/5"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={9} />
                        </button>
                        <span className="text-xs font-mono font-bold w-5 text-center text-cream-950">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 rounded bg-white hover:bg-gold-500/10 text-cream-950 hover:text-gold-500 transition-colors cursor-pointer border border-gold-400/5"
                          aria-label="Increase quantity"
                        >
                          <Plus size={9} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customized Baking Notes trigger */}
                <div className="space-y-1.5 pt-2 border-t border-gold-400/10">
                  <button
                    onClick={() => toggleNotes(item.product.id)}
                    className="text-[9px] font-bold text-gold-500 hover:text-gold-600 flex items-center gap-1 cursor-pointer uppercase tracking-wider"
                  >
                    <Bookmark size={10} />
                    {item.notes ? 'Edit Baking Instructions' : 'Add Custom Notes / Message'}
                  </button>

                  {(isNotesOpen[item.product.id] || item.notes) && (
                    <input
                      type="text"
                      placeholder="e.g., Allergen warning, customized text written in cream..."
                      value={item.notes || ''}
                      onChange={(e) => onUpdateNotes(item.product.id, e.target.value)}
                      className="w-full bg-cream-50/50 text-[11px] px-3 py-2 rounded-lg border border-gold-400/10 text-cream-950 focus:outline-none focus:border-gold-500"
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 space-y-4">
              <span className="text-5xl block animate-pulse">🍞</span>
              <h3 className="font-serif text-base font-normal text-cream-950">Your basket is empty</h3>
              <p className="text-xs text-cream-700 max-w-xs mx-auto leading-relaxed">
                Select from our fresh cakes, pastries, croissants, and artisan breads to get started with your reservation order!
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer rounded-lg shadow-sm"
              >
                Browse Menu
              </button>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout Actions */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gold-400/15 bg-cream-50/50 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-cream-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-cream-700">
                <span>Local Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-cream-950 font-bold text-sm sm:text-base pt-1.5 border-t border-gold-400/15">
                <span>Total Reservation</span>
                <span className="font-serif text-gold-500">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              {/* Checkout WhatsApp */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest shadow shadow-gold-500/15 cursor-pointer rounded-lg transition-all"
              >
                <MessageSquare size={13} />
                Checkout via WhatsApp
              </button>

              {/* Checkout direct reservation */}
              <button
                onClick={handleStoreCheckout}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold-950 hover:bg-cream-950 text-white text-[10px] font-bold uppercase tracking-widest shadow cursor-pointer rounded-lg transition-all"
              >
                Reserve and Pick Up
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Direct reservation success overlay modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 border border-gold-400/30 shadow-2xl max-w-md w-full text-center space-y-6 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mx-auto animate-bounce">
              <Check size={32} />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl font-normal text-cream-950">Reservation Confirmed!</h3>
              <p className="text-xs sm:text-sm text-cream-700 leading-relaxed">
                Your artisan reservation is logged under confirmation code:
              </p>
              <div className="bg-cream-50 border border-gold-400/15 p-3 rounded-xl font-mono text-base font-bold text-gold-500 tracking-wider">
                {pickupCode}
              </div>
              <p className="text-[11px] text-cream-600 leading-relaxed">
                Please present this code at our storefront counter at <span className="font-bold">742 Sweet-Crumbs Lane</span> during business hours to complete your pickup payment.
              </p>
              <p className="text-[11px] font-serif italic text-gold-500">Fresh baking boxes await you!</p>
            </div>

            <button
              onClick={handleCloseSuccess}
              className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow cursor-pointer transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Sliding and scaling transitions */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
