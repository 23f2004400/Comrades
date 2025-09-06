import React, { useState, useEffect } from 'react';
import { AlertTriangle, MapPin, Users, Battery, Bluetooth, Smartphone, BookOpen, Play } from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sosActive, setSosActive] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(85);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: AlertTriangle,
      title: 'SOS Emergency Button',
      description: 'Instant alert system that notifies your emergency contacts and local authorities with your location.',
      color: 'from-red-400 to-pink-500',
      interactive: true
    },
    {
      icon: MapPin,
      title: 'Real-time Location Tracking',
      description: 'Share your location with trusted contacts and track your route in real-time.',
      color: 'from-blue-400 to-cyan-500',
      interactive: false
    },
    {
      icon: Users,
      title: 'Emergency Contacts',
      description: 'Quick access to emergency contacts with instant calling and messaging.',
      color: 'from-purple-400 to-pink-500',
      interactive: false
    },
    {
      icon: Smartphone,
      title: 'Device Connectivity',
      description: 'Monitor battery life, Bluetooth connection, and firmware updates.',
      color: 'from-green-400 to-blue-500',
      interactive: true
    }
  ];

  const safetyTips = [
    {
      title: 'Stay Aware of Your Surroundings',
      tip: 'Always be conscious of who and what is around you, especially in unfamiliar areas.',
      category: 'General Safety'
    },
    {
      title: 'Trust Your Instincts',
      tip: 'If something feels wrong, trust that feeling and remove yourself from the situation.',
      category: 'Awareness'
    },
    {
      title: 'Share Your Location',
      tip: 'Let trusted friends or family know where you are and when you expect to arrive.',
      category: 'Communication'
    },
    {
      title: 'Keep Emergency Numbers Handy',
      tip: 'Have important numbers easily accessible and consider emergency contact apps.',
      category: 'Preparation'
    }
  ];

  const handleSosClick = () => {
    setSosActive(true);
    setTimeout(() => setSosActive(false), 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Advanced Safety Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed to keep you safe, connected, and confident wherever you go.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 bg-gradient-to-r ${feature.color} rounded-full mr-4`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    {/* Interactive SOS Demo */}
                    {feature.title === 'SOS Emergency Button' && (
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <p className="text-sm text-gray-600 mb-4">Try our SOS button demo:</p>
                        <button
                          onClick={handleSosClick}
                          className={`relative w-24 h-24 mx-auto block rounded-full font-bold text-white transition-all duration-300 ${
                            sosActive 
                              ? 'bg-red-600 animate-pulse scale-110 shadow-lg shadow-red-500/50' 
                              : 'bg-gradient-to-r from-red-400 to-red-500 hover:scale-105'
                          }`}
                        >
                          SOS
                          {sosActive && (
                            <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>
                          )}
                        </button>
                        {sosActive && (
                          <div className="mt-4 text-center">
                            <div className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                              Emergency Alert Activated
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Device Status Demo */}
                    {feature.title === 'Device Connectivity' && (
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Battery className="h-5 w-5 text-green-500 mr-2" />
                              <span className="font-medium">Battery</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                                <div 
                                  className="h-2 bg-green-500 rounded-full transition-all duration-500"
                                  style={{ width: `${batteryLevel}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{batteryLevel}%</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Bluetooth className="h-5 w-5 text-blue-500 mr-2" />
                              <span className="font-medium">Bluetooth</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                              <span className="text-sm font-medium text-green-600">Connected</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real-time Location Tracking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced GPS integration with Google Maps for precise location sharing and route tracking.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-blue-100 to-cyan-100 relative">
              <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Live Location Sharing</h3>
                  <p className="text-gray-600">Real-time GPS tracking with Google Maps integration</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Safety Tips & Awareness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential safety knowledge every woman should know to stay protected and confident.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {safetyTips.map((tip, index) => (
              <div 
                key={tip.title}
                className={`group bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-2 rounded-full flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-800">{tip.title}</h3>
                      <span className="text-xs bg-pink-200 text-pink-700 px-2 py-1 rounded-full font-medium">
                        {tip.category}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{tip.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 inline-flex items-center">
              <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Watch Safety Training Videos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;