import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer" style={{textShadow: '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)'}}>
            GET IN TOUCH
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10 animate-slide-in-left">
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">Email</h3>
                  <p className="text-gray-300 text-lg">cheshtaagarwal17@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">Location</h3>
                  <p className="text-gray-300 text-lg">India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative animate-slide-in-right">
              <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-sm p-10 rounded-2xl space-y-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-2 border-gray-600 text-white px-6 py-4 rounded-xl focus:border-cyan-500 focus:outline-none transition-all duration-300 peer group-hover:border-gray-500"
                    placeholder=" "
                  />
                  <label className="absolute left-6 top-4 text-gray-400 transition-all duration-300 transform -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-cyan-400 bg-black px-2">
                    Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-2 border-gray-600 text-white px-6 py-4 rounded-xl focus:border-cyan-500 focus:outline-none transition-all duration-300 peer group-hover:border-gray-500"
                    placeholder=" "
                  />
                  <label className="absolute left-6 top-4 text-gray-400 transition-all duration-300 transform -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-cyan-400 bg-black px-2">
                    Email
                  </label>
                </div>
                
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-2 border-gray-600 text-white px-6 py-4 rounded-xl focus:border-cyan-500 focus:outline-none transition-all duration-300 peer resize-none group-hover:border-gray-500"
                    placeholder=" "
                  />
                  <label className="absolute left-6 top-4 text-gray-400 transition-all duration-300 transform -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-cyan-400 bg-black px-2">
                    Message
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 group"
                  data-cursor-hover
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span>Send Message</span>
                    <Send size={20} className="group-hover:animate-bounce" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;