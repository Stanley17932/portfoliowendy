import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Billflow.site",
      category: "Web Development",
      description: "Full-stack business management system built with React and Flask",
      tech: ["React", "Flask", "MySQL"],
      link: "https://billflow.site",
      type: "web"
    },
    {
      title: "Litematt Enterprises",
      category: "Web Development", 
      description: "Corporate website for enterprise solutions with modern responsive design",
      tech: ["React", "CSS3", "JavaScript"],
      link: "https://litemattenterprises.co.ke/",
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
      description: "Professional logo design for Tenwek Hospital's Cardiothoracic Treatment Center",
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

  return (
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection
