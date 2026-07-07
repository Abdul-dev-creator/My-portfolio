import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { Button } from './Button';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  problemSolved: string;
  features: string[];
  githubUrl: string;
  liveUrl: string;
  gridSpan: string;
  previewComponent: React.ReactNode;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`group rounded-card bg-card border border-border/60 hover:border-projectAccent/40 hover:shadow-[0_0_30px_rgba(255,183,77,0.2)] transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-premium ${project.gridSpan}`}
    >
      {/* Project Visual Preview (Mockup) */}
      <div className="w-full h-60 sm:h-72 md:h-80 bg-background relative overflow-hidden flex items-center justify-center border-b border-border/45">
        {project.previewComponent}
      </div>

      {/* Project Details */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface border border-border text-muted hover:border-projectAccent/50 hover:bg-projectAccent/10 hover:text-projectAccent transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-text mb-3 group-hover:text-projectAccent transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Problem Solved & Key Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-border/30 pt-6">
            <div>
              <h4 className="text-xs font-semibold text-projectAccent uppercase tracking-wider mb-2 flex items-center">
                <FiCpu className="mr-1.5" /> Problem Solved
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-projectAccent uppercase tracking-wider mb-2 flex items-center">
                <FiCheckCircle className="mr-1.5" /> Key Features
              </h4>
              <ul className="text-xs text-muted space-y-1.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-projectAccent mr-1.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto">
          <Button
            variant="primary"
            size="sm"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow sm:flex-grow-0"
          >
            Live Demo
            <FiExternalLink className="ml-2" size={14} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow sm:flex-grow-0 border-border/85"
          >
            Code
            <FiGithub className="ml-2" size={14} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
