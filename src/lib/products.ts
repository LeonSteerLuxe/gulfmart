export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  categorySlug: string
  supplier: string
  rating: number
  reviews: number
  stock: number
  features?: string[]
  specifications?: Record<string, string>
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  count: number
  description: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    count: 156,
    description: 'Latest gadgets, phones, laptops, and accessories from UAE',
  },
  {
    id: '2',
    name: 'Tools & Hardware',
    slug: 'tools',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=300&fit=crop',
    count: 89,
    description: 'Professional tools and hardware supplies',
  },
  {
    id: '3',
    name: 'Auto Parts',
    slug: 'auto',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
    count: 124,
    description: 'Quality auto parts and accessories',
  },
  {
    id: '4',
    name: 'Home & Garden',
    slug: 'home',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    count: 203,
    description: 'Everything for your home and garden',
  },
  {
    id: '5',
    name: 'Industrial',
    slug: 'industrial',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop',
    count: 67,
    description: 'Industrial equipment and supplies',
  },
  {
    id: '6',
    name: 'Office Supplies',
    slug: 'office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    count: 145,
    description: 'Office essentials and furniture',
  },
  {
    id: '7',
    name: 'Sports & Fitness',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop',
    count: 78,
    description: 'Sports equipment and fitness gear',
  },
  {
    id: '8',
    name: 'Health & Safety',
    slug: 'health',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
    count: 92,
    description: 'Health products and safety equipment',
  },
]

