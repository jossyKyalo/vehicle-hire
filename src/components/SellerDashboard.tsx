import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, TrendingUp, DollarSign, Car } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SellerDashboard() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    year: '',
    mileage: '',
    type: 'SUV',
    location: '',
    description: ''
  });

  const myListings = [
    {
      id: 1,
      title: "2024 BMW X5",
      price: "$68,500",
      image: "https://images.unsplash.com/photo-1758217209786-95458c5d30a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTVVYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2NDA5NDM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Active",
      views: 245,
      inquiries: 12
    },
    {
      id: 2,
      title: "2023 Porsche 911",
      price: "$125,000",
      image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY0MDg2MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Active",
      views: 489,
      inquiries: 28
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New listing:', formData);
    setShowAddForm(false);
    // Reset form
    setFormData({
      title: '',
      price: '',
      year: '',
      mileage: '',
      type: 'SUV',
      location: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-4">Seller Dashboard</h1>
          <p className="text-gray-600">Manage your vehicle listings and track performance</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Active Listings</h3>
              <Car className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl">{myListings.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Total Views</h3>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl">{myListings.reduce((acc, listing) => acc + listing.views, 0)}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Total Inquiries</h3>
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl">{myListings.reduce((acc, listing) => acc + listing.inquiries, 0)}</p>
          </div>
        </div>

        {/* Revenue Calculator */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8" />
            <h2 className="text-2xl">Estimated Earnings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-blue-100 mb-2">Total Listing Value</p>
              <p className="text-3xl">$193,500</p>
            </div>
            <div>
              <p className="text-blue-100 mb-2">Your Earnings (after 5% commission)</p>
              <p className="text-3xl">$183,825</p>
            </div>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            *Based on current active listings. Platform commission: 5%
          </p>
        </div>

        {/* Add Listing Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add New Listing
          </button>
        </div>

        {/* Add Listing Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl mb-6">Add New Vehicle</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700">Vehicle Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="e.g., 2024 BMW X5"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Price</label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="$50,000"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Year</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="2024"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Mileage</label>
                  <input
                    type="text"
                    value={formData.mileage}
                    onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="5,200 miles"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option>SUV</option>
                    <option>Sedan</option>
                    <option>Truck</option>
                    <option>Sports Car</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="New York, NY"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={4}
                  placeholder="Describe your vehicle..."
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Listing
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* My Listings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl mb-6">My Listings</h2>
          <div className="space-y-4">
            {myListings.map((listing) => (
              <div
                key={listing.id}
                className="flex flex-col md:flex-row gap-6 p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <ImageWithFallback
                  src={listing.image}
                  alt={listing.title}
                  className="w-full md:w-48 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl mb-1">{listing.title}</h3>
                      <p className="text-2xl text-blue-600">{listing.price}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      {listing.status}
                    </span>
                  </div>
                  <div className="flex gap-6 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{listing.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{listing.inquiries} inquiries</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
