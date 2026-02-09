import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - GulfMart',
  description: 'GulfMart Terms of Service - Rules and guidelines for using our platform',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-zinc-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-zinc max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-600 mb-4">
                By accessing or using GulfMart, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <p className="text-zinc-600 mb-4">
                You must be at least 18 years old to use GulfMart. By using our platform, you represent that you meet this requirement and have the legal capacity to enter into these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
              <p className="text-zinc-600 mb-4">
                To make purchases, you may need to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Products and Pricing</h2>
              <p className="text-zinc-600 mb-4">
                All products are sold by third-party suppliers through our marketplace. While we strive for accuracy:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Product descriptions and images may vary from actual products</li>
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to correct pricing errors</li>
                <li>Availability is not guaranteed until order confirmation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Orders and Payment</h2>
              <p className="text-zinc-600 mb-4">
                By placing an order, you agree to pay the total amount including product price, shipping, and applicable taxes. We accept:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Cash on delivery (COD)</li>
                <li>Credit and debit cards</li>
                <li>Bank transfers</li>
              </ul>
              <p className="text-zinc-600 mt-4">
                We reserve the right to refuse or cancel orders for any reason, including suspected fraud.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Shipping and Delivery</h2>
              <p className="text-zinc-600 mb-4">
                We facilitate shipping from UAE suppliers to Oman. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Customs clearance processes</li>
                <li>Incorrect shipping addresses</li>
                <li>Force majeure events</li>
                <li>Carrier delays</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
              <p className="text-zinc-600 mb-4">
                Our return policy allows returns within 7 days of delivery for most items. Items must be:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Unused and in original condition</li>
                <li>In original packaging</li>
                <li>Accompanied by proof of purchase</li>
              </ul>
              <p className="text-zinc-600 mt-4">
                Some items may be non-returnable due to hygiene or safety reasons.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Buyer Protection</h2>
              <p className="text-zinc-600 mb-4">
                We offer buyer protection on all purchases. If you receive an item that is:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Significantly different from the description</li>
                <li>Damaged during shipping</li>
                <li>Not received within the guaranteed timeframe</li>
              </ul>
              <p className="text-zinc-600 mt-4">
                You may be eligible for a full refund under our buyer protection program.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="text-zinc-600 mb-4">
                To the maximum extent permitted by law, GulfMart shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform or products purchased through it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p className="text-zinc-600 mb-4">
                These terms are governed by the laws of the Sultanate of Oman. Any disputes shall be resolved in the courts of Oman.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
              <p className="text-zinc-600">
                For questions about these terms, please contact us at:
              </p>
              <p className="text-zinc-600 mt-2">
                Email: legal@gulfmart.com<br />
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
