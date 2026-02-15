'use client'

import Link from 'next/link'
import { ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'
import { categories } from '@/lib/products'

export function Header() {
  const { toggleCart, itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="font-semibold text-lg tracking-tight text-zinc-900">GulfMart</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search 10,000+ products..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-11 pr-4 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>

        {/* Nav - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Categories
              <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {categoriesOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setCategoriesOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-20 py-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.slug}`}
                      onClick={() => setCategoriesOpen(false)}
                      className="block px-4 py-2.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-gray-50 transition-colors"
                    >
                      {cat.name}
                      <span className="text-zinc-400 ml-2">({cat.count})</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link href="/products" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            All Products
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search - Mobile */}
          <button className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-emerald-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </button>

          {/* Auth */}
          <Link
            href="/login"
            className="hidden sm:block text-sm text-zinc-600 hover:text-zinc-900 transition-colors px-3 py-2"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="hidden sm:block text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-11 pr-4 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Mobile Links */}
            <nav className="space-y-1">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-zinc-700 hover:text-zinc-900"
              >
                All Products
              </Link>
              <div className="py-2 text-xs text-zinc-400 uppercase tracking-wider">Categories</div>
              {categories.slice(0, 6).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-zinc-600 hover:text-zinc-900"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Auth */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 text-zinc-600 border border-gray-300 rounded-full"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 bg-emerald-500 text-white rounded-full font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
