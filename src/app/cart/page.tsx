'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCart, updateQuantity, removeFromCart, CartItem } from '@/lib/cart';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck, Shield, Tag } from 'lucide-react';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCart(getCart());
    setLoading(false);

    const handleCartUpdate = () => {
      setCart(getCart());
    };

    window.addEventListener('cart-updated', handleCartUpdate);
    return () => window.removeEventListener('cart-updated', handleCartUpdate);
  }, []);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Header />
        <main className="pt-32 pb-16 px-6 flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Header />
        <main className="pt-32 pb-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-zinc-400" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-zinc-500 mb-8">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors"
            >
              Start Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.product.id}
                  className="bg-white rounded-2xl p-6 border border-zinc-200 flex gap-6"
                >
                  {/* Image */}
                  <Link href={`/products/${item.product.id}`} className="shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-xl overflow-hidden bg-zinc-100">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.product.id}`}>
                      <h3 className="font-semibold text-lg mb-1 hover:text-emerald-600 transition-colors line-clamp-1">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-zinc-500 mb-2">{item.product.seller}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-emerald-600 mb-4">
                      <Truck className="w-4 h-4" />
                      <span>{item.product.deliveryDays} days delivery</span>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-zinc-200 rounded-lg">
                        <button 
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-zinc-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-zinc-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemove(item.product.id)}
                          className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 border border-zinc-200 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                {/* Promo Code */}
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <button className="px-4 py-3 bg-zinc-100 rounded-xl font-medium text-sm hover:bg-zinc-200 transition-colors">
                    Apply
                  </button>
                </div>

                {/* Summary */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-zinc-600">
                    <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-zinc-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span className="text-emerald-600">Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-zinc-400">
                      Free shipping on orders over $100
                    </p>
                  )}
                  <div className="border-t border-zinc-200 pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-colors"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-zinc-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span>Buyer protection on all orders</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Truck className="w-5 h-5 text-emerald-500" />
                    <span>Fast delivery to Oman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
