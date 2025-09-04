import React, { useState, useEffect } from 'react';
import { Target, Eye, Users, Calendar, Award, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: '',
      role: 'CEO & Founder',
      description: 'Former tech executive passionate about women\'s safety and empowerment.',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      name: '',
      role: 'CTO',
      description: 'Expert in IoT and mobile technologies with 15+ years experience.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: '',
      role: 'Head of Design',
      description: 'UX designer focused on creating intuitive and empowering experiences.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      name: '',
      role: 'Safety Consultant',
      description: 'Safety expert and advocate with extensive research in women\'s security.',
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Founded by a team of passionate women engineers after personal safety experiences.',
      icon: Heart
    },
    {
      year: '2025',
      title: 'First Prototype',
      description: 'Developed our first safety device prototype with basic SOS functionality.',
      icon: Award
    },
    {
      year: '2023',
      title: 'Beta Testing',
      description: 'Launched beta program with 500 women across major cities.',
      icon: Users
    },
    {
      year: '2024',
      title: 'Product Launch',
      description: 'Official launch of SafeGuard ecosystem with mobile app and devices.',
      icon: Target
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Women Protected' },
    { number: '50+', label: 'Cities Covered' },
    { number: '99.9%', label: 'Uptime Reliability' },
    { number: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About SafeGuard
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to empower women with technology that enhances their safety, 
              confidence, and independence in everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-pink-400 to-rose-500 p-3 rounded-full mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To create innovative safety solutions that empower women to live fearlessly. 
                  We believe every woman deserves to feel secure and confident, whether she's 
                  walking home at night, traveling alone, or exploring new places.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-full mr-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A world where women's safety is never a concern, where technology seamlessly 
                  integrates into daily life to provide protection without compromising freedom 
                  or independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-coral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-pink-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of passionate individuals united by our commitment to women's safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className={`group transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${member.gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-pink-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to a comprehensive safety ecosystem - here's how we've grown.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-500 rounded-full"></div>

            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`bg-gradient-to-r from-pink-400 to-purple-500 p-2 rounded-full mr-3 ${index % 2 === 0 ? 'order-2 ml-3 mr-0' : ''}`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-pink-500">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 relative">
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of a community that's reshaping women's safety through technology and empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-400 to-coral-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
              Get Involved
            </button>
            <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;