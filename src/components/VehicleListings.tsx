import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VehicleListings() {
  const [showFilters, setShowFilters] = useState(false);

  const vehicles = [
    {
      id: 1,
      title: "2024 BMW X5",
      price: "$68,500",
      image: "https://images.unsplash.com/photo-1758217209786-95458c5d30a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTVVYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2NDA5NDM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2024,
      mileage: "5,200 miles",
      type: "SUV",
      location: "New York, NY"
    },
    {
      id: 2,
      title: "2023 Porsche 911",
      price: "$125,000",
      image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY0MDg2MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2023,
      mileage: "8,500 miles",
      type: "Sports Car",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      title: "2024 Tesla Model 3",
      price: "$45,990",
      image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3NjM5ODUzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2024,
      mileage: "2,100 miles",
      type: "Sedan",
      location: "San Francisco, CA"
    },
    {
      id: 4,
      title: "2023 Ford F-150",
      price: "$52,300",
      image: "https://images.unsplash.com/photo-1657256985338-ce188774d199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHBpY2t1cHxlbnwxfHx8fDE3NjM5ODQ2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2023,
      mileage: "15,400 miles",
      type: "Truck",
      location: "Austin, TX"
    },
    {
      id: 5,
      title: "2024 Mercedes-Benz S-Class",
      price: "$115,000",
      image: "https://images.unsplash.com/photo-1658662160331-62f7e52e63de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjQwMjg5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2024,
      mileage: "3,800 miles",
      type: "Sedan",
      location: "Miami, FL"
    },
    {
      id: 6,
      title: "2022 Audi Q7",
      price: "$58,700",
      image: "https://images.unsplash.com/photo-1605801936998-a39a1518b03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc2Mzk3NDgzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: 2022,
      mileage: "22,100 miles",
      type: "SUV",
      location: "Chicago, IL"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-4">Browse Vehicles</h1>
          <p className="text-gray-600">Discover your next vehicle from our verified sellers</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Filters Dropdown */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-4 gap-4">
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
              <select className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>All Years</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
              <select className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Mileage</option>
                <option>Under 5,000</option>
                <option>5,000 - 20,000</option>
                <option>20,000 - 50,000</option>
                <option>50,000+</option>
              </select>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">{vehicles.length} vehicles found</p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              to={`/vehicle/${vehicle.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src={vehicle.image}
                alt={vehicle.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl">{vehicle.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {vehicle.type}
                  </span>
                </div>
                <p className="text-2xl text-blue-600 mb-4">{vehicle.price}</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Year:</span>
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mileage:</span>
                    <span>{vehicle.mileage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span>{vehicle.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
