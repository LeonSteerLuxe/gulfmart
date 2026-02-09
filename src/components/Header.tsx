'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { getCartCount } from '@/lib/cart';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };
    
    updateCartCount();
    window.addEventListener('cart-updated', updateCartCount);
    return () => window.removeEventListener('cart-updated', updateCartCount);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">GulfMart</span>
        </Link>

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
            />
          </div>
        </form>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/categories" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            Categories
          </Link>
          <Link href="/products" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            Products
          </Link>
          <Link href="/help" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            Help
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link 
            href="/cart" 
            className="relative p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Link href="/login" className="hidden sm:block text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            Sign in
          </Link>
          <Link 
            href="/signup" 
            className="hidden sm:block text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors"
          >
            Get started
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 p-4">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-zinc-200 focus:border-emerald-500 outline-none"
              />
            </div>
          </form>
          <nav className="flex flex-col gap-3">
            <Link href="/categories" className="text-zinc-600 hover:text-zinc-900 py-2">Categories</Link>
            <Link href="/products" className="text-zinc-600 hover:text-zinc-900 py-2">Products</Link>
            <Link href="/help" className="text-zinc-600 hover:text-zinc-900 py-2">Help</Link>
            <Link href="/login" className="text-zinc-600 hover:text-zinc-900 py-2">Sign in</Link>
            <Link href="/signup" className="bg-zinc-900 text-white text-center py-2 rounded-full">Get started</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
