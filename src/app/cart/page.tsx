'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useCart } from '@/lib/cart-context'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from 'lucide-react'

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, shipping, total, itemCount } = useCart()

  return (
    <div className="min-h-screen bg-gray-50 text-zinc-900">
      <Header />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-zinc-500 mb-8">Looks like you haven't added any products yet</p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Start Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 bg-white border border-gray-200 rounded-2xl p-6"
                  >
                    <Link href={`/products/${item.id}`} className="flex-shrink-0">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-100">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <Link href={`/products/${item.id}`}>
                            <h3 className="font-semibold hover:text-emerald-600 transition-colors">{item.name}</h3>
                          </Link>
                          {item.supplier && <p className="text-sm text-zinc-500">{item.supplier}</p>}
                        </div>
                        <button onClick={() => removeItem(item.id)} className="p-2 text-zinc-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-end justify-between mt-4">
                        <div className="flex items-center gap-3 bg-gray-100 rounded-full border border-gray-200">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-xl font-bold text-emerald-600">${(item.price * item.quantity).toFixed(2)}</p>
                          <p className="text-sm text-zinc-500">${item.price.toFixed(2)} each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600">Subtotal ({itemCount} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600">Shipping</span>
                      <span>{shipping === 0 ? <span className="text-emerald-600 font-medium">Free</span> : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping > 0 && subtotal < 50 && (
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                        <p className="text-sm text-emerald-700">Add ${(50 - subtotal).toFixed(2)} more for free shipping!</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between text-lg font-semibold pt-4 border-t border-gray-200 mb-6">
                    <span>Total</span>
                    <span className="text-emerald-600">${total.toFixed(2)}</span>
                  </div>

                  <Link href="/checkout" className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-full transition-colors mb-4">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link href="/products" className="block text-center text-sm text-zinc-500 hover:text-zinc-700 transition-colors">
                    Continue Shopping
                  </Link>

                  <div className="mt-6 pt-6 border-t border-gray-200 flex items-start gap-3">
                    <Truck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-zinc-600">
                      <p className="font-medium text-zinc-700 mb-1">Delivery to Oman</p>
                      <p>2-4 business days from UAE. Customs handled.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
