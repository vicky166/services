import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      name: "Kumar Raj",
      text: "I had CO2 laser resurfacing for acne scars. It was effective, and the laser treatment cost was also very affordable.",
      rating: 5,
    },
    {
      name: "Mai Lin",
      text: "I can't even tell you the fractional laser benefits, as this was my second session, and I already loved my skin.",
      rating: 5,
    },
    {
      name: "Linh Nguyen",
      text: "The CO2 laser resurfacing treatment I received at a Nexus clinic was highly effective. It significantly reduced my acne scars, and my skin felt rejuvenated.",
      rating: 5,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Client`&apos;`s Reviews</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {reviews.map((review, index) => (
          <Card key={index} className="border border-gray-100">
            <CardContent className="p-6 space-y-8 text-lg">
              <h3 className="font-semibold text-sm text-end">{review.name}</h3>
              <p className="text-gray-600 text-start">{review.text}</p>
              <div className="flex justify-start">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2F4F4F] text-[#2F4F4F]" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white px-8 py-6 text-lg w-full md:w-auto">
          Book an Appointment
        </Button>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-white text-gray-700 shadow-lg hover:bg-gray-100 flex items-center gap-2 pr-4">
          <WhatsappIcon className="w-6 h-6 text-green-500" />
          <span className="text-sm">Claim RM100 Voucher</span>
          <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">   
            
          </span>
        </Button>
      </div>
    </div>
  )
}

