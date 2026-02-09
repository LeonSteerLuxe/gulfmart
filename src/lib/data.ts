// Product and Category data for GulfMart

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  deliveryDays: string;
  seller: string;
  sellerLocation: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Smartphones, laptops, tablets, and accessories',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    productCount: 3200,
  },
  {
    id: '2',
    name: 'Tools & Hardware',
    slug: 'tools-hardware',
    description: 'Power tools, hand tools, and construction equipment',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=300&fit=crop',
    productCount: 2500,
  },
  {
    id: '3',
    name: 'Auto Parts',
    slug: 'auto-parts',
    description: 'Car parts, accessories, and maintenance supplies',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
    productCount: 1800,
  },
  {
    id: '4',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Furniture, decor, and outdoor living',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    productCount: 2100,
  },
  {
    id: '5',
    name: 'Industrial',
    slug: 'industrial',
    description: 'Industrial equipment and supplies',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop',
    productCount: 950,
  },
  {
    id: '6',
    name: 'Office Supplies',
    slug: 'office-supplies',
    description: 'Office furniture, stationery, and equipment',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    productCount: 1400,
  },
  {
    id: '7',
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    description: 'Sports equipment, gym gear, and outdoor activities',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop',
    productCount: 800,
  },
  {
    id: '8',
    name: 'Health & Safety',
    slug: 'health-safety',
    description: 'Medical supplies, PPE, and safety equipment',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
    productCount: 600,
  },
];

