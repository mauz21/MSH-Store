
import React, { useState } from 'react';
import { Product, View } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface ProductDetailsPageProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onNavigate: (view: View, id?: number) => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onAddToCart, onNavigate }) => {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const isOutOfStock = product.stockStatus === 'out-of-stock';

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
             <div className="aspect-square bg-gray-50 overflow-hidden group border border-gray-100">
                <img src={product.image} className={`w-full h-full object-cover transition-transform group-hover:scale-110 duration-700 ${isOutOfStock ? 'opacity-60' : ''}`} alt={product.name} />
             </div>
             <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-square bg-gray-50 overflow-hidden cursor-pointer hover:opacity-75 transition-opacity border border-gray-100">
                    <img src={`https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=200&h=200`} className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
          </div>

          {/* Product Info */}
          <div>
            <nav className="text-sm text-gray-400 mb-6">
              Home / {product.category} / {product.name}
            </nav>
            <p className="text-gray-400 font-bold mb-2 uppercase tracking-widest text-sm">{product.category}</p>
            <h1 className="text-4xl font-black mb-6 text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
               <span className="text-3xl font-black text-gray-900">${product.price.toFixed(2)}</span>
               <span className="text-gray-500 font-bold">+ Free Shipping</span>
            </div>
            
            <div className="mb-8 flex items-center gap-2">
               <span className={`text-sm font-bold px-3 py-1 rounded-full ${isOutOfStock ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                 {isOutOfStock ? 'OUT OF STOCK' : 'AVAILABLE IN STOCK'}
               </span>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-10">{product.description}</p>

            <div className="flex flex-wrap items-center gap-4 mb-10 pb-10 border-b border-gray-100">
               <div className="flex items-center border border-gray-200">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:bg-gray-100" disabled={isOutOfStock}>-</button>
                  <span className="px-6 py-3 font-bold border-x border-gray-200">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:bg-gray-100" disabled={isOutOfStock}>+</button>
               </div>
               <button 
                disabled={isOutOfStock}
                onClick={() => onAddToCart({ ...product })}
                className={`font-bold px-12 py-4 transition-all flex-grow md:flex-grow-0 ${isOutOfStock ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#0084d1] text-white hover:bg-black'}`}
               >
                 {isOutOfStock ? 'OUT OF STOCK' : 'ADD TO CART'}
               </button>
            </div>

            <div className="space-y-4 text-sm">
               <p><span className="font-bold">SKU:</span> MSH-{product.id}-001</p>
               <p><span className="font-bold">Category:</span> {product.category}</p>
               {product.subCategory && <p><span className="font-bold">Subcategory:</span> {product.subCategory}</p>}
               <p><span className="font-bold">Tags:</span> Casual, MSH Fashion, Premium</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-100 pt-12 mb-20">
           <div className="flex gap-12 border-b border-gray-100 mb-8">
              <button 
                className={`pb-4 font-bold text-lg relative ${activeTab === 'description' ? 'text-gray-900' : 'text-gray-400'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
                {activeTab === 'description' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0084d1]" />}
              </button>
              <button 
                className={`pb-4 font-bold text-lg relative ${activeTab === 'reviews' ? 'text-gray-900' : 'text-gray-400'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews (0)
                {activeTab === 'reviews' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0084d1]" />}
              </button>
           </div>

           <div className="min-h-[200px]">
              {activeTab === 'description' ? (
                <div className="max-w-4xl text-gray-600 space-y-4 leading-relaxed">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h3>
                   <p>Introducing our flagship {product.name}, designed at MSH studios. This piece represents our commitment to blending modern fashion with timeless durability.</p>
                   <p>Crafted from ethically sourced materials, it features reinforced stitching and a custom fit designed to move with you. Whether you're dressing up for an evening out or keeping it casual for the weekend, this product adapts to your lifestyle.</p>
                </div>
              ) : (
                <div className="max-w-2xl py-12 text-center bg-gray-50 border border-dashed border-gray-200 rounded-lg">
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Reviews Coming Soon!</h3>
                   <p className="text-gray-500">We are currently migrating our review system. You will be able to share your feedback very soon.</p>
                </div>
              )}
           </div>
        </div>

        {/* Related Products */}
        <div>
           <h2 className="text-4xl font-black mb-12">Related Products</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} onNavigate={onNavigate as any} onAddToCart={onAddToCart} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
