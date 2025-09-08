export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white p-12">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Sitemap</h1>
      <ul className="list-disc list-inside text-gray-700">
        <li><a href="/" className="text-green-600 underline">Home</a></li>
        <li><a href="/products" className="text-green-600 underline">Products</a></li>
        <li><a href="/about" className="text-green-600 underline">About Us</a></li>
        <li><a href="/contact" className="text-green-600 underline">Contact</a></li>
        <li><a href="/privacy" className="text-green-600 underline">Privacy Policy</a></li>
        <li><a href="/terms" className="text-green-600 underline">Terms & Conditions</a></li>
      </ul>
    </div>
  );
}
