import React from 'react';
import { Target, Eye, Users, Lightbulb, Globe, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Former IoT research director with 15+ years in connected systems'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Hardware engineering expert specializing in low-power device design'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading our technical innovation in AI-powered IoT solutions'
    },
    {
      name: 'James Park',
      role: 'VP of Sales',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Enterprise solutions specialist with global IoT market expertise'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in IoT technology, constantly evolving our solutions.'
    },
    {
      icon: Users,
      title: 'Customer Centric',
      description: 'Every decision we make is guided by our commitment to customer success and satisfaction.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions create positive change across industries and communities worldwide.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in design, manufacturing, and support services.'
    }
  ];

  return (
    <div className="py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About IoTech Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of connected technology with innovative IoT devices and solutions
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2019 by a team of IoT pioneers, IoTech Solutions emerged from a simple 
                vision: to make IoT technology accessible, reliable, and transformative for businesses 
                of all sizes. What started as a small research project has grown into a leading 
                provider of enterprise IoT solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we serve over 500 enterprise customers worldwide, with our devices deployed 
                in more than 50 countries. Our commitment to innovation, security, and customer 
                success has made us a trusted partner in the IoT ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">2019</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600">150+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="IoTech Solutions Office"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative IoT solutions that drive digital transformation, 
              enhance operational efficiency, and create sustainable value. We believe in making 
              complex IoT technology simple, secure, and accessible for organizations ready to 
              embrace the connected future.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-secondary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in IoT innovation, setting the standard for device reliability, 
              security, and performance. We envision a world where intelligent connectivity seamlessly 
              integrates into every aspect of business and daily life, creating smarter, more 
              sustainable communities.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Commitment */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Committed to IoT Innovation
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            We invest heavily in R&D, maintaining partnerships with leading research institutions 
            and continuously pushing the boundaries of what's possible in IoT technology.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              Join Our Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;