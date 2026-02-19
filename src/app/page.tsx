import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Truck, Shield, Check, Sparkles, ShieldCheck, FileCheck, CreditCard, Star } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const categories = [
  { name: 'Electronics', count: '156', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop', slug: 'electronics' },
  { name: 'Tools & Hardware', count: '89', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=300&fit=crop', slug: 'tools' },
  { name: 'Auto Parts', count: '124', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop', slug: 'auto' },
  { name: 'Home & Garden', count: '203', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', slug: 'home' },
  { name: 'Industrial', count: '67', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop', slug: 'industrial' },
  { name: 'Office Supplies', count: '145', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop', slug: 'office' },
  { name: 'Sports & Fitness', count: '78', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop', slug: 'sports' },
  { name: 'Health & Safety', count: '92', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop', slug: 'health' },
]

const steps = [
  { num: '01', title: 'Browse', desc: 'Explore 10,000+ products across categories', color: 'text-violet-500' },
  { num: '02', title: 'Order', desc: 'Pay by card, transfer, or cash on delivery', color: 'text-blue-500' },
  { num: '03', title: 'We ship', desc: 'Consolidation & customs fully handled', color: 'text-emerald-500' },
  { num: '04', title: 'Receive', desc: 'Delivered to your door across Oman', color: 'text-amber-500' },
]

const testimonials = [
  { name: 'Ahmed K.', location: 'Muscat', text: 'Finally I can order from Dubai without the customs nightmare. GulfMart handles everything!', rating: 5 },
  { name: 'Fatima S.', location: 'Sohar', text: 'Ordered tools for my business - arrived in 3 days. Cash on delivery made it risk-free.', rating: 5 },
  { name: 'Mohammed R.', location: 'Salalah', text: 'The consolidation saved me 400 OMR on shipping. Will use again for sure.', rating: 5 },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-center py-2.5 px-4">
        <p className="text-sm font-medium">
          🎉 <span className="font-bold">15% OFF</span> your first order — Use code <span className="font-mono bg-white/20 px-2 py-0.5 rounded">OMAN15</span> at checkout
        </p>
      </div>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Trusted by 5,000+ Omani shoppers</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
              Shop UAE
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Like It&apos;s Local.
              </span>
            </h1>

            {/* Value Prop */}
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-2xl mb-6">
              Zero customs hassle. Zero paperwork. Zero surprises.
              <br />
              <span className="text-zinc-500">Delivered to Oman in 2-4 days.</span>
            </p>

            {/* Trust Badges - Inline */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">Buyer Protection</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm">
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Customs Handled</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm">
                <CreditCard className="w-4 h-4 text-amber-600" />
                <span className="font-medium">Cash on Delivery</span>
              </div>
            </div>
            
            {/* CTA - Bigger & Bolder */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Link 
                href="/products"
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02]"
              >
                Start Shopping Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#how" 
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-700 text-base font-medium py-4 transition-colors"
              >
                See how it works →
              </Link>
            </div>

            {/* Social Proof Quote */}
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>&ldquo;Finally, UAE shopping without the customs nightmare&rdquo; — Ahmed, Muscat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-16">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Truck className="w-7 h-7 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  2-4 days
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-zinc-900">Lightning fast delivery</h3>
              <p className="text-lg text-zinc-600 max-w-md">
                From Dubai warehouses to your doorstep in Oman. Faster than you'd expect.
              </p>
            </div>
            
            {/* Stats card */}
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white rounded-3xl p-10 flex flex-col justify-between min-h-[280px] shadow-xl">
              <div className="text-6xl font-bold">500+</div>
              <div>
                <div className="text-lg font-medium mb-1">Verified suppliers</div>
                <div className="text-white/80 text-sm">Vetted for quality & reliability</div>
              </div>
            </div>
            
            {/* Protection card */}
            <div className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
              <Shield className="w-10 h-10 mb-8 text-emerald-500" />
              <h3 className="text-2xl font-bold mb-2 text-zinc-900">Buyer protection</h3>
              <p className="text-zinc-600">
                Full refund if items aren't as described. No questions asked.
              </p>
            </div>
            
            {/* Consolidation card */}
            <div className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
              <Package className="w-10 h-10 mb-8 text-cyan-500" />
              <h3 className="text-2xl font-bold mb-2 text-zinc-900">Order consolidation</h3>
              <p className="text-zinc-600">
                Multiple suppliers, one shipment. Save up to 40% on shipping.
              </p>
            </div>
            
            {/* Customs card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 border border-amber-200">
              <div className="text-4xl mb-6">🛃</div>
              <h3 className="text-2xl font-bold mb-2 text-zinc-900">Customs? Handled.</h3>
              <p className="text-zinc-600">
                We manage all paperwork and clearance. Zero hassle for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">
              Simple as 1, 2, 3, 4
            </h2>
            <p className="text-xl text-zinc-600">No complexity. Just results.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i}>
                <div className={`text-7xl font-black ${step.color} opacity-30 mb-4`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">{step.title}</h3>
                <p className="text-zinc-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">
                What you can buy
              </h2>
              <p className="text-xl text-zinc-600">Everything you need, from UAE to Oman</p>
            </div>
            <Link 
              href="/categories"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              View all categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <Link 
                key={i}
                href={`/categories/${cat.slug}`}
                className="group block bg-white border border-gray-200 hover:border-gray-300 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative w-full overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="font-semibold text-lg mb-1 text-zinc-900 group-hover:text-emerald-600 transition-colors">{cat.name}</div>
                  <div className="text-zinc-500 text-sm">{cat.count}+ items</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">
              What Omani shoppers say
            </h2>
            <p className="text-xl text-zinc-600">Join thousands of happy customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-6 text-lg">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">{t.name}</div>
                    <div className="text-sm text-zinc-500">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-[2.5rem] p-12 md:p-20 shadow-2xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                Ready to start?
              </h2>
              <p className="text-xl text-white/90 max-w-xl mb-10">
                Join thousands of happy customers across Oman. No fees, no minimum orders, no hassle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link 
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-full transition-colors shadow-lg"
                >
                  Create Free Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-6 text-white/90 text-sm">
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  No membership fees
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Cash on delivery
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
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
