'use client'

import { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: 'general',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  // Prepare WhatsApp message
  const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Inquiry Type: ${formData.inquiry}
Subject: ${formData.subject}
Message: ${formData.message}
  `

  const encodedMessage = encodeURIComponent(message)
  const whatsappNumber = "94722696737"

  // Alert user
  alert("Opening WhatsApp with your message...")

  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")

  // Reset form
  setFormData({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: 'general',
    subject: '',
    message: ''
  })
}


  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Factory',
      details: [
        'No:52/A1,Kukulegama,Kalawana',
        'Ratnapura, Sabaragamuwa Province',
        'Sri Lanka'
      ]
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: [
        '+94 722696737',
        'Mon-Fri: 8:00 AM - 5:00 PM'
      ]
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: [
        'kannangarasudheera@gmail.com'
      ]
    }
  ]


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team of spice experts. We are here to help with 
            your inquiries, orders, and custom requirements.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="general">General Information</option>
                      <option value="product">Product Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="partnership">Partnership</option>
                      <option value="quality">Quality/Technical</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Please provide details about your inquiry, including quantities, specifications, or any specific requirements..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                      I agree to the <a href="/privacy" className="text-green-600 hover:text-green-700">Privacy Policy</a> and consent to being contacted about my inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Quick Response</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    General inquiries: 2-4 hours
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Quotes: 24-48 hours
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Technical queries: 4-8 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-green-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg mb-6 opacity-90">
            For urgent matters outside business hours, our emergency hotline is available 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  {/* WhatsApp Contact */}
  <a
    href="https://wa.me/94722696737"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 border-2 border-white rounded-lg px-6 py-3 hover:bg-white hover:text-green-600 transition-colors duration-300"
  >
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.85 11.85 0 0012 .6 11.38 11.38 0 00.6 12a11.28 11.28 0 001.65 5.9L.6 24l6.6-1.74a11.76 11.76 0 005.4 1.32 11.38 11.38 0 0011.4-11.4 11.66 11.66 0 00-3.48-8.7zM12 21.6a9.5 9.5 0 01-4.86-1.32l-.36-.18-3.9 1.08 1.08-3.78-.24-.36a9.49 9.49 0 01-1.56-5.22 9.72 9.72 0 0116.56-6.9A9.49 9.49 0 0121.6 12a9.62 9.62 0 01-9.6 9.6zm5.34-7.14c-.3-.18-1.74-.9-2.04-1-.3-.12-.54-.18-.78.18-.24.3-.9 1-.96 1.08-.18.18-.36.18-.66.06-.3-.18-1.26-.48-2.4-1.5-.9-.78-1.5-1.74-1.68-2.04-.18-.3 0-.48.12-.66.12-.12.3-.36.42-.54.12-.18.18-.3.3-.48.12-.18.06-.36 0-.54-.06-.18-.78-1.86-1.08-2.52-.3-.66-.54-.54-.78-.54h-.66c-.18 0-.54.06-.84.36-.3.3-1.14 1.08-1.14 2.64s1.2 3.06 1.38 3.24c.18.24 2.34 3.54 5.7 4.92.78.3 1.38.48 1.86.66.78.24 1.5.18 2.04.12.66-.12 2.04-.84 2.34-1.62.3-.78.3-1.44.18-1.62-.12-.18-.3-.24-.6-.42z" />
    </svg>
    <span className="font-semibold text-white">WhatsApp Us</span>
  </a>

  {/* Gmail Contact */}
  <a
    href="mailto:kannangarasudheera@gmail.com"
    className="flex items-center space-x-3 border-2 border-white rounded-lg px-6 py-3 hover:bg-white hover:text-green-600 transition-colors duration-300"
  >
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v7a2 2 0 002 2z" />
    </svg>
    <span className="font-semibold text-white">E-Mail Us</span>
  </a>
</div>


        </div>
      </section>

      <Footer />
    </div>
  )
}