import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Calendar, Gauge, Car, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VehicleDetail() {
  const { id } = useParams();

  // Mock vehicle data
  const vehicle = {
    id: id,
    title: "2024 BMW X5",
    price: "$68,500",
    images: [
      "https://images.unsplash.com/photo-1758217209786-95458c5d30a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTVVYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2NDA5NDM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1605801936998-a39a1518b03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc2Mzk3NDgzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    year: 2024,
    mileage: "5,200 miles",
    type: "SUV",
    location: "New York, NY",
    description: "Stunning 2024 BMW X5 in excellent condition. This luxury SUV comes fully loaded with premium features including leather seats, panoramic sunroof, advanced safety systems, and the latest technology. Single owner, regularly maintained, and ready for its next owner.",
    features: [
      "Leather Interior",
      "Panoramic Sunroof",
      "Navigation System",
      "Backup Camera",
      "Heated Seats",
      "Apple CarPlay",
      "Bluetooth",
      "Lane Departure Warning",
      "Adaptive Cruise Control",
      "Parking Sensors"
    ],
    seller: {
      name: "John's Auto Sales",
      rating: 4.8,
      reviews: 142,
      phone: "+1 (555) 123-4567",
      email: "contact@johnsautos.com"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/vehicles"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
              <ImageWithFallback
                src={vehicle.images[0]}
                alt={vehicle.title}
                className="w-full h-96 object-cover"
              />
              <div className="grid grid-cols-4 gap-2 p-4">
                {vehicle.images.map((image, index) => (
                  <ImageWithFallback
                    key={index}
                    src={image}
                    alt={`${vehicle.title} ${index + 1}`}
                    className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-3xl mb-2">{vehicle.title}</h1>
              <div className="flex items-center gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {vehicle.location}
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {vehicle.type}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y">
                <div className="text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-gray-600">Year</p>
                  <p>{vehicle.year}</p>
                </div>
                <div className="text-center">
                  <Gauge className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-gray-600">Mileage</p>
                  <p>{vehicle.mileage}</p>
                </div>
                <div className="text-center">
                  <Car className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-gray-600">Type</p>
                  <p>{vehicle.type}</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
              </div>

              <div>
                <h2 className="text-xl mb-3">Features</h2>
                <div className="grid grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Commission Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Secure Transaction</h3>
                  <p className="text-gray-700">
                    All transactions on AutoConnect are secure and verified. A 5% platform fee 
                    is applied to ensure safe transactions and maintain our trusted marketplace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
              <p className="text-3xl text-blue-600 mb-6">{vehicle.price}</p>
              
              {/* Seller Info */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="mb-3">Seller Information</h3>
                <p className="mb-2">{vehicle.seller.name}</p>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <span>⭐ {vehicle.seller.rating}</span>
                  <span>•</span>
                  <span>{vehicle.seller.reviews} reviews</span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Seller
                </button>
                <button className="w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
              </div>

              <div className="mt-6 pt-6 border-t text-center text-sm text-gray-600">
                <p>Contact: {vehicle.seller.phone}</p>
                <p>{vehicle.seller.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
