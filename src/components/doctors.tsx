import Image from "next/image";

interface Doctor {
  name: string;
  title: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    name: "DR. ARIS",
    title: "Medical Aesthetic Doctor",
    image: "/img/aris.png",
  },
  {
    name: "DR. PREETHA",
    title: "Medical Aesthetic Doctor",
    image: "/img/preetha.png",
  },
  {
    name: "DR. ASHVINIA",
    title: "Medical Aesthetic Doctor",
    image: "/img/ashvinia.jpg",
  },
  {
    name: "DR. CHARMAINE",
    title: "Medical Aesthetic Doctor",
    image: "/img/charmaine.png",
  },
];

export default function DoctorsSection() {
  return (
    <section className="w-full mb-20 mt-12">
      <div className="flex justify-center">
        <div className="bg-[#2F4F4F] p-4 w-[1400px] text-center">
          <h2 className="text-white text-2xl font-medium">Meet Our Doctors</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                {doctor.name}
              </h3>
              <p className="text-gray-500 text-center">{doctor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
