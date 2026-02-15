'use client'

import { useCart } from '@/lib/cart-context'
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, subtotal, shipping, total } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white border-l border-gray-200 z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-semibold text-zinc-900">Your Cart</h2>
            <span className="text-sm text-zinc-500">({itemCount} items)</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-zinc-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-zinc-600 mb-2">Your cart is empty</p>
              <p className="text-sm text-zinc-400 mb-6">Add some products to get started</p>
              <button
                onClick={closeCart}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-gray-50 rounded-xl p-4"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-zinc-900 line-clamp-2 mb-1">{item.name}</h3>
                    {item.supplier && (
                      <p className="text-xs text-zinc-500 mb-2">{item.supplier}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-gray-50 rounded transition-colors"
                        >
                          <Minus className="w-3 h-3 text-zinc-600" />
                        </button>
                        <span className="text-sm w-6 text-center text-zinc-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-gray-50 rounded transition-colors"
                        >
                          <Plus className="w-3 h-3 text-zinc-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-emerald-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-zinc-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-zinc-600">
                <span>Subtotal</span>
                <span className="text-zinc-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-600">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-emerald-600 font-medium">Free</span>
                  ) : (
                    <span className="text-zinc-900">${shipping.toFixed(2)}</span>
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-zinc-500">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
                <span className="text-zinc-900">Total</span>
                <span className="text-emerald-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-full transition-colors"
            >
              Checkout
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
