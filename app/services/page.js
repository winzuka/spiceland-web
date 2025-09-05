import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Spice Processing & Cleaning",
      description:
        "State-of-the-art cleaning and processing facilities that remove impurities while preserving natural oils and flavors.",
      features: [
        "Advanced cleaning systems",
        "Temperature-controlled processing",
        "Moisture content optimization",
        "Foreign matter removal",
        "Color sorting technology",
      ],
      icon: "⚙️",
      image: "processing",
    },
    {
      id: 2,
      title: "Steam Sterilization",
      description:
        "European SAFESTERIL® technology for safe, effective sterilization that meets international food safety standards.",
      features: [
        "Chemical-free sterilization",
        "Pathogen elimination",
        "Flavor preservation",
        "Extended shelf life",
        "Export compliance",
      ],
      icon: "🔥",
      image: "sterilization",
    },
    {
      id: 3,
      title: "Custom Grinding & Milling",
      description:
        "Precision grinding with cooling systems to minimize volatile oil losses and maintain spice potency.",
      features: [
        "Multiple mesh sizes",
        "Cooling during grinding",
        "Oil retention technology",
        "Consistent particle size",
        "Custom specifications",
      ],
      icon: "⚡",
      image: "grinding",
    },
    {
      id: 4,
      title: "Quality Testing & Analysis",
      description:
        "Comprehensive laboratory testing for purity, potency, and safety using advanced analytical equipment.",
      features: [
        "Microbiological testing",
        "Chemical analysis",
        "Pesticide residue screening",
        "Heavy metal detection",
        "Nutritional profiling",
      ],
      icon: "🔬",
      image: "testing",
    },
    {
      id: 5,
      title: "Custom Packaging Solutions",
      description:
        "Flexible packaging options from bulk quantities to retail-ready portions, tailored to your specific requirements.",
      features: [
        "Bulk packaging (25kg, 50kg bags)",
        "Retail packaging (bottles, pouches)",
        "Private labeling",
        "Custom branding",
        "Protective barrier materials",
      ],
      icon: "📦",
      image: "packaging",
    },
    {
      id: 6,
      title: "Global Sourcing Network",
      description:
        "Direct relationships with certified farmers worldwide, ensuring authentic, high-quality spices from their regions of origin.",
      features: [
        "Direct farmer partnerships",
        "Origin verification",
        "Seasonal sourcing",
        "Quality pre-screening",
        "Sustainable practices",
      ],
      icon: "🌍",
      image: "sourcing",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description:
        "We discuss your specific requirements, quality standards, and delivery timelines.",
      icon: "💬",
    },
    {
      step: 2,
      title: "Sourcing",
      description:
        "Our experts source the finest spices from certified suppliers from Sri Lanka.",
      icon: "🔍",
    },
    {
      step: 3,
      title: "Processing",
      description:
        "Advanced processing and sterilization while maintaining natural properties.",
      icon: "⚙️",
    },
    {
      step: 4,
      title: "Quality Control",
      description:
        "Rigorous testing and quality assurance at every stage of processing.",
      icon: "✅",
    },
    {
      step: 5,
      title: "Packaging",
      description:
        "Custom packaging solutions that preserve freshness and meet your specifications.",
      icon: "📦",
    },
    {
      step: 6,
      title: "Delivery",
      description:
        "Timely delivery with full documentation and quality certificates.",
      icon: "🚚",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            From sourcing to final packaging, we provide comprehensive spice
            processing solutions that meet the highest international standards.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Complete Spice Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art facilities and expert team provide end-to-end
              spice processing services for businesses of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row gap-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-green-800">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-green-800 mb-4 md:hidden">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-green-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial consultation to final delivery, we follow a
              systematic approach to ensure quality and satisfaction at every
              step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-lg p-6 shadow-lg relative"
              >
                <div className="absolute -top-4 left-6 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="pt-4">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Advanced Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We invest in cutting-edge equipment and technology to deliver
              superior results while maintaining the natural integrity of
              spices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">
                SAFESTERIL® Steam Sterilization
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our European SAFESTERIL® technology uses continuous steam
                sterilization to eliminate pathogens while preserving the
                natural properties of spices. This chemical-free process ensures
                food safety without compromising quality.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-0.5"
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
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Electrically Heated Screw System
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Precise temperature control for consistent results
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-0.5"
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
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Continuous Process Design
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Efficient, high-capacity processing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-0.5"
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
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Automated Control Systems
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Precise monitoring and quality assurance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8">
              <div className="text-center">
                <div className="text-8xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Modern Facility
                </h3>
                <p className="text-green-700">
                  50,000 sq ft processing facility with climate-controlled
                  environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your spice processing requirements and
            discover how we can help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94722696737"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              {/* WhatsApp Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.85 11.85 0 0012 .6 11.38 11.38 0 00.6 12a11.28 11.28 0 001.65 5.9L.6 24l6.6-1.74a11.76 11.76 0 005.4 1.32 11.38 11.38 0 0011.4-11.4 11.66 11.66 0 00-3.48-8.7zM12 21.6a9.5 9.5 0 01-4.86-1.32l-.36-.18-3.9 1.08 1.08-3.78-.24-.36a9.49 9.49 0 01-1.56-5.22 9.72 9.72 0 0116.56-6.9A9.49 9.49 0 0121.6 12a9.62 9.62 0 01-9.6 9.6zm5.34-7.14c-.3-.18-1.74-.9-2.04-1-.3-.12-.54-.18-.78.18-.24.3-.9 1-.96 1.08-.18.18-.36.18-.66.06-.3-.18-1.26-.48-2.4-1.5-.9-.78-1.5-1.74-1.68-2.04-.18-.3 0-.48.12-.66.12-.12.3-.36.42-.54.12-.18.18-.3.3-.48.12-.18.06-.36 0-.54-.06-.18-.78-1.86-1.08-2.52-.3-.66-.54-.54-.78-.54h-.66c-.18 0-.54.06-.84.36-.3.3-1.14 1.08-1.14 2.64s1.2 3.06 1.38 3.24c.18.24 2.34 3.54 5.7 4.92.78.3 1.38.48 1.86.66.78.24 1.5.18 2.04.12.66-.12 2.04-.84 2.34-1.62.3-.78.3-1.44.18-1.62-.12-.18-.3-.24-.6-.42z" />
              </svg>
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
