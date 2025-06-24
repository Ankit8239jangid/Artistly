
import categories from "@/data/categories.json";
import Link from "next/link";
import { Button } from "./ui/button";
import HomePageCard from "./HomePageCard";
import { features } from "@/data/Features";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
 
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-black text-white py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-black opacity-90" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Book the Perfect Performer for Your Event
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Find and book India's most talented artists for your next event. 
            From classical musicians to modern performers, all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/artists">
              <Button className= " cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 transition duration-200 transform hover:scale-105 active:scale-90">
                Browse Performers
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Discover by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore India's finest performers across various categories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <HomePageCard
                key={category.title}
                title={category.title}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-purple-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Unforgettable Events?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of event planners who trust Artistly for their entertainment needs
          </p>
          <Link href="/onboard">
            <Button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full transition duration-200 transform 
  hover:scale-105 active:scale-90 cursor-pointer">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            Trusted by 1000+ event planners across India
          </p>
        </div>
      </section>
    </main>
  );
}