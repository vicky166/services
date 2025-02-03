import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function BeforeAfter() {
  // List of different image paths
  const imagePaths = [
    "/img/eyes.webp", // Image for index 1
    "/img/secondeye.jpg", // Image for index 2
    "/img/thirdeye.jpg", // Image for index 3
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Before & After Images</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {imagePaths.map((src, index) => (
          <div key={index} className="space-y-4">
            <Card className="overflow-hidden relative group">
              <CardContent className="p-0">
                <Image
                  src={src}  // Dynamically set the image source
                  alt={`Before and after comparison ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <div className="flex gap-2">
                      <button className="hover:text-gray-600">&larr;</button>
                      <button className="hover:text-gray-600">&rarr;</button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-md text-sm font-medium shadow-sm">After</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white px-3 py-1 rounded-md text-sm font-medium shadow-sm">Before</span>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-sm text-gray-600">
              The above pictures are for illustration purposes only. Your results may vary.
            </p>
          </div>
        ))}
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
