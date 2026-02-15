'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getProductById, products } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  Package, 
  Check, 
  Minus, 
  Plus,
  Heart
} from 'lucide-react'

export default function ProductPage() {
  const params = useParams()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = getProductById(params.id as string)

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products" className="text-emerald-600 hover:text-emerald-700">
            ← Back to products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      supplier: product.supplier,
      quantity,
    })
  }

  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
            <Link href="/" className="hover:text-zinc-700">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-zinc-700">Products</Link>
            <span>/</span>
            <Link href={`/categories/${product.categorySlug}`} className="hover:text-zinc-700">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-zinc-700 truncate max-w-[200px]">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.originalPrice && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <p className="text-sm text-emerald-600 font-medium mb-2">{product.supplier}</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-zinc-500">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-zinc-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-emerald-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-zinc-400 line-through">${product.originalPrice}</span>
                )}
              </div>

              {/* Features */}
              {product.features && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-zinc-700">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-full px-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-colors shadow-lg shadow-emerald-500/25"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>

                <button className="p-4 bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-zinc-600" />
                </button>
              </div>

              {/* Stock */}
              <p className="text-sm text-zinc-500 mb-8">
                {product.stock > 10 ? (
                  <span className="text-emerald-600 font-medium">✓ In Stock</span>
                ) : product.stock > 0 ? (
                  <span className="text-amber-600 font-medium">Only {product.stock} left</span>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
                  <p className="text-xs text-zinc-600">Free shipping over $50</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
                  <p className="text-xs text-zinc-600">Buyer protection</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <Package className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
                  <p className="text-xs text-zinc-600">Easy returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/products/${related.id}`}
                    className="group bg-white border border-gray-200 hover:border-gray-300 rounded-xl overflow-hidden transition-all hover:shadow-lg"
                  >
                    <div className="aspect-square relative overflow-hidden bg-gray-100">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2 mb-2 group-hover:text-emerald-600 transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-emerald-600 font-semibold">${related.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
