
import React from 'react';
import { View, Product } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface HomePageProps {
  onNavigate: (view: View, productId?: number) => void;
  onNavigateCategory: (cat: string) => void;
  onAddToCart: (p: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onNavigateCategory, onAddToCart }) => {
  const featuredProducts = PRODUCTS.slice(0, 10);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Raining Offers For Hot Summer!</h1>
            <p className="text-xl md:text-2xl font-bold mb-10">25% Off On All Products</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('store')}
                className="bg-white text-gray-900 font-bold px-8 py-4 hover:bg-black hover:text-white transition-all"
              >
                SHOP NOW
              </button>
              <button 
                onClick={() => onNavigate('store')}
                className="border-2 border-white text-white font-bold px-8 py-4 hover:bg-white hover:text-gray-900 transition-all"
              >
                FIND MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-8">
          {[1, 2, 3, 4, 5].map(i => (
            <img key={i} src={`https://picsum.photos/seed/mshlogo${i}/150/50?grayscale`} alt="partner" className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'New Arrival: Women Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600', cat: 'Women Jeans' },
            { title: 'Latest Eyewear For You', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600', cat: 'Women Accessories' },
            { title: "Let's MSH Suit Up!", image: 'https://images.unsplash.com/photo-1594932224828-b4b05a832fe2?auto=format&fit=crop&q=80&w=600', cat: 'Men Jackets' }
          ].map((cat, idx) => (
            <div key={idx} className="relative group overflow-hidden h-[450px] cursor-pointer" onClick={() => onNavigateCategory(cat.cat)}>
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h3 className="text-2xl font-black mb-4">{cat.title}</h3>
                <button className="bg-white text-gray-900 font-bold px-6 py-2 hover:bg-black hover:text-white transition-all">
                  CHECK OUT
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">Featured Products</h2>
          <div className="w-20 h-1 bg-[#0084d1] mx-auto mb-16" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {featuredProducts.map(p => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onNavigate={onNavigate as any} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="relative py-32 bg-cover bg-fixed bg-center text-white text-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-[#0084d1]/80" />
        <div className="container mx-auto px-4 relative z-10">
          <h4 className="text-lg font-bold mb-4">Limited Time Offer</h4>
          <h2 className="text-5xl font-black mb-8">Special Edition</h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg">Experience premium quality and style with MSH's special summer collection. Limited stock available.</p>
          <button onClick={() => onNavigate('store')} className="bg-white text-gray-900 font-bold px-10 py-4 hover:bg-black hover:text-white transition-all">
            BUY NOW
          </button>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: 'Worldwide Shipping', desc: 'Fast and reliable shipping to over 200 countries worldwide.' },
            { title: 'Best Quality', desc: 'We never compromise on the quality of our fabrics and materials.' },
            { title: 'Best Offers', desc: 'Get the best value for your money with our seasonal discounts.' },
            { title: 'Secure Payments', desc: 'Your security is our priority. 100% secure payment processing.' }
          ].map((f, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0084d1]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-4">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
