import Link from "next/link";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white p-12">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Sitemap</h1>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <Link href="/" className="text-green-600 underline">Home</Link>
        </li>
        <li>
          <Link href="/products" className="text-green-600 underline">Products</Link>
        </li>
        <li>
          <Link href="/about" className="text-green-600 underline">About Us</Link>
        </li>
        <li>
          <Link href="/contact" className="text-green-600 underline">Contact</Link>
        </li>
        <li>
          <Link href="/privacy" className="text-green-600 underline">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms" className="text-green-600 underline">Terms & Conditions</Link>
        </li>
      </ul>
    </div>
  );
}
