"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react"
import Image from "next/image"
import { products } from "@/lib/data"
import { useCart } from "@/hooks/use-cart"
import { toast } from "sonner"
import { notFound } from "next/navigation"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    toast.success(`${quantity} ${product.name} ditambahkan ke keranjang`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
            {product.discount && <Badge className="absolute top-4 left-4 bg-red-500">-{product.discount}%</Badge>}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {product.rating} ({product.reviews} ulasan)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-blue-600">Rp {product.price.toLocaleString("id-ID")}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>
            {product.discount && (
              <p className="text-green-600 font-semibold">
                Hemat Rp {((product.originalPrice || 0) - product.price).toLocaleString("id-ID")}
              </p>
            )}
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Deskripsi Produk</h3>
              <p className="text-gray-600">{product.description}</p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Jumlah:</span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button onClick={handleAddToCart} className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Tambah ke Keranjang
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Informasi Pengiriman</h3>
              <div className="space-y-2 text-sm">
                <p>🚚 Gratis ongkir untuk pembelian di atas Rp 100.000</p>
                <p>📦 Estimasi pengiriman 1-3 hari kerja</p>
                <p>🔄 Garansi 30 hari uang kembali</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
