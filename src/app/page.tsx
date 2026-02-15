import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Truck, Shield, Check, Sparkles } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Now delivering to all of Oman</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              Shop UAE.
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Delivered to Oman.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl mb-10">
              10,000+ products from verified UAE suppliers. We handle customs, consolidation, and delivery to your door.
            </p>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link 
                href="/products"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-base font-medium px-6 py-3.5 rounded-full transition-colors"
              >
                Start Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#how" 
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 text-base font-medium px-6 py-3.5 transition-colors"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 bg-zinc-900/50 rounded-3xl p-10 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between mb-16">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 shadow-sm border border-zinc-700 flex items-center justify-center">
                  <Truck className="w-7 h-7 text-zinc-300" />
                </div>
                <span className="text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                  2-4 days
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Lightning fast delivery</h3>
              <p className="text-lg text-zinc-400 max-w-md">
                From Dubai warehouses to your doorstep in Oman. Faster than you'd expect.
              </p>
            </div>
            
            {/* Stats card */}
            <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 text-white rounded-3xl p-10 flex flex-col justify-between">
              <div className="text-6xl font-bold">500+</div>
              <div>
                <div className="text-lg font-medium mb-1">Verified suppliers</div>
                <div className="text-white/70 text-sm">Vetted for quality & reliability</div>
              </div>
            </div>
            
            {/* Protection card */}
            <div className="bg-zinc-900/50 rounded-3xl p-10 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <Shield className="w-10 h-10 mb-8 text-emerald-400" />
              <h3 className="text-2xl font-bold mb-2">Buyer protection</h3>
              <p className="text-zinc-400">
                Full refund if items aren't as described. No questions asked.
              </p>
            </div>
            
            {/* Consolidation card */}
            <div className="bg-zinc-900/50 rounded-3xl p-10 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <Package className="w-10 h-10 mb-8 text-cyan-400" />
              <h3 className="text-2xl font-bold mb-2">Order consolidation</h3>
              <p className="text-zinc-400">
                Multiple suppliers, one shipment. Save up to 40% on shipping.
              </p>
            </div>
            
            {/* Customs card */}
            <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-3xl p-10 border border-amber-500/20">
              <div className="text-4xl mb-6">🛃</div>
              <h3 className="text-2xl font-bold mb-2">Customs? Handled.</h3>
              <p className="text-zinc-400">
                We manage all paperwork and clearance. Zero hassle for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Simple as 1, 2, 3, 4
            </h2>
            <p className="text-xl text-zinc-400">No complexity. Just results.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Browse', desc: 'Explore 10,000+ products across categories', color: 'from-violet-400 to-purple-400' },
              { num: '02', title: 'Order', desc: 'Pay by card, transfer, or cash on delivery', color: 'from-blue-400 to-cyan-400' },
              { num: '03', title: 'We ship', desc: 'Consolidation & customs fully handled', color: 'from-emerald-400 to-green-400' },
              { num: '04', title: 'Receive', desc: 'Delivered to your door across Oman', color: 'from-orange-400 to-amber-400' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className={`text-7xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-30 mb-4`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                What you can buy
              </h2>
              <p className="text-xl text-zinc-400">Everything you need, from UAE to Oman</p>
            </div>
            <Link 
              href="/categories"
              className="hidden md:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              View all categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Electronics', count: '156', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop', slug: 'electronics' },
              { name: 'Tools & Hardware', count: '89', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=300&fit=crop', slug: 'tools' },
              { name: 'Auto Parts', count: '124', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop', slug: 'auto' },
              { name: 'Home & Garden', count: '203', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', slug: 'home' },
              { name: 'Industrial', count: '67', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop', slug: 'industrial' },
              { name: 'Office Supplies', count: '145', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop', slug: 'office' },
              { name: 'Sports & Fitness', count: '78', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop', slug: 'sports' },
              { name: 'Health & Safety', count: '92', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop', slug: 'health' },
            ].map((cat, i) => (
              <Link 
                key={i}
                href={`/categories/${cat.slug}`}
                className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-zinc-800">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                </div>
                <div className="p-5">
                  <div className="font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">{cat.name}</div>
                  <div className="text-zinc-500 text-sm">{cat.count}+ items</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[2.5rem] p-12 md:p-20 border border-zinc-700/50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/10 to-blue-500/10 blur-3xl" />
            
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                Ready to start?
              </h2>
              <p className="text-xl text-zinc-400 max-w-xl mb-10">
                Join thousands of happy customers across Oman. No fees, no minimum orders, no hassle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link 
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
                >
                  Create Free Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 text-zinc-300 hover:text-white font-semibold px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-600 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-6 text-zinc-400 text-sm">
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  No membership fees
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  Cash on delivery
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  7-day free returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
