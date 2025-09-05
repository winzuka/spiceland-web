'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Spices' },
    { id: 'whole', name: 'Whole Spices' },
    { id: 'ground', name: 'Ground Spices' },
    { id: 'blends', name: 'Spice Blends' },
    { id: 'herbs', name: 'Herbs' },
    { id: 'seeds', name: 'Seeds' }
  ]

  const products = [
    {
      id: 1,
      name: 'Cinnamon',
      category: 'whole',
      price: '$12.99',
      description: 'Premium true cinnamon from Sri Lanka with sweet, delicate flavor',
      benefits: ['Rich in antioxidants', 'Anti-inflammatory', 'Blood sugar support'],
      origin: 'Sri Lanka',
      image: '/cinnamon.jpg',
    },
    {
      id: 2,
      name: 'Black Peppercorns',
      category: 'whole',
      price: '$8.99',
      description: 'Whole black pepper with intense, pungent flavor',
      benefits: ['Digestive aid', 'Antioxidant properties', 'Nutrient absorption'],
      origin: 'Sri Lanka',
      image: '/black-pepper.jpg',
      comingSoon: true 
    },
    {
      id: 3,
      name: 'Turmeric Powder',
      category: 'ground',
      price: '$10.99',
      description: 'Golden organic turmeric with earthy, slightly bitter taste',
      benefits: ['Anti-inflammatory', 'Immune support', 'Joint health'],
      origin: 'Sri Lanka',
      image: '/turmeric.jpg',
      comingSoon: true 
    },
    {
      id: 4,
      name: 'Green Cardamom',
      category: 'whole',
      price: '$24.99',
      description: 'Aromatic cardamom pods with sweet, floral notes',
      benefits: ['Digestive health', 'Fresh breath', 'Antioxidant rich'],
      origin: 'Sri Lanka',
      image: '/cardamom.jpg',
      comingSoon: true 
    },
    {
      id: 5,
      name: 'Cumin Seeds',
      category: 'seeds',
      price: '$6.99',
      description: 'Whole cumin seeds with warm, earthy flavor',
      benefits: ['Iron source', 'Digestive support', 'Immune boost'],
      origin: 'Sri Lanka',
      image: '/cumin.jpg',
      comingSoon: true 
    },
    {
      id: 6,
      name: 'Paprika Powder',
      category: 'ground',
      price: '$9.99',
      description: 'Sweet Hungarian paprika with vibrant red color',
      benefits: ['Vitamin C', 'Eye health', 'Antioxidant properties'],
      origin: 'Sri Lanka',
      image: '/paprika.jpg',
      comingSoon: true 
    },
    {
      id: 7,
      name: 'Star Anise',
      category: 'whole',
      price: '$15.99',
      description: 'Star-shaped spice with distinctive licorice flavor',
      benefits: ['Antiviral properties', 'Digestive aid', 'Respiratory health'],
      origin: 'Sri Lanka',
      image: '/star-anise.jpg',
      comingSoon: true 
    },
    {
      id: 8,
      name: 'Garam Masala',
      category: 'blends',
      price: '$11.99',
      description: 'Traditional Indian spice blend with warm, complex flavors',
      benefits: ['Metabolism boost', 'Digestive health', 'Warming properties'],
      origin: 'Sri Lanka',
      image: '/garam-masala.jpg',
      comingSoon: true 
    },
    {
      id: 9,
      name: 'Dried Oregano',
      category: 'herbs',
      price: '$7.99',
      description: 'Mediterranean oregano with robust, earthy flavor',
      benefits: ['Antibacterial', 'Antioxidant rich', 'Digestive support'],
      origin: 'Sri Lanka',
      image: '/oregano.jpg',
      comingSoon: true 
    },
    {
      id: 10,
      name: 'Coriander Seeds',
      category: 'seeds',
      price: '$5.99',
      description: 'Whole coriander seeds with citrusy, nutty flavor',
      benefits: ['Blood sugar support', 'Digestive health', 'Anti-inflammatory'],
      origin: 'Sri Lanka',
      image: '/coriander.jpg',
      comingSoon: true 
    },
    {
      id: 11,
      name: 'Curry Powder',
      category: 'blends',
      price: '$10.99',
      description: 'Classic curry blend with turmeric, coriander, and cumin',
      benefits: ['Anti-inflammatory', 'Antioxidant blend', 'Digestive support'],
      origin: 'Sri Lanka',
      image: '/curry-powder.jpg',
      comingSoon: true 
    },
    {
      id: 12,
      name: 'Dried Basil',
      category: 'herbs',
      price: '$8.99',
      description: 'Sweet basil leaves with fresh, peppery flavor',
      benefits: ['Stress relief', 'Anti-inflammatory', 'Immune support'],
      origin: 'Sri Lanka',
      image: '/basil.jpg',
      comingSoon: true 
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Our Premium Spices
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of organic spices, sourced from the 
            {`world's`} finest growing regions and processed to preserve their natural flavors.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search spices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Product Image/Icon */}
                {/* Product Image */}
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-green-100 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />

            {product.comingSoon && (
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Coming Soon
              </div>
            )}
          </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
                    {!product.comingSoon && (
                      <span className="text-lg font-bold text-green-600">{product.price}</span>
                    )}
                  </div>

                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="font-medium">Origin:</span> {product.origin}
                    </p>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Benefits:</span>
                      <ul className="mt-1 space-y-1">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Spices */}
      <section className="py-20 bg-green-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">Why Choose Spiceland?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality, sustainability, and authenticity sets us apart 
              in the spice industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">100% Organic</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Certified organic spices grown without pesticides or artificial additives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Fresh & Potent</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Small batch processing ensures maximum freshness and flavor potency.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Direct Trade</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Direct relationships with farmers ensure authenticity and fair pricing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Quality Tested</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every batch tested for purity, potency, and safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our spice experts are here to help you find the perfect spices for your needs.
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
  )
}