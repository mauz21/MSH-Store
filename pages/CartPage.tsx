
import React from 'react';
import { CartItem, View } from '../types';

interface CartPageProps {
  cart: CartItem[];
  total: number;
  updateQuantity: (id: number, q: number) => void;
  removeFromCart: (id: number) => void;
  onNavigate: (view: View) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, total, updateQuantity, removeFromCart, onNavigate }) => {
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
         <h1 className="text-4xl font-black mb-6">Cart is Empty</h1>
         <button 
           onClick={() => onNavigate('store')}
           className="bg-[#0084d1] text-white font-bold px-12 py-4 hover:bg-black transition-all"
         >
           RETURN TO SHOP
         </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl font-black mb-12">Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Table Area */}
          <div className="lg:col-span-2 overflow-x-auto">
             <table className="w-full bg-white border border-gray-100">
                <thead>
                   <tr className="border-b border-gray-100 text-left">
                      <th className="p-6">Product</th>
                      <th className="p-6">Price</th>
                      <th className="p-6">Quantity</th>
                      <th className="p-6">Subtotal</th>
                   </tr>
                </thead>
                <tbody>
                   {cart.map(item => (
                     <tr key={item.id} className="border-b border-gray-50 last:border-none">
                        <td className="p-6 flex items-center gap-4 min-w-[300px]">
                           <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500">×</button>
                           <img src={item.image} className="w-16 h-16 object-cover" />
                           <span className="font-bold text-gray-900">{item.name}</span>
                        </td>
                        <td className="p-6 font-bold text-gray-600">${item.price.toFixed(2)}</td>
                        <td className="p-6">
                           <div className="flex items-center border border-gray-200 w-fit">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1">-</button>
                              <span className="px-4 py-1 border-x border-gray-200">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1">+</button>
                           </div>
                        </td>
                        <td className="p-6 font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</td>
                     </tr>
                   ))}
                </tbody>
             </table>

             <div className="mt-8 flex justify-between items-center bg-white p-6 border border-gray-100">
                <div className="flex gap-4">
                   <input type="text" placeholder="Coupon code" className="border border-gray-200 px-4 py-2 focus:outline-none" />
                   <button className="bg-[#0084d1] text-white font-bold px-6 py-2">APPLY COUPON</button>
                </div>
                <button className="bg-gray-100 text-gray-400 font-bold px-6 py-2 cursor-not-allowed">UPDATE CART</button>
             </div>
          </div>

          {/* Totals Sidebar */}
          <div className="bg-white p-8 border border-gray-100 h-fit">
             <h2 className="text-2xl font-black mb-8 border-b pb-4">Cart totals</h2>
             <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                   <span className="font-bold text-gray-600">Subtotal</span>
                   <span className="text-gray-900 font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                   <span className="font-bold text-gray-600">Total</span>
                   <span className="text-2xl font-black text-[#0084d1]">${total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => onNavigate('checkout')}
                  className="w-full bg-[#0084d1] text-white font-bold py-4 hover:bg-black transition-all"
                >
                  PROCEED TO CHECKOUT
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
