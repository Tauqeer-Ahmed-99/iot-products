import React from 'react';
import { Trophy, Award, Users, Globe, TrendingUp, Shield } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const achievements = [
    {
      year: '2025',
      title: 'IoT Innovation Award',
      description: 'Recognized as the leading IoT solution provider for enterprise applications',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      year: '2024',
      title: 'Security Excellence Certification',
      description: 'Achieved highest level cybersecurity certification for IoT devices',
      icon: Shield,
      color: 'text-blue-500'
    },
    {
      year: '2024',
      title: '1 Million Devices Deployed',
      description: 'Reached milestone of one million IoT devices successfully deployed worldwide',
      icon: Globe,
      color: 'text-green-500'
    },
    {
      year: '2023',
      title: 'Sustainability Leadership Award',
      description: 'Recognized for environmental leadership in IoT device design and manufacturing',
      icon: TrendingUp,
      color: 'text-emerald-500'
    },
    {
      year: '2023',
      title: 'Best Enterprise Solution',
      description: 'Industry award for best IoT platform for enterprise and industrial applications',
      icon: Award,
      color: 'text-purple-500'
    },
    {
      year: '2022',
      title: '500+ Enterprise Customers',
      description: 'Successfully serving over 500 enterprise customers across various industries',
      icon: Users,
      color: 'text-orange-500'
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management',
      year: '2024'
    },
    {
      name: 'FCC Certification',
      description: 'Federal Communications Commission',
      year: '2024'
    },
    {
      name: 'CE Marking',
      description: 'European Conformity',
      year: '2024'
    },
    {
      name: 'ISO 9001',
      description: 'Quality Management Systems',
      year: '2023'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Devices Deployed' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime SLA' }
  ];

  return (
    <div className="py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating milestones in IoT innovation, industry recognition, 
            and our commitment to excellence in connected technology solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Milestone Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ml-12 md:ml-0">
                      <div className="flex items-center mb-3">
                        <achievement.icon className={`w-6 h-6 mr-3 ${achievement.color}`} />
                        <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Certifications & Standards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {cert.description}
                </p>
                <span className="text-xs text-primary-600 font-medium">
                  Certified {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition CTA */}
        <div className="mt-16 bg-primary-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Industry Recognition</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            These achievements reflect our commitment to innovation, quality, and customer satisfaction. 
            Join the companies that trust us with their IoT infrastructure.
          </p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
            Learn About Our Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;