export default function Terms() {
  return (
    <div className="min-h-screen bg-white p-12">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Terms & Conditions</h1>
      <p className="text-gray-700 mb-4">
        Welcome to Spiceland! By using our website and purchasing our products, you agree to the following terms and conditions.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>All products are subject to availability.</li>
        <li>Prices and offers are subject to change without notice.</li>
        <li>We are not responsible for delays caused by shipping partners.</li>
        <li>By providing your information, you consent to our privacy policy.</li>
      </ul>
      <p className="text-gray-700">
        For full inquiries, contact us at <a href="mailto:info@spiceland.shop" className="text-green-600 underline">kannangarasudheera@gmail.com</a>.
      </p>
    </div>
  );
}
