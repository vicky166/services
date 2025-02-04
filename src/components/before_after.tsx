import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneIcon as WhatsappIcon } from "lucide-react";

export default function BeforeAfter() {
  const imagePaths = [
    "/img/eyes.webp",
    "/img/secondeye.jpg",
    "/img/thirdeye.jpg",
  ];

  return (
    <div className="container mx-auto mb-20 px-4 md:px-8 lg:px-24 py-8 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Before & After Images
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {imagePaths.map((src, index) => (
          <div key={index} className="space-y-4">
            <Card className="overflow-hidden relative group">
              <CardContent className="p-0">
                <Image
                  src={src}
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
                  <span className="bg-white px-3 py-1 rounded-md text-sm font-medium shadow-sm">
                    After
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white px-3 py-1 rounded-md text-sm font-medium shadow-sm">
                    Before
                  </span>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-sm text-gray-600">
              The above pictures are for illustration purposes only. Your
              results may vary.
            </p>
          </div>
        ))}
      </div>

      <div className="fixed bottom-6 right-6 z-50"></div>
    </div>
  );
}
