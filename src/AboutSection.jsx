import React from 'react';
import { Palette, Globe, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate designer and developer based in Kenya with 1 year of professional experience. 
              I specialize in creating visually stunning graphics using CorelDRAW and building robust web applications 
              with modern technologies.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              My expertise spans from brand identity design to full-stack web development, allowing me to deliver 
              comprehensive digital solutions. I'm currently available for freelance projects and collaborations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="text-purple-400 font-semibold mb-2">Experience</h4>
                <p className="text-white/80">1+ Years</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="text-purple-400 font-semibold mb-2">Projects</h4>
                <p className="text-white/80">5+ Completed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Palette className="text-purple-400 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold">Graphic Design</h4>
                  <p className="text-white/60">Logo design, brand identity, and visual communications</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="text-blue-400 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold">Web Development</h4>
                  <p className="text-white/60">Full-stack applications with React and Flask</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Code className="text-green-400 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold">Database Design</h4>
                  <p className="text-white/60">Efficient database architecture and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection
