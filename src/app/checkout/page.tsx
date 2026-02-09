'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCart, clearCart, CartItem } from '@/lib/cart';
import { CreditCard, Banknote, Building2, ChevronLeft, Lock, Truck, Check, MapPin } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
  });

  useEffect(() => {
    const cartData = getCart();
    if (cartData.length === 0) {
      router.push('/cart');
      return;
    }
    setCart(cartData);
    setLoading(false);
  }, [router]);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear cart and redirect
    clearCart();
    router.push('/checkout/success');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link href="/cart" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-8">
            <ChevronLeft className="w-4 h-4" />
            Back to cart
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div>
              <h1 className="text-3xl font-bold mb-8">Checkout</h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Delivery Information */}
                <div className="bg-white rounded-2xl p-6 border border-zinc-200">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    Delivery Information
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+968"
                        className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street address, building, apartment"
                        className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Region</label>
                      <select
                        name="region"
                        required
                        value={formData.region}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                      >
                        <option value="">Select region</option>
                        <option value="muscat">Muscat</option>
                        <option value="dhofar">Dhofar</option>
                        <option value="musandam">Musandam</option>
                        <option value="al-buraimi">Al Buraimi</option>
                        <option value="ad-dakhiliyah">Ad Dakhiliyah</option>
                        <option value="al-batinah-north">Al Batinah North</option>
                        <option value="al-batinah-south">Al Batinah South</option>
                        <option value="ash-sharqiyah-north">Ash Sharqiyah North</option>
                        <option value="ash-sharqiyah-south">Ash Sharqiyah South</option>
                        <option value="ad-dhahirah">Ad Dhahirah</option>
                        <option value="al-wusta">Al Wusta</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl p-6 border border-zinc-200">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-emerald-500" />
                    Payment Method
                  </h2>

                  <div className="space-y-3">
                    <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-emerald-500 bg-emerald-50' : 'border-zinc-200 hover:border-zinc-300'}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="accent-emerald-500"
                      />
                      <Banknote className="w-6 h-6 text-zinc-600" />
                      <div>
                        <div className="font-medium">Cash on Delivery</div>
                        <div className="text-sm text-zinc-500">Pay when you receive your order</div>
                      </div>
                    </label>

                    <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-50' : 'border-zinc-200 hover:border-zinc-300'}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="accent-emerald-500"
                      />
                      <CreditCard className="w-6 h-6 text-zinc-600" />
                      <div>
                        <div className="font-medium">Credit / Debit Card</div>
                        <div className="text-sm text-zinc-500">Visa, Mastercard, AMEX</div>
                      </div>
                    </label>

                    <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'transfer' ? 'border-emerald-500 bg-emerald-50' : 'border-zinc-200 hover:border-zinc-300'}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="transfer"
                        checked={paymentMethod === 'transfer'}
                        onChange={() => setPaymentMethod('transfer')}
                        className="accent-emerald-500"
                      />
                      <Building2 className="w-6 h-6 text-zinc-600" />
                      <div>
                        <div className="font-medium">Bank Transfer</div>
                        <div className="text-sm text-zinc-500">Transfer to our bank account</div>
                      </div>
                    </label>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Expiry</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVC</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  disabled={placing}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-colors disabled:bg-emerald-300"
                >
                  {placing ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Place Order • ${total.toFixed(2)}
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-zinc-500">
                  By placing this order, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl p-6 border border-zinc-200 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-zinc-100 shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-zinc-900 text-white text-xs rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-1">{item.product.name}</h4>
                        <p className="text-sm text-zinc-500">{item.product.seller}</p>
                      </div>
                      <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-zinc-200 pt-4 space-y-3">
                  <div className="flex justify-between text-zinc-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-zinc-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span className="text-emerald-600">Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-zinc-200 pt-3 flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-6 p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center gap-3 text-emerald-700">
                    <Truck className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Estimated Delivery</div>
                      <div className="text-sm">2-4 business days to Oman</div>
                    </div>
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