export const products: Product[] = [
  // Electronics
  {
    id: 'elec-001',
    name: 'iPhone 15 Pro Max 256GB',
    description: 'Latest Apple flagship with A17 Pro chip, titanium design, and advanced camera system. Includes UAE warranty.',
    price: 189,
    originalPrice: 219,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'TechZone Dubai',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'elec-002',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with S Pen, 200MP camera, and AI features. Official Samsung UAE.',
    price: 175,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.8,
    reviews: 189,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Mobile World',
    sellerLocation: 'Abu Dhabi, UAE',
  },
  {
    id: 'elec-003',
    name: 'MacBook Air M3 13"',
    description: 'Ultra-thin laptop with Apple M3 chip, 18-hour battery life, and stunning Liquid Retina display.',
    price: 399,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    deliveryDays: '3-4',
    seller: 'Apple Premium Dubai',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'elec-004',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise cancellation with 30-hour battery life and premium sound quality.',
    price: 89,
    originalPrice: 109,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.8,
    reviews: 312,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Audio Hub',
    sellerLocation: 'Sharjah, UAE',
  },
  {
    id: 'elec-005',
    name: 'iPad Pro 12.9" M2',
    description: 'Professional tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.',
    price: 329,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.9,
    reviews: 98,
    inStock: true,
    deliveryDays: '3-4',
    seller: 'TechZone Dubai',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'elec-006',
    name: 'DJI Mini 4 Pro Drone',
    description: 'Compact drone with 4K/60fps video, omnidirectional obstacle sensing, and 34-min flight time.',
    price: 279,
    originalPrice: 319,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.7,
    reviews: 67,
    inStock: true,
    deliveryDays: '3-4',
    seller: 'Drone World UAE',
    sellerLocation: 'Dubai, UAE',
  },
  // Tools & Hardware
  {
    id: 'tool-001',
    name: 'DeWalt 20V MAX Drill Kit',
    description: 'Professional cordless drill with 2 batteries, charger, and carrying case. Perfect for heavy-duty work.',
    price: 45,
    originalPrice: 59,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop',
    category: 'tools-hardware',
    rating: 4.8,
    reviews: 445,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Tool Master Dubai',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'tool-002',
    name: 'Bosch Professional Angle Grinder',
    description: '125mm angle grinder with 1400W motor and anti-vibration handle. Ideal for cutting and grinding.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop',
    category: 'tools-hardware',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Hardware Plus',
    sellerLocation: 'Ajman, UAE',
  },
  {
    id: 'tool-003',
    name: 'Stanley 65-Piece Tool Set',
    description: 'Complete home tool kit with wrenches, screwdrivers, pliers, and more in a sturdy case.',
    price: 29,
    originalPrice: 39,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=400&fit=crop',
    category: 'tools-hardware',
    rating: 4.6,
    reviews: 567,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Tool Master Dubai',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'tool-004',
    name: 'Makita Circular Saw 7-1/4"',
    description: 'Powerful circular saw with 15-amp motor and LED light for precise cuts.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=400&fit=crop',
    category: 'tools-hardware',
    rating: 4.8,
    reviews: 123,
    inStock: true,
    deliveryDays: '3-4',
    seller: 'Pro Tools UAE',
    sellerLocation: 'Dubai, UAE',
  },
  // Auto Parts
  {
    id: 'auto-001',
    name: 'Michelin Pilot Sport 4S Tires',
    description: 'Premium summer tires with exceptional grip and handling. Set of 4, size 225/45R17.',
    price: 320,
    originalPrice: 380,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'auto-parts',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    deliveryDays: '3-4',
    seller: 'Tire Kingdom UAE',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'auto-002',
    name: 'Bosch Car Battery 12V 74Ah',
    description: 'High-performance car battery with 3-year warranty. Fits most sedans and SUVs.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&h=400&fit=crop',
    category: 'auto-parts',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Auto Parts World',
    sellerLocation: 'Sharjah, UAE',
  },
  {
    id: 'auto-003',
    name: 'K&N High-Flow Air Filter',
    description: 'Washable and reusable air filter for improved engine performance and fuel efficiency.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop',
    category: 'auto-parts',
    rating: 4.8,
    reviews: 456,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Performance Auto',
    sellerLocation: 'Dubai, UAE',
  },
  // Home & Garden
  {
    id: 'home-001',
    name: 'IKEA MALM Bed Frame Queen',
    description: 'Modern bed frame with clean lines and hidden storage. Easy assembly, white finish.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop',
    category: 'home-garden',
    rating: 4.5,
    reviews: 234,
    inStock: true,
    deliveryDays: '4-5',
    seller: 'Home Furnish UAE',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'home-002',
    name: 'Dyson V15 Detect Vacuum',
    description: 'Cordless vacuum with laser dust detection and LCD screen showing particle counts.',
    price: 249,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop',
    category: 'home-garden',
    rating: 4.9,
    reviews: 167,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Home Appliance Pro',
    sellerLocation: 'Abu Dhabi, UAE',
  },
  {
    id: 'home-003',
    name: 'Weber Spirit II Gas Grill',
    description: 'Premium gas grill with 3 burners, side tables, and porcelain-enameled lid.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop',
    category: 'home-garden',
    rating: 4.8,
    reviews: 98,
    inStock: true,
    deliveryDays: '4-5',
    seller: 'Outdoor Living UAE',
    sellerLocation: 'Dubai, UAE',
  },
  // Office Supplies
  {
    id: 'office-001',
    name: 'Herman Miller Aeron Chair',
    description: 'Ergonomic office chair with PostureFit SL support and breathable mesh. Size B.',
    price: 489,
    originalPrice: 549,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop',
    category: 'office-supplies',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    deliveryDays: '3-4',
    seller: 'Office Pro Dubai',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'office-002',
    name: 'LG 27" 4K Monitor',
    description: 'Ultra HD IPS monitor with USB-C connectivity and HDR10 support.',
    price: 159,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
    category: 'office-supplies',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'TechZone Dubai',
    sellerLocation: 'Dubai, UAE',
  },
  // Sports & Fitness
  {
    id: 'sport-001',
    name: 'NordicTrack Commercial Treadmill',
    description: 'Premium treadmill with 12% incline, 22" touchscreen, and iFIT subscription.',
    price: 899,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=400&fit=crop',
    category: 'sports-fitness',
    rating: 4.8,
    reviews: 89,
    inStock: true,
    deliveryDays: '5-7',
    seller: 'Fitness World UAE',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'sport-002',
    name: 'Bowflex SelectTech Dumbbells',
    description: 'Adjustable dumbbells from 5-52.5 lbs each. Space-saving design, smooth adjustment.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop',
    category: 'sports-fitness',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    deliveryDays: '3-4',
    seller: 'Fitness World UAE',
    sellerLocation: 'Dubai, UAE',
  },
  // Health & Safety
  {
    id: 'health-001',
    name: 'Omron Blood Pressure Monitor',
    description: 'Clinical-grade blood pressure monitor with Bluetooth connectivity and app tracking.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop',
    category: 'health-safety',
    rating: 4.8,
    reviews: 567,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Medical Supplies UAE',
    sellerLocation: 'Dubai, UAE',
  },
  {
    id: 'health-002',
    name: '3M N95 Respirator Masks (50-pack)',
    description: 'NIOSH-approved N95 masks for dust, particles, and airborne contaminants.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=400&h=400&fit=crop',
    category: 'health-safety',
    rating: 4.7,
    reviews: 890,
    inStock: true,
    deliveryDays: '2-3',
    seller: 'Safety First UAE',
    sellerLocation: 'Sharjah, UAE',
  },
  // Industrial
  {
    id: 'indus-001',
    name: 'Hydraulic Pallet Jack 5500 lbs',
    description: 'Heavy-duty pallet jack with polyurethane wheels and ergonomic handle.',
    price: 289,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop',
    category: 'industrial',
    rating: 4.6,
    reviews: 78,
    inStock: true,
    deliveryDays: '5-7',
    seller: 'Industrial Supply Co',
    sellerLocation: 'Jebel Ali, UAE',
  },
  {
    id: 'indus-002',
    name: 'Industrial Safety Cabinet',
    description: 'Flammable storage cabinet meeting OSHA requirements. 45-gallon capacity.',
    price: 349,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=400&fit=crop',
    category: 'industrial',
    rating: 4.8,
    reviews: 45,
    inStock: true,
    deliveryDays: '5-7',
    seller: 'Safety First UAE',
    sellerLocation: 'Dubai, UAE',
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.originalPrice).slice(0, 6);
}
