'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductById, getProductsByCategory, products } from '@/lib/data';
import { addToCart } from '@/lib/cart';
import { Star, Truck, Shield, Package, Minus, Plus, ShoppingCart, Heart, Share2, ChevronRight, MapPin, Check } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-16 px-6 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-2">Product not found</h1>
          <p className="text-zinc-500 mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products" className="text-emerald-600 hover:underline">
            Browse all products
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
            <Link href="/" className="hover:text-zinc-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-zinc-900">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/products?category=${product.category}`} className="hover:text-zinc-900 capitalize">
              {product.category.replace('-', ' ')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-900 truncate max-w-[200px]">{product.name}</span>
          </nav>

          {/* Product Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square relative overflow-hidden bg-zinc-100 rounded-3xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {discount > 0 && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    -{discount}% OFF
                  </span>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="p-3 bg-white rounded-full shadow-lg hover:bg-zinc-50 transition-colors">
                  <Heart className="w-5 h-5 text-zinc-600" />
                </button>
                <button className="p-3 bg-white rounded-full shadow-lg hover:bg-zinc-50 transition-colors">
                  <Share2 className="w-5 h-5 text-zinc-600" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div>
              {/* Seller */}
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{product.seller} • {product.sellerLocation}</span>
              </div>

              {/* Name */}
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'fill-zinc-200 text-zinc-200'}`} 
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-zinc-400">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-zinc-400 line-through">${product.originalPrice}</span>
                    <span className="text-emerald-600 font-medium">Save ${product.originalPrice - product.price}</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-zinc-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <Truck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span>{product.deliveryDays} days delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <Shield className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span>Buyer protection</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <Package className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span>Free returns</span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span className="text-emerald-600 font-medium">In Stock</span>
                  </>
                ) : (
                  <span className="text-red-500 font-medium">Out of Stock</span>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-zinc-200 rounded-xl">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-zinc-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-zinc-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-medium transition-all ${
                    addedToCart 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                  } disabled:bg-zinc-100 disabled:text-zinc-400 disabled:cursor-not-allowed`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="flex-1 bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
