'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react'

export default function CheckoutSuccessPage() {
  const orderNumber = `GM${Date.now().toString().slice(-8)}`

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-zinc-600 mb-8">
            Thank you for your order. We've received your purchase and will start processing it right away.
          </p>

          {/* Order Number */}
          <div className="bg-gray-50/50 border border-gray-200 rounded-2xl p-6 mb-8">
            <p className="text-sm text-zinc-500 mb-1">Order Number</p>
            <p className="text-2xl font-mono font-bold text-emerald-400">{orderNumber}</p>
          </div>

          {/* What's Next */}
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4 text-left bg-gray-50/30 border border-gray-200/50 rounded-xl p-4">
              <Mail className="w-5 h-5 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Confirmation Email</p>
                <p className="text-sm text-zinc-600">
                  We've sent order details to your email address
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-left bg-gray-50/30 border border-gray-200/50 rounded-xl p-4">
              <Package className="w-5 h-5 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Delivery in 2-4 Days</p>
                <p className="text-sm text-zinc-600">
                  We'll notify you when your order ships from UAE
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-600 text-zinc-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
