import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Download, Share2, Star } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: '1',
    name: 'Smart Environmental Monitor',
    category: 'Environmental',
    images: [
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/163125/circuit-circuit-board-resistor-computer-163125.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'The Smart Environmental Monitor is a comprehensive IoT solution designed to provide real-time monitoring of environmental conditions. Perfect for smart buildings, agriculture, and industrial applications.',
    longDescription: 'Our Smart Environmental Monitor represents the cutting-edge of IoT sensor technology. Equipped with high-precision sensors and advanced data processing capabilities, this device delivers accurate, reliable environmental data for critical decision-making. The device features enterprise-grade security, long-term reliability, and seamless integration with existing systems.',
    keyFeatures: [
      'Multi-parameter sensing with laboratory-grade accuracy',
      'Real-time data transmission via cellular and Wi-Fi',
      'Advanced power management with solar charging option',
      'IP67 weatherproof rating for outdoor deployment',
      'Edge computing capabilities for local data processing',
      'Secure end-to-end encrypted communications',
      'Cloud-based dashboard and mobile app included',
      'Remote firmware updates and device management'
    ],
    specifications: {
      'Sensors': 'Temperature, Humidity, Air Quality (PM2.5, PM10), Light, Noise',
      'Connectivity': '4G LTE, Wi-Fi, Bluetooth 5.0, LoRaWAN',
      'Power': 'Rechargeable Li-ion battery, Solar panel compatible',
      'Battery Life': 'Up to 3 years (depending on usage)',
      'Operating Range': '-40°C to +85°C',
      'Accuracy': '±0.2°C (temp), ±2% RH (humidity)',
      'Dimensions': '120mm x 80mm x 45mm',
      'Weight': '285g',
      'Mounting': 'Wall mount, pole mount, magnetic base',
      'Certifications': 'CE, FCC, IC, IP67'
    },
    rating: 4.8,
    reviews: 127
  };

  return (
    <div className="py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/products" className="hover:text-primary-600 transition-colors duration-200">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Product Images */}
          <div className="lg:col-span-7 mb-8 lg:mb-0">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={product.images[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        activeImageIndex === index
                          ? 'border-primary-500'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-2">
                  {product.keyFeatures.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="w-full bg-primary-500 text-white py-4 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold text-center block"
                >
                  Contact for Pricing
                </Link>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Datasheet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {product.longDescription}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Complete Feature Set</h3>
              <div className="space-y-3">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-3">
                    <dt className="text-sm font-medium text-gray-700">{key}</dt>
                    <dd className="text-sm text-gray-600 mt-1">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Implement This Solution?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Our IoT experts are ready to help you integrate this device into your infrastructure. 
            Contact us for custom pricing, bulk discounts, and technical support.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Contact for Pricing
            <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;