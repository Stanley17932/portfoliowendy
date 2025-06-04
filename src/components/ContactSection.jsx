import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            Ready to bring your ideas to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Email */}
            <div className="text-center group">
              <div className="bg-purple-500/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                <Mail className="text-purple-400 group-hover:scale-110 transition-transform duration-300" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Email</h3>
              <a
                href="mailto:kipkorirbiiaron@gmail.com"
                className="text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base break-all sm:break-normal active:text-purple-300"
              >
                wendyoyonge@gmail.com
              </a>
            </div>
            
            {/* Phone */}
            <div className="text-center group">
              <div className="bg-blue-500/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                <Phone className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Phone</h3>
              <a
                href="tel:+254700697430"
                className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base active:text-blue-300"
              >
                +254 701 469 216
              </a>
            </div>
            
            {/* Location */}
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="bg-green-500/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-500/30 transition-colors duration-300">
                <MapPin className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Location</h3>
              <span className="text-white/70 text-sm sm:text-base">Kenya</span>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Available for Freelance Work
              </h3>
              <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                I'm currently accepting new projects and collaborations. 
                Whether you need a stunning logo, a complete brand identity, or a full-stack web application, 
                I'm here to help bring your vision to life.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
                <a
                  href="mailto:wendyoyonge@gmail.com"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 active:from-purple-800 active:to-pink-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black/20"
                >
                  Get In Touch
                </a>
                <a
                  href="tel:+254701469216"
                  className="bg-white/10 hover:bg-white/20 active:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-white/30 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/20"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection
