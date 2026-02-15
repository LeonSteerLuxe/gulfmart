# GulfMart Architecture Document

## 1. Site Architecture

### Pages & Hierarchy
```
/                       → Landing page (hero, features, categories)
├── /products           → Product catalog (grid, filters, search)
│   └── /products/[id]  → Product detail page
├── /categories         → All categories overview
│   └── /categories/[slug] → Category products
├── /cart               → Shopping cart
├── /checkout           → Checkout flow
│   └── /checkout/success → Order confirmation
├── /login              → Sign in
├── /signup             → Create account
├── /account            → User dashboard (orders, settings)
│   ├── /account/orders → Order history
│   └── /account/settings → Profile settings
├── /help               → FAQ & support
├── /about              → About GulfMart
├── /shipping           → Shipping info
├── /privacy            → Privacy policy
└── /terms              → Terms of service
```

### Navigation Structure
- **Header**: Logo, Search, Categories dropdown, Cart icon, User menu
- **Footer**: Links, Contact, Social, Newsletter
- **Mobile**: Bottom nav (Home, Categories, Cart, Account)

## 2. Component Breakdown

### Global Components
- `Header` - Fixed nav with search, cart count, user dropdown
- `Footer` - Links, newsletter signup, contact
- `MobileNav` - Bottom navigation for mobile
- `SearchBar` - Autocomplete product search
- `CartIcon` - Badge with item count

### Product Components
- `ProductCard` - Image, title, price, add to cart
- `ProductGrid` - Responsive grid layout
- `ProductFilters` - Category, price range, sort
- `ProductDetail` - Full product view with gallery
- `AddToCart` - Quantity selector + button

### Cart Components
- `CartDrawer` - Slide-out cart preview
- `CartItem` - Product row with quantity controls
- `CartSummary` - Subtotal, shipping, total

### Auth Components
- `LoginForm` - Email/password
- `SignupForm` - Registration
- `UserMenu` - Account dropdown

### Checkout Components
- `CheckoutForm` - Address, payment method
- `OrderSummary` - Final order review
- `PaymentOptions` - Card, COD, bank transfer

## 3. Data Flow & State Management

### Client State (React Context)
```typescript
// CartContext
{
  items: CartItem[]
  addItem(product, quantity)
  removeItem(productId)
  updateQuantity(productId, quantity)
  clearCart()
  total: number
  itemCount: number
}

// AuthContext
{
  user: User | null
  isLoading: boolean
  login(email, password)
  signup(data)
  logout()
}
```

### Server State (API Routes)
```
/api/products          → GET products (with filters)
/api/products/[id]     → GET single product
/api/categories        → GET categories
/api/cart              → GET/POST/PUT/DELETE cart
/api/checkout          → POST create order
/api/orders            → GET user orders
/api/auth/login        → POST login
/api/auth/signup       → POST register
/api/auth/logout       → POST logout
```

### Database (Supabase)
```
users
  - id, email, name, phone, address, created_at

products
  - id, name, description, price, images[], category_id, supplier_id, stock, created_at

categories
  - id, name, slug, image, parent_id

orders
  - id, user_id, items[], total, status, shipping_address, payment_method, created_at

suppliers
  - id, name, rating, location
```

## 4. Performance Optimization

### Images
- Next.js Image component with blur placeholder
- WebP format with fallback
- Responsive srcset for mobile/desktop
- Lazy loading below fold

### Code Splitting
- Dynamic imports for heavy components (checkout, account)
- Route-based code splitting (automatic with Next.js)
- Lazy load product filters

### Caching
- Static generation for category pages
- ISR (Incremental Static Regeneration) for products
- Client-side caching with SWR/React Query

### Core Web Vitals Targets
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## 5. SEO Structure

### Meta Tags
- Unique title/description per page
- Open Graph for social sharing
- Product structured data (JSON-LD)
- Canonical URLs

### URL Structure
- Clean, readable URLs
- Category slugs: `/categories/electronics`
- Product slugs: `/products/iphone-15-pro-max`

### Sitemap
- Auto-generated sitemap.xml
- Submit to Google Search Console

## 6. Tech Stack Summary

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **UI**: Shadcn/ui components
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Payments**: Stripe (cards) + COD
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics

---

*Generated: 2026-02-15*