export const products: Product[] = [
  // Electronics
  {
    id: 'e1',
    name: 'iPhone 15 Pro Max 256GB',
    description: 'Latest Apple flagship with titanium design, A17 Pro chip, and advanced camera system.',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop',
    category: 'Electronics',
    categorySlug: 'electronics',
    supplier: 'TechWorld Dubai',
    rating: 4.9,
    reviews: 234,
    stock: 15,
    features: ['A17 Pro chip', '48MP camera', 'Titanium design', 'USB-C'],
  },
  {
    id: 'e2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android flagship with S Pen, 200MP camera, and Galaxy AI features.',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop',
    category: 'Electronics',
    categorySlug: 'electronics',
    supplier: 'Mobile Zone UAE',
    rating: 4.8,
    reviews: 189,
    stock: 22,
    features: ['200MP camera', 'S Pen included', 'Galaxy AI', 'Titanium frame'],
  },
  {
    id: 'e3',
    name: 'MacBook Pro 14" M3 Pro',
    description: 'Powerful laptop for professionals with M3 Pro chip and stunning Liquid Retina XDR display.',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop',
    category: 'Electronics',
    categorySlug: 'electronics',
    supplier: 'Apple Premium UAE',
    rating: 4.9,
    reviews: 156,
    stock: 8,
    features: ['M3 Pro chip', '18GB RAM', '512GB SSD', '18hr battery'],
  },
  {
    id: 'e4',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling wireless headphones with exceptional sound quality.',
    price: 349,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop',
    category: 'Electronics',
    categorySlug: 'electronics',
    supplier: 'AudioTech Dubai',
    rating: 4.8,
    reviews: 312,
    stock: 45,
    features: ['30hr battery', 'ANC', 'Multipoint', 'LDAC'],
  },
  {
    id: 'e5',
    name: 'iPad Pro 12.9" M2 WiFi',
    description: 'The ultimate iPad experience with M2 chip and stunning XDR display.',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop',
    category: 'Electronics',
    categorySlug: 'electronics',
    supplier: 'TechWorld Dubai',
    rating: 4.9,
    reviews: 178,
    stock: 12,
    features: ['M2 chip', 'XDR display', 'Face ID', 'USB-C'],
  },
  
  // Tools & Hardware
  {
    id: 't1',
    name: 'DeWalt 20V MAX Drill Kit',
    description: 'Professional cordless drill/driver with brushless motor and 2 batteries.',
    price: 189,
    originalPrice: 229,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=600&fit=crop',
    category: 'Tools & Hardware',
    categorySlug: 'tools',
    supplier: 'ToolMaster UAE',
    rating: 4.7,
    reviews: 89,
    stock: 34,
    features: ['Brushless motor', '2 batteries', 'LED light', 'Belt clip'],
  },
  {
    id: 't2',
    name: 'Bosch Professional Angle Grinder',
    description: '125mm angle grinder with powerful 1400W motor for heavy-duty applications.',
    price: 145,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=600&fit=crop',
    category: 'Tools & Hardware',
    categorySlug: 'tools',
    supplier: 'ToolMaster UAE',
    rating: 4.6,
    reviews: 67,
    stock: 28,
    features: ['1400W motor', '11000 RPM', 'Anti-vibration', 'Soft start'],
  },
  {
    id: 't3',
    name: 'Stanley 150-Piece Tool Set',
    description: 'Comprehensive tool set with sockets, wrenches, and screwdrivers in carry case.',
    price: 249,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=600&fit=crop',
    category: 'Tools & Hardware',
    categorySlug: 'tools',
    supplier: 'Hardware Hub Dubai',
    rating: 4.8,
    reviews: 134,
    stock: 19,
    features: ['150 pieces', 'Chrome vanadium', 'Carry case', 'Lifetime warranty'],
  },

  // Auto Parts
  {
    id: 'a1',
    name: 'Bosch Car Battery 12V 74Ah',
    description: 'High-performance maintenance-free car battery with excellent cold start capability.',
    price: 159,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=600&fit=crop',
    category: 'Auto Parts',
    categorySlug: 'auto',
    supplier: 'AutoZone UAE',
    rating: 4.7,
    reviews: 98,
    stock: 42,
    features: ['74Ah capacity', 'Maintenance-free', '2yr warranty', 'Quick start'],
  },
  {
    id: 'a2',
    name: 'Michelin Pilot Sport 4S Tires',
    description: 'Premium summer tires with exceptional grip and handling. Set of 4.',
    price: 899,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    category: 'Auto Parts',
    categorySlug: 'auto',
    supplier: 'Tire World Dubai',
    rating: 4.9,
    reviews: 76,
    stock: 8,
    features: ['Set of 4', 'AA rated', 'Run-flat', '5yr warranty'],
  },

  // Home & Garden
  {
    id: 'h1',
    name: 'Dyson V15 Detect Vacuum',
    description: 'Intelligent cordless vacuum with laser dust detection and LCD screen.',
    price: 749,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=600&fit=crop',
    category: 'Home & Garden',
    categorySlug: 'home',
    supplier: 'Home Solutions UAE',
    rating: 4.8,
    reviews: 167,
    stock: 15,
    features: ['Laser detect', 'LCD screen', '60min runtime', 'HEPA filter'],
  },
  {
    id: 'h2',
    name: 'Philips Air Purifier AC2887',
    description: 'Smart air purifier with real-time air quality feedback and app control.',
    price: 399,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop',
    category: 'Home & Garden',
    categorySlug: 'home',
    supplier: 'Home Solutions UAE',
    rating: 4.7,
    reviews: 89,
    stock: 23,
    features: ['HEPA filter', 'App control', 'Auto mode', 'Sleep mode'],
  },
  {
    id: 'h3',
    name: 'Nespresso Vertuo Plus',
    description: 'Premium coffee machine with centrifusion technology for perfect crema.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&h=600&fit=crop',
    category: 'Home & Garden',
    categorySlug: 'home',
    supplier: 'Kitchen Pro Dubai',
    rating: 4.6,
    reviews: 234,
    stock: 31,
    features: ['Centrifusion', '5 cup sizes', 'Auto off', '12 capsules included'],
  },

  // Office Supplies
  {
    id: 'o1',
    name: 'Herman Miller Aeron Chair',
    description: 'Iconic ergonomic office chair with PostureFit SL and adjustable arms.',
    price: 1395,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&h=600&fit=crop',
    category: 'Office Supplies',
    categorySlug: 'office',
    supplier: 'Office Elite UAE',
    rating: 4.9,
    reviews: 56,
    stock: 6,
    features: ['PostureFit SL', '12yr warranty', 'Size B', 'Graphite'],
  },
  {
    id: 'o2',
    name: 'LG UltraWide 34" Monitor',
    description: 'Curved ultrawide monitor perfect for productivity and multitasking.',
    price: 449,
    originalPrice: 549,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop',
    category: 'Office Supplies',
    categorySlug: 'office',
    supplier: 'TechWorld Dubai',
    rating: 4.7,
    reviews: 123,
    stock: 14,
    features: ['3440x1440', 'USB-C', 'HDR10', '75Hz'],
  },

  // Sports & Fitness
  {
    id: 's1',
    name: 'Peloton Bike+',
    description: 'Premium indoor cycling bike with rotating HD touchscreen and auto-resistance.',
    price: 2495,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop',
    category: 'Sports & Fitness',
    categorySlug: 'sports',
    supplier: 'FitLife UAE',
    rating: 4.8,
    reviews: 34,
    stock: 4,
    features: ['24" rotating screen', 'Auto-resistance', 'Apple GymKit', 'Premium sound'],
  },
  {
    id: 's2',
    name: 'Bowflex SelectTech 552 Dumbbells',
    description: 'Adjustable dumbbells that replace 15 sets of weights. Pair included.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop',
    category: 'Sports & Fitness',
    categorySlug: 'sports',
    supplier: 'FitLife UAE',
    rating: 4.7,
    reviews: 89,
    stock: 11,
    features: ['5-52.5 lbs each', 'Quick adjust', 'Space saving', 'Pair included'],
  },

  // Health & Safety
  {
    id: 'hs1',
    name: '3M Full Face Respirator 6800',
    description: 'Professional full face respirator for comprehensive protection.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&h=600&fit=crop',
    category: 'Health & Safety',
    categorySlug: 'health',
    supplier: 'Safety First UAE',
    rating: 4.8,
    reviews: 67,
    stock: 25,
    features: ['Full face', 'Bayonet connection', 'Wide field of view', 'NIOSH approved'],
  },
  {
    id: 'hs2',
    name: 'First Aid Kit Professional 300pc',
    description: 'Comprehensive first aid kit for home, office, or vehicle use.',
    price: 79,
    originalPrice: 99,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&h=600&fit=crop',
    category: 'Health & Safety',
    categorySlug: 'health',
    supplier: 'Safety First UAE',
    rating: 4.6,
    reviews: 145,
    stock: 56,
    features: ['300 pieces', 'Hard case', 'Wall mount', 'Guidebook included'],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter(p => p.categorySlug === slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  )
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.originalPrice && p.originalPrice > p.price).slice(0, 4)
}
