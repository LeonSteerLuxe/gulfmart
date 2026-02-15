'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { products, categories } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { ShoppingCart, Star, Filter, ChevronDown, X, Search } from 'lucide-react'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'

export default function ProductsPage() {
  const { addItem } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory)
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.reverse()
        break
      default:
        // featured - products with discount first
        result.sort((a, b) => {
          const aDiscount = a.originalPrice ? 1 : 0
          const bDiscount = b.originalPrice ? 1 : 0
          return bDiscount - aDiscount
        })
    }

    return result
  }, [selectedCategory, sortBy, searchQuery, priceRange])

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      supplier: product.supplier,
    })
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100">
      <Header />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">All Products</h1>
              <p className="text-zinc-400">
                {filteredProducts.length} products from verified UAE suppliers
              </p>
            </div>

            {/* Search & Sort */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 text-sm"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'fixed inset-0 z-50 bg-zinc-900 p-6 overflow-auto' : 'hidden'} md:block md:relative md:w-56 flex-shrink-0`}>
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'text-zinc-400 hover:bg-zinc-800'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat.slug
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'text-zinc-400 hover:bg-zinc-800'
                      }`}
                    >
                      {cat.name}
                      <span className="text-zinc-600 ml-1">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 text-sm"
                      placeholder="Min"
                    />
                    <span className="text-zinc-500">—</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 text-sm"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Apply Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="w-full md:hidden bg-emerald-500 text-white py-3 rounded-full font-medium mt-4"
              >
                Apply Filters
              </button>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-zinc-400 mb-2">No products found</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all')
                      setSearchQuery('')
                      setPriceRange([0, 3000])
                    }}
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-emerald-500/5"
                    >
                      <Link href={`/products/${product.id}`}>
                        <div className="aspect-square relative overflow-hidden bg-zinc-800">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {product.originalPrice && (
                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                            </span>
                          )}
                        </div>
                      </Link>

                      <div className="p-5">
                        <p className="text-xs text-zinc-500 mb-1">{product.supplier}</p>
                        <Link href={`/products/${product.id}`}>
                          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                            {product.name}
                          </h3>
                        </Link>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                          <span className="text-zinc-600 text-sm">({product.reviews})</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-emerald-400">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-zinc-500 line-through ml-2">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="p-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors"
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
