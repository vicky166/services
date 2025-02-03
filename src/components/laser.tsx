import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function Laser() {
  return (
    <div className="container mx-auto px-32 py-8 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Types Of Laser Treatments</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Deka Laser Treatment:</h2>
            <p className="text-gray-600 leading-relaxed">
              This treatment creates microscopic channels that go into the second layer of skin through the epidermis to
              boost collagen production and reduce age spots, wrinkles, acne scarring, and loose skin texture.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Fraxel Laser:</h2>
            <p className="text-gray-600 leading-relaxed">
              Fractional laser treatment also improves the quality of skin texture and tone. This advanced treatment
              works deeply into the skin to make it look younger and better from the outside. The process effectively
              treats acne scars, brown spots, sun damage, fine lines, and other skin issues.
            </p>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/img/laser.jpg"
              alt="Laser treatment procedure"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Button className="bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white px-8 py-6 text-lg">Call To Our Doctor</Button>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-white text-gray-700 shadow-lg hover:bg-gray-100 flex items-center gap-2 pr-4">
          <WhatsappIcon className="w-6 h-6 text-green-500" />
          <span className="text-sm">Claim RM100 Voucher</span>
          <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
            1
          </span>
        </Button>
      </div>
    </div>
  )
}

