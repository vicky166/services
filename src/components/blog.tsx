import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title:
      "Pico Laser: The Non-Invasive Solution for Skin Tightening and Acne Scar Removal",
    excerpt:
      "The perfect skin of a young adult is on many people's wish lists in Malaysia....",
    image: "/img/card1.webp",
  },
  {
    title: "PICO LASER MALAYSIA 2025: PRICE AND EVALUATIONS",
    excerpt:
      "START YOUR PICO JOURNEY NOW! If you're considering Pico Laser treatment, it's essential to understand...",
    image: "/img/card2.webp",
  },
  {
    title: "Media Review on Fractional CO2 Laser Treatment by Cosmopolitan",
    excerpt:
      "Nana, editor of Cosmopolitan visited Mediviron UOA Clinic for media review on Fractional CO2 Laser...",
    image: "",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full mb-20 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Related Blogs
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[80%] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            >
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
