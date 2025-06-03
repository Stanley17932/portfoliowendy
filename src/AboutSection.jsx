import React from 'react';
import { Code, Database, Globe, Terminal, Layers, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const technologies = [
    { name: 'React', level: 90, color: 'bg-blue-400' },
    { name: 'Flask', level: 85, color: 'bg-green-400' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-400' },
    { name: 'Python', level: 92, color: 'bg-purple-400' },
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-400' },
    { name: 'SQL', level: 80, color: 'bg-pink-400' }
  ];

  const services = [
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Modern React applications with responsive design and seamless user experiences',
      color: 'text-blue-400'
    },
    {
      icon: Terminal,
      title: 'Backend Development',
      description: 'Robust Flask APIs with secure authentication and efficient data processing',
      color: 'text-green-400'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimized database architecture with MySQL, PostgreSQL, and SQLite',
      color: 'text-purple-400'
    },
    {
      icon: Layers,
      title: 'Full-Stack Solutions',
      description: 'Complete web applications from concept to deployment',
      color: 'text-orange-400'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect functionality across all devices',
      color: 'text-pink-400'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamless integration with third-party services and RESTful APIs',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Full-Stack Software Developer specializing in modern web technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                I'm a passionate software developer based in Kenya with expertise in building scalable web applications 
                using React for frontend and Flask for backend development. My focus is on creating efficient, 
                user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                With a strong foundation in both frontend and backend technologies, I deliver complete digital solutions 
                from database design to user interface implementation. I'm currently available for freelance projects 
                and full-time opportunities.
              </p>
            </div>
            

          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Tech Stack</h3>
              <div className="space-y-3 sm:space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm sm:text-base">{tech.name}</span>
                      <span className="text-white/60 text-xs sm:text-sm">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Services I Offer</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`${service.color} p-2 rounded-lg bg-white/10 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">{service.title}</h4>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{service.description}</p>
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

export default AboutSection;