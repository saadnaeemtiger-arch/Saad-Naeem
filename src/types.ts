export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discountCode?: string;
  tag: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cakes' | 'Bread' | 'Donuts' | 'Pastries' | 'Interior' | 'Coffee' | 'Desserts' | 'Customers';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
