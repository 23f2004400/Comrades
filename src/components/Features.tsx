import React, { useState } from "react";
import { Bluetooth, Bell, Shield, MapPin } from "lucide-react";

const Features: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const features = [
    {
      title: "Real-Time Alerts",
      description:
        "Instant notifications to trusted contacts during emergencies with location tracking.",
      icon: <Bell className="h-6 w-6 text-pink-500" />,
    },
    {
      title: "Bluetooth Integration",
      description:
        "Connect with smart devices for one-touch SOS activation anytime, anywhere.",
      icon: <Bluetooth className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "24/7 Monitoring",
      description:
        "Stay safe with continuous monitoring and quick access to emergency services.",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Location Sharing",
      description:
        "Share your live location with family and friends during commutes or emergencies.",
      icon: <MapPin className="h-6 w-6 text-green-500" />,
    },
  ];

  const safetyTips = [
    {
      title: "Stay Aware",
      tip: "Always be aware of your surroundings and avoid isolated areas at night.",
      icon: "👀",
    },
    {
      title: "Share Location",
      tip: "Keep your trusted contacts updated with your live location when traveling.",
      icon: "📍",
    },
    {
      title: "Trust Instincts",
      tip: "If something feels wrong, trust your instincts and move to a safe space.",
      icon: "⚡",
    },
    {
      title: "Emergency Numbers",
      tip: "Keep emergency numbers saved on speed dial for quick access.",
      icon: "📞",
    },
    {
      title: "Public Transport",
      tip: "Prefer well-lit and crowded public transport options at night.",
      icon: "🚌",
    },
    {
      title: "Learn Self-Defense",
      tip: "Basic self-defense knowledge can boost your confidence and safety.",
      icon: "🥋",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-white to-lavender-50 overflow-hidden">
      {/* Features Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-lavender-100 opacity-70 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 font-poppins text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-100/20 to-lavender-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-lavender-100 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-nunito">
                    {feature.description}
                  </p>

                  {feature.title === "Bluetooth Integration" && (
                    <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Bluetooth className="h-6 w-6 text-blue-500 mr-3" />
                          <span className="font-medium font-nunito">
                            Connection Status
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`w-3 h-3 rounded-full mr-2 ${
                              isConnected
                                ? "bg-green-500 animate-pulse"
                                : "bg-red-500"
                            }`}
                          ></span>
                          <span className="text-sm font-medium font-poppins">
                            {isConnected ? "Connected" : "Disconnected"}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 font-poppins text-center">
            Safety Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg p-6 border border-gray-100 transition-transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{tip.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 font-poppins">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-nunito">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
