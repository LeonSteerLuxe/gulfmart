'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getCategoryBySlug, getProductsByCategory } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { ShoppingCart, Star, ChevronRight } from 'lucide-react'

export default function CategoryPage() {
  const params = useParams()
  const { addItem } = useCart()
  
  const category = getCategoryBySlug(params.slug as string)
  const products = getProductsByCategory(params.slug as string)

  if (!category) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] text-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link href="/categories" className="text-emerald-400 hover:text-emerald-300">
            ← View all categories
          </Link>
        </div>
      </div>
    )
  }

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

      <main className="pt-20 pb-20">
        {/* Hero */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                <Link href="/" className="hover:text-zinc-200">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/categories" className="hover:text-zinc-200">Categories</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-zinc-200">{category.name}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{category.name}</h1>
              <p className="text-xl text-zinc-400">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-zinc-400">{products.length} products</p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-400 mb-4">No products in this category yet</p>
              <Link href="/products" className="text-emerald-400 hover:text-emerald-300">
                Browse all products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1"
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
      </main>

      <Footer />
    </div>
  )
}
