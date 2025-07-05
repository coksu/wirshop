import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ShopModern</h3>
            <p className="text-gray-400 mb-4">
              Platform belanja online terpercaya dengan produk berkualitas dan pelayanan terbaik.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-pink-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Smartphone
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Laptop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Gaming
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cara Belanja
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Kebijakan Return
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@shopmodern.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ShopModern. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
