
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onNavigate: (view: 'product', id: number) => void;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onNavigate, onAddToCart }) => {
  const isOutOfStock = product.stockStatus === 'out-of-stock';

  return (
    <div className="group flex flex-col cursor-pointer" onClick={() => onNavigate('product', product.id)}>
      <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-square">
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-white text-gray-800 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm z-10">
            Sale!
          </span>
        )}
        
        {isOutOfStock && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10 shadow-sm">
            Out of Stock
          </span>
        )}

        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isOutOfStock ? 'opacity-60 grayscale-[0.5]' : ''}`}
        />
        
        <div className={`absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center ${isOutOfStock ? 'hidden' : ''}`}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-white text-gray-900 font-bold px-6 py-2 shadow-lg hover:bg-gray-900 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-gray-900 group-hover:text-[#0084d1] transition-colors">{product.name}</h3>
        <p className="text-gray-400 text-sm font-medium">{product.category}</p>
        <div className="flex items-center gap-2 mt-1">
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">${product.oldPrice.toFixed(2)}</span>
          )}
          <span className={`font-bold ${isOutOfStock ? 'text-gray-400' : 'text-gray-800'}`}>${product.price.toFixed(2)}</span>
        </div>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4, 5].map(star => (
            <svg 
              key={star}
              className={`w-3 h-3 ${star <= product.rating ? 'text-gray-400' : 'text-gray-200'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
