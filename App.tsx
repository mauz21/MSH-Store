
import React, { useState, useEffect, useMemo } from 'react';
import { View, Product, CartItem } from './types';
import { PRODUCTS, COLORS, SUB_CATEGORIES_MAP } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';
import CartDrawer from './components/CartDrawer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [storeFilter, setStoreFilter] = useState<string>('Everything');
  const [storeSubFilter, setStoreSubFilter] = useState<string | null>(null);

  // Navigation handlers
  const navigateTo = (view: View, productId?: number) => {
    setCurrentView(view);
    if (productId) setSelectedProductId(productId);
    window.scrollTo(0, 0);
  };

  const navigateToCategory = (cat: string) => {
    if (SUB_CATEGORIES_MAP[cat]) {
      setStoreFilter(SUB_CATEGORIES_MAP[cat]);
      setStoreSubFilter(cat);
    } else {
      setStoreFilter(cat);
      setStoreSubFilter(null);
    }
    navigateTo('store');
  };

  const addToCart = (product: Product) => {
    if (product.stockStatus === 'out-of-stock') return;
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={navigateTo} onNavigateCategory={navigateToCategory} onAddToCart={addToCart} />;
      case 'store':
        return <StorePage 
                  initialFilter={storeFilter} 
                  initialSubFilter={storeSubFilter}
                  onNavigate={navigateTo} 
                  onAddToCart={addToCart} 
               />;
      case 'product':
        const prod = PRODUCTS.find(p => p.id === selectedProductId);
        return prod ? <ProductDetailsPage product={prod} onAddToCart={addToCart} onNavigate={navigateTo} /> : null;
      case 'cart':
        return <CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} onNavigate={navigateTo} total={cartTotal} />;
      case 'checkout':
        return <CheckoutPage total={cartTotal} onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'account':
        return <AccountPage />;
      default:
        return <HomePage onNavigate={navigateTo} onNavigateCategory={navigateToCategory} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header 
        cartCount={cartCount} 
        cartTotal={cartTotal} 
        onNavigate={(v) => {
          if (['Women', 'Men', 'Accessories', 'store'].includes(v as string)) {
            navigateToCategory(v === 'store' ? 'Everything' : v);
          } else {
            navigateTo(v as View);
          }
        }} 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="flex-grow pt-20">
        {renderView()}
      </main>

      <Footer onNavigate={navigateTo} onNavigateCategory={navigateToCategory} />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        total={cartTotal}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onNavigate={navigateTo}
      />
    </div>
  );
};

export default App;
