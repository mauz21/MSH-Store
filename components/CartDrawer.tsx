
import React from 'react';
import { CartItem, View } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, q: number) => void;
  onNavigate: (view: View) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, total, onRemove, onUpdateQuantity, onNavigate }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <p className="text-lg mb-4">No products in the cart.</p>
              <button 
                onClick={() => { onClose(); onNavigate('store'); }}
                className="bg-[#0084d1] text-white font-bold px-8 py-3 hover:bg-[#0073b6] transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.quantity} × <span className="font-bold text-gray-800">${item.price.toFixed(2)}</span>
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                     <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="border px-2 text-xs">-</button>
                     <span className="text-xs">{item.quantity}</span>
                     <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="border px-2 text-xs">+</button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-gray-600">Subtotal:</span>
              <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => { onClose(); onNavigate('cart'); }}
                className="w-full bg-gray-200 text-gray-800 font-bold py-4 hover:bg-gray-300 transition-colors"
              >
                VIEW CART
              </button>
              <button 
                onClick={() => { onClose(); onNavigate('checkout'); }}
                className="w-full bg-[#0084d1] text-white font-bold py-4 hover:bg-[#0073b6] transition-colors"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
