import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 group">
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
  );
};

export default ProjectCard
