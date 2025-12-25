
export interface Product {
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  description: string;
  colors?: string[];
  isSale?: boolean;
  stockStatus: 'in-stock' | 'out-of-stock';
}

export interface CartItem extends Product {
  quantity: number;
}

export type View = 'home' | 'store' | 'product' | 'cart' | 'checkout' | 'about' | 'contact' | 'account';

export interface AppState {
  currentView: View;
  selectedProductId?: number;
}
