import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Package, Truck, Mail, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Order Confirmed - GulfMart',
};

export default function CheckoutSuccessPage() {
  const orderNumber = `GM-${Date.now().toString(36).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-zinc-500 mb-2">
            Thank you for your order. We&apos;ve received it and will start processing right away.
          </p>
          <p className="text-lg font-medium mb-8">
            Order Number: <span className="text-emerald-600">{orderNumber}</span>
          </p>

          {/* Order Timeline */}
          <div className="bg-white rounded-2xl p-8 border border-zinc-200 mb-8">
            <h2 className="font-semibold mb-6">What happens next?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Confirmation Email</div>
                  <div className="text-sm text-zinc-500">You&apos;ll receive an order confirmation email shortly</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-zinc-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Order Processing</div>
                  <div className="text-sm text-zinc-500">We&apos;ll consolidate and prepare your items in UAE</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-zinc-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Shipping & Delivery</div>
                  <div className="text-sm text-zinc-500">Your order will arrive in 2-4 business days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-300 rounded-full font-medium hover:bg-zinc-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
