import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - GulfMart',
  description: 'GulfMart Privacy Policy - How we collect, use, and protect your information',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-zinc max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-zinc-600 mb-4">
                GulfMart (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-zinc-600 mb-4">We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-4">
                <li>Name, email address, and phone number</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Order history and preferences</li>
                <li>Communications with our customer support team</li>
              </ul>
              <p className="text-zinc-600 mb-4">We also automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Browsing behavior on our platform</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-zinc-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about orders, products, and services</li>
                <li>Provide customer support</li>
                <li>Personalize your shopping experience</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Detect and prevent fraud</li>
                <li>Improve our platform and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
              <p className="text-zinc-600 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Suppliers and sellers to fulfill your orders</li>
                <li>Shipping and logistics partners</li>
                <li>Payment processors</li>
                <li>Service providers who assist our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-zinc-600 mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-zinc-600 mb-4">
                We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-zinc-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
              <p className="text-zinc-600 mb-4">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-zinc-600">
                If you have questions about this privacy policy or your data, please contact us at:
              </p>
              <p className="text-zinc-600 mt-2">
                Email: privacy@gulfmart.com<br />
                Address: Muscat, Oman
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
