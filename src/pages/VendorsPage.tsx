import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const VendorsPage: React.FC = () => {
  const vendors = [
    {
      name: 'TechCore Industries',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Leading manufacturer of industrial IoT sensors and monitoring equipment with over 20 years of experience.',
      specialties: ['Industrial Sensors', 'Gateway Hardware', 'Edge Computing'],
      partnership: 'Platinum Partner',
      website: '#'
    },
    {
      name: 'ConnectSys Solutions',
      logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Innovative wireless communication solutions for IoT applications, specializing in low-power networks.',
      specialties: ['Wireless Modules', 'LoRaWAN', 'Mesh Networks'],
      partnership: 'Gold Partner',
      website: '#'
    },
    {
      name: 'SmartDevice Corp',
      logo: 'https://images.pexels.com/photos/163125/circuit-circuit-board-resistor-computer-163125.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Consumer and commercial smart device manufacturer focused on energy efficiency and sustainability.',
      specialties: ['Smart Home', 'Environmental Monitoring', 'Energy Management'],
      partnership: 'Silver Partner',
      website: '#'
    },
    {
      name: 'SecureIoT Technologies',
      logo: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Cybersecurity-focused IoT solutions with advanced encryption and threat protection capabilities.',
      specialties: ['Security Hardware', 'Encryption', 'Threat Detection'],
      partnership: 'Platinum Partner',
      website: '#'
    },
    {
      name: 'AgriTech Systems',
      logo: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Agricultural IoT solutions for precision farming, crop monitoring, and livestock management.',
      specialties: ['Agricultural Sensors', 'Soil Monitoring', 'Livestock Tracking'],
      partnership: 'Gold Partner',
      website: '#'
    },
    {
      name: 'MedTech Innovations',
      logo: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Healthcare IoT devices and wearables for patient monitoring and medical facility management.',
      specialties: ['Medical Devices', 'Wearables', 'Health Monitoring'],
      partnership: 'Silver Partner',
      website: '#'
    }
  ];

  const getPartnershipBadgeColor = (partnership: string) => {
    switch (partnership) {
      case 'Platinum Partner':
        return 'bg-gray-800 text-white';
      case 'Gold Partner':
        return 'bg-yellow-500 text-white';
      case 'Silver Partner':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Trusted Vendors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with industry-leading manufacturers and technology companies to deliver 
            the highest quality IoT solutions and support for our customers.
          </p>
        </div>

        {/* Partnership Levels Info */}
        <div className="bg-primary-50 rounded-xl p-6 mb-12">
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-primary-600 mr-2" />
            <h2 className="text-xl font-semibold text-primary-900">Partnership Levels</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4">
              <span className="inline-block px-2 py-1 bg-gray-800 text-white rounded text-xs font-medium mb-2">
                Platinum
              </span>
              <p className="text-gray-600">Exclusive partnerships with comprehensive support and priority access to new technologies.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <span className="inline-block px-2 py-1 bg-yellow-500 text-white rounded text-xs font-medium mb-2">
                Gold
              </span>
              <p className="text-gray-600">Strategic partnerships with extended warranties and dedicated technical support.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <span className="inline-block px-2 py-1 bg-gray-500 text-white rounded text-xs font-medium mb-2">
                Silver
              </span>
              <p className="text-gray-600">Certified partnerships with standard support and competitive pricing.</p>
            </div>
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={vendor.logo}
                      alt={`${vendor.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getPartnershipBadgeColor(vendor.partnership)}`}>
                    {vendor.partnership}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {vendor.name}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {vendor.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {vendor.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={vendor.website}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-200"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join our network of trusted vendors and manufacturers. We're always looking for 
            innovative partners to help us deliver cutting-edge IoT solutions.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
            Partnership Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;