import React from 'react';

const SkillsSection = () => {
  const skills = {
    "Design": ["CorelDRAW", "Logo Design", "Brand Identity", "UI/UX Design"],
    "Frontend": ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Flask", "Python", "REST APIs", "Database Design"],
    "Database": ["MySQL", "Database Optimization"],
    "Tools": ["Git", "Vite", "Responsive Design"]
  };

  return (
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
  );
};

export default SkillsSection
