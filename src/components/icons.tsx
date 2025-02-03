import { Button } from "@/components/ui/button"

interface IconItemProps {
  title: string
  description: string
  imageSrc: string
}

function IconItem({ title, description, imageSrc }: IconItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function Icon() {
  const items = [
    {
      title: "Treated Area:",
      description: "Facial areas to treat acne scars and pigmentation.",
      imageSrc: "/img/face.png", // Replace with your image path
    },
    {
      title: "Duration:",
      description: "Less than an hour.",
      imageSrc: "/img/clock.png", // Replace with your image path
    },
    {
      title: "Frequency:",
      description: "1 session per month.",
      imageSrc: "/img/freq.png", // Replace with your image path
    },
    {
      title: "Downtime:",
      description: "Minimal",
      imageSrc: "/img/break.png", // Replace with your image path
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"> {/* Reduced the gap here */}
        {items.map((item, index) => (
          <IconItem key={index} title={item.title} description={item.description} imageSrc={item.imageSrc} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="bg-[#2F5649] hover:bg-[#2F5649]/90 text-white px-8 py-6 text-lg w-full max-w-md">
          Book an Appointment
        </Button>
      </div>
    </div>
  )
}
