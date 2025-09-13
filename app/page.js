"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-screen flex items-center justify-center bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0"></div>
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <img
  src="/logo.png"
  alt="Spiceland Logo"
  className="mx-auto mb-6 w-auto h-auto max-w-[200px]"
/>

    <p className="text-xl md:text-2xl text-black mb-6 leading-relaxed">
      Premium Quality Spices from {`Nature's`} Garden
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/products"
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
      >
        Explore Our Spices
      </Link>
      <Link
        href="/about"
        className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
      >
        Learn More
      </Link>
    </div>
  </div>
</section>

      {/* About Us Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                About Spiceland
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Spiceland was founded with a passion for bringing the {`world's`}
                finest organic spices directly to your kitchen. We work closely
                with local farmers and suppliers to ensure that every spice
                meets our high standards for quality, purity, and
                sustainability.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our commitment to organic farming practices and traditional
                processing methods ensures that you receive spices that are not
                only flavorful but also retain their natural nutritional
                benefits.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg"
              >
                Read Our Full Story
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/img1.png"
                alt="Organic Spices"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                className="object-cover"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-green-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Our Premium Spices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of organic spices, each
              one chosen for its exceptional quality and authentic flavor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ceylon Cinnamon",
                description: "Sweet and delicate true cinnamon from Sri Lanka",
                image: "/cinnamon.jpg", // Add your image path
              },
              {
                name: "Black Pepper",
                description: "Premium whole peppercorns with intense flavor",
                image: "/black-pepper.jpg",
              },
              {
                name: "Turmeric",
                description:
                  "Golden organic turmeric powder with health benefits",
                image: "/turmeric.jpg",
              },
              {
                name: "Cardamom",
                description:
                  "Aromatic green cardamom pods from mountain regions",
                image: "/cardamom.jpg",
              },
              {
                name: "Cloves",
                description: "Whole dried flower buds with warm, sweet flavor",
                image: "/cloves.jpg",
              },
              {
                name: "Star Anise",
                description:
                  "Distinctive star-shaped spice with licorice notes",
                image: "/star-anise.jpg",
              },
            ].map((spice, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64"
              >
                {/* Background Image */}
                <Image
                  src={spice.image}
                  alt={spice.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 
         (max-width: 768px) 50vw, 
         33vw"
                  className="object-cover"
                />

                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Text content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {spice.name}
                  </h3>
                  <p className="text-center leading-relaxed text-sm opacity-90">
                    {spice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From sourcing to processing, we provide comprehensive spice
              solutions for businesses and individual customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every batch undergoes rigorous quality testing to ensure
                  purity, potency, and safety standards are met.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Custom Packaging
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Flexible packaging options from bulk quantities to
                  retail-ready portions, tailored to your specific needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Global Sourcing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Direct relationships with farmers worldwide ensure authentic,
                  high-quality spices from their regions of origin.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Efficient logistics and packaging ensure your spices arrive
                  fresh and ready to enhance your culinary creations.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Cooking?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust Spiceland for their
            culinary adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Get In Touch
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
