import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Categories - GulfMart',
  description: 'Browse all product categories on GulfMart',
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              All Categories
            </h1>
            <p className="text-xl text-zinc-500">
              Explore 10,000+ products across {categories.length} categories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="group relative bg-white border border-zinc-200 hover:border-zinc-300 rounded-3xl overflow-hidden transition-all hover:shadow-xl hover:shadow-zinc-200/50"
              >
                {/* Image */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">{category.name}</h2>
                    <p className="text-white/80 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        {category.productCount.toLocaleString()}+ products
                      </span>
                      <span className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                        Browse
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 rounded-2xl">
              <div className="text-3xl font-bold text-emerald-600 mb-1">10,000+</div>
              <div className="text-sm text-zinc-500">Products</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 rounded-2xl">
              <div className="text-3xl font-bold text-emerald-600 mb-1">500+</div>
              <div className="text-sm text-zinc-500">Verified Suppliers</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 rounded-2xl">
              <div className="text-3xl font-bold text-emerald-600 mb-1">2-4 days</div>
              <div className="text-sm text-zinc-500">Average Delivery</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 rounded-2xl">
              <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
              <div className="text-sm text-zinc-500">Buyer Protection</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
