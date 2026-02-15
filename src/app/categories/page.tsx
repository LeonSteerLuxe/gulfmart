'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { categories } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100">
      <Header />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Browse our curated collection of products from verified UAE suppliers
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-1 group-hover:text-emerald-400 transition-colors">
                        {category.name}
                      </h2>
                      <p className="text-zinc-400 text-sm mb-2">{category.description}</p>
                      <span className="text-sm text-emerald-400 font-medium">
                        {category.count}+ products
                      </span>
                    </div>
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-emerald-500 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-zinc-400 mb-4">Can't find what you're looking for?</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Browse All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
