import { Link } from 'react-router-dom';
import { Search, Shield, DollarSign, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const featuredVehicles = [
    {
      id: 1,
      title: "2024 BMW X5",
      price: "$68,500",
      image: "https://images.unsplash.com/photo-1758217209786-95458c5d30a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTVVYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2NDA5NDM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2024,
      mileage: "5,200 miles"
    },
    {
      id: 2,
      title: "2023 Porsche 911",
      price: "$125,000",
      image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY0MDg2MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2023,
      mileage: "8,500 miles"
    },
    {
      id: 3,
      title: "2024 Tesla Model 3",
      price: "$45,990",
      image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3NjM5ODUzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2024,
      mileage: "2,100 miles"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Find Your Perfect Vehicle</h1>
            <p className="text-xl mb-8 text-blue-100">
              Connect with trusted sellers and discover thousands of quality vehicles. 
              Your next car is just a click away.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/vehicles"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Browse Vehicles
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Sell Your Vehicle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Make or Model"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <select className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>All Types</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Truck</option>
              <option>Sports Car</option>
            </select>
            <select className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Price Range</option>
              <option>Under $20,000</option>
              <option>$20,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>$100,000+</option>
            </select>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-8">Featured Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              to={`/vehicle/${vehicle.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src={vehicle.image}
                alt={vehicle.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2">{vehicle.title}</h3>
                <p className="text-2xl text-blue-600 mb-4">{vehicle.price}</p>
                <div className="flex justify-between text-gray-600">
                  <span>{vehicle.year}</span>
                  <span>{vehicle.mileage}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/vehicles"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            View All Vehicles
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Why Choose AutoConnect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Secure Transactions</h3>
              <p className="text-gray-600">
                All transactions are secure and verified. We act as a trusted intermediary 
                to protect both buyers and sellers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Verified Sellers</h3>
              <p className="text-gray-600">
                Every seller is verified and vetted. Browse with confidence knowing 
                you're dealing with legitimate sellers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with transparent fees. We charge a small 5% commission 
                to maintain our platform and provide excellent service.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="text-blue-600 hover:text-blue-700"
            >
              Learn more about our platform →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of buyers and sellers on AutoConnect today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
