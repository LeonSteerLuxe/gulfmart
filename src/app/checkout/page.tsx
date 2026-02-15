'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useCart } from '@/lib/cart-context'
import { ChevronLeft, CreditCard, Banknote, Building2, Lock, Truck, Check } from 'lucide-react'

type PaymentMethod = 'card' | 'cod' | 'bank'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, shipping, total, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')
  const [isProcessing, setIsProcessing] = useState(false)
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    clearCart()
    router.push('/checkout/success')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white text-zinc-900">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-zinc-600 mb-8">Add some products before checking out</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to cart
          </Link>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
              {/* Contact */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-zinc-600 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-600 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                      placeholder="+968 9XXX XXXX"
                    />
                  </div>
                </div>
              </section>

              {/* Shipping */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-zinc-600 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-600 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-600 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                      placeholder="Street address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-zinc-600 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-600 mb-2">Region</label>
                      <select
                        name="region"
                        required
                        value={formData.region}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                      >
                        <option value="">Select region</option>
                        <option value="muscat">Muscat</option>
                        <option value="dhofar">Dhofar</option>
                        <option value="batinah-north">Al Batinah North</option>
                        <option value="batinah-south">Al Batinah South</option>
                        <option value="sharqiyah-north">Ash Sharqiyah North</option>
                        <option value="sharqiyah-south">Ash Sharqiyah South</option>
                        <option value="dakhliyah">Ad Dakhliyah</option>
                        <option value="dhahirah">Ad Dhahirah</option>
                        <option value="buraymi">Al Buraymi</option>
                        <option value="wusta">Al Wusta</option>
                        <option value="musandam">Musandam</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === 'card'
                        ? 'bg-emerald-500/10 border-emerald-500'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="sr-only"
                    />
                    <CreditCard className="w-5 h-5 text-emerald-600" />
                    <div className="flex-1">
                      <p className="font-medium">Credit / Debit Card</p>
                      <p className="text-sm text-zinc-500">Visa, Mastercard, AMEX</p>
                    </div>
                    {paymentMethod === 'card' && <Check className="w-5 h-5 text-emerald-600" />}
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === 'cod'
                        ? 'bg-emerald-500/10 border-emerald-500'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="sr-only"
                    />
                    <Banknote className="w-5 h-5 text-emerald-600" />
                    <div className="flex-1">
                      <p className="font-medium">Cash on Delivery</p>
                      <p className="text-sm text-zinc-500">Pay when you receive</p>
                    </div>
                    {paymentMethod === 'cod' && <Check className="w-5 h-5 text-emerald-600" />}
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === 'bank'
                        ? 'bg-emerald-500/10 border-emerald-500'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="sr-only"
                    />
                    <Building2 className="w-5 h-5 text-emerald-600" />
                    <div className="flex-1">
                      <p className="font-medium">Bank Transfer</p>
                      <p className="text-sm text-zinc-500">Direct bank payment</p>
                    </div>
                    {paymentMethod === 'bank' && <Check className="w-5 h-5 text-emerald-600" />}
                  </label>
                </div>

                {/* Card details */}
                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm text-zinc-600 mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-zinc-600 mb-2">Expiry</label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-zinc-600 mb-2">CVC</label>
                        <input
                          type="text"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Submit */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white font-semibold py-4 rounded-full transition-colors"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Place Order • ${total.toFixed(2)}
                  </>
                )}
              </button>

              <p className="text-center text-sm text-zinc-500">
                By placing this order, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50/50 border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-xs font-semibold rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                        <p className="text-sm text-zinc-500">${item.price} each</p>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Shipping</span>
                    <span>{shipping === 0 ? <span className="text-emerald-600">Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-emerald-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>Secure SSL encrypted checkout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Truck className="w-4 h-4 text-emerald-600" />
                    <span>Delivery in 2-4 business days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
