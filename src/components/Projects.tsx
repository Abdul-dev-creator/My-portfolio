import React from 'react';
import { Container } from './Container';
import { SectionTitle } from './SectionTitle';
import { ProjectCard } from './ProjectCard';
import type { ProjectData } from './ProjectCard';

export const Projects: React.FC = () => {
  const projectsData: ProjectData[] = [
    {
      title: 'Sleep Tracker',
      description: 'A modern, full-stack sleep tracking application with a beautiful dashboard,built with Next.js 16, Supabase, and Tailwind CSS. Track your sleep patterns, visualize trends, and gain insights into your sleep quality.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      problemSolved: 'Traditional auto portals suffer from slow page loads, sluggish client-side filtering, and uninspiring vehicle details pages. AOL Autos resolves this with a GraphQL-powered backend and responsive client-side state management.',
      features: [
        'Secure User Authentication with Supabase Auth',
        'Log Sleep Sessions with duration',
        'Smart Date Selection with intuitive date picker',
        ''
      ],
      githubUrl: 'https://github.com/Abdul-dev-creator/sleep-tracker',
      liveUrl: 'https://sleep-tracker-red-seven.vercel.app/',
      gridSpan: 'lg:col-span-8',
      previewComponent: (
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-bold text-cyan-400 font-heading">Sleep Tracker</span>
            <span className="text-[10px] bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-2 py-0.5 rounded-full font-mono">Active</span>
          </div>
          
          {/* Screenshot Image */}
          <div className="flex-1 mt-4 z-10 rounded-2xl overflow-hidden">
            <img 
              src="/sleep tracker.png" 
              alt="Sleep Tracker Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Blastr',
      description: 'BLASTR is a high-performance, agentic email marketing engine built to revolutionize outreach. By leveraging Gemini 3.0 Flash, BLASTR transforms static email lists into dynamic, hyper-personalized conversations at scale.',
      tags: ['React', 'OpenAI API', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Node.js'],
      problemSolved: 'Blastr addresses these problems by using AI to automate much of the email creation and campaign workflow, allowing users to launch personalized campaigns faster while improving engagement.',
      features: [
        'Automatically generates professional cold emails.',
        'Reduces the time spent writing outreach messages.',
        'Produces persuasive marketing and sales copy.',
       
      ],
      githubUrl: 'https://github.com/David-patrick-chuks/blastr',
      liveUrl: 'https://blastr.vercel.app/',
      gridSpan: 'lg:col-span-4',
      previewComponent: (
        <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-background via-background to-cyan-400/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-bold text-cyan-400 font-heading">BLASTR</span>
            <span className="text-[10px] bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-2 py-0.5 rounded-full font-mono">Live</span>
          </div>
          
          {/* Screenshot Image */}
          <div className="flex-1 mt-4 z-10 rounded-2xl overflow-hidden">
            <img 
              src="/blastr.png" 
              alt="Blastr Email Marketing Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Portfolio Website',
      description: 'A premium developer portfolio showcasing clean typography, interactive sections, and high performance.',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      problemSolved: 'Standard portfolios are often template-based and fail to showcase high-quality frontend practices like dark-mode design, smooth micro-interactions, and rigid accessibility.',
      features: [
        'Interactive bento grid layout',
        'Smooth scroll & glassmorphism navbar',
        'State-backed editable stat cards',
        'Lighthouse performance optimized'
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gridSpan: 'lg:col-span-12',
      previewComponent: (
        <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-background via-background to-cyan-400/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-bold text-cyan-400 font-heading">Portfolio</span>
            <span className="text-[10px] bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-2 py-0.5 rounded-full font-mono">Live</span>
          </div>
          
          {/* Screenshot Image */}
          <div className="flex-1 mt-4 z-10 rounded-2xl overflow-hidden">
            <img 
              src="/portfolio.png" 
              alt="Blastr Email Marketing Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background border-t border-border/35 relative overflow-hidden">
      {/* Glow Effects in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />

      <Container>
        <SectionTitle
          title="Featured Work"
          subtitle="Projects"
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
