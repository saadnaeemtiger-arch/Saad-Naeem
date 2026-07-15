import { Product, SpecialOffer, Testimonial, FAQItem, GalleryItem } from './types';

export const CATEGORIES = [
  'All',
  'Fresh Bread',
  'Birthday Cakes',
  'Wedding Cakes',
  'Cupcakes',
  'Croissants',
  'Donuts',
  'Cookies',
  'Muffins',
  'Brownies',
  'Pastries',
  'Sandwiches',
  'Coffee',
  'Tea',
  'Fresh Juices',
  'Custom Cakes'
];

export const PRODUCTS: Product[] = [
  // 1. Fresh Bread
  {
    id: 'bread-1',
    name: 'Artisanal Sourdough Loaf',
    category: 'Fresh Bread',
    description: '36-hour slow fermentation sourdough with a dark, blistered crust and an incredibly airy, sour interior crumb.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop&q=80',
    isPopular: true
  },
  {
    id: 'bread-2',
    name: 'French Baguette Traditiòn',
    category: 'Fresh Bread',
    description: 'Authentic Parisian crusty baguette, hand-shaped and baked on a stone deck with local organic flour.',
    price: 3.80,
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'bread-3',
    name: 'Rustic Ciabatta',
    category: 'Fresh Bread',
    description: 'Italian style slipper bread with high hydration, rich olive oil flavor, and wide, glossy cell structure.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80'
  },

  // 2. Birthday Cakes
  {
    id: 'b-cake-1',
    name: 'Chocolate Ganache Royale',
    category: 'Birthday Cakes',
    description: 'Layers of moist dark chocolate cake filled with Belgian chocolate fudge, glazed in glossy dark ganache.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80',
    isPopular: true
  },
  {
    id: 'b-cake-2',
    name: 'Red Velvet Dream Cake',
    category: 'Birthday Cakes',
    description: 'Rich and velvety red cocoa sponge layered with sweet, tangy Madagascan vanilla bean cream cheese frosting.',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=600&auto=format&fit=crop&q=80'
  },

  // 3. Wedding Cakes
  {
    id: 'w-cake-1',
    name: 'Golden Rose Cascade Cake',
    category: 'Wedding Cakes',
    description: 'Four elegant tiers of vanilla genoise, customized fruit coulis, adorned with gold leaf and handcrafted sugar roses.',
    price: 350.00,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'w-cake-2',
    name: 'Modern Minimalist Lace Cake',
    category: 'Wedding Cakes',
    description: 'Stunning white fondant tiering featuring exquisite hand-piped royal icing lace and organic jasmine petals.',
    price: 290.00,
    image: 'https://images.unsplash.com/photo-1525257904982-ee70a01562b4?w=600&auto=format&fit=crop&q=80'
  },

  // 4. Cupcakes
  {
    id: 'cupcake-1',
    name: 'Salted Caramel Drizzle Cupcake',
    category: 'Cupcakes',
    description: 'Fluffy caramel sponge topped with whipped salted caramel buttercream, gold sprinkles, and amber caramel pool.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80',
    isPopular: true
  },
  {
    id: 'cupcake-2',
    name: 'Raspberry Vanilla Rose Cupcake',
    category: 'Cupcakes',
    description: 'Vanilla bean cupcake injected with wild raspberry filling, topped with delicate rosewater frosting.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&auto=format&fit=crop&q=80'
  },

  // 5. Croissants
  {
    id: 'croissant-1',
    name: 'Gourmet Butter Croissant',
    category: 'Croissants',
    description: 'Super-flaky, golden-brown puff pastry rolled with premium high-fat Normandy butter. 81 precise layers.',
    price: 3.20,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80',
    isPopular: true
  },
  {
    id: 'croissant-2',
    name: 'Almond Frangipane Croissant',
    category: 'Croissants',
    description: 'Double-baked croissant filled with rich almond cream, topped with sliced almonds and snowy powdered sugar.',
    price: 4.20,
    image: 'https://images.unsplash.com/photo-1623334500530-eb37877f0a99?w=600&auto=format&fit=crop&q=80'
  },

  // 6. Donuts
  {
    id: 'donut-1',
    name: 'Glazed Maple Pecan Donut',
    category: 'Donuts',
    description: 'Soft yeast-raised donut glazed in pure Canadian maple syrup, topped with toasted roasted Georgia pecan bits.',
    price: 2.95,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'donut-2',
    name: 'Double Raspberry Velvet Donut',
    category: 'Donuts',
    description: 'Vibrant raspberry juice glaze with a silky tart raspberry coulis filling and dehydrated berry flakes.',
    price: 3.10,
    image: 'https://images.unsplash.com/photo-1533930027561-432594a59af3?w=600&auto=format&fit=crop&q=80'
  },

  // 7. Cookies
  {
    id: 'cookie-1',
    name: 'Fleur de Sel Chocolate Chunk',
    category: 'Cookies',
    description: 'Soft-baked brown butter cookie loaded with 70% dark Belgian chocolate and sprinkled with Maldon sea salt.',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80',
    isPopular: true
  },

  // 8. Muffins
  {
    id: 'muffin-1',
    name: 'Wild Blueberry Streusel Muffin',
    category: 'Muffins',
    description: 'Bursting with organic wild blueberries, crowned with a crispy butter cinnamon-streusel topping.',
    price: 3.20,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&auto=format&fit=crop&q=80'
  },

  // 9. Brownies
  {
    id: 'brownie-1',
    name: 'Salted Caramel Fudge Brownie',
    category: 'Brownies',
    description: 'Intensely rich, fudgy espresso-infused brownie ribboned with warm liquid gold caramel and flaky salt.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80'
  },

  // 10. Pastries
  {
    id: 'pastry-1',
    name: 'Glazed Fresh Strawberry Tart',
    category: 'Pastries',
    description: 'Sweet shortcrust pastry shell painted with white chocolate, filled with velvet pastry cream and fresh organic glazed strawberries.',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pastry-2',
    name: 'Madagascar Vanilla Mille-Feuille',
    category: 'Pastries',
    description: 'Three layers of caramelized, crispy puff pastry sand-wiched with velvety vanilla bean diplomat cream.',
    price: 5.95,
    image: 'https://images.unsplash.com/photo-1551443874-32537a85e425?w=600&auto=format&fit=crop&q=80'
  },

  // 11. Sandwiches
  {
    id: 'sandwich-1',
    name: 'Caprese Pesto Focaccia',
    category: 'Sandwiches',
    description: 'Fresh basil pesto, buffalo mozzarella, vine-ripened tomatoes, and wild arugula inside hand-baked sea salt focaccia.',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sandwich-2',
    name: 'Smoked Turkey & Creamy Brie',
    category: 'Sandwiches',
    description: 'Thinly sliced premium smoked turkey breast, double-cream brie, crisp apple slices, and sweet fig spread on rustic bread.',
    price: 9.20,
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&auto=format&fit=crop&q=80',
    isPopular: true
  },

  // 12. Coffee
  {
    id: 'coffee-1',
    name: 'Velvet Flat White',
    category: 'Coffee',
    description: 'Double shot of single-origin Ethiopian espresso combined with velvety microfoamed organic whole milk.',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'coffee-2',
    name: 'Bourbon Vanilla Latte',
    category: 'Coffee',
    description: 'Rich espresso with home-brewed bourbon vanilla syrup, steamed silky milk, and a dusting of cinnamon seed.',
    price: 4.95,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?w=600&auto=format&fit=crop&q=80'
  },

  // 13. Tea
  {
    id: 'tea-1',
    name: 'Lavender Earl Grey Infusion',
    category: 'Tea',
    description: 'Premium bergamot Earl Grey tea infused with organic French lavender buds, topped with frothed milk spray.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80'
  },

  // 14. Fresh Juices
  {
    id: 'juice-1',
    name: 'Golden Glow Nectar',
    category: 'Fresh Juices',
    description: 'Cold-pressed organic oranges, crisp carrots, fresh yellow apples, ginger root, and turmeric for a pure glowing immunity boost.',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80'
  },

  // 15. Custom Cakes
  {
    id: 'custom-1',
    name: 'Bespoke Hand-Painted Floral Cake',
    category: 'Custom Cakes',
    description: 'Fully personalized flavors of your choosing, adorned with watercolor hand-painted buttercream floral scenery.',
    price: 150.00,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&auto=format&fit=crop&q=80',
    isPopular: true
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Buy 2 Cakes Get 1 Free',
    description: 'Order any two artisan cakes and receive a complimentary third cake of equal value! Excludes wedding tiers.',
    discountCode: 'B2GET1CAKE',
    tag: 'Limited Festive Offer',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'offer-2',
    title: '15% Off Birthday Cakes',
    description: 'Make your celebration unforgettable. Get 15% off any chocolate ganache or red velvet cake this month.',
    discountCode: 'BIRTHDAY15',
    tag: 'Celebration Deal',
    image: 'https://images.unsplash.com/photo-1464349110291-2f6ed9b487b5?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'offer-3',
    title: 'Morning Breakfast Combo',
    description: 'Treat yourself to any butter or almond croissant paired with a fresh double espresso for only $5.99!',
    discountCode: 'RISEANDSHINE',
    tag: 'Daily 7AM - 10AM',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'offer-4',
    title: 'Fresh Bread Every Morning',
    description: 'Subscribe to our Weekly Bread Box. Get 3 warm artisanal loaves delivered straight to your door at 15% discount.',
    discountCode: 'BREADBOXWEEKLY',
    tag: 'Community Box',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Belgian Chocolate Celebration Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'gal-2',
    title: 'Crispy Warm French Sourdough',
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'gal-3',
    title: 'Glazed Chocolate Fudge Donut Hoop',
    category: 'Donuts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'gal-4',
    title: 'Elegant Madagascar Vanilla Tart',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'gal-5',
    title: 'Our Warm Cozy Bakery Interior',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'gal-6',
    title: 'Double Latte Art Crafted with Love',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'gal-7',
    title: 'Sweet Glazed Berry Delights',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551443874-32537a85e425?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'gal-8',
    title: 'Smiling Family with Birthday Cake',
    category: 'Customers',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Sophia Laurent',
    role: 'Local Food Critic & Connoisseur',
    text: 'The cakes are absolutely delicious and beautifully designed! Every layer has a complex, velvet texture. I ordered the Golden Rose Cascade for an event and it stole the show completely.',
    rating: 5,
    date: 'June 28, 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-2',
    name: 'Julian Vance',
    role: 'Regular Neighborhood Patron',
    text: 'Best bakery in town. Everything is always fresh and hot. The butter croissants have a golden shatter-crisp layer that rivals the best boulangeries of Paris. Highly recommend!',
    rating: 5,
    date: 'July 2, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-3',
    name: 'Evelyn Cartwright',
    role: 'Event Co-ordinator',
    text: 'Excellent customer service and amazing pastries. The team at TOO Bakery customized 150 cupcakes with specific floral themes in less than 48 hours notice. They were soft and extremely tasty.',
    rating: 5,
    date: 'June 15, 2026',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&auto=format&fit=crop&q=80'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you make custom cakes?',
    answer: 'Absolutely! Custom cakes are our specialty. Whether it is a wedding, birthday, anniversary, or corporate event, our master baker designs bespoke cakes tailored to your theme, flavors, and visual requests. Simply fill out our custom cake form or call us.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer delivery?',
    answer: 'Yes, we offer fast local delivery within a 15-mile radius. For large events, wedding cakes, or high-value custom orders, we use dedicated temperature-controlled vans to ensure your cakes arrive in absolutely flawless condition.'
  },
  {
    id: 'faq-3',
    question: 'Can I order online?',
    answer: 'Yes! You can browse our product catalogue online, select items to add to your order cart, and place an order directly. You can choose either to pay and collect at our store or trigger an instant WhatsApp order to finalize delivery details.'
  },
  {
    id: 'faq-4',
    question: 'How far in advance should I order a cake?',
    answer: 'For standard cakes, we recommend placing orders 48 hours in advance. For bespoke/custom birthday cakes, we prefer 4–7 days notice, and for wedding tiers, we advise booking 2–4 weeks in advance to guarantee slot availability.'
  }
];
