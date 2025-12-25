
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Anchor Bracelet",
    category: "Accessories",
    subCategory: "Women Accessories",
    price: 150.00,
    oldPrice: 180.00,
    image: "https://images.unsplash.com/photo-1573408302185-9111fb334149?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Elegant anchor bracelet made from premium stainless steel.",
    colors: ["#000", "#d4af37", "#c04000"],
    stockStatus: 'in-stock'
  },
  {
    id: 2,
    name: "Basic Gray Jeans",
    category: "Women",
    subCategory: "Women Jeans",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    description: "Classic slim-fit gray jeans for everyday style.",
    stockStatus: 'in-stock'
  },
  {
    id: 3,
    name: "Black Hoodie",
    category: "Men",
    subCategory: "Men Jackets",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Comfortable and warm black hoodie for urban looks.",
    stockStatus: 'out-of-stock'
  },
  {
    id: 4,
    name: "Black Leather Handbag",
    category: "Accessories",
    subCategory: "Women Accessories",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Versatile leather handbag with premium finish.",
    stockStatus: 'in-stock'
  },
  {
    id: 5,
    name: "Blue Denim Jeans",
    category: "Women",
    subCategory: "Women Jeans",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "High-waist blue denim jeans with a modern cut.",
    stockStatus: 'in-stock'
  },
  {
    id: 6,
    name: "Blue Denim Shorts",
    category: "Women",
    subCategory: "Women Jeans",
    price: 130.00,
    oldPrice: 150.00,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    isSale: true,
    description: "Sturdy blue denim shorts perfect for summer days.",
    stockStatus: 'in-stock'
  },
  {
    id: 7,
    name: "Blue Zip Hoodie",
    category: "Men",
    subCategory: "Men Jackets",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Sporty blue hoodie with zip-up design.",
    stockStatus: 'in-stock'
  },
  {
    id: 8,
    name: "Blue Cotton Tshirt",
    category: "Men",
    subCategory: "Men Shirts",
    price: 40.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Soft cotton blue t-shirt with classic fit.",
    colors: ["#00bcd4", "#ffeb3b", "#8bc34a", "#ff5722"],
    stockStatus: 'in-stock'
  },
  {
    id: 9,
    name: "Boho Bangle Bracelet",
    category: "Accessories",
    subCategory: "Women Accessories",
    price: 150.00,
    oldPrice: 170.00,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Handcrafted bohemian style bangle with turquoise details.",
    colors: ["#00bcd4", "#8bc34a", "#ff5722"],
    stockStatus: 'out-of-stock'
  },
  {
    id: 10,
    name: "Bright Gold Purse",
    category: "Accessories",
    subCategory: "Women Accessories",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fd113961?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Elegant gold evening purse with metallic chain.",
    stockStatus: 'in-stock'
  },
  {
    id: 11,
    name: "Bright Red Tote",
    category: "Accessories",
    subCategory: "Women Accessories",
    price: 100.00,
    oldPrice: 140.00,
    image: "https://images.unsplash.com/photo-1544816153-12ad5d714317?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Spacious red tote bag for the fashion-forward.",
    colors: ["#2196f3", "#ffc107", "#9c27b0", "#f44336"],
    stockStatus: 'in-stock'
  },
  {
    id: 12,
    name: "Buddha Bead Bracelet",
    category: "Accessories",
    subCategory: "Men Accessories",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=400",
    rating: 0,
    description: "Spiritual Buddha charm bracelet with natural stone beads.",
    stockStatus: 'in-stock'
  }
];

export const CATEGORIES = ["Accessories", "Men", "Women"];

export const SUB_CATEGORIES_MAP: Record<string, string> = {
  "Women Jeans": "Women",
  "Tops and Shirts": "Women",
  "Women Jackets": "Women",
  "Heels and Flats": "Women",
  "Women Accessories": "Accessories",
  "Men Jeans": "Men",
  "Men Shirts": "Men",
  "Men Shoes": "Men",
  "Men Accessories": "Accessories",
  "Men Jackets": "Men"
};

export const COLORS = {
  primary: "#0084d1",
  primaryHover: "#0073b6",
  textMain: "#1e1e1e",
  textGray: "#6e6e6e",
  borderLight: "#e2e8f0",
  bgLight: "#f8fafc"
};
