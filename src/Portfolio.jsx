import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Menu, X, Code, Palette, Globe } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Billflow.site",
      category: "Web Development",
      description: "Full-stack billing and invoice management platform built with React and Flask",
      tech: ["React", "Flask", "MySQL"],
      link: "https://billflow.site",
      type: "web"
    },
    {
      title: "Litematter Enterprises",
      category: "Web Development", 
      description: "Corporate website for enterprise solutions with modern responsive design",
      tech: ["React", "CSS3", "JavaScript"],
      link: "https://litemattenterprises.com",
      type: "web"
    },
    {
      title: "Cozycare.world",
      category: "Web Development",
      description: "Healthcare platform focusing on patient care and medical services",
      tech: ["React", "Flask", "MySQL"],
      link: "https://cozycare.world",
      type: "web"
    },
    {
      title: "AGC Tenwek Hospital CTC Logo",
      category: "Graphic Design",
      description: "Professional logo design for Tenwek Hospital's Comprehensive Treatment Center",
      tech: ["CorelDRAW", "Brand Identity"],
      type: "design"
    },
    {
      title: "Iyanat FM Logo",
      category: "Graphic Design", 
      description: "Radio station logo design with modern broadcasting aesthetics",
      tech: ["CorelDRAW", "Logo Design"],
      type: "design"
    }
  ];

  const skills = {
    "Design": ["CorelDRAW", "Logo Design", "Brand Identity", "UI/UX Design"],
    "Frontend": ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Flask", "Python", "REST APIs", "Database Design"],
    "Database": ["MySQL", "Database Optimization"],
    "Tools": ["Git", "Vite", "Responsive Design"]
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AB
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-purple-400 font-semibold' 
                      : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-white/80 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Aron Kipkorir Bii
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Graphic Designer & Full-Stack Developer
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
              Creating beautiful designs and powerful web applications. Specialized in CorelDRAW design and React-Flask development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Palette className="text-purple-400" size={20} />
              <span className="text-white/80">Graphic Design</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Code className="text-blue-400" size={20} />
              <span className="text-white/80">Full-Stack Dev</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="text-green-400" size={20} />
              <span className="text-white/80">Kenya</span>
            </div>
          </div>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A showcase of my recent work in web development and graphic design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.type === 'web' 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-purple-500/20 text-purple-300'
                    }`}>
                      {project.category}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Get in touch and let's create something amazing together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a
                  href="mailto:kipkorirbiiaron@gmail.com"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  kipkorirbiiaron@gmail.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+254700697430"
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  +254 700 697 430
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <span className="text-white/70">Kenya</span>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Available for Freelance Work</h3>
                <p className="text-white/70 mb-6">
                  I'm currently accepting new projects and collaborations. 
                  Whether you need a stunning logo, a complete brand identity, or a full-stack web application, 
                  I'm here to help bring your vision to life.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:kipkorirbiiaron@gmail.com"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="tel:+254700697430"
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/20"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2025 Aron Kipkorir Bii. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio
