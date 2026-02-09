import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Package, Truck, Shield, Check, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">GulfMart</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Features</Link>
            <Link href="#how" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">How it works</Link>
            <Link href="#categories" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Categories</Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Sign in
            </Link>
            <Link 
              href="/signup" 
              className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200/50 rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-emerald-700">Now delivering to all of Oman</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              Shop UAE.
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Delivered to Oman.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl mb-10">
              10,000+ products from verified UAE suppliers. We handle customs, consolidation, and delivery to your door.
            </p>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link 
                href="/signup" 
                className="group inline-flex items-center gap-2 bg-zinc-900 text-white text-base font-medium px-6 py-3.5 rounded-full hover:bg-zinc-800 transition-all hover:gap-3"
              >
                Start shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#how" 
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 text-base font-medium px-6 py-3.5 transition-colors"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 bg-gradient-to-br from-zinc-50 to-zinc-100/50 rounded-3xl p-10 border border-zinc-200/50">
              <div className="flex items-start justify-between mb-16">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-zinc-200/50 flex items-center justify-center">
                  <Truck className="w-7 h-7 text-zinc-700" />
                </div>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  2-4 days
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Lightning fast delivery</h3>
              <p className="text-lg text-zinc-500 max-w-md">
                From Dubai warehouses to your doorstep in Oman. Faster than you'd expect.
              </p>
            </div>
            
            {/* Stats card */}
            <div className="bg-zinc-900 text-white rounded-3xl p-10 flex flex-col justify-between">
              <div className="text-6xl font-bold">500+</div>
              <div>
                <div className="text-lg font-medium mb-1">Verified suppliers</div>
                <div className="text-zinc-400 text-sm">Vetted for quality & reliability</div>
              </div>
            </div>
            
            {/* Protection card */}
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white rounded-3xl p-10">
              <Shield className="w-10 h-10 mb-8 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Buyer protection</h3>
              <p className="text-white/80">
                Full refund if items aren't as described. No questions asked.
              </p>
            </div>
            
            {/* Consolidation card */}
            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 rounded-3xl p-10 border border-zinc-200/50">
              <Package className="w-10 h-10 mb-8 text-zinc-700" />
              <h3 className="text-2xl font-bold mb-2">Order consolidation</h3>
              <p className="text-zinc-500">
                Multiple suppliers, one shipment. Save up to 40% on shipping.
              </p>
            </div>
            
            {/* Customs card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 border border-amber-200/50">
              <div className="text-4xl mb-6">🛃</div>
              <h3 className="text-2xl font-bold mb-2">Customs? Handled.</h3>
              <p className="text-zinc-500">
                We manage all paperwork and clearance. Zero hassle for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Simple as 1, 2, 3, 4
            </h2>
            <p className="text-xl text-zinc-500">No complexity. Just results.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Browse', desc: 'Explore 10,000+ products across categories', color: 'from-violet-500 to-purple-500' },
              { num: '02', title: 'Order', desc: 'Pay by card, transfer, or cash on delivery', color: 'from-blue-500 to-cyan-500' },
              { num: '03', title: 'We ship', desc: 'Consolidation & customs fully handled', color: 'from-emerald-500 to-green-500' },
              { num: '04', title: 'Receive', desc: 'Delivered to your door across Oman', color: 'from-orange-500 to-amber-500' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className={`text-7xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 mb-4`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-500">{step.desc}</p>
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
              <p className="text-xl text-zinc-500">Everything you need, from UAE to Oman</p>
            </div>
            <Link 
              href="/categories" 
              className="hidden md:inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 font-medium transition-colors"
            >
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Electronics', count: '3,200+', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop' },
              { name: 'Tools & Hardware', count: '2,500+', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=300&fit=crop' },
              { name: 'Auto Parts', count: '1,800+', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop' },
              { name: 'Home & Garden', count: '2,100+', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
              { name: 'Industrial', count: '950+', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop' },
              { name: 'Office Supplies', count: '1,400+', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
              { name: 'Sports & Fitness', count: '800+', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop' },
              { name: 'Health & Safety', count: '600+', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            ].map((cat, i) => (
              <Link 
                key={i}
                href="/categories"
                className="group bg-white border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-zinc-200/50 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-zinc-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="font-semibold text-lg mb-1 group-hover:text-emerald-600 transition-colors">{cat.name}</div>
                  <div className="text-zinc-400 text-sm">{cat.count} items</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-zinc-900 rounded-[2.5rem] p-12 md:p-20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/20 to-blue-500/20 blur-3xl" />
            
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
                  className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 font-semibold px-8 py-4 rounded-full hover:bg-zinc-100 transition-colors"
                >
                  Create free account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors"
                >
                  Talk to sales
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

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-lg">GulfMart</span>
            </div>
            
            <div className="flex flex-wrap gap-8 text-sm text-zinc-500">
              <Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link>
              <Link href="/help" className="hover:text-zinc-900 transition-colors">Help</Link>
              <Link href="/shipping" className="hover:text-zinc-900 transition-colors">Shipping</Link>
              <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms</Link>
            </div>
            
            <div className="text-sm text-zinc-400">
              © 2025 GulfMart
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
