import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GulfMart – Shop UAE, Delivered to Oman",
  description: "10,000+ products from verified UAE suppliers. We handle customs, consolidation, and delivery to your door.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
