import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-lg text-zinc-900">GulfMart</span>
            </div>
            <p className="text-sm text-zinc-600 mb-6 max-w-xs">
              Shop 10,000+ products from verified UAE suppliers. We handle customs, consolidation, and delivery to Oman.
            </p>
            <div className="space-y-2 text-sm text-zinc-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@gulfmart.com" className="hover:text-emerald-600">
                  support@gulfmart.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+968 9XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Muscat, Oman</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-900 mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><Link href="/products" className="hover:text-emerald-600 transition-colors">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-emerald-600 transition-colors">Categories</Link></li>
              <li><Link href="/products?sale=true" className="hover:text-emerald-600 transition-colors">On Sale</Link></li>
              <li><Link href="/products?new=true" className="hover:text-emerald-600 transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><Link href="/help" className="hover:text-emerald-600 transition-colors">Help Center</Link></li>
              <li><Link href="/shipping" className="hover:text-emerald-600 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-emerald-600 transition-colors">Returns</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><Link href="/about" className="hover:text-emerald-600 transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-600 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} GulfMart. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span>We accept:</span>
              <div className="flex items-center gap-1">
                <span className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-medium">Visa</span>
                <span className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-medium">Mastercard</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded text-xs font-medium">COD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
