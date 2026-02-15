import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Truck, Shield, Check, Sparkles } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      {/* Hero */}
      <section style={{ paddingTop: '140px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', background: 'linear-gradient(to bottom, #ecfdf5, white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px' }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '9999px', padding: '6px 16px', marginBottom: '32px' }}>
              <Sparkles style={{ width: '16px', height: '16px', color: '#059669' }} />
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#047857' }}>Now delivering to all of Oman</span>
            </div>
            
            {/* Headline */}
            <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: '32px' }}>
              Shop UAE.
              <br />
              <span style={{ background: 'linear-gradient(to right, #059669, #0891b2, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Delivered to Oman.
              </span>
            </h1>
            
            <p style={{ fontSize: '20px', color: '#52525b', lineHeight: 1.6, maxWidth: '640px', marginBottom: '40px' }}>
              10,000+ products from verified UAE suppliers. We handle customs, consolidation, and delivery to your door.
            </p>
            
            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
              <Link 
                href="/products"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#10b981', color: 'white', fontSize: '16px', fontWeight: 500, padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none', boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.25)' }}
              >
                Start Shopping
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </Link>
              <Link 
                href="#how" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#52525b', fontSize: '16px', fontWeight: 500, padding: '14px 24px', textDecoration: 'none' }}
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {/* Large card */}
            <div style={{ gridColumn: 'span 2', backgroundColor: 'white', borderRadius: '24px', padding: '40px', border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '64px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Truck style={{ width: '28px', height: '28px', color: '#059669' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#047857', backgroundColor: '#d1fae5', padding: '4px 12px', borderRadius: '9999px' }}>
                  2-4 days
                </span>
              </div>
              <h3 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '12px', color: '#18181b' }}>Lightning fast delivery</h3>
              <p style={{ fontSize: '18px', color: '#52525b', maxWidth: '400px' }}>
                From Dubai warehouses to your doorstep in Oman. Faster than you'd expect.
              </p>
            </div>
            
            {/* Stats card */}
            <div style={{ background: 'linear-gradient(to bottom right, #10b981, #06b6d4)', color: 'white', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
              <div style={{ fontSize: '60px', fontWeight: 700 }}>500+</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>Verified suppliers</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>Vetted for quality & reliability</div>
              </div>
            </div>
            
            {/* Protection card */}
            <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', border: '1px solid #e5e7eb' }}>
              <Shield style={{ width: '40px', height: '40px', marginBottom: '32px', color: '#10b981' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: '#18181b' }}>Buyer protection</h3>
              <p style={{ color: '#52525b' }}>
                Full refund if items aren't as described. No questions asked.
              </p>
            </div>
            
            {/* Consolidation card */}
            <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', border: '1px solid #e5e7eb' }}>
              <Package style={{ width: '40px', height: '40px', marginBottom: '32px', color: '#06b6d4' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: '#18181b' }}>Order consolidation</h3>
              <p style={{ color: '#52525b' }}>
                Multiple suppliers, one shipment. Save up to 40% on shipping.
              </p>
            </div>
            
            {/* Customs card */}
            <div style={{ background: 'linear-gradient(to bottom right, #fef3c7, #ffedd5)', borderRadius: '24px', padding: '40px', border: '1px solid #fde68a' }}>
              <div style={{ fontSize: '40px', marginBottom: '24px' }}>🛃</div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: '#18181b' }}>Customs? Handled.</h3>
              <p style={{ color: '#52525b' }}>
                We manage all paperwork and clearance. Zero hassle for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ padding: '96px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '16px', color: '#18181b' }}>
              Simple as 1, 2, 3, 4
            </h2>
            <p style={{ fontSize: '20px', color: '#52525b' }}>No complexity. Just results.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              { num: '01', title: 'Browse', desc: 'Explore 10,000+ products across categories', color: '#8b5cf6' },
              { num: '02', title: 'Order', desc: 'Pay by card, transfer, or cash on delivery', color: '#3b82f6' },
              { num: '03', title: 'We ship', desc: 'Consolidation & customs fully handled', color: '#10b981' },
              { num: '04', title: 'Receive', desc: 'Delivered to your door across Oman', color: '#f59e0b' },
            ].map((step, i) => (
              <div key={i}>
                <div style={{ fontSize: '72px', fontWeight: 900, color: step.color, opacity: 0.3, marginBottom: '16px' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: '#18181b' }}>{step.title}</h3>
                <p style={{ color: '#52525b' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '16px', color: '#18181b' }}>
                What you can buy
              </h2>
              <p style={{ fontSize: '20px', color: '#52525b' }}>Everything you need, from UAE to Oman</p>
            </div>
            <Link 
              href="/categories"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 500, textDecoration: 'none' }}
            >
              View all categories
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
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
                style={{ display: 'block', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none' }}
              >
                <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', backgroundColor: '#f4f4f5' }}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ fontWeight: 600, fontSize: '18px', marginBottom: '4px', color: '#18181b' }}>{cat.name}</div>
                  <div style={{ color: '#71717a', fontSize: '14px' }}>{cat.count}+ items</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(to bottom right, #10b981, #06b6d4)', borderRadius: '40px', padding: '80px' }}>
            {/* Background decoration */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(60px)' }} />
            <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(60px)' }} />
            
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                Ready to start?
              </h2>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', maxWidth: '560px', marginBottom: '40px' }}>
                Join thousands of happy customers across Oman. No fees, no minimum orders, no hassle.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
                <Link 
                  href="/signup"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: 'white', color: '#059669', fontWeight: 600, padding: '16px 32px', borderRadius: '9999px', textDecoration: 'none' }}
                >
                  Create Free Account
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </Link>
                <Link 
                  href="/products"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'white', fontWeight: 600, padding: '16px 32px', borderRadius: '9999px', border: '2px solid rgba(255,255,255,0.3)', textDecoration: 'none' }}
                >
                  Browse Products
                </Link>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check style={{ width: '20px', height: '20px' }} />
                  No membership fees
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check style={{ width: '20px', height: '20px' }} />
                  Cash on delivery
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check style={{ width: '20px', height: '20px' }} />
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
