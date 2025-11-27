import { Link } from 'react-router-dom';
import { UserPlus, Search, Shield, DollarSign, CheckCircle, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">How AutoConnect Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We connect buyers and sellers in a secure, trusted marketplace. 
            Learn how our platform helps you buy or sell vehicles with confidence.
          </p>
        </div>
      </section>

      {/* For Buyers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-12 text-center">For Buyers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3">1. Create Account</h3>
            <p className="text-gray-600">
              Sign up as a buyer in minutes. It's free and easy to get started.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3">2. Browse Vehicles</h3>
            <p className="text-gray-600">
              Search our extensive catalog of verified vehicles from trusted sellers.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3">3. Connect Securely</h3>
            <p className="text-gray-600">
              Contact sellers through our secure platform. We verify all listings.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3">4. Complete Purchase</h3>
            <p className="text-gray-600">
              Finalize your purchase with confidence knowing we protect your transaction.
            </p>
          </div>
        </div>
      </section>

      {/* For Sellers */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">For Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">1. Register as Seller</h3>
              <p className="text-gray-600">
                Create a seller account and get verified to start listing vehicles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">2. List Your Vehicle</h3>
              <p className="text-gray-600">
                Add photos, details, and pricing to create an attractive listing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">3. Connect with Buyers</h3>
              <p className="text-gray-600">
                Receive inquiries from interested buyers and respond securely.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">4. Complete Sale</h3>
              <p className="text-gray-600">
                Finalize the sale and receive payment through our secure platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <DollarSign className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl mb-4">Our Revenue Model</h2>
              <p className="text-xl text-blue-100">
                Transparent pricing that benefits everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl mb-4">Platform Commission</h3>
                <div className="text-4xl mb-4">5%</div>
                <p className="text-blue-100">
                  We charge a 5% commission on successful transactions. This fee covers:
                </p>
                <ul className="mt-4 space-y-2 text-blue-100">
                  <li>• Secure transaction processing</li>
                  <li>• Platform maintenance</li>
                  <li>• Customer support</li>
                  <li>• Fraud prevention</li>
                  <li>• Seller verification</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl mb-4">Why This Model Works</h3>
                <div className="space-y-4 text-blue-100">
                  <div>
                    <h4 className="mb-2">For Sellers</h4>
                    <p>Access to thousands of potential buyers without upfront costs.</p>
                  </div>
                  <div>
                    <h4 className="mb-2">For Buyers</h4>
                    <p>Free to browse and search. Pay nothing until you find your perfect vehicle.</p>
                  </div>
                  <div>
                    <h4 className="mb-2">For the Platform</h4>
                    <p>Sustainable revenue that allows us to continuously improve and grow.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl mb-4">Example Transaction</h3>
              <div className="space-y-2 text-blue-100">
                <div className="flex justify-between">
                  <span>Vehicle Sale Price:</span>
                  <span>$50,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Commission (5%):</span>
                  <span>$2,500</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                  <span>Seller Receives:</span>
                  <span>$47,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Buyer Pays:</span>
                  <span>$50,000</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-blue-100">
                *The commission is typically shared between buyer and seller or included in the listing price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Safety & Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Verified Sellers</h3>
              <p className="text-gray-600">
                All sellers undergo verification to ensure legitimacy and build trust.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Secure Payments</h3>
              <p className="text-gray-600">
                Protected payment processing ensures your money is safe throughout the transaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees. Know exactly what you'll pay or receive before completing any transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-100 rounded-2xl p-12 text-center">
          <h2 className="text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join AutoConnect today and experience the future of vehicle buying and selling
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Account
            </Link>
            <Link
              to="/vehicles"
              className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Browse Vehicles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
