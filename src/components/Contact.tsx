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
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{fontFamily: 'Copperplate Gothic Bold, serif', textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)'}}>GET IN TOUCH</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Info */}
            <div className="space-y-10 animate-slide-in-left">
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>Email</h3>
                  <p className="text-gray-300 text-lg" style={{fontFamily: 'Candara, sans-serif'}}>cheshtaagarwal17@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>Location</h3>
                  <p className="text-gray-300 text-lg" style={{fontFamily: 'Candara, sans-serif'}}>India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative animate-slide-in-right">
              <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-sm p-4 md:p-10 rounded-2xl space-y-6 md:space-y-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-2 border-gray-600 text-white px-6 py-4 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 peer group-hover:border-gray-500"
                    placeholder=" "
                    style={{fontFamily: 'Candara, sans-serif'}}
                  />
                  <label className="absolute left-6 top-4 text-gray-400 transition-all duration-300 transform -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-400 bg-black px-2" style={{fontFamily: 'Candara, sans-serif'}}>
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
                    className="w-full bg-transparent border-2 border-gray-600 text-white px-6 py-4 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 peer group-hover:border-gray-500"
                    placeholder=" "
                    style={{fontFamily: 'Candara, sans-serif'}}
                  />
                  <label className="absolute left-6 top-4 text-gray-400 transition-all duration-300 transform -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-400 bg-black px-2" style={{fontFamily: 'Candara, sans-serif'}}>
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
                    className="w-full bg-transparent border-2 border-gray-600 text-white px-6 py-4 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 peer resize-none group-hover:border-gray-500"
                    placeholder=" "
                    style={{fontFamily: 'Candara, sans-serif'}}
                  />
                  <label className="absolute left-6 top-4 text-gray-400 transition-all duration-300 transform -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-400 bg-black px-2" style={{fontFamily: 'Candara, sans-serif'}}>
                    Message
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 group"
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