import Link from "next/link";

const categories = [
  { name: "Electronics", items: "3,200+", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop" },
  { name: "Tools & Hardware", items: "2,500+", image: "https://images.unsplash.com/photo-1581147036324-c17ac41f3f6f?w=400&h=300&fit=crop" },
  { name: "Auto Parts", items: "1,800+", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop" },
  { name: "Home & Garden", items: "2,100+", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
  { name: "Industrial", items: "950+", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop" },
  { name: "Office Supplies", items: "1,400+", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
  { name: "Sports & Fitness", items: "800+", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop" },
  { name: "Health & Safety", items: "600+", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00C9A7] rounded-lg flex items-center justify-center text-white font-bold text-sm">G</div>
          <span className="font-semibold text-lg">GulfMart</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm">Features</Link>
          <Link href="#how" className="text-gray-600 hover:text-gray-900 text-sm">How it works</Link>
          <Link href="#categories" className="text-gray-600 hover:text-gray-900 text-sm">Categories</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900 text-sm">Sign in</Link>
          <Link href="/signup" className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm mb-6">
          <span>🚚</span>
          <span>Now delivering to all of Oman</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Shop UAE.<br />
          <span className="text-[#00C9A7]">Delivered to Oman.</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-xl">
          10,000+ products from verified UAE suppliers. We handle customs, consolidation, and delivery to your door.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/signup" className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 inline-flex items-center gap-2 text-sm font-medium">
            Start shopping →
          </Link>
          <Link href="#how" className="text-gray-600 hover:text-gray-900 text-sm">See how it works</Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Lightning Fast - spans 2 cols */}
          <div className="bg-gray-50 rounded-2xl p-6 md:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-100 text-xl">⚡</div>
              <span className="text-[#00C9A7] font-medium text-sm">2-4 days</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning fast delivery</h3>
            <p className="text-gray-500 text-sm">From Dubai warehouses to your doorstep in Oman. Faster than you&apos;d expect.</p>
          </div>

          {/* Verified Suppliers */}
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="font-medium text-sm">Verified suppliers</div>
            <p className="text-gray-400 text-xs mt-1">Vetted for quality & reliability</p>
          </div>

          {/* Buyer Protection */}
          <div className="bg-[#00C9A7] text-white rounded-2xl p-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4 text-xl">🛡️</div>
            <h3 className="font-semibold mb-1">Buyer protection</h3>
            <p className="text-white/80 text-sm">Full refund if items aren&apos;t as described. No questions asked.</p>
          </div>

          {/* Order Consolidation */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-100 text-xl">📦</div>
            <h3 className="font-semibold mb-1">Order consolidation</h3>
            <p className="text-gray-500 text-sm">Multiple suppliers, one shipment. Save up to 40% on shipping.</p>
          </div>

          {/* Customs Handled */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-100 text-xl">🛃</div>
            <h3 className="font-semibold mb-1">Customs? Handled.</h3>
            <p className="text-gray-500 text-sm">We manage all paperwork and clearance. Zero hassle for you.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Simple as 1, 2, 3, 4</h2>
          <p className="text-gray-500">No complexity. Just results.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Browse", desc: "Explore 10,000+ products across categories" },
            { num: "02", title: "Order", desc: "Pay by card, transfer, or cash on delivery" },
            { num: "03", title: "We ship", desc: "Consolidation & customs fully handled" },
            { num: "04", title: "Receive", desc: "Delivered to your door across Oman" },
          ].map((step) => (
            <div key={step.num} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-200 mb-3">{step.num}</div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">What you can buy</h2>
            <p className="text-gray-500">Everything you need, from UAE to Oman</p>
          </div>
          <Link href="/categories" className="text-gray-600 hover:text-gray-900 flex items-center gap-1 text-sm">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              href="/categories"
              className="group rounded-2xl overflow-hidden bg-gray-100 hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm">{cat.name}</h3>
                <p className="text-gray-400 text-xs">{cat.items} items</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to start?</h2>
          <p className="text-gray-400 mb-6 max-w-lg">Join thousands of happy customers across Oman. No fees, no minimum orders, no hassle.</p>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link href="/signup" className="bg-white text-gray-900 px-5 py-2.5 rounded-full hover:bg-gray-100 inline-flex items-center gap-2 text-sm font-medium">
              Create free account →
            </Link>
            <Link href="/contact" className="border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/10 text-sm">
              Talk to sales
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">✓ No membership fees</span>
            <span className="flex items-center gap-2">✓ Cash on delivery</span>
            <span className="flex items-center gap-2">✓ 7-day free returns</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#00C9A7] rounded flex items-center justify-center text-white text-xs font-bold">G</div>
            <span className="font-semibold text-sm">GulfMart</span>
          </Link>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-gray-900">About</Link>
            <Link href="/help" className="hover:text-gray-900">Help</Link>
            <Link href="/shipping" className="hover:text-gray-900">Shipping</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms</Link>
          </div>
          <p className="text-xs text-gray-400">© 2025 GulfMart</p>
        </div>
      </footer>
    </div>
  );
}
