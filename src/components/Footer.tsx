import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="/about" className="hover:text-zinc-900 transition-colors">About us</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-zinc-900 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="/help" className="hover:text-zinc-900 transition-colors">Help Center</Link></li>
              <li><Link href="/shipping" className="hover:text-zinc-900 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-zinc-900 transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>support@gulfmart.com</li>
              <li>+968 1234 5678</li>
              <li>Muscat, Oman</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-zinc-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-semibold text-lg">GulfMart</span>
          </div>
          
          <p className="text-sm text-zinc-400">
            © 2025 GulfMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
