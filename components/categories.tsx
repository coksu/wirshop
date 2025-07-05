import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2 } from "lucide-react"

const categories = [
  { name: "Smartphone", icon: Smartphone, color: "bg-blue-100 text-blue-600" },
  { name: "Laptop", icon: Laptop, color: "bg-green-100 text-green-600" },
  { name: "Audio", icon: Headphones, color: "bg-purple-100 text-purple-600" },
  { name: "Smartwatch", icon: Watch, color: "bg-orange-100 text-orange-600" },
  { name: "Kamera", icon: Camera, color: "bg-red-100 text-red-600" },
  { name: "Gaming", icon: Gamepad2, color: "bg-indigo-100 text-indigo-600" },
]

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kategori Produk</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
