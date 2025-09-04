import React, { useEffect, useState } from 'react';
import { Smartphone, Shield, Users, Download, ArrowRight, Star, Play, Battery, Wifi } from 'lucide-react';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate app screens
    const interval = setInterval(() => {
      setCurrentScreen(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      name: 'SafeGuard Ring',
      description: 'Discreet wearable device with GPS tracking and SOS functionality',
      price: '$49.99',
      gradient: 'from-pink-300 to-coral-300',
      features: ['GPS Tracking', 'SOS Button', 'Water Resistant']
    },
    {
      name: 'SafeGuard Pendant',
      description: 'Elegant necklace with emergency alert system and location sharing',
      price: '$39.99',
      gradient: 'from-purple-300 to-pink-300',
      features: ['Elegant Design', 'Emergency Alert', 'Long Battery']
    },
    {
      name: 'SafeGuard Bracelet',
      description: 'Stylish bracelet with panic button and health monitoring',
      price: '$59.99',
      gradient: 'from-lavender-300 to-purple-300',
      features: ['Health Monitor', 'Panic Button', 'Fashion Forward']
    }
  ];

  const appScreens = [
    {
      title: 'Welcome',
      subtitle: 'Easy Setup',
      description: 'Quick onboarding and personalization for your safety preferences',
      color: 'from-pink-400 to-coral-400',
      active: currentScreen === 0
    },
    {
      title: 'Dashboard',
      subtitle: 'Control Center',
      description: 'Access all safety features from one beautiful interface',
      color: 'from-purple-400 to-pink-400',
      active: currentScreen === 1
    },
    {
      title: 'Live Track',
      subtitle: 'Real-time Location',
      description: 'Share your location with trusted contacts instantly',
      color: 'from-blue-400 to-cyan-400',
      active: currentScreen === 2
    },
    {
      title: 'Emergency',
      subtitle: 'Instant SOS',
      description: 'One-touch emergency alert to contacts and authorities',
      color: 'from-red-400 to-pink-400',
      active: currentScreen === 3
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-white to-lavender-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-coral-200 to-pink-200 rounded-full opacity-25 animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-lavender-200 to-purple-200 rounded-full opacity-30 animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight font-poppins">
                  Your Safety,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-coral-400">
                    Our Priority
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-nunito">
                  Empowering women with cutting-edge safety technology. Stay connected, stay safe, stay confident with our beautiful and intuitive safety ecosystem.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-pink-400 to-coral-400 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-pink transition-all duration-300 flex items-center justify-center font-montserrat">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download App
                </button>
                <button className="group border-2 border-pink-300 text-pink-400 px-8 py-4 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center justify-center font-montserrat">
                  Know More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-coral-400 rounded-full blur-3xl opacity-20 animate-pulse-soft"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-soft-lg border border-pink-100">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                      <Shield className="h-10 w-10 text-pink-500 mb-3 group-hover:animate-pulse" />
                      <p className="font-semibold text-gray-700 font-nunito">24/7 Protection</p>
                      <p className="text-sm text-gray-600 mt-1">Always watching over you</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-lavender-200 p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                      <Smartphone className="h-10 w-10 text-purple-500 mb-3 group-hover:animate-pulse" />
                      <p className="font-semibold text-gray-700 font-nunito">Smart Alerts</p>
                      <p className="text-sm text-gray-600 mt-1">Intelligent notifications</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-coral-100 to-pink-200 p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                    <Users className="h-12 w-12 text-coral-400 mx-auto mb-3 group-hover:animate-pulse" />
                    <p className="font-semibold text-gray-700 font-nunito">Connected Community</p>
                    <p className="text-sm text-gray-600 mt-1">Join thousands of empowered women</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Beautiful Safety Devices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-nunito">
              Elegantly designed devices that blend seamlessly into your lifestyle while keeping you protected and connected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className={`group bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-gray-100 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-60 group-hover:scale-110 transition-transform duration-700`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 bg-gradient-to-br ${product.gradient} rounded-full group-hover:rotate-12 transition-transform duration-500 shadow-soft-lg flex items-center justify-center`}>
                      <Shield className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700">New</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">{product.name}</h3>
                  <p className="text-gray-600 mb-4 font-nunito">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-500 font-poppins">{product.price}</span>
                    <button className="bg-gradient-to-r from-pink-400 to-coral-400 text-white px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-soft font-montserrat">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Powerful Mobile Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-nunito">
              Everything you need for personal safety, beautifully designed and right at your fingertips.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {appScreens.map((screen, index) => (
              <div 
                key={screen.title}
                className={`group cursor-pointer transform transition-all duration-500 ${
                  screen.active ? 'scale-105 -translate-y-4' : 'hover:-translate-y-2'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentScreen(index)}
              >
                <div className={`bg-white rounded-3xl shadow-soft ${screen.active ? 'shadow-soft-lg' : 'group-hover:shadow-soft-lg'} transition-shadow duration-300 overflow-hidden border-2 ${screen.active ? 'border-pink-200' : 'border-transparent'}`}>
                  <div className={`h-80 bg-gradient-to-br ${screen.color} relative`}>
                    {/* Phone Frame */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></div>
                    
                    {/* Screen Content */}
                    <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                      <div className={`w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center ${screen.active ? 'animate-bounce-soft' : 'group-hover:scale-110'} transition-transform duration-300`}>
                        {index === 0 && <Shield className="h-8 w-8 text-white" />}
                        {index === 1 && <Smartphone className="h-8 w-8 text-white" />}
                        {index === 2 && <Users className="h-8 w-8 text-white" />}
                        {index === 3 && <Battery className="h-8 w-8 text-white" />}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 font-poppins">{screen.title}</h3>
                      <p className="text-white/90 text-sm mb-2 font-nunito">{screen.subtitle}</p>
                      <p className="text-white/70 text-xs leading-relaxed font-nunito">{screen.description}</p>
                    </div>

                    {/* Status Indicators */}
                    <div className="absolute top-6 left-6 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 flex items-center space-x-1">
                      <Wifi className="h-3 w-3 text-white/70" />
                      <Battery className="h-3 w-3 text-white/70" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-pink-400 to-coral-400 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-pink transition-all duration-300 inline-flex items-center font-montserrat">
              <Download className="mr-2 h-5 w-5" />
              Download for iOS & Android
            </button>
            <p className="text-sm text-gray-500 mt-3 font-nunito">Free download • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Loved by Women Everywhere
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SafeGuard gives me the confidence to walk alone at night. The app is beautiful and so easy to use.",
                author: "Sarah M.",
                role: "College Student",
                rating: 5
              },
              {
                quote: "As a mother, having SafeGuard for my daughter brings me peace of mind. The design is lovely and non-intrusive.",
                author: "Maria L.",
                role: "Parent",
                rating: 5
              },
              {
                quote: "The device is so stylish, nobody would guess it's a safety device. Perfect for professional settings.",
                author: "Jennifer K.",
                role: "Business Executive",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed font-nunito">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-coral-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-800 font-poppins">{testimonial.author}</p>
                    <p className="text-sm text-gray-600 font-nunito">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-coral-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
            Ready to Feel Safe and Confident?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-nunito">
            Join thousands of women who trust SafeGuard for their daily protection and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-soft-lg transition-all duration-300 font-montserrat">
              Get Started Today
            </button>
            
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-float delay-1000"></div>
      </section>
    </div>
  );
};

export default Homepage;