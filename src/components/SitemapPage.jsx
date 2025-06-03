import React from 'react';
import { 
  Home, User, Briefcase, Code, Mail, FileText, 
  ExternalLink, Calendar, MapPin, Globe, Star
} from 'lucide-react';

const SitemapPage = () => {
  const siteStructure = [
    {
      title: "Home",
      path: "#home",
      icon: Home,
      description: "Main landing page with hero section and introduction",
      lastModified: "2025-06-03"
    },
    {
      title: "About Me",
      path: "#about",
      icon: User,
      description: "Personal background, skills showcase, and service offerings",
      lastModified: "2025-06-03",
      subsections: [
        "Dynamic Categories",
        "Technology Stack",
        "Service Portfolio"
      ]
    },
    {
      title: "Projects",
      path: "#projects",
      icon: Briefcase,
      description: "Showcase of web development and graphic design work",
      lastModified: "2025-06-03",
      subsections: [
        "Web Development Projects",
        "Graphic Design Portfolio"
      ]
    },
    {
      title: "Skills",
      path: "#skills",
      icon: Code,
      description: "Technical skills and technologies expertise",
      lastModified: "2025-06-03",
      subsections: [
        "Design Skills",
        "Frontend Technologies",
        "Backend Development",
        "Database Management",
        "Development Tools"
      ]
    },
    {
      title: "Contact",
      path: "#contact",
      icon: Mail,
      description: "Contact information and collaboration opportunities",
      lastModified: "2025-06-03",
      subsections: [
        "Email Contact",
        "Phone Contact",
        "Location Information"
      ]
    }
  ];

  const externalProjects = [
    {
      title: "Billflow.site",
      url: "https://billflow.site",
      description: "Full-stack business management system",
      type: "Web Application"
    },
    {
      title: "Litematt Enterprises",
      url: "https://litemattenterprises.co.ke/",
      description: "Corporate website for enterprise solutions",
      type: "Corporate Website"
    },
    {
      title: "Cozycare.world",
      url: "https://cozycare.world",
      description: "Healthcare platform focusing on patient care",
      type: "Healthcare Platform"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-500/30">
            <FileText className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Site Navigation</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Sitemap
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Complete navigation structure of{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
              Aron Kipkorir Bii's Portfolio
            </span>
          </p>
        </div>

        {/* Main Site Structure */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-7 h-7 text-cyan-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Main Site Structure</h2>
            </div>
            
            <div className="grid gap-6">
              {siteStructure.map((section, index) => {
                const IconComponent = section.icon;
                
                return (
                  <div 
                    key={index}
                    className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
                          <IconComponent size={24} className="text-purple-400" />
                        </div>
                        <div>
                          <button
                            onClick={() => scrollToSection(section.path)}
                            className="text-xl font-bold text-white hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3"
                          >
                            {section.title}
                            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          </button>
                          <p className="text-white/60 text-sm mt-1">{section.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <Calendar size={14} />
                        <span>Updated {section.lastModified}</span>
                      </div>
                    </div>
                    
                    {section.subsections && (
                      <div className="ml-16 space-y-2">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <span className="text-white/70 text-sm">{subsection}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* External Projects */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <ExternalLink className="w-7 h-7 text-green-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Live Projects</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalProjects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-white hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3"
                      >
                        {project.title}
                        <ExternalLink size={16} className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                      <span className="inline-block bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full mt-2">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Site Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Information */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Technical Details</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">Built with</span>
                <span className="text-white font-medium">React.js</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">Styling</span>
                <span className="text-white font-medium">Tailwind CSS</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">Icons</span>
                <span className="text-white font-medium">Lucide React</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/70">Responsive</span>
                <span className="text-green-400 font-medium">✓ Mobile First</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-pink-400" />
              <h3 className="text-xl font-bold text-white">Quick Contact</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a 
                  href="mailto:kipkorirbiiaron@gmail.com"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  kipkorirbiiaron@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white/70">Kenya</span>
              </div>
              <div className="flex items-center gap-3 pt-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white/70">Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            Last updated: June 3, 2025 • 
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-purple-400 hover:text-purple-300 transition-colors ml-2"
            >
              Return to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage
