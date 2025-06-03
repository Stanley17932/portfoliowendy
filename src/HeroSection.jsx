import React from 'react';
import { Palette, Code, MapPin } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="text-center max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl shadow-purple-500/25">
              <img
                src="/mypic.jpeg"
                alt="Aron Kipkorir Bii"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a gradient background if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #8B5CF6, #EC4899)';
                }}
              />
            </div>
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-pulse"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Aron Kipkorir Bii
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 px-2">
             Full-Stack Developer & Graphic Designer
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white/60 mb-8 sm:mb-12 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-4 leading-relaxed">
            Creating beautiful designs and powerful web applications. Specialized in CorelDRAW design and React-Flask development.
          </p>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-3 transition-all duration-300 hover:bg-white/20">
            <Code className="text-blue-400 flex-shrink-0" size={18} />
            <span className="text-white/80 text-sm sm:text-base font-medium">Full-Stack Dev</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-3 transition-all duration-300 hover:bg-white/20">
            <Palette className="text-purple-400 flex-shrink-0" size={18} />
            <span className="text-white/80 text-sm sm:text-base font-medium">Graphic Design</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-3 transition-all duration-300 hover:bg-white/20">
            <MapPin className="text-green-400 flex-shrink-0" size={18} />
            <span className="text-white/80 text-sm sm:text-base font-medium">Kenya</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="px-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
