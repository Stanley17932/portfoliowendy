import React from 'react';
import { Palette, Code, MapPin } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1662638600507-0846616ec508?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-[1px]"></div>
      
      <div className="text-center max-w-6xl mx-auto relative z-10">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-400/70 shadow-2xl shadow-purple-500/40">
              <img
                src="/grad.jpeg"
                alt="Wendy Oyonge"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a gradient background if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #8B5CF6, #EC4899)';
                }}
              />
            </div>
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-pulse"></div>
          </div>
        </div>

        {/* Main Content with better backgrounds */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Wendy Oyonge
            </span>
          </h1>
          
          {/* Enhanced subtitle with background */}
          <div className="inline-block bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium">
               Full-Stack Developer & Graphic Designer
            </p>
          </div>
          
          {/* Enhanced description with better contrast */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4 mb-8 sm:mb-12 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto">
            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
              Creating beautiful designs and powerful web applications. Specialized in Software Development and Graphic design.
            </p>
          </div>
        </div>

        {/* Enhanced Skills Tags with better visibility */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <div className="flex items-center justify-center space-x-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 sm:px-5 sm:py-3 transition-all duration-300 hover:bg-black/50 border border-white/20">
            <Code className="text-blue-300 flex-shrink-0" size={18} />
            <span className="text-white font-medium text-sm sm:text-base">Full-Stack Dev</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 sm:px-5 sm:py-3 transition-all duration-300 hover:bg-black/50 border border-white/20">
            <Palette className="text-purple-300 flex-shrink-0" size={18} />
            <span className="text-white font-medium text-sm sm:text-base">Graphic Design</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 sm:px-5 sm:py-3 transition-all duration-300 hover:bg-black/50 border border-white/20">
            <MapPin className="text-green-300 flex-shrink-0" size={18} />
            <span className="text-white font-medium text-sm sm:text-base">Kenya</span>
          </div>
        </div>
        
        {/* Enhanced CTA Button */}
        <div className="px-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/40 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto border border-purple-400/20"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection