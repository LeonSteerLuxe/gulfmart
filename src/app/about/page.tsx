import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Globe, Shield, Truck, Award, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us - GulfMart',
  description: 'Learn about GulfMart - your trusted UAE to Oman shopping partner',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Connecting UAE to Oman
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              GulfMart makes cross-border shopping simple. We bring the best products from verified UAE suppliers directly to your doorstep in Oman.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-zinc-600 mb-4 leading-relaxed">
                  We believe everyone in Oman deserves access to the incredible variety and competitive prices available in UAE markets. That&apos;s why we built GulfMart.
                </p>
                <p className="text-zinc-600 mb-4 leading-relaxed">
                  Our platform connects you with over 500 verified suppliers across the UAE, offering everything from electronics and tools to home goods and industrial equipment.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  We handle all the complexity - customs clearance, consolidation, and delivery - so you can shop with confidence and receive your orders fast.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
                  <div className="text-zinc-600">Products</div>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-zinc-600">Suppliers</div>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
                  <div className="text-zinc-600">Happy Customers</div>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">2-4</div>
                  <div className="text-zinc-600">Days Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-16 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
                <p className="text-zinc-600">
                  Every supplier is verified. Every transaction is protected. Your peace of mind is our priority.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast & Reliable</h3>
                <p className="text-zinc-600">
                  Lightning-fast delivery with real-time tracking. We keep our promises on time, every time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-zinc-600">
                  Your satisfaction drives everything we do. From easy returns to responsive support, we&apos;ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Built for the Gulf</h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              GulfMart was founded by a team with deep roots in both UAE and Oman. We understand the unique challenges of cross-border commerce in the region, and we&apos;ve built our platform to solve them.
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 text-zinc-600" />
                <span className="text-sm">Based in Dubai & Muscat</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-zinc-600" />
                <span className="text-sm">Serving all of Oman</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
