import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-12">
        What is a Fractional CO2 Laser – How Does It Work?
      </h1>

      <div className="space-y-8 text-gray-700 text-sm">
        <p>
          Fractional CO2 laser treatment is an innovative method that uses laser
          energy microbeams to penetrate and break down skin tissue to eliminate
          skin scars, wrinkles, sun damage, fine lines, and more. The method
          provides immediate results and requires multiple sessions to achieve
          long-term benefits.
        </p>

        <p>
          The fractional laser CO2 treatment is a non-surgical procedure that
          helps reduce wrinkles, fine lines, and pigmentation. This{" "}
          <Link
            href="/laser-resurfacing-malaysia"
            className="text-blue-500 hover:underline"
          >
            laser resurfacing in Malaysia
          </Link>{" "}
          helps tighten skin and promote collagen production. The treatment is
          also effective in treating sun damage and acne scars.
        </p>

        <div className="flex justify-center my-10">
          <Button className="bg-[#2F5649] hover:bg-[#2F5649]/90 text-white mb-20 px-8 py-6 text-lg w-full max-w-md">
            Call To Our Doctor
          </Button>
        </div>

        <h2 className="text-3xl font-bold text-center   my-12">
          CO2 Laser Skin Resurfacing Treatment
        </h2>

        <p>
          <Link
            href="/laser-treatment"
            className="text-blue-500 hover:underline"
          >
            Laser treatment
          </Link>{" "}
          for acne scars helps your body heal naturally. It also helps create
          healthy tissue to treat the affected areas.
        </p>

        <p>
          The CO2 laser beam is fractionated into thousands of tiny shafts of
          light. The light penetrates the skin, causing it to repair and replace
          damaged skin with new tissue. This also helps to shrink existing
          collagen due to the heat.
        </p>

        <p>
          The duration of your CO2{" "}
          <Link
            href="/laser-resurfacing"
            className="text-blue-500 text-md hover:underline"
          >
            laser resurfacing
          </Link>{" "}
          before and after depends on how well you protect your skin from the
          sun and other aging factors. Applying sunscreen and wearing brimmed
          hats can maintain these effects for several years.
        </p>

        <p>
          <Link
            href="/laser-treatment-cost"
            className="text-blue-500 text-lg hover:underline italic"
          >
            Learn more about Laser Treatment Cost
          </Link>
        </p>
      </div>
    </div>
  );
}
