import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Story of Ceylon Cinnamon",
      excerpt:
        "Discover why Ceylon cinnamon is considered the world's finest cinnamon variety.",
      image: "/blog/cinnamon.jpg",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Black Pepper: King of Spices",
      excerpt: "Learn about the spice that once was worth more than gold.",
      image: "/blog/black-pepper.jpg",
      date: "March 10, 2024",
    },
    {
      id: 3,
      title: "Health Benefits of Turmeric",
      excerpt: "The golden spice with amazing healing properties.",
      image: "/blog/turmeric.jpg",
      date: "March 5, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Stories about spices, their history, and health benefits.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{post.date}</div>

                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
