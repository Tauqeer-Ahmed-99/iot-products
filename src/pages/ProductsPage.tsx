import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid3X3, List } from "lucide-react";

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "All",
    "Sensors",
    "Gateways",
    "Tracking",
    "Environmental",
    "Industrial",
    "Smart Home",
  ];

  const products = [
    {
      id: "1",
      name: "Smart Environmental Monitor",
      image:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Multi-sensor device for monitoring temperature, humidity, air quality, and light levels with real-time data transmission",
      category: "Environmental",
      features: [
        "Temperature & Humidity",
        "Air Quality Index",
        "Light Sensor",
        "Battery Life: 3 years",
      ],
    },
    {
      id: "2",
      name: "Industrial Gateway Hub",
      image:
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Robust industrial-grade gateway for connecting legacy equipment to modern IoT networks",
      category: "Industrial",
      features: [
        "Modbus Support",
        "Edge Computing",
        "Rugged Design",
        "Remote Management",
      ],
    },
    {
      id: "3",
      name: "Smart Asset Tracker",
      image:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "GPS and cellular-enabled tracking device for high-value assets and logistics management",
      category: "Tracking",
      features: [
        "GPS Tracking",
        "Geofencing",
        "Battery: 5 years",
        "Tamper Detection",
      ],
    },
    {
      id: "4",
      name: "Wireless Sensor Node",
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Versatile wireless sensor platform with customizable sensor modules",
      category: "Sensors",
      features: [
        "Modular Design",
        "LoRaWAN Ready",
        "Solar Compatible",
        "IP67 Rated",
      ],
    },
    {
      id: "5",
      name: "Smart Building Controller",
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Central control system for smart building automation and energy management",
      category: "Smart Home",
      features: [
        "HVAC Control",
        "Energy Monitoring",
        "AI Optimization",
        "Cloud Integration",
      ],
    },
    {
      id: "6",
      name: "IoT Communication Gateway",
      image:
        "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Multi-protocol gateway supporting various IoT communication standards",
      category: "Gateways",
      features: [
        "Multi-Protocol",
        "Edge Analytics",
        "Secure Boot",
        "4G/5G Ready",
      ],
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="py-12 animate-fade-in">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            IoT Product Catalog
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Explore our comprehensive range of IoT devices designed for various
            industries and applications
          </p>
        </div>

        {/* Filters and View Controls */}
        <div className="flex flex-col items-start justify-between gap-4 mb-8 sm:flex-row sm:items-center">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              Filter by:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-primary-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">View:</span>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === "grid"
                  ? "bg-primary-100 text-primary-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === "list"
                  ? "bg-primary-100 text-primary-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group ${
                viewMode === "list" ? "flex flex-col sm:flex-row" : ""
              }`}
            >
              <div
                className={`${
                  viewMode === "list" ? "sm:w-64" : "aspect-w-16 aspect-h-12"
                } overflow-hidden`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`${
                    viewMode === "list"
                      ? "w-full h-48 sm:h-full object-cover"
                      : "w-full h-48 object-cover"
                  } group-hover:scale-105 transition-transform duration-300`}
                />
              </div>

              <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
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

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-gray-700">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 py-2 font-medium text-center text-white transition-colors duration-200 rounded-lg bg-primary-500 hover:bg-primary-600"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 py-2 font-medium text-center transition-colors duration-200 border rounded-lg border-primary-500 text-primary-600 hover:bg-primary-50"
                  >
                    Contact for Price
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
