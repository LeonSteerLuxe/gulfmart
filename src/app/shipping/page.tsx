import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Truck, Package, Clock, MapPin, Shield, Check, Plane, Ship } from 'lucide-react';

export const metadata = {
  title: 'Shipping Information - GulfMart',
  description: 'Learn about GulfMart shipping options, delivery times, and costs',
};

const regions = [
  { name: 'Muscat', time: '2-3 days', cost: 'Free over $100' },
  { name: 'Dhofar', time: '3-4 days', cost: 'Free over $100' },
  { name: 'Al Batinah', time: '2-3 days', cost: 'Free over $100' },
  { name: 'Ash Sharqiyah', time: '3-4 days', cost: 'Free over $100' },
  { name: 'Ad Dakhiliyah', time: '3-4 days', cost: 'Free over $100' },
  { name: 'Al Buraimi', time: '2-3 days', cost: 'Free over $100' },
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Shipping Information
            </h1>
            <p className="text-xl text-zinc-600">
              Fast, reliable delivery from UAE to your doorstep in Oman
            </p>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Shipping Options</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Truck className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Standard Shipping</h3>
                    <p className="text-zinc-500">Most popular choice</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>2-4 business days delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Free on orders over $100</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Full tracking included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Customs handled by us</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold">$15 <span className="text-base font-normal text-zinc-500">or FREE over $100</span></div>
              </div>

              <div className="bg-zinc-900 text-white rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Plane className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Express Shipping</h3>
                    <p className="text-zinc-400">When you need it fast</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>1-2 business days delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Priority processing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Delivery guarantee</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold">$35</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 py-16 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Shipping Works</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-black text-emerald-200 mb-4">01</div>
                <h3 className="text-lg font-semibold mb-2">Order Placed</h3>
                <p className="text-zinc-500 text-sm">Your order is confirmed and sent to our UAE warehouse</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-emerald-200 mb-4">02</div>
                <h3 className="text-lg font-semibold mb-2">Consolidation</h3>
                <p className="text-zinc-500 text-sm">We combine items from multiple suppliers into one shipment</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-emerald-200 mb-4">03</div>
                <h3 className="text-lg font-semibold mb-2">Customs Cleared</h3>
                <p className="text-zinc-500 text-sm">We handle all paperwork and customs clearance for you</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-emerald-200 mb-4">04</div>
                <h3 className="text-lg font-semibold mb-2">Delivered</h3>
                <p className="text-zinc-500 text-sm">Your package arrives at your door anywhere in Oman</p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Times by Region */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Delivery Times by Region</h2>
            
            <div className="bg-zinc-50 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 p-4 bg-zinc-100 font-semibold text-sm">
                <div>Region</div>
                <div>Standard Delivery</div>
                <div>Shipping Cost</div>
              </div>
              {regions.map((region) => (
                <div key={region.name} className="grid grid-cols-3 p-4 border-t border-zinc-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    {region.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    {region.time}
                  </div>
                  <div className="text-emerald-600 font-medium">{region.cost}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="px-6 py-16 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Shipping Guarantees</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Package Protection</h3>
                <p className="text-zinc-400">Every shipment is insured against loss or damage during transit</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-zinc-400">We guarantee delivery within the estimated timeframe or your shipping is free</p>
              </div>
              <div className="text-center">
                <Package className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Careful Handling</h3>
                <p className="text-zinc-400">Items are carefully packed and handled to ensure they arrive in perfect condition</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
