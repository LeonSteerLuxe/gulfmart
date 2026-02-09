'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Truck } from 'lucide-react';
import { Product } from '@/lib/data';
import { addToCart } from '@/lib/cart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <Link 
      href={`/products/${product.id}`}
      className="group bg-white border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-zinc-200/50 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-square relative overflow-hidden bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <span className="text-zinc-500 font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Seller */}
        <p className="text-xs text-zinc-400 mb-1">{product.seller}</p>
        
        {/* Name */}
        <h3 className="font-medium text-zinc-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-zinc-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-bold text-zinc-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-zinc-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Delivery */}
        <div className="flex items-center gap-1 text-xs text-emerald-600 mb-3">
          <Truck className="w-3 h-3" />
          <span>{product.deliveryDays} days delivery</span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-2.5 rounded-xl font-medium hover:bg-zinc-800 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
