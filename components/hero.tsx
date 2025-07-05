import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Belanja Online Terbaik</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Temukan produk berkualitas dengan harga terjangkau. Pengalaman berbelanja yang mudah dan menyenangkan.
        </p>
        <Link href="/products">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Mulai Belanja
          </Button>
        </Link>
      </div>
    </section>
  )
}
