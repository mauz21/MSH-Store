
import React, { useState } from 'react';
import { View } from '../types';

interface CheckoutPageProps {
  total: number;
  onNavigate: (view: View) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ total, onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    payment: 'cod'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order Placed Successfully! (Demo Only)');
    onNavigate('home');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl font-black mb-12">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Billing Form */}
          <div className="lg:col-span-2 bg-white p-8 border border-gray-100">
             <h2 className="text-2xl font-black mb-8 border-b pb-4">Billing details</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                   <label className="block text-sm font-bold mb-2">First name *</label>
                   <input 
                    required 
                    type="text" 
                    className="w-full border border-gray-200 p-3 focus:outline-none focus:border-[#0084d1]"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-sm font-bold mb-2">Last name *</label>
                   <input 
                    required 
                    type="text" 
                    className="w-full border border-gray-200 p-3 focus:outline-none focus:border-[#0084d1]"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                   />
                </div>
             </div>
             <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Email address *</label>
                <input 
                  required 
                  type="email" 
                  className="w-full border border-gray-200 p-3 focus:outline-none focus:border-[#0084d1]"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
             </div>
             <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Street address *</label>
                <input 
                  required 
                  type="text" 
                  placeholder="House number and street name" 
                  className="w-full border border-gray-200 p-3 mb-4 focus:outline-none focus:border-[#0084d1]"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                   <label className="block text-sm font-bold mb-2">Town / City *</label>
                   <input 
                    required 
                    type="text" 
                    className="w-full border border-gray-200 p-3 focus:outline-none focus:border-[#0084d1]"
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-sm font-bold mb-2">Postcode / ZIP *</label>
                   <input 
                    required 
                    type="text" 
                    className="w-full border border-gray-200 p-3 focus:outline-none focus:border-[#0084d1]"
                    value={formData.zip}
                    onChange={e => setFormData({...formData, zip: e.target.value})}
                   />
                </div>
             </div>
             <div className="mt-12">
                <h2 className="text-2xl font-black mb-8 border-b pb-4">Additional information</h2>
                <label className="block text-sm font-bold mb-2">Order notes (optional)</label>
                <textarea rows={4} className="w-full border border-gray-200 p-3 focus:outline-none focus:border-[#0084d1]" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
             </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit">
             <div className="bg-white p-8 border border-gray-100 mb-8">
                <h2 className="text-2xl font-black mb-8 border-b pb-4">Your order</h2>
                <div className="space-y-4">
                   <div className="flex justify-between font-bold text-gray-600 border-b pb-4">
                      <span>Product</span>
                      <span>Subtotal</span>
                   </div>
                   <div className="flex justify-between text-gray-500 border-b pb-4">
                      <span>Order Items (Summary)</span>
                      <span className="font-bold text-gray-800">${total.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between font-bold text-gray-600 border-b pb-4">
                      <span>Subtotal</span>
                      <span className="text-gray-800">${total.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between font-bold text-gray-900 pt-2">
                      <span>Total</span>
                      <span className="text-2xl font-black text-[#0084d1]">${total.toFixed(2)}</span>
                   </div>
                </div>
             </div>

             <div className="bg-white p-8 border border-gray-100">
                <div className="space-y-4 mb-8">
                   <div className="flex items-center gap-3">
                      <input type="radio" name="payment" id="cod" checked={formData.payment === 'cod'} onChange={() => setFormData({...formData, payment: 'cod'})} />
                      <label htmlFor="cod" className="font-bold cursor-pointer">Cash on delivery</label>
                   </div>
                   <div className="p-4 bg-gray-50 text-sm text-gray-500">
                      Pay with cash upon delivery.
                   </div>
                   <div className="flex items-center gap-3 opacity-50">
                      <input type="radio" name="payment" id="paypal" disabled />
                      <label htmlFor="paypal" className="font-bold">PayPal</label>
                   </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#0084d1] text-white font-bold py-4 hover:bg-black transition-all uppercase tracking-widest"
                >
                  Place order
                </button>
             </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
