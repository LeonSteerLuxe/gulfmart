import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Package, Truck, CreditCard, RefreshCw, HelpCircle, MessageCircle, Mail, Phone, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Help Center - GulfMart',
  description: 'Get help with your GulfMart orders, shipping, returns, and more',
};

const faqCategories = [
  {
    icon: Package,
    title: 'Orders',
    questions: [
      { q: 'How do I track my order?', a: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account dashboard.' },
      { q: 'Can I modify my order?', a: 'You can modify your order within 2 hours of placing it. After that, please contact support.' },
      { q: 'What payment methods do you accept?', a: 'We accept cash on delivery, credit/debit cards (Visa, Mastercard, AMEX), and bank transfers.' },
    ],
  },
  {
    icon: Truck,
    title: 'Shipping',
    questions: [
      { q: 'How long does delivery take?', a: 'Standard delivery to Oman takes 2-4 business days from UAE. Express shipping is available for 1-2 day delivery.' },
      { q: 'Do you ship to all of Oman?', a: 'Yes! We deliver to all regions including Muscat, Dhofar, Al Batinah, Ash Sharqiyah, and more.' },
      { q: 'Is shipping free?', a: 'Shipping is free on orders over $100. For smaller orders, shipping costs $15.' },
    ],
  },
  {
    icon: RefreshCw,
    title: 'Returns',
    questions: [
      { q: 'What is your return policy?', a: 'You can return most items within 7 days of delivery for a full refund. Items must be unused and in original packaging.' },
      { q: 'How do I start a return?', a: 'Go to your order history, select the item you want to return, and follow the instructions. We\'ll arrange pickup.' },
      { q: 'When will I get my refund?', a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item.' },
    ],
  },
  {
    icon: CreditCard,
    title: 'Payments',
    questions: [
      { q: 'Is my payment information secure?', a: 'Yes, we use industry-standard encryption to protect your payment information. We never store your full card details.' },
      { q: 'Can I pay cash on delivery?', a: 'Yes! Cash on delivery is available for all orders in Oman. Just select COD at checkout.' },
      { q: 'What currencies do you accept?', a: 'Prices are shown in USD. You can pay in OMR or AED - the conversion is done automatically.' },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
            <p className="text-zinc-500 text-lg">Find answers to common questions or contact our support team</p>
          </div>

          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Link href="/shipping" className="bg-white p-6 rounded-2xl border border-zinc-200 text-center hover:border-emerald-500 hover:shadow-lg transition-all">
              <Truck className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <span className="font-medium">Shipping Info</span>
            </Link>
            <Link href="/products" className="bg-white p-6 rounded-2xl border border-zinc-200 text-center hover:border-emerald-500 hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <span className="font-medium">Track Order</span>
            </Link>
            <Link href="/contact" className="bg-white p-6 rounded-2xl border border-zinc-200 text-center hover:border-emerald-500 hover:shadow-lg transition-all">
              <MessageCircle className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <span className="font-medium">Contact Us</span>
            </Link>
            <Link href="/terms" className="bg-white p-6 rounded-2xl border border-zinc-200 text-center hover:border-emerald-500 hover:shadow-lg transition-all">
              <HelpCircle className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <span className="font-medium">Policies</span>
            </Link>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
                <div className="p-6 border-b border-zinc-100 flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-emerald-500" />
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                <div className="divide-y divide-zinc-100">
                  {category.questions.map((faq, i) => (
                    <details key={i} className="group">
                      <summary className="p-6 cursor-pointer flex items-center justify-between hover:bg-zinc-50">
                        <span className="font-medium pr-4">{faq.q}</span>
                        <ChevronRight className="w-5 h-5 text-zinc-400 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 text-zinc-600">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Still need help?</h2>
              <p className="text-white/80">Our support team is here to assist you</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-sm text-white/70">Available 9am-9pm GST</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-white/70">support@gulfmart.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-sm text-white/70">+968 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
