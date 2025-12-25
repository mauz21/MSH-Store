
import React, { useState, useMemo, useEffect } from 'react';
import { View, Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

interface StorePageProps {
  initialFilter: string;
  initialSubFilter: string | null;
  onNavigate: (view: View, productId?: number) => void;
  onAddToCart: (p: Product) => void;
}

const StorePage: React.FC<StorePageProps> = ({ initialFilter, initialSubFilter, onNavigate, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState(initialFilter);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(initialSubFilter);
  const [priceRange, setPriceRange] = useState(500);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setActiveCategory(initialFilter);
    setActiveSubCategory(initialSubFilter);
  }, [initialFilter, initialSubFilter]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCategory === 'Everything' || p.category === activeCategory;
      const matchSub = !activeSubCategory || p.subCategory === activeSubCategory;
      const matchPrice = p.price <= priceRange;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSub && matchPrice && matchSearch;
    });
  }, [activeCategory, activeSubCategory, priceRange, searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 flex flex-col gap-12 order-2 lg:order-1">
          {/* Search */}
          <div className="flex bg-white border border-gray-200">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-3 focus:outline-none"
            />
            <button className="bg-[#0084d1] text-white p-3 px-5">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Filter by Price</h3>
            <input 
              type="range" 
              min="0" 
              max="500" 
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0084d1]"
            />
            <div className="flex justify-between items-center mt-4">
              <button className="bg-[#0084d1] text-white font-bold px-6 py-2 text-sm">FILTER</button>
              <span className="text-gray-500 font-bold text-sm">Price: $0 — ${priceRange}</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-4">
              <li 
                className={`flex justify-between cursor-pointer group ${activeCategory === 'Everything' ? 'text-[#0084d1]' : 'text-gray-600'}`}
                onClick={() => { setActiveCategory('Everything'); setActiveSubCategory(null); }}
              >
                <span className="group-hover:text-[#0084d1] transition-colors">Everything</span>
                <span className="text-gray-400">({PRODUCTS.length})</span>
              </li>
              {CATEGORIES.map(cat => (
                <li 
                  key={cat} 
                  className={`flex justify-between cursor-pointer group ${activeCategory === cat ? 'text-[#0084d1]' : 'text-gray-600'}`}
                  onClick={() => { setActiveCategory(cat); setActiveSubCategory(null); }}
                >
                  <span className="group-hover:text-[#0084d1] transition-colors">{cat}</span>
                  <span className="text-gray-400">({PRODUCTS.filter(p => p.category === cat).length})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-Filters (Dynamic based on category) */}
          {activeCategory !== 'Everything' && (
            <div>
              <h3 className="text-xl font-bold mb-6">Subcategories</h3>
              <ul className="space-y-4">
                <li 
                  className={`cursor-pointer group ${!activeSubCategory ? 'text-[#0084d1]' : 'text-gray-600'}`}
                  onClick={() => setActiveSubCategory(null)}
                >
                  All {activeCategory}
                </li>
                {Array.from(new Set(PRODUCTS.filter(p => p.category === activeCategory).map(p => p.subCategory))).filter(Boolean).map(sub => (
                  <li 
                    key={sub}
                    className={`cursor-pointer group ${activeSubCategory === sub ? 'text-[#0084d1]' : 'text-gray-600'}`}
                    onClick={() => setActiveSubCategory(sub as string)}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Best Sellers */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Best Sellers</h3>
            <div className="space-y-6">
              {PRODUCTS.slice(0, 5).map(p => (
                <div key={p.id} className="flex gap-4 cursor-pointer group" onClick={() => onNavigate('product', p.id)}>
                  <img src={p.image} className="w-16 h-16 object-cover" />
                  <div>
                    <h4 className="font-bold text-sm group-hover:text-[#0084d1] transition-colors leading-tight">{p.name}</h4>
                    <div className="flex gap-1 my-1">
                      {[1,2,3,4,5].map(s => <span key={s} className="text-[#0084d1] text-[10px]">★</span>)}
                    </div>
                    <p className="font-bold text-sm text-gray-700">${p.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow order-1 lg:order-2">
          <div className="bg-white p-8 mb-8 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">Home / {activeCategory} {activeSubCategory ? `/ ${activeSubCategory}` : ''}</p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Showing {filteredProducts.length} results</span>
              <select className="border border-gray-200 px-4 py-2 text-sm focus:outline-none">
                <option>Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by average rating</option>
                <option>Sort by latest</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white border">
               <p className="text-xl text-gray-400">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map(p => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onNavigate={onNavigate as any} 
                  onAddToCart={onAddToCart} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
