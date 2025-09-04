import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-600', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-600', url: '#' },
    { icon: Twitter, label: 'Twitter', color: 'from-blue-400 to-cyan-500', url: '#' },
    { icon: Youtube, label: 'YouTube', color: 'from-red-500 to-red-600', url: '#' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@safeguard.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '',
      description: 'By appointment only'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our safety devices or want to join our mission? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className={`group bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-lg text-gray-700 font-medium mb-1">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                {isSubmitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-400 to-coral-500 text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* WhatsApp Integration & Quick Contact */}
            <div className={`space-y-8 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {/* WhatsApp Chat */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Instant Support</h3>
                <p className="text-gray-600 mb-6">
                  Need immediate assistance? Chat with us on WhatsApp for instant support and quick answers.
                </p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </button>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest safety tips, product updates, and community stories.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className={`group bg-gradient-to-r ${social.color} p-4 rounded-xl text-white font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center`}
                    >
                      <social.icon className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Questions?</h3>
                <div className="space-y-3">
                  {[
                    'How do the safety devices work?',
                    'What is the battery life?',
                    'Is there a subscription fee?',
                    'How to set up emergency contacts?'
                  ].map((question, index) => (
                    <button
                      key={question}
                      className="w-full text-left p-3 bg-white/70 hover:bg-white rounded-lg text-gray-700 hover:text-gray-800 transition-all duration-300 text-sm"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;