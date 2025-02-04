import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LaserTreatmentPage() {
  return (
    <div className="min-h-screen">
      <nav className="p-4 text-sm">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-blue-500 hover:underline">
            Nexus clinic
          </Link>
          <span className="text-gray-500">&gt;</span>
          <Link href="/services" className="text-blue-500 hover:underline">
            Our services
          </Link>
          <span className="text-gray-500">&gt;</span>
          <Link href="/services/face" className="text-blue-500 hover:underline">
            Face
          </Link>
          <span className="text-gray-500">&gt;</span>
          <span className="text-gray-600">Fractional Laser Resurfacing</span>
        </div>
      </nav>

      <div
        className="relative min-h-[80vh] flex flex-col items-center justify-center text-center p-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/girl.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
          Expert Fractional Laser Treatments in Kuala Lumpur, Malaysia
        </h1>
        <p className="text-xl text-white mb-8 max-w-3xl">
          Fractional CO2 Laser Treatment reduces fine lines, wrinkles, sun
          damage, traumatic scars, and other skin-related issues.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            size="lg"
            className="bg-[#2F5649] hover:bg-[#2F5649]/90 text-white px-8 py-6 text-lg"
          >
            Book an Appointment
          </Button>
          <Button
            size="lg"
            className="bg-[#2F5649] hover:bg-[#2F5649]/90 text-white px-8 py-6 text-lg"
          >
            Get in Touch
          </Button>
        </div>

        <Card className="absolute -bottom-12 bg-gradient-to-r from-[#3498db] to-[#2ecc71] text-white p-6 rounded-xl flex items-center gap-4 shadow-lg">
          <div className="rounded-full bg-white/20 p-2">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 1 0-1.41-1.41z" />
            </svg>
          </div>
          <div>
            <span className="text-3xl font-bold">449</span>
            <p className="text-lg">
              Satisfied clients have chosen this treatment.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
