import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const treatments = [
  "Fractional Laser",
  "Dermaroller",
  "Medlite C6 Laser",
  "Platelet Rich Plasma (PRP)",
  "Venus Freeze",
  "MesoLipo Fat Melting Injections",
  "Zeltiq Coolsculpting",
  "HCG Weight Loss Program",
  "Nexus Hair Implantation",
  "Female Laser Rejuvenation",
  "Tattoo Removal",
  "Dermal Fillers",
  "Skin Peel",
  "Non Surgical Threadlift",
  "Ion Magnum",
  "Candela Gentle YAG Laser",
];

export default function Footer() {
  return (
    <footer className="bg-[#2F4F4F] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm font-medium">
          {treatments.map((treatment, index) => (
            <div key={index}>• {treatment}</div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-400"></div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Image
            src="/img/logo.png"
            alt="Nexus Clinic Logo"
            width={200}
            height={80}
            className="invert"
          />
          <p className="max-w-2xl text-gray-300 text-sm leading-relaxed">
            Founded in 2001, Nexus Clinic is a top-notch aesthetic center,
            providing a comprehensive range of non-surgical aesthetic procedures
            and advanced laser treatments.
          </p>
          <p className="max-w-2xl text-gray-300 text-sm leading-relaxed">
            Nexus Clinic is dedicated to serve our clients' needs by providing
            confidential, professional and personalized aesthetic services to
            both local and regional market.
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
          <div>
            <h3 className="font-bold mb-2 text-white">
              Nexus Clinic Kuala Lumpur
            </h3>
            <p>
              LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
              Lumpur, Malaysia.
            </p>
          </div>
          <div>
            <p>Mobile: 016-7025699 / 03-21635699</p>
            <p>Main Line: +016-9215699</p>
          </div>
          <div>
            <p>
              <strong>Monday – Saturday:</strong> 9.00am to 6.00pm
            </p>
            <p>
              <strong>Sundays:</strong> Closed
            </p>
            <p>
              <strong>Public Holidays:</strong> Closed
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400"></div>

      <div className="container mx-auto px-6 py-6 flex flex-col items-start text-sm text-gray-300">
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-white">
            <Facebook size={30} className="text-blue-500" />
          </Link>
          <Link href="#" className="hover:text-white">
            <Instagram size={30} className="text-pink-500" />
          </Link>
        </div>
        <p>© 2024 Mozart Simfoni Sdn Bhd (1139843-D)</p>
        <div className="flex space-x-6 text-xl font-bold pt-2 lg:ml-[600px]">
          <Link href="#" className="hover:text-white">
            Terms Of Use
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
