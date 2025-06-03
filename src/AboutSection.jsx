import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Database, Globe, Terminal, Layers, Smartphone, Store, Users, Calendar, 
  BarChart, CreditCard, FileText, Sparkles, Zap, Heart, Star, ChevronRight,
  CheckCircle, ArrowRight, Lightbulb, Target, Rocket, Shield
} from 'lucide-react';

const AboutSection = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredService, setHoveredService] = useState(null);
  const [visibleTechs, setVisibleTechs] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const categories = [
    {
      title: "E-commerce Powerhouses",
      items: ["Multi-vendor marketplaces", "Smart payment gateways", "AI-powered recommendations", "Real-time inventory"],
      icon: Store,
      color: "text-emerald-400",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      emoji: "🛒"
    },
    {
      title: "Brand Experiences",
      items: ["Interactive portfolios", "Dynamic landing pages", "Brand storytelling", "Conversion funnels"],
      icon: Globe,
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      emoji: "🌐"
    },
    {
      title: "Smart Management",
      items: ["AI-powered dashboards", "Automated workflows", "Team collaboration", "Performance analytics"],
      icon: Users,
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      emoji: "⚡"
    },
    {
      title: "Data Intelligence",
      items: ["Real-time insights", "Predictive analytics", "Custom reports", "Interactive charts"],
      icon: BarChart,
      color: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      emoji: "📊"
    },
    {
      title: "Innovation Labs",
      items: ["AI integrations", "IoT solutions", "Cloud architecture", "Microservices"],
      icon: Code,
      color: "text-violet-400",
      bgGradient: "from-violet-500/20 to-indigo-500/20",
      emoji: "🚀"
    }
  ];

  const technologies = [
    { name: 'React', level: 95, color: 'bg-gradient-to-r from-blue-400 to-cyan-400', icon: '⚛️' },
    { name: 'Flask', level: 90, color: 'bg-gradient-to-r from-green-400 to-emerald-400', icon: '🐍' },
    { name: 'JavaScript', level: 93, color: 'bg-gradient-to-r from-yellow-400 to-orange-400', icon: '⚡' },
    { name: 'Python', level: 96, color: 'bg-gradient-to-r from-purple-400 to-pink-400', icon: '🐍' },
    { name: 'HTML/CSS', level: 98, color: 'bg-gradient-to-r from-orange-400 to-red-400', icon: '🎨' },
    { name: 'SQL', level: 85, color: 'bg-gradient-to-r from-pink-400 to-rose-400', icon: '🗄️' }
  ];

  const services = [
    {
      icon: Globe,
      title: 'Frontend Magic',
      description: 'Crafting stunning React applications with micro-interactions and delightful animations',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      features: ['Responsive Design', 'Performance Optimized', 'Accessibility First']
    },
    {
      icon: Terminal,
      title: 'Backend Mastery',
      description: 'Building scalable Flask APIs with enterprise-grade security and lightning-fast performance',
      color: 'text-green-400',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      features: ['RESTful APIs', 'Authentication', 'Cloud Ready']
    },
    {
      icon: Database,
      title: 'Data Architecture',
      description: 'Designing intelligent database systems that scale with your business growth',
      color: 'text-purple-400',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      features: ['Optimized Queries', 'Data Security', 'Backup Solutions']
    },
    {
      icon: Rocket,
      title: 'Full-Stack Excellence',
      description: 'End-to-end solutions from ideation to deployment with continuous support',
      color: 'text-orange-400',
      bgColor: 'from-orange-500/10 to-red-500/10',
      features: ['Complete Solutions', 'DevOps Integration', '24/7 Support']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Creating pixel-perfect experiences that work flawlessly across all devices',
      color: 'text-pink-400',
      bgColor: 'from-pink-500/10 to-rose-500/10',
      features: ['Touch Optimized', 'PWA Ready', 'Cross Platform']
    },
    {
      icon: Zap,
      title: 'Smart Integrations',
      description: 'Connecting your apps with AI, payment systems, and third-party services seamlessly',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/10 to-blue-500/10',
      features: ['API Integration', 'AI Powered', 'Real-time Sync']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
        setIsVisible(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [categories.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const techIndex = parseInt(entry.target.dataset.techIndex);
            setTimeout(() => {
              setVisibleTechs(prev => new Set([...prev, techIndex]));
            }, techIndex * 150);
          }
        });
      },
      { threshold: 0.3 }
    );

    const techElements = document.querySelectorAll('[data-tech-index]');
    techElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const currentCategory = categories[currentCategoryIndex];
  const IconComponent = currentCategory.icon;

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555786766-e1e69380c4bc?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          opacity: 0.15
        }}
      ></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 80%)`
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Full-Stack Developer</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
              digital experiences
            </span>{' '}
            that users love and businesses thrive on
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Dynamic Categories */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold text-white mb-4">
                  <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
                  Looking for amazing
                </div>
              </div>
              
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                <div className={`bg-gradient-to-r ${currentCategory.bgGradient} rounded-2xl p-6 mb-6 border border-white/10`}>
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className={`${currentCategory.color} p-4 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg transform hover:scale-110 transition-all duration-300`}>
                      <IconComponent size={32} />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">{currentCategory.emoji}</div>
                      <h3 className="text-2xl font-bold text-white">{currentCategory.title}</h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {currentCategory.items.map((item, index) => (
                      <div 
                        key={index} 
                        className="group flex items-center space-x-3 text-white/80 bg-white/10 rounded-xl px-4 py-3 border border-white/10 hover:bg-white/20 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                    <Target className="w-8 h-8 text-green-400" />
                    You found me!
                  </div>
                </div>
                
                <div className="flex justify-center mt-8">
                  <div className="flex space-x-3">
                    {categories.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                          index === currentCategoryIndex 
                            ? 'bg-purple-400 scale-125 shadow-lg shadow-purple-400/50' 
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        onClick={() => setCurrentCategoryIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                I'm a passionate{' '}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
                  software craftsman
                </span>{' '}
                based in Kenya, dedicated to transforming your wildest business ideas into{' '}
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">
                  powerful digital realities
                </span>.
                From the first spark of inspiration to the final deployment and beyond, I deliver solutions that don't just work—they{' '}
                <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-semibold">
                  inspire and delight
                </span>.
              </p>
            </div>
          </div>
          
          {/* Right Column - Tech Stack */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">My Arsenal</h3>
              </div>
              
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="group"
                    data-tech-index={index}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-white font-semibold text-lg">{tech.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/60 text-sm font-medium">{tech.level}%</span>
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                    
                    <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-full"></div>
                      <div 
                        className={`${tech.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                        style={{ 
                          width: visibleTechs.has(index) ? `${tech.level}%` : '0%',
                          boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl sm:text-4xl font-bold text-white">What I Deliver</h3>
            </div>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Premium services crafted with passion, delivered with precision
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isHovered = hoveredService === index;
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-gradient-to-br ${service.bgColor} backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${service.color} p-3 rounded-xl bg-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <IconComponent size={24} />
                      </div>
                      <ArrowRight className={`w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    
                    <h4 className="text-white font-bold text-xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h4>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-all duration-300">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-2 text-xs text-white/60 group-hover:text-white/80 transition-all duration-300"
                        >
                          <ChevronRight className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection
