"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"

export function Header() {
  const { items } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ShopModern
          </Link>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Cari produk..." className="pl-10" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <Link href="/products" className="hover:text-blue-600 transition-colors">
              Produk
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              Tentang
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Cari produk..." className="pl-10" />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Beranda
                </Link>
                <Link href="/products" className="hover:text-blue-600 transition-colors">
                  Produk
                </Link>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  Tentang
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
