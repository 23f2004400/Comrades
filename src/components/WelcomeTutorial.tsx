import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Shield, Smartphone, Users, MapPin, Heart, Sparkles } from 'lucide-react';

interface WelcomeTutorialProps {
  onClose: () => void;
}

const WelcomeTutorial: React.FC<WelcomeTutorialProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tutorialSteps = [
    {
      title: "Welcome to SafeGuard! 👋",
      description: "Your personal safety companion designed by women, for women. Let's take a quick tour!",
      icon: Heart,
      color: "from-pink-400 to-coral-400",
      animation: "animate-bounce-soft"
    },
    {
      title: "Explore Our Safety Devices 🛡️",
      description: "Discover our beautiful, discreet safety devices that blend seamlessly into your lifestyle.",
      icon: Shield,
      color: "from-purple-400 to-pink-400",
      animation: "animate-pulse-soft"
    },
    {
      title: "Learn About Features 📱",
      description: "From SOS alerts to real-time tracking, explore all the powerful features that keep you safe.",
      icon: Smartphone,
      color: "from-blue-400 to-cyan-400",
      animation: "animate-float"
    },
    {
      title: "Meet Our Team 👥",
      description: "Get to know the passionate women behind SafeGuard and our mission to empower you.",
      icon: Users,
      color: "from-green-400 to-teal-400",
      animation: "animate-bounce-soft"
    },
    {
      title: "Stay Connected 💬",
      description: "Have questions? Contact us anytime! We're here to support your safety journey.",
      icon: MapPin,
      color: "from-coral-400 to-pink-400",
      animation: "animate-pulse-soft"
    }
  ];

  const currentStepData = tutorialSteps[currentStep];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const skipTutorial = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`relative max-w-md w-full transform transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-300 z-10"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Tutorial Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Animated Character */}
          <div className={`h-48 bg-gradient-to-br ${currentStepData.color} relative overflow-hidden`}>
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-white/30 rounded-full animate-float delay-1000"></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-white/25 rounded-full animate-float delay-500"></div>

            {/* Main Character/Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`bg-white/20 p-6 rounded-full ${currentStepData.animation}`}>
                <currentStepData.icon className="h-16 w-16 text-white" />
              </div>
            </div>

            {/* Sparkles */}
            <div className="absolute top-12 left-12">
              <Sparkles className="h-4 w-4 text-white/60 animate-pulse" />
            </div>
            <div className="absolute bottom-12 right-12">
              <Sparkles className="h-3 w-3 text-white/40 animate-pulse delay-700" />
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">
              {currentStepData.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-nunito">
              {currentStepData.description}
            </p>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mb-6">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-pink-400 w-6'
                      : index < currentStep
                      ? 'bg-pink-200'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={skipTutorial}
                className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-300 font-nunito"
              >
                Skip Tour
              </button>

              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-pink-400 to-coral-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center font-montserrat"
              >
                {currentStep === tutorialSteps.length - 1 ? (
                  <>
                    Get Started
                    <Heart className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <Sparkles className="h-4 w-4 text-pink-400 mr-2 animate-pulse" />
            <span className="text-sm text-gray-600 font-nunito">
              {currentStep === 0 && "10,000+ women trust SafeGuard daily"}
              {currentStep === 1 && "Our devices are 99.9% reliable"}
              {currentStep === 2 && "24/7 emergency support available"}
              {currentStep === 3 && "Founded by women engineers"}
              {currentStep === 4 && "Response time under 30 seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTutorial;