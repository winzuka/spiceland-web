import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            About Spiceland
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for authentic flavors and sustainable
            practices, Spiceland brings you the {`world's`} finest organic spices
            from farm to table.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Spiceland was born from a simple belief: that great food starts
                with great ingredients. Our journey began when our founder,
                traveling through spice-growing regions around the world,
                discovered the incredible difference that truly fresh, properly
                processed spices could make.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a small operation sourcing spices for local
                restaurants has grown into a trusted partner for home cooks,
                professional chefs, and food manufacturers who demand nothing
                but the best.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we work directly with farmers and suppliers across six
                continents, ensuring that every spice meets our rigorous
                standards for quality, purity, and sustainability.
              </p>
            </div>
            <div className="relative h-96 w-160 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                <Image
                  src="/about-img.jpeg" // Replace with your image path
                  alt="Organic Spices"
                  fill
                  className="object-cover"
                  priority // Optional: for above-the-fold images
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-green-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To provide the {`world's`} finest organic spices while supporting
              sustainable farming practices and fair trade partnerships that
              benefit everyone in our supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Quality First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every batch undergoes rigorous testing to ensure the highest
                standards of purity, potency, and flavor integrity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with farms that use environmentally responsible
                practices and support biodiversity conservation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Fair Trade
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure our farming partners receive fair compensation and
                support for their communities and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From seed to shelf, we maintain complete control over quality and
              freshness through our carefully managed supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Sourcing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Direct partnerships with certified organic farms in optimal
                growing regions worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Processing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                State-of-the-art cleaning, drying, and processing facilities
                that preserve natural oils and flavors.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Quality Control
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive testing for purity, potency, and contamination at
                multiple stages.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Packaging
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protective packaging that maintains freshness and extends shelf
                life during transport and storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-green-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals who make {`Spiceland's`} mission
              possible, from our sourcing experts to our quality assurance
              specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-green-800">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Winshuka Kannangara
              </h3>
              <p className="text-green-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With extensive experience in spice sourcing and quality,
                Winshuka ensures every Spiceland spice delivers freshness,
                flavor, and authenticity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-green-800">👩‍🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Sudheera Akalanka
              </h3>
              <p className="text-green-600 mb-3">Co-Founder</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                A food scientist with expertise in spice chemistry and quality
                assurance, ensuring every product meets our standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-green-800">👨‍🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Vishwa Kannangara
              </h3>
              <p className="text-green-600 mb-3">Co-Founder</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our field expert who maintains relationships with farmers
                worldwide and ensures sustainable sourcing practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality and safety is backed by internationally
              recognized certifications and adherence to the highest industry
              standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <div className="text-3xl text-green-600 mb-2">🌿</div>
                <h3 className="font-semibold text-green-800">-</h3>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <div className="text-3xl text-green-600 mb-2">✅</div>
                <h3 className="font-semibold text-green-800">-</h3>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <div className="text-3xl text-green-600 mb-2">🤝</div>
                <h3 className="font-semibold text-green-800">-</h3>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <div className="text-3xl text-green-600 mb-2">🛡️</div>
                <h3 className="font-semibold text-green-800">-</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
