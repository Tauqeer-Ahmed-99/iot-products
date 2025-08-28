import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Wifi,
  Smartphone,
  Cloud,
} from "lucide-react";

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Military-grade encryption and security protocols for all IoT communications",
    },
    {
      icon: Zap,
      title: "Ultra-Low Power",
      description:
        "Advanced power management for devices that run for years on a single charge",
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description:
        "Worldwide coverage with multi-network support and failover capabilities",
    },
  ];

  const products = [
    {
      id: "1",
      name: "Smart Environmental Monitor",
      image:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Multi-sensor device for monitoring temperature, humidity, air quality, and more",
      category: "Environmental",
    },
    {
      id: "2",
      name: "Industrial Gateway Hub",
      image:
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Robust industrial-grade gateway for connecting legacy equipment to IoT networks",
      category: "Industrial",
    },
    {
      id: "3",
      name: "Smart Asset Tracker",
      image:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "GPS and cellular-enabled tracking device for high-value assets and logistics",
      category: "Tracking",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="items-center lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Advanced <span className="text-primary-500">IoT Solutions</span>{" "}
                for Tomorrow
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-gray-600">
                Discover cutting-edge IoT devices and hardware solutions that
                power the next generation of connected systems. From sensors to
                gateways, we provide the technology infrastructure for your
                digital transformation.
              </p>
              <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-200 rounded-lg bg-primary-500 hover:bg-primary-600 group"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 font-semibold transition-all duration-200 border-2 rounded-lg border-primary-500 text-primary-600 hover:bg-primary-50"
                >
                  Contact for Pricing
                </Link>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 lg:col-span-6">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <img
                  src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="IoT Technology"
                  className="w-full h-auto shadow-2xl rounded-2xl"
                />
                <div className="absolute flex items-center justify-center w-24 h-24 rounded-full -top-4 -right-4 bg-secondary-500 animate-bounce-gentle">
                  <Wifi className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Our IoT Solutions?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Built for reliability, security, and scalability in the most
              demanding environments
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 text-center transition-all duration-300 border border-gray-200 rounded-xl hover:border-primary-200 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-300 rounded-full bg-primary-100 group-hover:bg-primary-200">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular and innovative IoT devices
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl group"
              >
                <div className="overflow-hidden aspect-w-16 aspect-h-12">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 text-sm font-medium rounded text-primary-600 bg-primary-50">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {product.description}
                  </p>
                  <div className="flex space-x-3">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 py-2 font-medium text-center text-white transition-colors duration-200 rounded-lg bg-primary-500 hover:bg-primary-600"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 font-semibold transition-all duration-200 bg-white border-2 rounded-lg border-primary-500 text-primary-600 hover:bg-primary-50"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6 space-x-4">
            <Smartphone className="w-8 h-8 text-primary-200" />
            <Cloud className="w-8 h-8 text-primary-300" />
            <Globe className="w-8 h-8 text-primary-200" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-primary-100">
            Get in touch with our IoT experts to discuss your project
            requirements and receive customized pricing for your solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 font-semibold transition-all duration-200 bg-white rounded-lg shadow-lg text-primary-600 hover:bg-gray-50 hover:shadow-xl"
          >
            Contact for Pricing
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
