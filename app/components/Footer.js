import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo2.png" // Replace with your logo path
              alt="Spiceland Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-green-400">Spiceland</span>
          </Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium organic spices. We bring you the finest 
              spices from around the world, carefully sourced and processed to preserve 
              their natural flavors and nutritional benefits.
            </p>
            <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1HvqKaKAPR/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.333v21.333C0 23.404.596 24 1.325 24h11.497v-9.294H9.691V11.01h3.131V8.309c0-3.1 1.893-4.785 4.659-4.785 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.404 24 24 23.404 24 22.667V1.333C24 .596 23.404 0 22.675 0z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/_spiceland_?igsh=ZW41M2ZxeWptcWFy&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 1.684c-3.17 0-3.552.012-4.805.07-1.047.048-1.61.222-1.986.37-.5.194-.86.428-1.237.805-.377.377-.611.737-.805 1.237-.148.376-.322.939-.37 1.986-.058 1.253-.07 1.635-.07 4.805s.012 3.552.07 4.805c.048 1.047.222 1.61.37 1.986.194.5.428.86.805 1.237.377.377.737.611 1.237.805.376.148.939.322 1.986.37 1.253.058 1.635.07 4.805.07s3.552-.012 4.805-.07c1.047-.048 1.61-.222 1.986-.37.5-.194.86-.428 1.237-.805.377-.377.611-.737.805-1.237.148-.376.322-.939.37-1.986.058-1.253.07-1.635.07-4.805s-.012-3.552-.07-4.805c-.048-1.047-.222-1.61-.37-1.986-.194-.5-.428-.86-.805-1.237-.377-.377-.737-.611-1.237-.805-.376-.148-.939-.322-1.986-.37-1.253-.058-1.635-.07-4.805-.07zm0 3.889a5.951 5.951 0 1 1 0 11.902 5.951 5.951 0 0 1 0-11.902zm0 9.834a3.883 3.883 0 1 0 0-7.766 3.883 3.883 0 0 0 0 7.766zm6.406-10.989a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@spiceland64?_t=ZS-8zTIRXq0XqB&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525 2C12.851 5.578 15.453 8.08 19 8.38V11.3c-1.9-.185-3.63-.885-5-1.95v6.44c0 3.45-2.73 6.25-6.1 6.25C4.52 22.04 1.8 19.23 1.8 15.78c0-3.45 2.72-6.25 6.1-6.25.63 0 1.24.1 1.8.29v3.04c-.56-.18-1.17-.29-1.8-.29-1.74 0-3.15 1.44-3.15 3.21 0 1.77 1.41 3.21 3.15 3.21 1.74 0 3.15-1.44 3.15-3.21V2h2.4z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/94722696737" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.208-.242-.58-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2C6.486 2 2 6.486 2 12.003c0 2.115.553 4.165 1.604 5.97L2 22l4.17-1.572a9.95 9.95 0 0 0 5.835 1.814h.001c5.518 0 10.004-4.486 10.004-10.004 0-5.517-4.486-10.003-10.004-10.003"/>
                  </svg>
                </a>
              </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">No:52/A/1,Kukulegama,Kalawana</p>
                  <p className="text-gray-300 text-sm">Ratnapura, Sabaragamuwa Province</p>
                  <p className="text-gray-300 text-sm">Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-300 text-sm">+94 722696737</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-300 text-sm">kannangarasudheera@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Spiceland. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}