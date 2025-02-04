import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneIcon as WhatsappIcon } from "lucide-react";

export default function Laser() {
  return (
    <div className="container mx-auto mb-20 px-4 md:px-8 lg:px-32 py-8 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Types Of Laser Treatments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Deka Laser Treatment:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This treatment creates microscopic channels that go into the
              second layer of skin through the epidermis to boost collagen
              production and reduce age spots, wrinkles, acne scarring, and
              loose skin texture.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Fraxel Laser:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Fractional laser treatment also improves the quality of skin
              texture and tone. This advanced treatment works deeply into the
              skin to make it look younger and better from the outside. The
              process effectively treats acne scars, brown spots, sun damage,
              fine lines, and other skin issues.
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
        <Button className="bg-[#2F4F4F] hover:bg-[#1a2e2e] text-white px-8 py-6 text-lg w-full md:w-auto">
          Call To Our Doctor
        </Button>
      </div>

      <div className="fixed bottom-6 right-6 z-50"></div>
    </div>
  );
}
