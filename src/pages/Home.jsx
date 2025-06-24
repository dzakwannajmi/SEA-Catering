import { Phone, Heart, Truck, Info, ArrowRightCircle } from "react-feather";
import { Link } from "react-router-dom";
import AutoScrollShowcase from "../components/AutoScrollShowcase";

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto bg-white text-gray-800">
      {/* Hero */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-sea mb-4 tracking-tight animate-fadeIn">
          SEA Catering
        </h1>
        <p className="text-xl text-gray-600 animate-fadeIn delay-200">
          Healthy Meals, Anytime, Anywhere
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed animate-fadeIn delay-300">
          <strong>SEA Catering</strong> is a healthy food delivery service that
          offers customizable meals shipped nationwide across Indonesia. We are
          committed to providing nutritious, delicious, and practical meal
          options to support your healthy lifestyle — no matter how busy you
          are.
        </p>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-sea text-center mb-10">
          Our Key Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-4 p-5 border rounded-xl bg-sea/5 hover:shadow-lg transition animate-fadeIn">
            <Heart className="text-sea w-6 h-6 mt-1" />
            <p>Customizable meals to match your dietary needs</p>
          </div>
          <div className="flex items-start gap-4 p-5 border rounded-xl bg-sea/5 hover:shadow-lg transition animate-fadeIn delay-100">
            <Truck className="text-sea w-6 h-6 mt-1" />
            <p>Delivery to major cities across Indonesia</p>
          </div>
          <div className="flex items-start gap-4 p-5 border rounded-xl bg-sea/5 hover:shadow-lg transition animate-fadeIn delay-200">
            <Info className="text-sea w-6 h-6 mt-1" />
            <p>Complete nutritional information with every meal package</p>
          </div>
        </div>
      </section>

      {/* Auto-scroll Showcase */}
      <AutoScrollShowcase />

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to start your healthy journey?
        </h3>
        <p className="text-gray-700 mb-6">
          Explore our flexible meal plans and pick what fits your lifestyle
          best.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-sea text-white px-6 py-3 rounded-full font-medium hover:bg-sea/90 transition"
        >
          Browse Menu <ArrowRightCircle size={20} />
        </Link>
      </section>

      {/* Contact Section */}
      <section className="bg-sea/10 border-l-4 border-sea px-6 py-4 rounded-lg flex items-center gap-3 justify-center mt-20 animate-fadeIn delay-300">
        <Phone className="text-sea w-5 h-5" />
        <div>
          <p className="text-gray-700 font-medium">Contact Our Manager:</p>
          <p className="text-sea font-semibold">Brian - 08123456789</p>
        </div>
      </section>
    </div>
  );
}
